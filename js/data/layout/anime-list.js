export const animeList = `
    <section class="top-10-anime">
      <h3 id="text-top-anime">Топ 25:</h3>
      <div class="wrap-content row" id="container-top-10-anime">
        <!--content add js-->
      </div>
      <div class="wrap-scroll-progress">
        <span class="scroll-progress"></span>
      </div>
    </section>
    
    <section class="recommend">
      <h3 id="text-recommend-anime">Рекомендую:</h3>
      <div class="wrap-content" id="container-recommend-amine">
        <!--content add js-->
      </div>
    </section>
    
    <!--pagination content-->
    <nav class="pagination">
      <button class="pagination-btn btn-span" aria-label="попередні аніме" id="pg-btn-left">
        <svg class="svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5,12 19,12 M12,19 5,12 12,5" />
        </svg>
        <span>Назад</span>
      </button>
      
      <span id="pagination-text">1 / 3</span>
      
      <button class="pagination-btn btn-span" aria-label="наступні аніме" id="pg-btn-right">
        <span>Далі</span>
        <svg class="svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5,12 19,12 M12,19 19,12 12,5" />
        </svg>
      </button>
    </nav>
`;
