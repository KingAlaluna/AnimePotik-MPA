import {html} from '../data/config.js';


export function applyTheme(theme) {
  if (theme == 'dark') {
    localStorage.setItem('AnimePotik-MPA-darkTheme', 'false');
    html.HTML.dataset.theme = 'light';
  } else {
    localStorage.setItem('AnimePotik-MPA-darkTheme', 'true');
    html.HTML.dataset.theme = 'dark';
  }
}


//initial theme
if (localStorage.getItem('AnimePotik-MPA-darkTheme')) {
  //user theme
  if (localStorage.getItem('AnimePotik-MPA-darkTheme') == 'false') {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
} else {
  //sustems theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }
}
