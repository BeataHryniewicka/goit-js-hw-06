//Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
//Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
//Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.


const inputText = document.querySelector(`#validation-input`);

inputText.style.color = ("red");

 inputText.addEventListener("blur", () => {
   inputText.value.length < +inputText.dataset.length
   ?inputText.classList.add(`invalid`)
   :inputText.classList.add('valid');
});


// console.log(typeof +inputText.dataset.length);
// console.log(typeof inputText.value.length);