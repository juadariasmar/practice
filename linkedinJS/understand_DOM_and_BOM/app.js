'use strict'

//*******************************
//*** DOM

/*
let button = document.getElementById("button");

button.addEventListener('click', function() {
    console.log(window.location.href);
})
*/

//*************************************
//*** Dom properties and methods

/*
let button = document.getElementById("button");

let allP = document.getElementsByTagName("p");
let pForClass = document.getElementsByClassName("principal")[0].textContent;
let photo;

button.addEventListener('click', function() {
    console.log(allP);
    console.log(pForClass);

})
*/

//********************************
//*** BOM properties 

let button = document.getElementById('button');
let principal = document.getElementsByClassName('principal')[0];

console.log('innerHeigth: ',
    window.innerHeight);
console.log('innerWidth: ', window.innerWidth);

localStorage.setItem('contenido', 'codigo y cafe es una gran combinacion')


button.addEventListener('click', function() {
    let contenido = localStorage.getItem('contenido');
    principal.innerHTML = contenido;

    //metodos para moverse en el historial
    window.history.forward();
    window.history.back();
    window.history.go(3);
})