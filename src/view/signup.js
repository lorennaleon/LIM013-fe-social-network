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
  return divElem;
};
// eventos

