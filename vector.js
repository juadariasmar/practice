// Función para leer un vector de números enteros ordenados ascendentemente
function leerVector() {
  let vector = [];
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Ingrese el número en la posición " + (i + 1) + ":"));

    if (i > 0 && numero <= vector[i - 1]) {
      console.log("Error: El número debe ser mayor al número anterior.");
      i--; // Repetir la iteración para ingresar el número nuevamente
    } else {
      vector.push(numero);
    }
  }
  return vector;
}

// Leer los dos vectores
console.log("Ingrese el primer vector:");
let vector1 = leerVector();

console.log("Ingrese el segundo vector:");
let vector2 = leerVector();

// Función para validar que el vector esté ordenado ascendentemente
function validarOrden(vector) {
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] < vector[i - 1]) {
      return false;
    }
  }
  return true;
}

// Validar que los vectores estén ordenados ascendentemente
if (!validarOrden(vector1) || !validarOrden(vector2)) {
  console.log("Error: Los vectores deben estar ordenados ascendentemente.");
} else {
  // Mezclar y ordenar los dos vectores
  let resultado = mezclarVectores(vector1, vector2);

  // Mostrar el resultado
  console.log("Resultado de la mezcla de los vectores:");
  console.log(resultado);
}

// Función para realizar la mezcla ordenada de dos vectores
function mezclarVectores(vector1, vector2) {
  let mezcla = [];
  let i = 0;
  let j = 0;

  while (i < vector1.length && j < vector2.length) {
    if (vector1[i] < vector2[j]) {
      mezcla.push(vector1[i]);
      i++;
    } else if (vector1[i] > vector2[j]) {
      mezcla.push(vector2[j]);
      j++;
    } else {
      mezcla.push(vector1[i]);
      mezcla.push(vector2[j]);
      i++;
      j++;
    }
  }

  while (i < vector1.length) {
    mezcla.push(vector1[i]);
    i++;
  }

  while (j < vector2.length) {
    mezcla.push(vector2[j]);
    j++;
  }

  return mezcla;
}




