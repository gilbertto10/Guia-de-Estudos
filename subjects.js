function loadSubjects() {
    const subjects = getStoredSubjects();
    subjects.forEach((subject) => {
      addSubjectToList(subject);
    });
  }
  
  function getStoredSubjects() {
    return JSON.parse(localStorage.getItem("subjects")) || [];
  }
  
  function saveSubjects(subjects) {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }
  
  function addSubjectToList(subject) {
    const option = document.createElement("option");
    option.value = subject;
    option.text = subject;
    elements.subjectSelect.add(option);
  }
  
  function handleAddSubject() {
    const subjectText = elements.newSubject.value.trim();
    if (subjectText) {
      const subject = subjectText;
      const subjects = getStoredSubjects();
      subjects.push(subject);
      saveSubjects(subjects);
      addSubjectToList(subject);
      elements.newSubject.value = "";
    }
}        