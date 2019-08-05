'use strict';

const input = document.querySelector('.input');
const buttonTry = document.querySelector('.btn');
const messages = document.querySelector('.explain');
const counter =  document.querySelector('.count');
const myRandomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function comparingNumbers () {
    const stringValue = input.value;
    const inputValue = parseInt(input.value);
    if (inputValue === myRandomNumber) {
        const youWin = '¡HAS GANADO, CAMPEONA!';
        messages.innerHTML = youWin;
    } else if (stringValue === '') {
        messages.innerHTML = 'Si no escribes, mal vamos.';
    } else if (inputValue < 0) {
        messages.innerHTML = 'Te has quedao cortico.'
    } else if (inputValue > 100) {
        messages.innerHTML = 'Te has pasao tres pueblos.'
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

function gameStart () {
    comparingNumbers();
    counterAdd();
}

function fakeClick (event) {
    if (event.keyCode === 13) {
        gameStart();
    }
}

buttonTry.addEventListener('click', gameStart);
input.addEventListener('keyup', fakeClick);