localStorage.setItem('activeBtn', 'detalis');

//додати детальну інформацію
const contentContainer = document.getElementById('content-container');
contentContainer.insertAdjacentHTML('beforeend', details);
