localStorage.setItem('activeBtn', 'sort');

function filterAnime() {

const mainPage = document.getElementById('main-page');
mainPage.insertAdjacentHTML('afterbegin', filtersAnime);


//html елементи
const i = (id) => document.getElementById(id);
const c = (classes) => document.querySelectorAll(`.${classes}`);


const dom = {
  //контейнери
  containerSortGenre: i('container-sort-genre'),
  containerSortType: i('container-sort-type'),
  containerSortYear: i('container-sort-year'),
  containerSortStudio: i('container-sort-studio'),
};


//фільтр жанри шаблон кнопки
function btnGenre(data, text) {
  dom.containerSortGenre.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-genre-sort" data-genre="${data}" data-text="${text}">${text}</button>
  `);
  return dom.containerSortGenre.lastElementChild;
}


//фільтр тип шаблон кнопки
function btnType(data, text) {
  dom.containerSortType.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-type-sort" data-type="${data}" data-text="${text}">${text}</button>
  `);
  return dom.containerSortType.lastElementChild;
}


//фільтр рік шаблон кнопки
function btnYear(data) {
  dom.containerSortYear.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-year-sort" data-year="${data}" data-text="за ${data} рік">${data}</button>
  `);
  return dom.containerSortYear.lastElementChild;
}


//фільтр студія шаблон кнопки
function btnStudio(data, text) {
  dom.containerSortStudio.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-studio-sort" data-studio="${data}" data-text="Студії ${text}">${text}</button>
  `);
  return dom.containerSortStudio.lastElementChild;
}



//всі кнопки жанрів
const allBtnGenre = [
  btnGenre(1, 'Екшен'),
  btnGenre(2, 'Пригоди'),
  btnGenre(4, 'Комедія'),
  btnGenre(8, 'Драма'),
  btnGenre(10, 'Фентезі'),
  btnGenre(14, 'Жахи'),
  btnGenre(7, 'Містика'),
  btnGenre(22, 'Романтика'),
  btnGenre(24, 'Наукова фантастика'),
  btnGenre(36, 'Повсякденність'),
  btnGenre(30, 'Спорт'),
  btnGenre(37, 'Надприродне'),
  btnGenre(41, 'Трилер'),
  btnGenre(27, 'Сьонен'),
  btnGenre(25, 'Сьоджьо'),
  btnGenre(42, 'Сейнен'),
  btnGenre(43, 'Джьосей'),
  btnGenre(15, 'Для дітей'),
  btnGenre(13, 'Історичні'),
  btnGenre(17, 'Бойові мистецтва'),
  btnGenre(18, 'Меха'),
  btnGenre(19, 'Музика'),
  btnGenre(23, 'Школа'),
  btnGenre(31, 'Суперсили'),
  btnGenre(38, 'Військові'),
  btnGenre(39, 'Поліція'),
  btnGenre(40, 'Психологічні'),
  btnGenre(9, 'Еччі'),
  btnGenre(49, 'Еротика'),
  btnGenre(12, 'Хентай')
];


//всі кнопки типів
const allBtnType = [
  btnType('tv', 'Телесеріали'),
  btnType('movie', 'Фільми'),
  btnType('ova', 'OVA'),
  btnType('special', 'Спешели'),
  btnType('ona', 'ONA'),
  btnType('music', 'Музичні відео')
];


//всі кнопки років
const allBtnYear = [];

let year = 2027;

while (year > 1964) {
  year -= 1;
  allBtnYear.push(btnYear(year));
}


//всі кнопки студій
const allBtnStudio = [
  btnStudio(4, 'Bones'),
  btnStudio(10, 'Production I.G'),
  btnStudio(11, 'Madhouse'),
  btnStudio(18, 'Toei Animation'),
  btnStudio(21, 'Studio Ghibli'),
  btnStudio(28, 'OLM'),
  btnStudio(29, 'Nippon Animation'),
  btnStudio(37, 'Studio Deen'),
  btnStudio(43, 'ufotable'),
  btnStudio(44, 'Shaft'),
  btnStudio(47, 'Sunrise'),
  btnStudio(56, 'A-1 Pictures'),
  btnStudio(79, 'Genco'),
  btnStudio(91, 'Studio Pierrot'),
  btnStudio(112, 'Kyoto Animation'),
  btnStudio(314, 'White Fox'),
  btnStudio(569, 'MAPPA'),
  btnStudio(858, 'Wit Studio'),
  btnStudio(1835, 'CloverWorks')
];



//
//логіка
//
//шаблон фільтра
function filter(props) {
  props.btn.forEach(e => {
    e.addEventListener('click', async () => {
      controls.clearAnime();
      clearFilter();
      data.paginationPage = 1;
      controls.pagTextContent();
      
      
      let filter = e.dataset[props.dataset];
      let text = e.dataset.text;
      
      data[props.anime] = filter;
      
      html.textTopAnime.textContent = `Топ 25 ${text}:`;
      html.textRecomendAnime.textContent = `Рекомендую ${text}:`;
      
      data.serverTopAnime = await fetch(`https://api.jikan.moe/v4/anime?${props.animeUrl()}&order_by=score&sort=desc`);
      data.serverAnime = await fetch(`https://api.jikan.moe/v4/anime?${props.animeUrl()}&page=${encodeURIComponent(data.paginationPage)}`);
        
      controls.sortTopAnime();
      controls.sortAnime();
    });
  });
}


// роки фільтер 
filter({
  btn: allBtnYear,
  dataset: 'year',
  anime: 'animeYear',
  animeUrl: () => `start_date=${encodeURIComponent(data.animeYear)}-01-01&end_date=${encodeURIComponent(data.animeYear)}-12-31`,
});


//тип фільтер
filter({
  btn: allBtnType,
  dataset: 'type',
  anime: 'animeType',
  animeUrl: () => `type=${encodeURIComponent(data.animeType)}`,
});


//жанри фільтр
filter({
  btn: allBtnGenre,
  dataset: 'genre',
  anime: 'animeGenre',
  animeUrl: () => `genres=${encodeURIComponent(data.animeGenre)}`,
});


//студія фільтр
filter({
  btn: allBtnStudio,
  dataset: 'studio',
  anime: 'animeStudio',
  animeUrl: () => `producers=${encodeURIComponent(data.animeStudio)}`,
});


/*return {
  clearFilter,
};*/

}

const sortControls = filterAnime();