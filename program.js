//global variables
let completedTasks = 0;

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
  header.innerText = "Daily Planner";
  pageContent.appendChild(header);

  const completedCounter = document.createElement("h1");
  completedCounter.className += "counter";
  completedCounter.id = "counter";
  completedCounter.innerText = "0";
  header.appendChild(completedCounter);

  const counterLabel = document.createElement("p");
  counterLabel.className += "counter";
  counterLabel.innerText = "tasks have been completed today.";
  header.appendChild(counterLabel);
}

function generateFooter(){
  const footer = document.createElement("h1");
  footer.className += "footer";
  footer.innerText = "Created by Tibor Enyedi - 2021";
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

    const completeButton = document.createElement("button");
    completeButton.className += "buttons";
    completeButton.style["background-color"]="#32a852";
    completeButton.innerText = "Complete this task";
    task.appendChild(completeButton);

    completeButton.addEventListener("click",function(e){
      pageContent.removeChild(task);
      completedTasks += 1;
      const counter = document.querySelector("#counter");
      counter.innerText=completedTasks.toString();
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      counter.style["color"]="#"+randomColor;
    });

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
  newTask.innerText = "Add new tasks for today's show!";
  pageContent.appendChild(newTask);

//new task button event
  newTask.addEventListener("click", function(e){//function start
    addTask();
  });


}//function end

//main function for initializing the page
function initPage(){
  generateHeader();
  generateContent();
  generateFooter();
}

//initializing the page
initPage();
