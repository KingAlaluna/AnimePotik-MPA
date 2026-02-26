//додати банера
const weblite = document.getElementById('weblite');
weblite.insertAdjacentHTML('afterbegin', topBanner);
weblite.insertAdjacentHTML('beforeend', bottomBanner);


//html елементи
const i = (id) => document.getElementById(id);
const c = (classis) => document.querySelectorAll(`.${classis}`);

const html = {
  //кнопки нижнього банера
  btnBottomBanner: c('btn-bottom-banner'),
  
  btnMainPage: i('btn-main-page'),
  btnSearchAnime: i('btn-search-anime'),
  btnSortAnime: i('btn-sort-anime'),
  btnDetalisProject: i('btn-detalis-project'),
  btnDetalisWeblite: i('btn-detalis-weblite'),
  
  
  //кнопки сторінок на головному банері
  btnTopBanner: c('btn-top-banner'),
  
  btnMainPage2: i('btn-main-page-2'),
  btnSearchAnime2: i('btn-search-anime-2'),
  btnSortAnime2: i('btn-sort-anime-2'),
  btnDetalisProject2: i('btn-detalis-project-2'),
  btnDetalisWeblite2: i('btn-detalis-weblite-2'),
  
  
  //для скрола
  scrollPage: c('scroll-page'),
  btnTopPage: i('btn-top-page'),
  btnBottomPage: i('btn-bottom-page'),
  
  
  //світла / темна тема
  btnTheme: i('btn-theme'),
  imgBtnTheme: i('img-btn-theme'),
  
  
  //текст
  textTopAnime: i('text-top-anime'),
  textRecomendAnime: i('text-recommend-anime'),
};




//
//переключення сторінок
//
//нижній банер
html.btnMainPage.addEventListener('click', () => {
  window.location.href = 'index.html';
});

html.btnSearchAnime.addEventListener('click', () => {
  window.location.href = 'search-anime.html';
});

html.btnSortAnime.addEventListener('click', () => {
  window.location.href = 'filters-anime.html';
});

html.btnDetalisProject.addEventListener('click', () => {
  window.location.href = 'my-project.html';
});

html.btnDetalisWeblite.addEventListener('click', () => {
  window.location.href = 'detalis-weblite.html';
});


//головний банер
html.btnMainPage2.addEventListener('click', () => {
  window.location.href = 'index.html';
});

html.btnSearchAnime2.addEventListener('click', () => {
  window.location.href = 'search-anime.html';
});

html.btnSortAnime2.addEventListener('click', () => {
  window.location.href = 'filters-anime.html';
});

html.btnDetalisProject2.addEventListener('click', () => {
  window.location.href = 'my-project.html';
});

html.btnDetalisWeblite2.addEventListener('click', () => {
  window.location.href = 'detalis-weblite.html';
});



//активна кнопка колір
function activeBtn(btn) {
  const l = localStorage.getItem('activeBtn');
  
  if (l) {
    html[btn].forEach(e => {
      if (e.dataset.activeBtn == l) {
        e.style.background = 'var(--gradient-5)';
      } else {
        e.style.background = 'var(--gradient-3)';
      }
    });
  } else {
    html.btnMainPage.style.background = 'var(--gradient-5)';
  }
  
}

setTimeout(() => {
  activeBtn('btnBottomBanner');
  activeBtn('btnTopBanner');
}, 100);


//
//скрол
//
//function scroll document
function scrollToTop() {
  html.scrollPage.forEach(e => {
    e.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
function scrollToBottom() {
  html.scrollPage.forEach(e => {
    e.scrollTo({
      top: e.scrollHeight,
      behavior: 'smooth',
    });
  });
}


//click button scroll
html.btnTopPage.addEventListener('click', () => {
  scrollToTop();
});
html.btnBottomPage.addEventListener('click', () => {
  scrollToBottom();
});


//стилі для кнопок під час скрола
let timer = null;

function styleScroll() {
  html.scrollPage.forEach(e => {
    e.addEventListener('scroll', () => {
      let scrollTop = e.scrollTop;
      let scrollHeight = e.scrollHeight;
      let clientHeight = e.clientHeight;
      
      html.btnTopPage.style.display = 'none';
      html.btnBottomPage.style.display = 'none';
      
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        if (scrollTop > clientHeight * 0.5) {
          html.btnTopPage.style.display = 'block';
        }
        if (scrollTop + clientHeight < scrollHeight - clientHeight * 0.5) {
          html.btnBottomPage.style.display = 'block';
        }
      }, 10);
    });
  });
}
styleScroll();






//
//тема
//
let darkTheme = false;

function darkThemes() {
  localStorage.setItem('darkTheme', 'true');
  document.documentElement.dataset.theme = 'dark';
  html.imgBtnTheme.style.backgroundImage = 'url(img/style/dark-theme.svg)';
  darkTheme = true;
}


function lightThemes() {
  localStorage.setItem('darkTheme', 'false');
  document.documentElement.dataset.theme = 'light';
  html.imgBtnTheme.style.backgroundImage = 'url(img/style/light-theme.svg)';
  darkTheme = false;
}


html.btnTheme.addEventListener('click', () => {
  if (darkTheme == false) {
    darkThemes();
  } else {
    lightThemes();
  }
});



//для ініціалізації теми
if (localStorage.getItem('darkTheme')) {
  //для користувацької теми
  if (localStorage.getItem('darkTheme') == 'false') {
    lightThemes();
  } else {
    darkThemes();
  }
} else {
  //для системноі теми
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkThemes();
  } else {
    lightThemes();
  }
}