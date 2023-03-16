const counterValue = 0;
const spanValue = document.querySelcetor(`#value`);
const addCounterBtn = document.querySelector('[data-action="increment"]');
const removeCounterBtn = document.querySelector('[data-action="decrement"]');

addCounterBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  spanValue.textContent = counterValue;
});

removeCounterBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  spanValue.textContent = counterValue;
});
