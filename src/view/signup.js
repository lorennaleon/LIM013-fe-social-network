import { regUser } from '../controler/auth.js';

export default () => {
  const formSignup = `
    <form id ="form-signup">
      <img src="./img/principal.png" width="330px"/>
      <h2 id="registrarte" >REGISTRARTE</h2>
      <div class="form-group">
      <input id="inputNombre" type="text" placeholder= "NOMBRE Y APELLIDO" />
      </div>
      <div class="form-group">
        <input id="inputCorreo" type="text" placeholder= "CORREO ELECTRÓNICO" />
      </div>
      <div class="form-group">
        <input id="inputContra" type="password" placeholder= "CONTRASEÑA" />
      </div>
      <button id="btn-signup" type="text" >Signup</button> 
     
     </form>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = formSignup;
  const signupForm = divElem.querySelector('#form-signup');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = divElem.querySelector('#inputCorreo').value;
    const password = divElem.querySelector('#inputContra').value;
    regUser(email, password)
      .then(() => {
        window.location.hash = '#/';
        console.log('sign in');
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return divElem;
};
