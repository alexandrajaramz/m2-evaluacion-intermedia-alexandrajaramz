'use strict';

const input = document.querySelector('.input');
const buttonTry = document.querySelector('.btn');
const messages = document.querySelector('.tracks__content');
const counter =  document.querySelector('.count');
const myRandomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function gameStart () {
    comparingNumbers();
    counterAdd();
}

function comparingNumbers () {
    const inputValue = parseInt(input.value);
    if (inputValue === myRandomNumber) {
        const youWin = '¡HAS GANADO, CAMPEONA!';
        messages.innerHTML = youWin;
    } else if (inputValue > myRandomNumber) {
        const highNumber = 'Demasiado alto';
        messages.innerHTML = highNumber;
    } else {
        const lowNumber = 'Demasiado bajo';
        messages.innerHTML = lowNumber;
    }
}

let i = 0;

function counterAdd () {
 i += 1;
 counter.innerHTML = i;
}

buttonTry.addEventListener('click', gameStart);