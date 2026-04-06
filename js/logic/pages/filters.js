localStorage.setItem('activeBtn', 'filters-anime');


await import('../mainLogic.js');
const {html} = await import('../../data/config.js');
const {filtersAnime} = await import('../../data/layout/filters.js');
const {data, clearFilter, clearAnime, pagTextContent, sortTopAnime, sortAnime} = await import('../renderAnimeLists.js');
const {allFilter} = await import('../../data/filters.js');


html.page.insertAdjacentHTML('afterbegin', filtersAnime);


//html елементи
const i = (id) => document.getElementById(id);
const c = (classes) => document.querySelectorAll(`.${classes}`);


const dom = {
  wrapFilterAnime: c('wrap-filter-anime'),
  btnFilterAnime: c('btn-filter-anime'),
};


//add filter btn
dom.wrapFilterAnime.forEach(e => {
  const type = e.dataset.type;
  e.insertAdjacentHTML('beforeend', allFilter[type].join(''));
});
dom.btnFilterAnime = c('btn-filter-anime');


//templates url filters
const urlTemplates = (value) => ({
  years: `start_date=${encodeURIComponent(value)}-01-01&end_date=${encodeURIComponent(value)}-12-31`,
  types: `type=${encodeURIComponent(value)}`,
  genres: `genres=${encodeURIComponent(value)}`,
  studios: `producers=${encodeURIComponent(value)}`
});


//click btn filter
dom.btnFilterAnime.forEach(e => {
  e.addEventListener('click', async () => {
    clearAnime();
    clearFilter();
    data.paginationPage = 1;
    pagTextContent();
    
    
    const type = e.dataset.type;
    const filter = e.dataset.filter;
    const text = e.textContent;
    const url = urlTemplates(filter);
    
    data.anime[type] = filter;
    
    html.textTopAnime.textContent = `Топ 25 ${text}:`;
    html.textRecomendAnime.textContent = `Рекомендую ${text}:`;
    
    data.serverTopAnime = await fetch(`https://api.jikan.moe/v4/anime?${url[type]}&order_by=score&sort=desc`);
    data.serverAnime = await fetch(`https://api.jikan.moe/v4/anime?${url[type]}&page=${encodeURIComponent(data.paginationPage)}`);
    
    sortTopAnime();
    sortAnime();
  });
});
