'use strict'

//*************************
//*** Creating Text String

//let country = 'Mexico';

//let food = new String('Ceviche');

//console.log("The text string have: " + country.length + " letters");

//console.log("The text string have: " + food.length + " letters");

//*************************
//*** Search Methods | Part 1


//let message = "I am Learning Javascript and i am learning a lot";

let result;

// indexOf //**busca desde el inicio de la cadena la coincidencia, retornando la posicion de esta*/
//result = message.indexOf("learning");

// lasIndexOf //**busca desde el final de la cadena la coincidencia, retornando la posicion de esta */
//result = message.lastIndexOf("learning");
//result = message.lastIndexOf("l");

// search //**busca y devuelve la posicion de la primer coincidencia, muy silimar a indexOf */
//result = message.search("learning");

// search | Regular Expression //**busca coincidencias de la combinacion en expresion regular, agregando que ignore el uso de mayusculas o minusculas */
//result = message.search(/ja/i);

//console.log(result);


//**********************
//*** Search Methods | Part 2

// match: //** uso el metodo match con la expresion regular para buscar la palabra learning, junto con los operadores g e i; g para acceder de manera global y encontrar todas las coincidencias y el operador i para pasarle de que ignore el uso de mayusculas o minusculas */
//result = message.match(/learning/gi);

// substr: //** el metodo substr recibe como parametros la posicion del intervalo donde va a buscar, el segundo parametro indica el numero de espacios que tomara el intervalo; devolviendo entonces los caracteres que componen dicho intervalo */
//result = message.substr(5, 8);

// substring: //** el metodo substring recibe como parametros la posicion del intervalo donde va a buscar, el segundo parametro indica la posicion hasta donde llegara el intervalo; devolviendo entonces los caracteres que componen dicho intervalo */
//result = message.substring(5, 13);

// charAt: //** devuelve el caracter en la posicion que se pasa como parametro */
//result = message.charAt(5);

//console.log(result);

//*****************************
//*** Search for specific text strings

//let message = "   I am learning Javascript   ";

// startWith //** devuelve un booleano si la cadena comienza con el valor que se le pasa al metodo como parametro */
//result = message.startsWith("I");

//** creamos la variable inText y le asignamos la posicion resultado de la busqueda de la palabra Javascript con el metodo indexOf; luego, le asignamos a la variable result, la validacion con el metodo startsWith de la combinacion "Ja" como primer parametro, le pasamos como segundo parametro la variable inText que contiene la posicion inicial de la palabra Javascript, indicando asi, el inicio de la busqueda a partir de la palabra misma. */
//let inText = message.indexOf("Javascript");
//result = message.startsWith("Ja", inText);



// endsWith //** valida si la cadena finaliza en el valor pasado como parametro al metodo y devuelve un booleano dependiendo de su resultado */
//result = message.endsWith("Javascript");

// result = message;

// includes //** validacion con el metodo .includes si la cadena incluye un valor en especifico, en este caso, la palabra "Javascript" */
//result = message.includes("Javascript");

// result = message;

//console.log(result);

//***************************************
//*** Generation, replacement and separation methods


// repeat //** repeticion de la cadena n cantidad de veces */
//result = message.repeat(2);

// replace //** este metodo recibe dos parametros, el primero es la palabra a reemplazar y el segundo parametro es el valor por el que se va a cambiar. La cadena generada es totalmente nueva, dejando la primer cadena intacta */
//result = message.replace("Javascript", "to program");

// slice //** metodo que recibe dos parametros: el primer parametro es el indice de inicio y el segundo parametro es el indice final; dando como resultado el retorno de el trozo especificado */
//result = message.slice(5);
//result = message.slice(5, message.length);

// split //** el metodo .split lo que hace es dividir una cadena en un array de cadenas usando el separador especificado. */
//result = message.split(" ");

// trim //** elimina los espacios en blanco al inicio y final de una cadena, devolviendo entonces, solo el texto. */
//result = message.trim();

//console.log(result);

//*****************************
//*** Text transformation methods

//let message2 = " and programming";
//let total = 123456;

//result = total.toString();
//result = message.toLowerCase();
//result = message.toLocaleUpperCase();

//result = message.concat(message2);

//console.log(result);


//***********************************
//*** Templates and literals

//let language = 'JavaScript';

//let language2 = 'HTML';

//let message = `Me gusta ${language} y su integracion con ${language2}`;

//console.log(message);

//------ Mensaje multilinea
//let multilineMessage = `
/*Hola mundo, estoy aprendiendo 
    ${language} y me gusta 
    como se integra con 
    ${language2}
`;*/

//console.log(multilineMessage);