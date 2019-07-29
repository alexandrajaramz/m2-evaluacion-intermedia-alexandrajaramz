'use strict';

const inputNumber = document.querySelector('.input');
const buttonTry = document.querySelector('.btn');
const messages = document.querySelector('.tracks__content');
const counter =  document.querySelector('.count__number');

// generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

//3. al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
/* function userNumber () {
    console.log(inputNumber.value);
} */
//4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
function comparingNumbers () {
    console.log(inputNumber.value);
    if (inputNumber.value < myRandomNumber) {
        const lowNumber = 'Demasiado bajo';
        console.log (lowNumber);
        messages.innerHTML = lowNumber;
    } else if (inputNumber.value > myRandomNumber) {
        const highNumber = 'Demasiado alto';
        console.log (highNumber);
        messages.innerHTML = highNumber;
    } else {
        const youWin = '¡HAS GANADO, CAMPEONA!';
        console.log (youWin);
        messages.innerHTML = youWin;
    }
}


buttonTry.addEventListener('click', comparingNumbers);

//5. actualizar el contador de intentos cada vez que el usuario pruebe 
function counterAdd () {
    let counter = 0;
    console.log(counter += 1);
}


buttonTry.addEventListener('click', counterAdd);