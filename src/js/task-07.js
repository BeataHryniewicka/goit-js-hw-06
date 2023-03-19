// Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

const textInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

function changeSize() {
  textSpan.style.fontSize = `${textInput.value}px`;
}

textInput.addEventListener("input", changeSize);
