//Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.
//Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.

//.................................

// quantity.onblur = (e) => {
//   console.log(e.target.value);
// };

const divElement = document.querySelector("#boxes");
const quantity = document.querySelector("input[type='number']");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const createBox = (amount) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + `px`;
    box.style.height = 30 + 10 * i + `px`;
    box.style.backgroundColor = getRandomHexColor();
    divElement.append(box);
  }
};

btnCreate.addEventListener("click", () => createBox(quantity.value));

function destroyBoxes() {
  quantity.value = null;
  divElement.innerHTML = null;
}
btnDestroy.addEventListener(`click`, destroyBoxes);
