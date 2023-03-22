//Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.
//Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.

//.................................
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divElement = document.querySelector("#boxes");
const quantity = document.querySelector("#controls input[type=number]");

// quantity.onblur = (e) => {
//   console.log(e.target.value);
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(amount) {
  const arrayBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `(30 + 10*i)px`;
    box.style.heigth = `(30 + 10*i)px`;
    box.style.backgroundColor = `getRandomHexColor()`;
    arrayBoxes.push(box);
  }
  return arrayBoxes;
}

function insertBoxes() {
  let boxesToAdd = createBox(quantity.value)
	divElement.append(...boxesToAdd);
  console.log(divElement)
}

function destroyBoxes() {

  quantity.value = " ";
}

btnCreate.addEventListener(`click`, insertBoxes);

btnDestroy.addEventListener(`click`, destroyBoxes);
