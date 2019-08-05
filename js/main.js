'use strict';

const input = document.querySelector('.input');
const buttonTry = document.querySelector('.btn');
const messages = document.querySelector('.explain');
const counter =  document.querySelector('.count');
const reset = document.querySelector('.reset');
let myRandomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(myRandomNumber);

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

function resetInfo (event) {
    input.value = '';
    i = 0;
    messages.innerHTML = 'Escribe un número y dale a Prueba';
    myRandomNumber = getRandomNumber(100);   
    console.log(myRandomNumber);
}

buttonTry.addEventListener('click', gameStart);
input.addEventListener('keyup', fakeClick);
reset.addEventListener('click', resetInfo);