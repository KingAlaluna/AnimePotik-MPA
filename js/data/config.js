//html elements
export const i = (id) => document.getElementById(id);
export const c = (classis) => document.querySelectorAll(`.${classis}`);

export const html = {
  HTML: document.documentElement,
  
  btnClick: c('btn-click'),
  page: i('page'),
  btnScrollPage: c('btn-scroll-page'),
};

