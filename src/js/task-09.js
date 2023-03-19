// Napisz skrypt, który zmienia kolor tła elementu < body > poprzez style inline po kliknięciu na button.change - color i wprowadza wartość koloru do span.color.
// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

const bodyColor = document.body;
const btnChangeColor = document.querySelector(`.change-color`);
const spanColor =  document.querySelector(`.color`);

function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

  btnChangeColor.addEventListener(`click`,  () => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    spanColor.textContent = getRandomHexColor() ;
  });

  
