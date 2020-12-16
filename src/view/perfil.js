/* eslint-disable no-unused-vars */
const fs = firebase.firestore();

export default () => {
  const userProfile = `
  <nav>
    <ul >
      <li> <a href ="#/perfil">Perfil</a></li>
      <li> <a href ="#/logout">Logout</a></li>
    </ul>
  </nav>
    <section class="portada">
      <img id="avatar" src="./img/avatr.png"  />
    </section>
    <div>
      <form id="post-form">
        <div class="form-group">
          <textarea type="text" id="post-text" rows="4" placeholder="Post title"></textarea>
        </div>
        <button id="btn-save">SAVE</button>
      </form>
      <table class="table my-3">
       <thead id="tabla">
          <h3>MIS PUBLICACIONES</h3>

       </thead>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = userProfile;
  const postForm = divElem.querySelector('#post-form');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = divElem.querySelector('#post-text').value;
    // console.log(description);
    // agregar coleccion
    fs.collection('posts').add({
      description,
    })
      .then((docRef) => {
        // console.log('Document written with ID: ', docRef.id);
        divElem.querySelector('#post-text').value = '';
      })
      .catch((error) => {
        // console.error('Error adding document: ', error);
      });
  });
  // leer documentos
  const tabla = divElem.querySelector('#tabla');
  fs.collection('posts').onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().description}`);
      tabla.innerHTML += `
          <p id="c">${doc.data().description}</p>
          <button id="btn-delete">ELIMINAR</button>
         `;
    });
  });
  // borrar datos
  divElem.querySelectorAll('#btn-delete').addEventListener('click', () => {
    console.log('hola');
  });
  // function eliminar(id) {
  //   fs.collection('posts').doc(id).delete().then(() => {
  //     console.log('Document successfully deleted!');
  //   })
  //     .catch((error) => {
  //       console.error('Error removing document: ', error);
  //     });
  // }
  return divElem;
};
