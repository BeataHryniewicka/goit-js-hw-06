const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`#ingredients`);
for (let ingredient of ingredients) {
  const element = document.createElement(`li`);
  element.textContent = ingredient;
  console.log(element.textContent);
  element.classList.add(`item`);
  console.log(element.classList);
  list.append(element);
  console.log(element);
}

// const list = document.querySelector(`#ingredients`);
// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.classList.add(`item`);
//   item.textContent = ingredient;
//   list.append(item);
//   console.log(item);
// });
