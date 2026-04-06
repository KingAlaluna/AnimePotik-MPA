import {html} from '../data/config.js';


//pages scroll
function scrollPage(scroll) {
  window.scrollTo({
    top: scroll == 'top' ? 0 : html.HTML.scrollHeight,
    behavior: 'smooth',
  });
}


//click button scroll
html.btnScrollPage.forEach(e => {
  e.addEventListener('click', () => {
    const dataScroll = e.dataset.scroll;
    if (dataScroll == 'top') {
      scrollPage('top');
    } else {
      scrollPage('bottom');
    }
  });
});


//style btns scroll
function styleScroll() {
  window.addEventListener('scroll', () => {
    let scrollTop = html.HTML.scrollTop;
    let scrollHeight = html.HTML.scrollHeight;
    let clientHeight = html.HTML.clientHeight;
    let timer = null;
    
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      html.btnScrollPage.forEach(e => {
        e.classList.remove('active');
        const dataScroll = e.dataset.scroll;
        if (scrollTop > clientHeight * 0.5) {
          dataScroll == 'top' ? e.classList.add('active') : null;
        }
        if (scrollTop + clientHeight < scrollHeight - clientHeight * 0.5) {
          dataScroll == 'bottom' ? e.classList.add('active') : null;
        }
      });
    }, 10);
  });
}
styleScroll();

