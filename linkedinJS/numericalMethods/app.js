'use strict'

let num = "10.30"

console.log("Number: ", typeof num, typeof Number(num));

console.log("parseInt: ", parseInt(num));

console.log("parseFloat: ", parseFloat(num));

console.log("isNaN: ", isNaN(num));

console.log("isInteger: ", Number.isInteger(num));


//*************
//** Numeric properties of instances

let num2 = 2.5;

console.log("toExponential: ", num2.toExponential(4));

console.log("toFixed: ", num2.toFixed(2));

console.log("toPrecision: ", num2.toPrecision(6));

console.log("toString: ", typeof num2.toString());