const initApp = () => {
  const btn = document.getElementById('btn');
  const color = document.getElementById('color');

  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRGB();
    color.innerText = getRGB();
  });
};

document.addEventListener('DOMContentLoaded', initApp);

const randNum = (min, max) => {
  // The minimum is inclusive and the maximum is inclusive and
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRGB = () => {
  return `rgb(${randNum(0, 255)}, ${randNum(0, 255)}, ${randNum(0, 255)})`;
};
