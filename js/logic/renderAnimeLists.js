import {html} from '../data/config.js';
import {animeList} from '../data/layout/anime-list.js';


//data
export const data = {
  //anime
  serverTopAnime: null,
  serverAnime: null,
  
  anime: {
    types: null,
    years: null,
    genres: null,
    studios: null,
  },
  
  querys: null,
  animeSearch: false,
  
  
  //pagination
  paginationPage: 1,
  allPaginationPage: 5,
  paginationAllAnime: 25,
};


//clear filters
export function clearFilter() {
  Object.keys(data.anime).forEach(e => {
    data.anime[e] = null;
  });
}


//аніме топ, рекомендації, та інші списки аніме
html.page.insertAdjacentHTML('beforeend', animeList);


//html element
const i = (id) => document.getElementById(id);
const c = (classis) => document.querySelectorAll(`.${classis}`);


export const dom = {
  //pagination
  pgBtnLeft: i('pg-btn-left'),
  pgBtnRight: i('pg-btn-right'),
  paginationText: i('pagination-text'),
  
  
  //wraps
  containerTop10Anime: i('container-top-10-anime'),
  containerRecommendAmine: i('container-recommend-amine'),
  
  
  //texts
  textTopAnime: i('text-top-anime'),
  textRecomendAnime: i('text-recommend-anime'),
};


//
//logic
//
//pagination
export function pagTextContent() {
  dom.paginationText.textContent = data.paginationPage + ' / ' + data.allPaginationPage;
}
pagTextContent();


//обробник пагінації
async function pagination() {
  pagTextContent();
  clearRecommengAnime();
  
  let url = 'https://api.jikan.moe/v4/anime';
  
  if (data.anime.years) {
    url += '?start_date=' + encodeURIComponent(data.anime.years) + '-01-01&end_date=' + encodeURIComponent(data.anime.years) + '-12-31' + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.anime.types) {
    url += '?type=' + encodeURIComponent(data.anime.types) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.anime.genres) {
    url += '?genres=' + encodeURIComponent(data.anime.genres) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.anime.studios) {
    url += '?producers=' + encodeURIComponent(data.anime.studios) + '&page=' + encodeURIComponent(data.paginationPage);
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
function animeFor(animeArray, containers) {
  animeArray.forEach(anime => {

    // data
    const ratingMatch = anime.rating?.match(/\d+/);
    const rating = ratingMatch ? ratingMatch[0] + '+' : '';
    const score = anime.score ? '★' + anime.score : '';
    const rank = anime.rank ? '#' + anime.rank : '';

    // створюємо головний контейнер аніме
    const container = document.createElement('div');
    container.className = `anime-wrap`;

    // html anime
    container.innerHTML = `
      <div class="anime-img" style="background-image: url('${anime.images.webp.image_url}')">
        <span>${score}</span>
        <span class="year">${anime.year || ''}</span>
        <span class="rank">${rank}</span>
        <span class="rating">${rating}</span>
      </div>
      <h4 class="anime-title">${anime.title}</h4>
    `;
  
    //дії
    container.addEventListener('click', () => {
      localStorage.setItem('animeViewing', JSON.stringify(anime));
      location.href = 'anime-view.html';
    });
    dom[containers].append(container);
    
  });
}


//top anime
export async function sortTopAnime() {
  try {
  //server logic
  const animeTopData = await data.serverTopAnime.json();
  const animeTop = animeTopData.data;
  let animeTop25 = animeTop.slice(0, 25);
  
  //кліентська логіка
  animeFor(animeTop25, 'containerTop10Anime');
  } catch (e) {
    console.error('помилка sortTopAnime', e);
  }
}


//recommend anime
export async function sortAnime() {
  try {
  //recommend anime
  const animeData = await data.serverAnime.json();
  const anime = animeData.data;
  let animeRecommend = anime.slice(0, 25);
  
  //pagination
  data.allPaginationPage = animeData.pagination.last_visible_page;
  pagTextContent();
  
  //на сайті
  animeFor(animeRecommend, 'containerRecommendAmine');
  } catch (e) {
    console.error('помилка sortAnime', e);
  }
}


//start відображення anime
async function startAnime() {
  data.animeSearch = false;
  data.paginationPage = 1;
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


//clear anime list
export function clearAnime() {
  dom.containerTop10Anime.innerHTML = '';
  dom.containerRecommendAmine.innerHTML = '';
}


//clear anime list recommend
function clearRecommengAnime() {
  dom.containerRecommendAmine.innerHTML = '';
}


//anime wrap row scroll progress
function animeScrollProgress() {
  const scrollLeft = dom.containerTop10Anime.scrollLeft;
  const maxScroll = dom.containerTop10Anime.scrollWidth - dom.containerTop10Anime.clientWidth;
  if (maxScroll <= 0) return;
  let percent = scrollLeft / maxScroll;
  const minPercent = 12.5;
  const widthPercent = minPercent + percent * (100 - minPercent);
  html.HTML.style.setProperty('--anime-row-scroll', `${widthPercent}%`);
}
animeScrollProgress();

dom.containerTop10Anime.addEventListener('scroll', animeScrollProgress);
window.addEventListener('resize', animeScrollProgress);
