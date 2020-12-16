export const autenticacion = () => firebase.auth()
  .onAuthStateChanged((user) => {
    if (user) {
      console.log('auth:signin', user);
    } else {
      console.log('signout');
    }
  });
