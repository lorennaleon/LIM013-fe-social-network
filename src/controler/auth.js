export const regUser = (email, password) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('sign up');
    });
};
export const signin = (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('sign in');
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signOut = () => {
  firebase.auth()
    .signOut()
    .then(() => {
      console.log('sign out');
    });
};
