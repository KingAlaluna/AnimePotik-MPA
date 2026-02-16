const animeSections = `
      <!--сторінка з аніме (головна та відсортовані)-->
      <div class="scroll-page page" id="main-page">
        
        <div class="top-10-anime">
          <h2 id="text-top-anime">Топ 25:</h2>
          <div class="theme-content-1" id="container-top-10-anime">
            <!--контент добавляє js-->
          </div>
        </div>
        
        <div class="recommend">
          <h2 id="text-recommend-anime">Рекомендую:</h2>
          <div class="theme-content-2" id="container-recommend-amine">
            <!--контент добавляє js-->
          </div>
        </div>
        
        
        <!--пагинация контента-->
        <div id="pagination">
          <div id="pg-btn-left" class="pagination-btn">
            <svg class="svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5,12 19,12 M12,19 5,12 12,5" />
            </svg>
          </div>
          
          <span id="pagination-text">1 / 3</span>
          <div id="pg-btn-right" class="pagination-btn">
            <svg class="svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5,12 19,12 M12,19 19,12 12,5" />
            </svg>
          </div>
        </div>
        
        
        <div class="container-all-law-protected">
          <span class="text-all-law-protected">© 2026 АнімеПотік. Всі права захищені.</span>
        </div>
        
      </div>
`;