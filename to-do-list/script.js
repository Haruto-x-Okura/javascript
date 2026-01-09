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
         <button class="delete-btn">
            <i class="fa fa-trash-o"></i>
        </button>
        
    `;
    task.querySelector(".delete-btn").addEventListener("click", () => {
    task.remove();
    });

    taskList.appendChild(task);
    input.value = "";
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});