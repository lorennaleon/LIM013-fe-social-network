// importamos la funcion que vamos a testear
import {
  regUser, signIn, logInGoogle, logInFacebook,
} from '../src/controler/auth.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

// registrar un usuario
describe('registrar un usario', () => {
  it('deberia poder registrar showbells02@gmail.com y password ryan06', () => regUser('showbells02@gmail.com', 'ryan06')
    .then((user) => {
      expect(user.email).toBe('showbells02@gmail.com');
      expect(user.password).toBe('ryan06');
    }));
});


// iniciar sesion
describe('Iniciar sesion', () => {
  it('Debería poder iniciar sesión', () => signIn('show02@gmail.com', '1234567')
    .then((user) => {
      expect(user.email).toBe('show02@gmail.com');
      expect(user.isAnonymous).toBe(false);
    }));
});
describe('logInGoogle', () => {
  it('Deberia poder iniciar sesión con Google', () => logInGoogle('show02@gmail.com', '1234567')
    .then((data) => {
      const provider = data.providerData[0].providerId;
      expect(provider).toBe('google.com');
    }));
});

describe('logInFacebook', () => {
  it('Deberia poder iniciar sesión con Facebook', () => logInFacebook()
    .then((data) => {
      const provider = data.providerData[0].providerId;
      expect(provider).toBe('facebook.com');
    }));
});

// // cerrar asesion
// describe('Cerrar sesion', () => {
//   it('Deberia cerrar sesion', () => {
//     signout().then((user) => {
//       expect(user).toBe(null);
//     });
//   });
// });
