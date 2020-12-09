export default () => {
  const close = `
   <li> <a href ="#/logout" id='logout">Logout</a></li>
   <h1>finalizo sesion</h1>
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = close;
  return divElem;
};
