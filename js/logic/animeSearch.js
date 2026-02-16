localStorage.setItem('activeBtn', 'search');

const mainPage = document.getElementById('main-page');
mainPage.insertAdjacentHTML('afterbegin', '<input type="search" placeholder="Введіть назву аніме..." id="input-search">');

const inputSearch = document.getElementById('input-search');


//логіка пошуку аніме
async function performSearch() {
  const query = inputSearch.value.trim();
  data.querys = query;
  if (query) {
    controls.clearAnime();
    clearFilter();
    data.paginationPage = 1;
    controls.pagTextContent();
    
    html.textTopAnime.textContent = 'Топ 25 ' + query + ':';
    html.textRecomendAnime.textContent = 'Рекомендую ' + query + ':';
    
    try {
      data.serverTopAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query) + '&order_by=score&sort=desc');
      data.serverAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query));
      
      controls.sortTopAnime();
      controls.sortAnime();
    } catch (e) {
      console.error("Помилка пошуку");
    }
    
    inputSearch.blur();
    data.animeSearch = true;
  }
}


inputSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
