// Licznik składa się z elementu span i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość o jednostkę.
// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej początkową wartość wartość 0.
// Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.

let counterValue = 0;
let spanValue = document.querySelector("#value");
let addCounterBtn = document.querySelector('[data-action="increment"]');
let removeCounterBtn = document.querySelector('[data-action="decrement"]');

function incrementFn() {
  counterValue = counterValue + 1;
  spanValue.textContent = counterValue;
}

function decrementFn() {
  counterValue = counterValue - 1;
  spanValue.textContent = counterValue;
}

addCounterBtn.addEventListener("click", incrementFn);

removeCounterBtn.addEventListener("click", decrementFn);
