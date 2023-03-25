function createSubjectHeader(subject) {
    const header = document.createElement("h2");
    header.classList.add("subject-title");
    header.textContent = subject;
    return header;
  }
  
  function addTaskToList(task) {
    let subjectContainer = elements.taskList.querySelector(`[data-subject="${task.subject}"]`);
  
    if (!subjectContainer) {
      subjectContainer = document.createElement("div");
      subjectContainer.dataset.subject = task.subject;
      subjectContainer.appendChild(createSubjectHeader(task.subject));
      elements.taskList.appendChild(subjectContainer);
    }
  
    const ul = subjectContainer.querySelector("ul") || document.createElement("ul");
    subjectContainer.appendChild(ul);
  
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const text = document.createTextNode(task.text);
    const deleteBtn = document.createElement("button");
  
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", toggleTask);
    li.appendChild(checkbox);
  
    li.appendChild(text);
  
    deleteBtn.innerHTML = "&#x1F5D1;"; // Símbolo da lixeira
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);
  
    ul.appendChild(li);
    updateCounts();
  }
  