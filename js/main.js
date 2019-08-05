'use strict';

const inputNumber = document.querySelector('.input');
const buttonTry = document.querySelector('.btn');
const messages = document.querySelector('.tracks__content');
const counter =  document.querySelector('.count');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

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

let i = 0;
function counterAdd () {
 i += 1;
 counter.innerHTML = i;
}

buttonTry.addEventListener('click', counterAdd);