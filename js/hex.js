const initApp = () => {
  const btn = document.getElementById('btn');
  const color = document.getElementById('color');

  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  btn.addEventListener('click', () => {
    let hexCode = '#';

    // Hex = 6
    for (let i = 0; i < 6; i++) {
      hexCode += hexArray[getRandomNumber(hexArray)];
    }

    document.body.style.backgroundColor = hexCode;
    color.innerText = hexCode;
  });
};

document.addEventListener('DOMContentLoaded', initApp);

const getRandomNumber = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`Function argument must be an array. You entered ${arr}`);
  }

  return Math.floor(Math.random() * arr.length);
};
