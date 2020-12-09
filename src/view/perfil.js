export default () => {
  const userProfile = `
  <nav>
       <ul >
        <li> <a href ="#/perfil">Perfil</a></li>
        <li> <a href ="#/logout">Logout</a></li>
       </ul>
  </nav>
  <div id="profile-container" class="container">
      <div class="profile-user-avatar">
          <section class="portada">
             <div class="user-img">
                 <img id="avatar"src="./img/avatr.png" width="auto" />
             </div>
          </section>
          <div class="user-img-info">
              <input type="file" id="file" aria-label="File browser example" style='width: 0px;'>
           </div>
       </div>
  </div>
  <form id="post-form">
  <div class="form-group"
  <input type="text" id="post-title" placeholder="Post title" />
  </div>
</form>
  <a href="#/profile"><input class="regresar" type="button" value="Regresar" name="Regresar" spellcheck="false"></a>

  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = userProfile;
  return divElement;
};
