import '../../sw-init.js';
import {copyFooter} from '../data/layout/copy-footer.js';
import {topBanner, bottomNav, btnScrollPage} from '../data/layout/banners.js';


//add html elements
const root = document.getElementById('root');
root.insertAdjacentHTML('afterbegin', topBanner);
root.insertAdjacentHTML('beforeend', [copyFooter, bottomNav, btnScrollPage].join(''));


const {html} = await import('../data/config.js');
const {applyTheme} = await import('./themes.js');
await import('./scrollPages.js');


//btn active styles
function activeBtn() {
  const l = localStorage.getItem('activeBtn');
  const btn = document.querySelectorAll('.btn-click.active[data-type="page"]');
  btn.forEach(e => e.classList.remove('active'));
  if (l) {
    const active = document.querySelectorAll(`.btn-click[data-page="${l}"]`);
    active?.forEach(e => e.classList.add('active'));
  }
}
activeBtn();


html.btnClick.forEach(e => {
  e.addEventListener('click', () => {
    const type = e.dataset.type;
    
    if (type == 'theme') {
      applyTheme(html.HTML.dataset.theme);
    }
    else if (type == 'page') {
      const page = e.dataset.page;
      window.location.href = `${page}.html`;
    }
  });
});
