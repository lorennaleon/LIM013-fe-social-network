import { logOut } from '../controler/auth.js';

export default () => {
  const signout = `
  <nav>
  <ul >
    <li> <a id="logout" >Logout</a></li>
  </ul>
</nav>
  <h2>cerro sesion</h2>
 `;
  const divElem = document.createElement('div');
  divElem.innerHTML = signout;
  // logout
  const cerrarSe = divElem.querySelector('#logout');
  cerrarSe.addEventListener('click', (e) => {
    e.preventDefault();
    logOut()
      .then(() => {
        console.log('logout');
      }).catch((error) => {
        console.log(error);
      });
  });
  return divElem;
};
