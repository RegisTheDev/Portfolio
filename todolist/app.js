let todolist = [];

const inputTask = document.querySelector("#inputTask");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector(".tasks");

function taskDelete(id){

    let newData = todolist.filter((item, index) => index !== id);
    console.log(newData);
    todolist = [...newData];
    taskList.innerHTML = "";

    for (i = 0; i < todolist.length; i++) {
        let item = todolist[i];
      
        const newTask = document.createElement("li");
        newTask.classList.add("tasks-list");
        newTask.innerHTML =`<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p> ${item?.taskName} </p> </div> <div class="trash-icon"> <button onClick='taskDelete(${i});'><i class="fa-solid fa-trash-can"></i></button> </div>` ;
        taskList.appendChild(newTask);
      }

}

function addTask(taskTitle){
    
    todolist.push({taskName: taskTitle, taskStatut: "pending"});
    taskList.innerHTML = "";

    
    for (i = 0; i < todolist.length; i++) {
        let item = todolist[i];
      
        const newTask = document.createElement("li");
        newTask.classList.add("tasks-list");
        newTask.innerHTML =`<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p> ${item?.taskName} </p> </div> <div class="trash-icon"> <button onClick='taskDelete(${i});'><i class="fa-solid fa-trash-can"></i></button> </div>` ;
        taskList.appendChild(newTask);
      }
}

for (i = 0; i < todolist.length; i++) {
  let item = todolist[i];

  const newTask = document.createElement("li");
  newTask.classList.add("tasks-list");
  newTask.innerHTML =`<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p> ${item?.taskName} </p> </div> <div class="trash-icon"> <button onClick='taskDelete(${i});'><i class="fa-solid fa-trash-can"></i></button> </div>` ;

  taskList.appendChild(newTask);
}

addTaskBtn.addEventListener("click", () => {
  const taskText = inputTask.value.trim();

  if (taskText !== "") {
    addTask(taskText);
  }
});
