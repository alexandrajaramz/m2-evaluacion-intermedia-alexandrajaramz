'use strict';

const inputNumber = document.querySelector('.input');
const buttonTry = document.querySelector('.btn');
const messages = document.querySelector('.tracks__content');

/* 
En la parte principal, el jugador introduce un número y da al botón de "prueba". En la parte azul aparecen las
pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el
número de intentos realizados. Cuando consigue acertar, el juego termina. */

// generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

//3. al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
function userNumber () {
    console.log(inputNumber.value);
}

buttonTry.addEventListener('click', userNumber);

//4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
function comparingNumbers () {
    if (myRandomNumber === userNumber) {
        messages.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (userNumber > myRandomNumber) {
        messages.innerHTML = 'Demasiado alto';
    } else if (userNumber < myRandomNumber) {
        messages.innerHTML = 'Demasiado bajo';
    }
}


//5. actualizar el contador de intentos cada vez que el usuario pruebe 




