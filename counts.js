function updateCounts() {
    const tasks = getStoredTasks();
    const completed = tasks.filter((task) => task.completed).length;
    const pending = tasks.length - completed;
    elements.completedCount.textContent = completed;
    elements.pendingCount.textContent = pending;
    updateUnmarkedPerDay(pending);
  }
  
  function updateUnmarkedPerDay(pending) {
    const today = new Date();
    const targetDate = new Date(2023, 4, 20);
    const days = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
    elements.daysLeft.textContent = days;
    elements.unmarkedPerDay.textContent = (pending / days).toFixed(2);
  }
  