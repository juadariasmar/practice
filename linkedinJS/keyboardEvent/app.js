'use strict'

window.addEventListener('keydown', function(event) {
    console.log("pulsando tecla");
    console.log(String.fromCharCode(event.keyCode));
    /* uso de evento para saber que tecla se oprime, retornando su codigo; se traduce ese codigo con el uso de un metodo especifico del metodo String: String.fromCharCode() */
})

window.addEventListener('keypress', function(event) {
    console.log("tecla pulsada");
})

window.addEventListener('keyup', function(event) {
    console.log("tecla liberada");
})