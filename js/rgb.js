const initApp = () => {
  const btn = document.getElementById('btn');
  const color = document.getElementById('color');

  const getRandomColor = () => {
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    color.innerText = `rgb(${r}, ${g}, ${b})`;
  };

  btn.addEventListener('click', getRandomColor);
};

document.addEventListener('DOMContentLoaded', initApp);

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};
