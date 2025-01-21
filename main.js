let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let descriptionArea = document.getElementById("descriptionArea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
//formvalidation

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Add a Task Name";
  } else {
    console.log("succefrffss");

    msg.innerHTML = "";
    acceptData();

    // data-modal-hide="form" - left is the attribute - right is the value
    // when you set the attribute and click on add it does not close the form - if you click twice then it closes
    add.setAttribute("data-modal-hide", "form");
    // so we add a click to make it close - but now the problem is it closes even though it is empty
    add.click();

    // so this is the solution

    // Reset the attribute to ensure the modal can be reopened
    setTimeout(() => {
      add.setAttribute("data-modal-hide", "");
    }, 100);
  }
};

// Accept and store data

let data = {};

let acceptData = () => {
  data["TaskName"] = textInput.value;
  data["DateDue"] = dateInput.value;
  data["Description"] = descriptionArea.value;
  createTask();
};

// upload data on screen

let createTask = () => {
  // output tasks in tasks id
  // use plus + to not remove all other elements, it will only add
  tasks.innerHTML += `
  <div class="border-4 border-grey-500 p-4 mb-2">
        <div class="flex justify-between">
            <span class="text-xl">${data.TaskName}</span>
            <span>${data.DateDue}</span>
        </div>
        <p class="py-5 text-xl">${data.Description}</p>
        <div class="options flex justify-evenly ">
            <img class="cursor-pointer w-7 h-7" src="../src/edit.png" alt="">
            <img class="cursor-pointer" src="../src/delete.png" alt="">
        </div>
    </div>`;

  resetForm();
};

// we have to reset the forms so that the previous task doesnt stay on the form

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  descriptionArea.value = "";
};
