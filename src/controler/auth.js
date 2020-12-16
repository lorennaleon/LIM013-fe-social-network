export const regUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);
export const logInGoogle = () => firebase.auth()
  .signInWithPopup(new firebase.auth.GoogleAuthProvider());
export const logInFacebook = () => firebase.auth()
  .signInWithPopup(new firebase.auth.FacebookAuthProvider());
export const logOut = () => firebase.auth()
  .signOut();
