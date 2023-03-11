//Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.

const categories = document.querySelectorAll(`li.item`).length;
 console.log(`Number of categories:`, categories);

//Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).

const items = document.querySelectorAll(`li.item`);

for (const item of items) {

const tittle = item.querySelector(`h2`).textContent ;
const numbersOfElements = item.querySelectorAll(`li`).length;

console.log(`Category: ${tittle}\nElements: ${numbersOfElements}`)

}