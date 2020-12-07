import { signIn, google, facebook } from '../controler/auth.js';

export default () => {
  const formLogin = `
 <form id ="form-signin">
  <img src="./img/principal.png" width="330px"/>
   <h2 id="bienvenida" >BIENVENIDA</h2>
   <div class="form-group">
     <input id="login-email" type="text" placeholder= "CORREO ELECTRÓNICO" />
   </div>
   <div class="form-group">
     <input id="login-password" type="password" placeholder= "CONTRASEÑA" />
   </div>
   <button id="btn-login" type="submit" >Login</button> 
   <button id="btn-google" type="button" >gmail</button>
   <button id="btn-facebook" type="button" >facebook</button>
   <li ><a id="olvidaste" href ="#/">¿Olvidaste tu contraseña? </a></li>
  </form>
 `;
  const divElem = document.createElement('div');
  divElem.innerHTML = formLogin;
  const loginForm = divElem.querySelector('#form-signin');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = divElem.querySelector('#login-email').value;
    const password = divElem.querySelector('#login-password').value;
    signIn(email, password);
  });
  // google
  const googleButton = divElem.querySelector('#btn-google');
  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    google();
  });
  // facebook
  const facebookButton = divElem.querySelector('#btn-facebook');
  facebookButton.addEventListener('click', (e) => {
    e.preventDefault();
    facebook();
  });
  return divElem;
};
