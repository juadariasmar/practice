'use strict'

//*** TIMERS
//********

//setInterval
//setTimeout

//funcion timer en la que se invoca la funcion setColor() para cambiar el color de fondo cada determinado tiempo; en este caso, cada 2000ms

//let timer = setInterval(function() {
//        setColor();
//    },
//    2000);

//funcion timer en la que se invoca la funcion setColor() para cambiar el color de fondo despues de transcurridos 3000ms; a diferencia del anterior, este solo sucede una vez luego del tiempo establecido.
let timer = setTimeout(function() {
        setColor();
    },
    3000);


//funcion para cambiar el color de fondo del body con el uso de su respectivo selector y de una validacion con una ternaria 
function setColor() {
    let pag = document.body; //le paso a la variable pag la seleccion de todo el body
    pag.style.backgroundColor = pag.style.backgroundColor == "blue" ? "green" : "blue"; //aqui lo que hago es validar que, si pag.style.backgroundColor es igual a blue, cambiar a green; sino, poner azul.
}

//funcion para detener a la funcion timer.
function stopChangeColor() {
    clearInterval(timer);
}