//Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.
//Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.

// div.innerHTML = `width =30px height =30px`
// const element = document. createElement("div");
// div.append(element);

//.................................
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divNew = document.querySelector("#boxes");
const amount = document.querySelector(`input[type = "number"].value`);
console.log(amount);

// let divWidth = (divNew.style.width = `30px`);
// let divHeight = (divNew.style.height = `30px`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener(`click`, () => {
  divNew.style.backgroundColor = getRandomHexColor();
  const el = document.createElement("div");
  let elvWidth = (el.style.width = `30px`);
  let elHeight = (el.style.height = `30px`);
  el.style.backgroundColor = getRandomHexColor();
  divNew.appendChild(el);
});

function destroyBoxes() {
  divNew.innerHTML = null;
}

btnDestroy.addEventListener(`click`, destroyBoxes);
