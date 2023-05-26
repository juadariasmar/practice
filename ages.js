// Crear el vector para almacenar las edades
let edades = [];

// Solicitar las edades y almacenarlas en el vector
for (let i = 1; i <= 10; i++) {
  let edad = parseInt(prompt("Ingrese la edad de la persona " + i + ":"));

  while (!validarEdad(edad)) {
    edad = parseInt(prompt("Edad inválida. Ingrese nuevamente la edad de la persona " + i + ":"));
  }

  edades.push(edad);
}

// Función para validar que la edad esté en el rango válido
function validarEdad(edad) {
  if (edad >= 1 && edad <= 120) {
    return true;
  } else {
    return false;
  }
}

// Función para obtener la cantidad de personas menores de edad
function obtenerCantidadMenoresEdad(edades) {
  let cantidad = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
      cantidad++;
    }
  }
  return cantidad;
}

// Función para obtener la cantidad de personas mayores de edad
function obtenerCantidadMayoresEdad(edades) {
  let cantidad = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18 && edades[i] < 60) {
      cantidad++;
    }
  }
  return cantidad;
}

// Función para obtener la cantidad de adultos mayores
function obtenerCantidadAdultosMayores(edades) {
  let cantidad = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 60) {
      cantidad++;
    }
  }
  return cantidad;
}

// Función para obtener la edad más baja
function obtenerEdadMasBaja(edades) {
  let edadMasBaja = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edadMasBaja) {
      edadMasBaja = edades[i];
    }
  }
  return edadMasBaja;
}

// Función para obtener la edad más alta
function obtenerEdadMasAlta(edades) {
  let edadMasAlta = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMasAlta) {
      edadMasAlta = edades[i];
    }
  }
  return edadMasAlta;
}

// Función para obtener el promedio de edades
function obtenerPromedioEdades(edades) {
  let sumaEdades = 0;
  for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
  }
  let promedio = sumaEdades / edades.length;
  return promedio.toFixed(2); // Redondeamos el promedio a 2 decimales
}


// Obtener los resultados
var cantidadMenoresEdad = obtenerCantidadMenoresEdad(edades);
var cantidadMayoresEdad = obtenerCantidadMayoresEdad(edades);
var cantidadAdultosMayores = obtenerCantidadAdultosMayores(edades);
var edadMasBaja = obtenerEdadMasBaja(edades);
var edadMasAlta = obtenerEdadMasAlta(edades);
var promedioEdades = obtenerPromedioEdades(edades);

// Mostrar los resultados
console.log("Cantidad de personas menores de edad: " + cantidadMenoresEdad);
console.log("Cantidad de personas mayores de edad: " + cantidadMayoresEdad);
console.log("Cantidad de adultos mayores: " + cantidadAdultosMayores);
console.log("Edad más baja: " + edadMasBaja);
console.log("Edad más alta: " + edadMasAlta);
console.log("Promedio de edades: " + promedioEdades);
