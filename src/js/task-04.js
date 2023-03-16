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
