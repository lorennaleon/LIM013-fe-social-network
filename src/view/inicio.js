const navegator = `
<h1 id="title"> GIRL GENERATION </h1>
<img src="./img/principal.png" alt=""width="300px" />
<nav id="nav">
 <ul><li ><a id="singup" href ="#/">Singup</a></li></ul>
 <ul><li ><a id="login" href ="#/">Login</a></li></ul>
</nav>
`;
const nav = document.getElementById('nav');
nav.innerHTML = navegator;
// const container = document.getElementById('container');
// container.innerHTML = formTemplate;
// template y nodo
const container = document.getElementById('container');
const formElement = document.createElement('form');
const formulario = `
 <form id="form">
 <h2 id="bienvenida" >BIENVENIDA</h2>
 <input id="inputCorreo" type="text" placeholder= "CORREO ELECTRÓNICO" />
 <input id="inputContra" type="text" placeholder= "CONTRASEÑA" />
 <button id="iniciar-sesion" type"button" >INICIAR SESIÓN</button>
 <button type="text" class="gmail" id="googlelogin">gmail</button>
 <p>¿Olvidaste tu contraseña?</p>
 <ul><li ><a id="registrarte" href ="#/">Registrarte</a></li></ul>
 </form>
 `;
formElement.innerHTML = formulario;

container.appendChild(formElement);
// valor de input
document.getElementById('iniciar-sesion').addEventListener('click', () => {
  const correo = document.getElementById('inputCorreo').value;
  const contra = document.getElementById('inputContra').value;
  console.log(correo);
  console.log(contra);
});
