// // import {
// //   regUser,
// //   login,
// //   signOut,
// // } from '../controler/auth.js';
// // login del navegador
// document.getElementById('signup').addEventListener('click', () => {
//   document.getElementById('pantalla-login').style.display = 'none';
//   document.getElementById('pantalla-signup').style.display = 'block';
// });

// // valor de input ,registro ,firebase
// const signupForm = document.getElementById('btn-signup');
// signupForm.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('inputCorreo').value;
//   const password = document.getElementById('inputContra').value;
//   regUser(email, password);
//   // LIMPIA PANTALLA
//   document.getElementById('pantalla-signup').innerHTML = '';
// });
// // login del navegador
// document.getElementById('login').addEventListener('click', () => {
//   document.getElementById('pantalla-signup').style.display = 'none';
//   document.getElementById('pantalla-login').style.display = 'block';
// });

// // evento login
// const loginForm = document.getElementById('btn-login');
// loginForm.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('login-email').value;
//   const password = document.getElementById('login-password').value;
//   login(email, password);
//   // LIMPIA PANTALLA
//   document.getElementById('pantalla-login').innerHTML = '';
// });

// // logout
// const logout = document.getElementById('logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   signOut();
// });
