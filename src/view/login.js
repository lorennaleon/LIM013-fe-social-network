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
   <button id="btn-login" type="text" >Login</button> 
   <li ><a id="olvidaste" href ="#/">¿Olvidaste tu contraseña? </a></li>
  </form>
 `;
  const divElem = document.createElement('div');
  divElem.innerHTML = formLogin;
  return divElem;
};

// evento login
// export const loginForm = document.getElementById('btn-login');
// loginForm.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('login-email').value;
//   const password = document.getElementById('login-password').value;
//   signin(email, password);
//   // LIMPIA PANTALLA
//   document.getElementById('pantalla-login').innerHTML = '';
// });
