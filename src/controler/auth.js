export const regUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);
export const signOut = () => firebase.auth()
  .signOut();
export const google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/perfil';
      console.log('google signin');
    });
};
export const facebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/perfil';
      console.log('facebook signin');
    });
};
