//Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.

const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categories.length}`);

//Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).

categories.forEach((category) => {
    const text = category.querySelector(`h2`).textContent;
    const numbers = category.querySelectorAll(`li`).length;
    console.log(`Category: ${text}\n Elements: ${numbers}`)
});

// albo pętla for  of ..............................
// for (const category of categories) {
//     const text = category.querySelector(`h2`).textContent ;
//     const numbers = category.querySelectorAll(`li`).length;
//     console.log(`Category: ${text}\n Elements: ${numbers}`)
//     }