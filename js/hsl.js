const initApp = () => {
  const btn = document.getElementById('btn');
  const color = document.getElementById('color');

  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getHSL();
    color.innerText = getHSL();
  });
};

document.addEventListener('DOMContentLoaded', initApp);

const randNum = (min, max) => {
  // The minimum is inclusive and the maximum is inclusive and
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getHSL = () => {
  return `hsl(${randNum(0, 360)}, ${randNum(0, 100)}%, ${randNum(0, 100)}%)`;
};
