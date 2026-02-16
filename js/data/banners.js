const banners = `
    <!--banner top-->
    <div id="top-banner">
      
      <div id="logo-container">
        <img id="logo-img" src="img/style/Logo-128x128.webp">
        <h1 id="logo-text">АнімеПотік</h1>
      </div>
      
      
      <div id="btn-theme">
        <button id="img-btn-theme"></button>
      </div>
      
      
      <!--приховані btn в портнетній оріентації-->
      <button data-active-btn="main" class="btn-top-banner" id="btn-main-page-2">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </button>
      
      
      <button data-active-btn="search" class="btn-top-banner" id="btn-search-anime-2">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
      
      
      <button data-active-btn="sort" class="btn-top-banner" id="btn-sort-anime-2">
        <svg class="svg" viewBox="0 0 24 24">
          <path class="svg-element" d="M2,2 22,2 22,22 2,22 z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
          <path class="svg-element" d="M6.5,6.5 6.5,6.5 M12,6.5 12,6.5 M17.5,6.5 17.5,6.5 M6.5,12 6.5,12 M12,12 12,12 M17.5,12 17.5,12 M6.5,17.5 6.5,17.5 M12,17.5 12,17.5 M17.5,17.5 17.5,17.5" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>
      </button>
      
      
      <button data-active-btn="project" class="btn-top-banner" id="btn-detalis-project-2">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#000" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">
          <path d="M60,10 40,90 M30,30 10,50 30,70 M70,30 90,50 70,70" />
        </svg>
      </button>
      
      
      <button data-active-btn="detalis" class="btn-top-banner" id="btn-detalis-weblite-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path class="svg-element" d="M 12,2 Q 22,2 22,12 Q 22,22 12,22 Q 2,22 2,12 Q 2,2 12,2 Z" fill="none" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          <path class="svg-element" d="M8 9c0-2 1.5-3.5 3.5-3.5S16 7 16 9c0 2.5-3 3-4 4.5V15m0 3v0" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
    </div>
    
    
    
    
    
    
    <!--banner bottom-->
    <div id="bottom-banner">
    
      <button data-active-btn="main" class="btn-bottom-banner" id="btn-main-page">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </button>
      
      
      <button data-active-btn="search" class="btn-bottom-banner" id="btn-search-anime">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
      
      
      <button data-active-btn="sort" class="btn-bottom-banner" id="btn-sort-anime">
        <svg class="svg" viewBox="0 0 24 24">
          <path class="svg-element" d="M2,2 22,2 22,22 2,22 z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
          <path class="svg-element" d="M6.5,6.5 6.5,6.5 M12,6.5 12,6.5 M17.5,6.5 17.5,6.5 M6.5,12 6.5,12 M12,12 12,12 M17.5,12 17.5,12 M6.5,17.5 6.5,17.5 M12,17.5 12,17.5 M17.5,17.5 17.5,17.5" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>
      </button>
      
      
      <button data-active-btn="project" class="btn-bottom-banner" id="btn-detalis-project">
        <svg class="svg-element" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#000" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">
          <path d="M60,10 40,90 M30,30 10,50 30,70 M70,30 90,50 70,70" />
        </svg>
      </button>
      
      
      <button data-active-btn="detalis" class="btn-bottom-banner" id="btn-detalis-weblite">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path class="svg-element" d="M 12,2 Q 22,2 22,12 Q 22,22 12,22 Q 2,22 2,12 Q 2,2 12,2 Z" fill="none" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          <path class="svg-element" d="M8 9c0-2 1.5-3.5 3.5-3.5S16 7 16 9c0 2.5-3 3-4 4.5V15m0 3v0" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
    </div>
    
    
    
    <!--btn scroll page-->
    <a id="btn-top-page">
      <svg class="svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12,19 12,5 M5,12 12,5 19,12" />
      </svg>
    </a>
    
    
    <a id="btn-bottom-page">
      <svg class="svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12,19 12,5 M5,12 12,19 19,12" />
      </svg>
    </a>
    
`;