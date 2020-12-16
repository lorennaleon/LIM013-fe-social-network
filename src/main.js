import { viewChange } from './view-controler/index.js';
import { autenticacion } from './controler/autenticacion.js';

const init = () => {
  viewChange(window.location.hash);
  window.addEventListener('hashchange', () => viewChange(window.location.hash));
  autenticacion();
};

window.addEventListener('load', init);

const navegator = `
<nav>
       <ul >
        <li> <a href ="#/">GIRL GENERATION</a></li>
        <li> <a href ="#/signup">Signup</a></li>
        <li> <a href ="#/login">Login</a></li>
        <li> <a href ="#/logout">Logout</a></li>
       </ul>
</nav>

`;
const nav = document.getElementById('nav');
nav.innerHTML = navegator;
