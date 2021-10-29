//selecting and creating main page content for further use
const pageContent = document.querySelector("#content");

//constructor for the Task object
function Task(text, date) {
  this.text = text;
  this.date = date;
}

//header generator function
function generateHeader(){
  const header = document.createElement("h1");
  header.className += "header";
  header.innerText = "Routine Planner";
  pageContent.appendChild(header);
}

function generateFooter(){
  const footer = document.createElement("h1");
  footer.className += "footer";
  footer.innerText = "Created by Tibor Enyedi - 2021 - cringe style added after creation.. i had fever..";
  pageContent.appendChild(footer);
}

//task adder function -- creating input fields for add a task
function addTask(){
  pageContent.removeChild(newTask);

  const taskLabel = document.createElement("label");
  taskLabel.innerText = "Task Name:";
  pageContent.appendChild(taskLabel);

  const taskText = document.createElement("input");
  taskText.className += "inputFields";
  taskText.type = "text";
  taskText.placeholder = "My task";
  pageContent.appendChild(taskText);

  const dateLabel = document.createElement("label");
  dateLabel.innerText = "Creation Date:";
  pageContent.appendChild(dateLabel);

  const taskDate = document.createElement("input");
  taskDate.className += "inputFields";
  taskDate.type = "date";
  pageContent.appendChild(taskDate);

  const submit = document.createElement("button");
  submit.className = "buttons";
  submit.innerText = "Save task";
  pageContent.appendChild(submit);

  //submit for new task -- event
  submit.addEventListener("click", function(e){
    taskToAdd = new Task(taskText.value, taskDate.value);

    const task = document.createElement("div");
    task.className += "task";
    task.innerText = "Task Name: "+taskToAdd.text+" ----- Task Creation Date: "+taskToAdd.date;
    pageContent.appendChild(task);

    const removeButton = document.createElement("button");
    removeButton.className += "buttons";
    removeButton.style["background-color"]="#cf0000";
    removeButton.innerText = "Remove this task";
    task.appendChild(removeButton);

    removeButton.addEventListener("click",function(e){
      pageContent.removeChild(task);
    });

    taskText.value="";
    taskDate.value="";
  });
}

//intial content generator function
function generateContent(){
  newTask = document.createElement("button");
  newTask.className = "buttons";
  newTask.innerText = "Add new tasks now!";
  pageContent.appendChild(newTask);

//new task button event
  newTask.addEventListener("click", function(e){
    addTask();
  });
}

//main function for initializing the page
function initPage(){
  generateHeader();
  generateContent();
  generateFooter();
}

//initializing the page
initPage();
