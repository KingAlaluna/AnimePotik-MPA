localStorage.setItem('activeBtn', 'anime-view');


await import('../main-logic.js');
const {html} = await import('../../data/config.js');
import {animeView} from '../../layout/anime-view.js';


//add anime view
html.page.insertAdjacentHTML('beforeend', animeView);


//html elements
const c = (classis) => document.querySelectorAll(`.${classis}`);
const i = (id) => document.getElementById(id);

const dom = {
  wrapAnimeViewInfo: i('wrap-anime-view-info'),
  video: i('video'),
  synopsisAnime: i('synopsis-anime'),
};


//відобразити інформацію про аніме
export function infoAnime(anime) {
  //general datas
  const img = anime?.images?.webp?.large_image_url ? anime.images.webp.large_image_url : '';
  const score = anime?.score ? anime.score + '★' : 'невідомо';
  const demographics = anime?.demographics?.[0]?.name ? anime.demographics[0].name : 'невідомо';
  const aired = anime?.aired?.string ? anime.aired.string : 'невідомо';
  const airing = anime?.airing ? 'Так' : 'Ні';
  const studios = anime?.studios?.length > 0 ? anime.studios.map(e => e.name).join(', ') : 'невідомо';
  const genres = anime?.genres?.length > 0 ? anime.genres.map(e => e.name).join(', ') : 'невідомо';
  const themes = anime?.themes?.length > 0 ? anime.themes.map(e => e.name).join(', ') : 'невідомо';
  const trailer = anime.trailer.embed_url;
  
  
  const finalAnime = (obj) => JSON.parse(JSON.stringify(obj, (k, v) => v ?? undefined));
  
  const {
    title: name = 'невідомо...',
    scored_by: scoredBy = 'невідомо',
    rank = 'невідомо',
    popularity = 'невідомо',
    members = 'невідомо',
    favorites = 'невідомо',
    rating = 'невідомо',
    year = 'невідомо',
    season = 'невідомо',
    episodes = 'невідомо',
    duration = 'невідомо',
    status = 'невідомо',
    type = 'невідомо',
    source = 'невідомо',
    synopsis = 'Опис відсутній...',
  } = finalAnime(anime);
  
  
  dom.synopsisAnime.textContent = synopsis;
  dom.video.src = trailer;
  
  
  //add info
  dom.wrapAnimeViewInfo.innerHTML = `
    <img class="view-anime-poster" src="${img}">
    
    <section class="info-wrap">
      <h2>${name}</h2>
      <span>Оцінка: ${score}</span>
      <span>Кількість оцінок: ${scoredBy}</span>
      <span>Місце в рейтингу: ${rank}</span>
      <span>Місце по популярності: ${popularity}</span>
      <span>Кількість користувачів: ${members}</span>
      <span>Додали в вибранне: ${favorites}</span>
      <span>Цільова аудиторія: ${demographics}</span>
      <span>Вікове обмеження: ${rating}</span>
      <span>Рік випуску: ${year}</span>
      <span>Місяць випуску: ${season}</span>
      <span>Повна дата випуску: ${aired}</span>
      <span>Кількість серій: ${episodes}</span>
      <span>Тривалість серії: ${duration}</span>
      <span>Статус: ${status}</span>
      <span>Чи виходить тепер: ${airing}</span>
      <span>Студія: ${studios}</span>
      <span>Тип: ${type}</span>
      <span>Первинне джерело: ${source}</span>
      <span>Жанри: ${genres}</span>
      <span>Теми: ${themes}</span>
      
      <br>
    </section>
  `;
}


infoAnime(JSON.parse(localStorage.getItem('animeViewing')));
