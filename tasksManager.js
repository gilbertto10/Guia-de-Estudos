
function loadTasks() {
  const tasks = getStoredTasks();
  tasks.forEach((task) => {
    addTaskToList(task);
  });
}

function getStoredTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function handleAddTask() {
  const tasks = getStoredTasks();
  const taskTexts = elements.newTasks.value.trim().split(/[\n;]/).filter(task => task.trim().length > 0);
  taskTexts.forEach(taskText => {
    const task = { text: taskText.trim(), subject: elements.subjectSelect.value, completed: false };
    tasks.push(task);
    addTaskToList(task);
  });
  saveTasks(tasks);
  elements.newTasks.value = "";
}
