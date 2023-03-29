'use strict'

//********************************
//*** Arrays

//let cymbals = ["ceviche", "tacos", "pasta", "toasts"];

//let drinks = new Array("Jamaica", "Chicha morada", "Pozol");

//console.log(`Hay ${cymbals.length} platillos en el menu`);

//let cymbal = cymbals[1]

//console.log(`el platillo seleccionado es ${cymbal}`)


//**********************************
//*** Multidimensional array

//let countries = ["Peru", "Mexico", "Italia"];

//let menu = [cymbals, countries];

//console.log(menu[0][1]);

//*****************************
//*** basic array operation 
/*
console.log(`antes: ${countries}`);

countries.push("Colombia");

console.log(`despues del push: ${countries}`);

console.log(countries);

countries.pop();

console.log(`despues del pop: ${countries}`);

console.log(countries);

let message = countries.join();

console.log(message);
*/


//************************************
//*** Methods for generating arrays

//let message = "ceviche, tacos, pasta";

//let cymbals = message.split(', ');

//****************************
//*** Array.from();

//let cymbalsHTML = Array.from(document.querySelectorAll('.cymbals p'));

//let cymbals = cymbalsHTML.map(cymbal => cymbal.textContent)


//******************
//***Array.of()

//let cymbals = Array.of("ceviche", "tacos", "pasta");

//console.log(cymbals);


//**************************
//*** Sorting an array

/*
let cymbals = ["ceviche", "tacos", "pasta"];

console.log(`antes: ${cymbals}`);

cymbals.sort();

console.log(`despues: ${cymbals}`);

cymbals.reverse();


console.log(`despues: ${cymbals}`);
*/


//*********************************
//*** Array destructuring


//let cymbals = ["ceviche", "tacos", "pasta"];

/*
let cymbals1 = cymbals[0];
let cymbals2 = cymbals[1];
let cymbals3 = cymbals[2];
*/

//let cymbals1, cymbals2, cymbals3 = null;

//let [cymbals1, cymbals2, cymbals3] = cymbals;

//console.log(cymbals1, cymbals2, cymbals3);

//*********************************
//**** for ... in array

/*
let sounds = ["high", "medium", "low"];

for (let sound in sounds) {
    console.log(sounds[sound]);
}
*/

//*********************************
//**** forEach array

/*
let sounds = ["high", "medium", "low"];

//sounds.forEach(sound => console.log(sound));

sounds.forEach((sound, index) => console.log(index, sound));
*/

//*********************************
//**** Search in array with .find()

/*
let pets = ["cat", "dog", "hamster"];

//let pChosen = pets.find(pet => pet === "dog");

let available = [
    { name: 'clover', price: 20, country: 'peru' },
    { name: 'rover', price: 10, country: 'mexico' },
    { name: 'tomy', price: 50, country: 'colombia' }
]

let pChosen = available.find(pet => pet.name == "clover");

console.log(pChosen);
*/

//***********************************
//*** element index lookup


//let pets = ["cat", "dog", "hamster"];
/*
let available = [{
        name: 'clover',
        price: 20,
        country: 'peru'
    },
   {
        name: 'rover',
        price: 10,
        country: 'mexico'
    },
{
     name: 'tomy',
        price: 50,
        country: 'colombia'
}
]

let numPet = available.findIndex(pet => pet.country == 'peru');

console.log(`Pet number: ${numPet}`);
*/


//************************************
//*** Filter array with js

/*
let pets = [{
        name: 'clover',
        price: 20,
        country: 'peru'
    },
    {
        name: 'rover',
        price: 10,
        country: 'mexico'
    },
    {
        name: 'tomy',
        price: 50,
        country: 'colombia'
    },
    {
        name: 'tomy',
        price: 45,
        country: 'colombia'
    }
]

let result = null;

result = pets.filter(pet => pet.name == "tomy");

console.log(result);
*/

//************************************
//***   Array validation

let result = null;

let pets = [{
        name: 'clover',
        price: 20,
        country: 'peru'
    },
    {
        name: 'rover',
        price: 10,
        country: 'mexico'
    },
    {
        name: 'tomy',
        price: 50,
        country: 'colombia'
    },
    {
        name: 'tomy',
        price: 45,
        country: 'colombia'
    }
]

//result = pets.some(pet => pet.price < 20);

result = pets.every(pet => pet.price > 20);

console.log(result);