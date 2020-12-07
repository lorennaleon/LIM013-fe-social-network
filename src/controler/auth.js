export const regUser = (email, password) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/';
      console.log('sign in');
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signIn = (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/';
      console.log('sign in');
    })
    .catch((error) => {
      console.log(error);
    });
};
export const google = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      console.log('google signin')
        .catch((error) => {
          console.log(error);
        });
    });
};
export const facebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      console.log('facebook signin')
        .catch((error) => {
          console.log(error);
        });
    });
};
export const signOut = () => {
  firebase.auth()
    .signOut()
    .then(() => {
      console.log('sign out');
    });
};
