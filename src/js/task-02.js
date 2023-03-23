// Napisz skrypt, który dla każdego elementu tablicy ingredients:
// Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
// Doda nazwę elementu jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.

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
  element.classList.add(`item`);
  list.append(element);
}

// const list = document.querySelector(`#ingredients`);
// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.classList.add(`item`);
//   item.textContent = ingredient;
//   list.append(item);
// });
