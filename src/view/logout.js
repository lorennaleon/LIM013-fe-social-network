import { signOut } from '../controler/auth.js';

export default () => {
  const close = `
   <h1>finalizo sesion</h1>
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = close;
  const logout = divElem.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
  });

  return divElem;
};
