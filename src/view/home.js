export default () => {
  const viewHome = `
 <h1>WELCOME TO GIRL GENERATION </h1>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  return divElem;
};
