const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector(`ul#ingredients`);
//dla każdego elementu tablicy ingredients:
ingredients.forEach((ingredient) => {
  //Utworzy oddzielny element <li>
  const item = document.createElement("li");
  //Doda do elementu klasę item.
  item.classList.add(`item`);
  //Doda nazwę elementu jako jego zawartość tekstową.
  item.textContent = ingredient;
  //umieści wszystkie <li> (item) na liście
  list.append(item);
  console.log(item);
});