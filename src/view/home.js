export default () => {
  const viewHome = `
 <h1 id="bienvenido" >WELCOME</h1>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  return divElem;
};
