'use strict'

//****************************
//*** Error handling

let valor1 = 10,
    valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`mensaje de validacion: ${valor1} es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} no es mayor que ${valor2} :(`)
    }
} catch (error) {
    console.log(error);
}