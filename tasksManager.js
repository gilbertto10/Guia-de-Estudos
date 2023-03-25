// Carrega as tarefas armazenadas no localStorage e as adiciona à lista de tarefas no DOM.
function loadTasks() {
  const tasks = getStoredTasks();
  tasks.forEach((task) => {
    addTaskToList(task);
  });
}

// Retorna um array de objetos de tarefa armazenados no localStorage ou um array vazio se não houver tarefas armazenadas.
function getStoredTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Salva um array de objetos de tarefa no localStorage.
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Manipula o evento de adicionar tarefa, atualiza a lista de tarefas no localStorage e no DOM.
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
