function addTask(taskText) {
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center shadow-sm py-3 px-4";

  const taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.textContent = taskText;

  const controls = document.createElement("div");
  controls.className = "d-flex gap-2";

  // ✅ Checkmark button will delete the task
  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn-outline-success btn-sm";
  completeBtn.textContent = "✓";
  completeBtn.title = "Task complete - remove from list";
  completeBtn.addEventListener("click", () => {
    li.remove();
  });

  // ❌ (Optional) Keep the "X" button for manual delete too
  const removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-outline-danger btn-sm";
  removeBtn.textContent = "✖";
  removeBtn.title = "Delete task";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  controls.appendChild(completeBtn);
  controls.appendChild(removeBtn);
  li.appendChild(taskSpan);
  li.appendChild(controls);
  taskList.appendChild(li);
}

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});
