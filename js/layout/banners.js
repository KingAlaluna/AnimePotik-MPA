//top (main) banner (header);
export const topBanner = `
  <!--banner top-->
  <header class="main-banner">
    <div class="logo-wrap">
      <img class="logo-img" src="img/my-logo/logo.svg">
      <h1 class="logo-text">AnimePotik</h1>
    </div>
    
    <!--wrap all btn main banner-->
    <nav class="wrap-nav-btn main">
      <button class="btn-span btn-click btn theme" data-type="theme">
        <div class="img"></div>
        <span>Тема</span>
      </button>
      
      <!--none display btn to portret orientation-->
      <button class="btn-span btn-click btn active" data-type="page" data-page="index">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span>Головна</span>
      </button>
      
      
      <button class="btn-span btn-click btn" data-type="page" data-page="search">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span>Пошук</span>
      </button>
      
      
      <button class="btn-span btn-click btn" data-type="page" data-page="filters-anime">
        <svg class="svg" viewBox="0 0 24 24">
          <path class="svg-element" d="M2,2 22,2 22,22 2,22 z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
          <path class="svg-element" d="M6.5,6.5 6.5,6.5 M12,6.5 12,6.5 M17.5,6.5 17.5,6.5 M6.5,12 6.5,12 M12,12 12,12 M17.5,12 17.5,12 M6.5,17.5 6.5,17.5 M12,17.5 12,17.5 M17.5,17.5 17.5,17.5" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>
        <span>Фільтр</span>
      </button>
    </nav>
  </header>
  
`;


//bottom banner
export const bottomNav = `
  <!--bottom nav-->
  <nav class="wrap-nav-btn bottom">
    <button class="btn-span btn-click btn active" data-type="page" data-page="index">
      <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span>Головна</span>
    </button>
    
    
    <button class="btn-span btn-click btn" data-type="page" data-page="search">
      <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <span>Пошук</span>
    </button>
    
    
    <button class="btn-span btn-click btn" data-type="page" data-page="filters-anime">
      <svg class="svg" viewBox="0 0 24 24">
        <path class="svg-element" d="M2,2 22,2 22,22 2,22 z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        <path class="svg-element" d="M6.5,6.5 6.5,6.5 M12,6.5 12,6.5 M17.5,6.5 17.5,6.5 M6.5,12 6.5,12 M12,12 12,12 M17.5,12 17.5,12 M6.5,17.5 6.5,17.5 M12,17.5 12,17.5 M17.5,17.5 17.5,17.5" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
      <span>Фільтр</span>
    </button>
  </nav>
  
`;


export const btnScrollPage = `
  <!--btn scroll page-->
  <nav class="wrap-btn-scroll-page">
    <button class="btn-span btn-scroll-page top" aria-label="скролл вверх" data-scroll="top">
      <svg viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12,19 12,5 M5,12 12,5 19,12" />
      </svg>
      <span>Скролл вверх</span>
    </button>
    
    <button class="btn-span btn-scroll-page bottom active" aria-label="скролл вниз" data-scroll="bottom">
      <svg viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12,19 12,5 M5,12 12,19 19,12" />
      </svg>
      <span>Скролл вниз</span>
    </button>
  </nav>
  
`;
