//Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
//Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
//Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.


const inputText = document.querySelector(`#validation-input`);

textInput.addEventListener("blur", () => {
    inputText.value.length < inputText.dataset.length?inputText.style.border = "rgba(255,255,255,0.5)":inputText.style.border = " #f44336"
});


// const inputEl = document.getElementById('validation-input');

// inputEl.addEventListener('blur', () => {
//   inputEl.value.length < +inputEl.dataset.length
//     ? (inputEl.className = 'valid')
//     : (inputEl.className = 'invalid');
// });
