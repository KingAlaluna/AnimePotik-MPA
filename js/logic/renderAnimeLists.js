localStorage.setItem('activeBtn', 'main');

//всі данні
const data = {
  //аніме
  serverTopAnime: null,
  serverAnime: null,
  
  animeType: null,
  animeYear: null,
  animeGenre: null,
  animeStudio: null,
  
  querys: null,
  animeSearch: false,
  
  
  //пагінація
  paginationPage: 1,
  allPaginationPage: 5,
  paginationAllAnime: 25,
};


//очистити фільтр
function clearFilter() {
  data.animeYear = null;
  data.animeType = null;
  data.animeGenre = null;
  data.animeStudio = null;
}



//аніме топ, рекомендації, та інші списки аніме
function renderAnimeLists() {
  //додати секції з аніме
  const contentContainer = document.getElementById('content-container');
  contentContainer.insertAdjacentHTML('beforeend', animeSections);
  
  
  //html елементи
  const i = (id) => document.getElementById(id);
  const c = (classis) => document.querySelectorAll(`.${classis}`);
  
  
  const dom = {
    //пагінація
    pgBtnLeft: i('pg-btn-left'),
    pgBtnRight: i('pg-btn-right'),
    paginationText: i('pagination-text'),
    
    
    //сторінки
    mainPage: i('main-page'),
    
    
    //контейнери
    containerTop10Anime: i('container-top-10-anime'),
    containerRecommendAmine: i('container-recommend-amine'),
    
    
    //текст
    textTopAnime: i('text-top-anime'),
    textRecomendAnime: i('text-recommend-anime'),
  };
  
  
  //
  //логіка
  //
  //пагінація
function pagTextContent() {
  dom.paginationText.textContent = data.paginationPage + ' / ' + data.allPaginationPage;
}
pagTextContent();


//обробник пагінації
async function pagination() {
  pagTextContent();
  clearRecommengAnime();
  
  let url = 'https://api.jikan.moe/v4/anime';
  
  if (data.animeYear) {
    url += '?start_date=' + encodeURIComponent(data.animeYear) + '-01-01&end_date=' + encodeURIComponent(data.animeYear) + '-12-31' + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeType) {
    url += '?type=' + encodeURIComponent(data.animeType) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeGenre) {
    url += '?genres=' + encodeURIComponent(data.animeGenre) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeStudio) {
    url += '?producers=' + encodeURIComponent(data.animeStudio) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeSearch) {
    url += '?q=' + encodeURIComponent(data.querys) + '&page=' + encodeURIComponent(data.paginationPage);
  } else {
    url += '?page=' + encodeURIComponent(data.paginationPage);
  }
  
  data.serverAnime = await fetch(url);
  
  sortAnime();
}


//кнопка пагінации назад
dom.pgBtnLeft.addEventListener('click', async () => {
  if (data.paginationPage > 1) {
    data.paginationPage -= 1;
    pagination();
  }
});


//кнопка пагінації далі
dom.pgBtnRight.addEventListener('click', async () => {
  if (data.paginationPage < data.allPaginationPage) {
    data.paginationPage += 1;
    pagination();
  }
});


//
//показати топ та рекомендації аніме
//
//загальна логіка
function animeFor(animeArray, containers, version) {
  animeArray.forEach(anime => {

    // дані
    const ratingMatch = anime.rating?.match(/\d+/);
    const rating = ratingMatch ? ratingMatch[0] + '+' : '';
    const score = anime.score ? '★' + anime.score : '';
    const rank = anime.rank ? '#' + anime.rank : '';

    // створюємо головний контейнер аніме
    const container = document.createElement('div');
    container.className = `anime-container-${version || 1}`;

    // html аніме
    container.innerHTML = `
      <div class="anime-${version || 1} all-anime" style="background-image: url('${anime.images.webp.image_url}')">
        <div class="anime-score">${score}</div>
        <div class="anime-year">${anime.year || ''}</div>
        <div class="anime-rank">${rank}</div>
        <div class="anime-rating">${rating}</div>
      </div>
      <h3 class="anime-title">${anime.title}</h3>
    `;
  
    //дії
    container.addEventListener('click', () => {
      localStorage.setItem('animeViewing', JSON.stringify(anime));
      location.href = 'viewing-anime.html';
    });
    dom[containers].append(container);
    
  });
}


//топ аніме
async function sortTopAnime() {
  try {
  //server logic
  const animeTopData = await data.serverTopAnime.json();
  const animeTop = animeTopData.data;
  let animeTop25 = animeTop.slice(0, 25);
  
  //кліентська логіка
  animeFor(animeTop25, 'containerTop10Anime');
  } catch {
  }
}


//аніме рекомендації
async function sortAnime() {
  try {
  //recommend anime
  const animeData = await data.serverAnime.json();
  const anime = animeData.data;
  let animeRecommend = anime.slice(0, 25);
  
  //пагінація
  data.allPaginationPage = animeData.pagination.last_visible_page;
  pagTextContent();
  
  //на сайті
  animeFor(animeRecommend, 'containerRecommendAmine', 2);
  } catch {
  }
}


//старт відображення аніме
async function startAnime() {
  data.animeSearch = false;
  paginationDocument = 1;
  pagTextContent();
  
  
  clearAnime();
  dom.textTopAnime.textContent = 'Топ 25:';
  dom.textRecomendAnime.textContent = 'Рекомендую:';
  try {
    data.serverTopAnime = await fetch('https://api.jikan.moe/v4/top/anime');
    data.serverAnime = await fetch('https://api.jikan.moe/v4/anime');
    
    sortTopAnime();
    sortAnime();
  } catch {
  }
}
startAnime();


//очистить списки аниме
function clearAnime() {
  dom.containerTop10Anime.innerHTML = '';
  dom.containerRecommendAmine.innerHTML = '';
}


//очтстити рекомендації аніме
function clearRecommengAnime() {
  dom.containerRecommendAmine.innerHTML = '';
}


//виводимо потрібні дані
return {
  //clearRecommengAnime,
  clearAnime,
  pagTextContent,
  sortTopAnime,
  sortAnime,
};

}

const controls = renderAnimeLists();