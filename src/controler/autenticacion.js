export const currentUserUid = () => firebase.auth().currentUser;

export const authentification = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      const myUser = currentUserUid();
      window.localStorage.setItem('email', myUser.email);
      window.location.hash = '#/perfil';
    } else {
      // no user is signed in
      window.location.hash = '#/login';
    }
  });
};
