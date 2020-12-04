export default () => {
  const close = `
   <h1>finalizo sesion</h1>
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = close;
  return divElem;
};
