localStorage.setItem('activeBtn', 'project');

//додати інформацію про проєкти
const contentContainer = document.getElementById('content-container');
contentContainer.insertAdjacentHTML('beforeend', myProjects);
