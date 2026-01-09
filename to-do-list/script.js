const input = document.getElementById("taskinput");
const addBtn = document.getElementById("mybutton");
const taskList = document.getElementById("task");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const task = document.createElement("div");
    task.className = "todo-item";

    task.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
    `;

    taskList.appendChild(task);
    input.value = "";
}

