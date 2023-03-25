function toggleTask(e) {
    const tasks = getStoredTasks();
    const taskText = e.target.nextSibling.nodeValue;
    const task = tasks.find((t) => t.text === taskText);
    task.completed = !task.completed;
    saveTasks(tasks);
    updateCounts();
  }
  
  function deleteTask(e) {
    const tasks = getStoredTasks();
    const taskText = e.target.previousSibling.nodeValue;
    const index = tasks.findIndex((t) => t.text === taskText);
    tasks.splice(index, 1);
    saveTasks(tasks);
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    updateCounts();
  }
  
  elements.addTask.addEventListener("click", handleAddTask);
  elements.addSubject.addEventListener("click", handleAddSubject);
  elements.clearLocalStorage.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  });
  