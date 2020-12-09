import { components } from '../view/components.js';

export const viewChange = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
    { return sectionMain.appendChild(components.home()); }
    case '#/signup':
    case '#/login':
    case '#/perfil':
    case '#/logout':
    { return sectionMain.appendChild(components[id]()); }
    default:
      return sectionMain.appendChild(components.different());
  }
};
