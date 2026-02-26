localStorage.setItem('activeBtn', 'viewing');

//додати перегляд аніме
const contentContainer = document.getElementById('content-container');
contentContainer.insertAdjacentHTML('beforeend', animeViewing);


//відобразити інформацію про аніме
function infoAnime(anime) {
  //html елементи
  const i = (id) => document.getElementById(id);
  
  
  const dom = {
    containerInfoAnime1: i('container-info-anime-1'),
    nameViewingAnime: i('name-viewing-anime'),
    synopsisAnime: i('synopsis-anime'),
    video: i('video'),
  };
  
  
  //загальне
  dom.nameViewingAnime.textContent = anime?.title ? anime.title : 'невідомо...';
  dom.synopsisAnime.textContent = anime?.synopsis ? anime.synopsis : 'Опис відсутній...';
  dom.video.src = anime.trailer.embed_url;
  
  
  //додати інформацію
  dom.containerInfoAnime1.innerHTML = `
    <img class="anime-3" src="${anime?.images?.webp?.large_image_url ? anime.images.webp.large_image_url : ''}">
    
    <div id="container-info-anime-2">
      <h3>Оцінка: ${(anime?.score ? anime.score + '★' : 'невідомо')}</h3>
      
      <p class="text-no-margin">Кількість оцінок: ${(anime?.scored_by ? anime.scored_by : 'невідомо')}</p>
      <p class="text-no-margin">Місце в рейтингу: ${(anime?.rank ? anime.rank : 'невідомо')}</p>
      <p class="text-no-margin">Місце по популярності: ${(anime?.popularity ? anime.popularity : 'невідомо')}</p>
      <p class="text-no-margin">Кількість користувачів: ${(anime?.members ? anime.members : 'невідомо')}</p>
      <p class="text-no-margin">Додали в вибранне: ${(anime?.favorites ? anime.favorites : 'невідомо')}</p>
      <p class="text-no-margin">Цільова аудиторія: ${(anime?.demographics?.[0]?.name ? anime.demographics[0].name : 'невідомо')}</p>
      <p class="text-no-margin">Вікове обмеження: ${(anime?.rating ? anime.rating : 'невідомо')}</p>
      <p class="text-no-margin">Рік випуску: ${(anime?.year ? anime.year : 'невідомо')}</p>
      <p class="text-no-margin">Місяць випуску: ${(anime?.season ? anime.season : 'невідомо')}</p>
      <p class="text-no-margin">Повна дата випуску: ${(anime?.aired?.string ? anime.aired.string : 'невідомо')}</p>
      <p class="text-no-margin">Кількість серій: ${(anime?.episodes ? anime.episodes : 'невідомо')}</p>
      <p class="text-no-margin">Тривалість серії: ${(anime?.duration ? anime.duration : 'невідомо')}</p>
      <p class="text-no-margin">Статус: ${(anime?.status ? anime.status : 'невідомо')}</p>
      <p class="text-no-margin">Чи виходить тепер: ${(anime?.airing ? 'Так' : 'Ні')}</p>
      <p class="text-no-margin">Студія: ${(anime?.studios?.length > 0 ? anime.studios.map(e => e.name).join(', ') : 'невідомо')}</p>
      <p class="text-no-margin">Тип: ${(anime?.type ? anime.type : 'невідомо')}</p>
      <p class="text-no-margin">Первинне джерело: ${(anime?.source ? anime.source : 'невідомо')}</p>
      <p class="text-no-margin">Жанри: ${(anime?.genres?.length > 0 ? anime.genres.map(e => e.name).join(', ') : 'невідомо')}</p>
      <p class="text-no-margin">Теми: ${(anime?.themes?.length > 0 ? anime.themes.map(e => e.name).join(', ') : 'невідомо')}</p>
      
      <br>
    </div>
  `;
}

infoAnime(JSON.parse(localStorage.getItem('animeViewing')));