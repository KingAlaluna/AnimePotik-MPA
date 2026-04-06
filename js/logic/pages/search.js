localStorage.setItem('activeBtn', 'search');


await import('../mainLogic.js');
const {search} = await import('../../data/layout/search.js');
const {html, c, i} = await import('../../data/config.js');
const {dom: rDom, data, clearAnime, clearFilter, pagTextContent, sortAnime, sortTopAnime} = await import('../renderAnimeLists.js');


html.page.insertAdjacentHTML('beforeend', search);


//html elements
const dom = {
  inputSearch: i('input-search'),
  btnSearch: i('btn-search')
};


//search anime
export async function performSearch() {
  const query = dom.inputSearch.value.trim();
  if (query) {
    data.querys = query;
    clearAnime();
    clearFilter();
    data.paginationPage = 1;
    pagTextContent();
    
    rDom.textTopAnime.textContent = 'Топ 25 ' + query + ':';
    rDom.textRecomendAnime.textContent = 'Рекомендую ' + query + ':';
    
    try {
      data.serverTopAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query) + '&order_by=score&sort=desc');
      data.serverAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query));
      
      sortTopAnime();
      sortAnime();
    } catch (e) {
      console.error("Помилка пошуку");
    }
    
    dom.inputSearch.blur();
    data.animeSearch = true;
  }
}


dom.inputSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

dom.btnSearch.addEventListener('click', () => performSearch());
