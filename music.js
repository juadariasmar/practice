// Definir una clase Persona para almacenar la información personal y gustos musicales
class Persona {
  constructor(nombre, identificacion, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.fechaNacimiento = fechaNacimiento;
    this.correo = correo;
    this.ciudadResidencia = ciudadResidencia;
    this.ciudadOrigen = ciudadOrigen;
    this.cancionesFavoritas = [];
  }

  agregarCancionFavorita(artista, titulo) {
    if (this.cancionesFavoritas.length < 3) {
      this.cancionesFavoritas.push({ artista, titulo });
      console.log("Canción favorita agregada exitosamente.");
    } else {
      console.log("Error: No se pueden agregar más de 3 canciones favoritas.");
    }
  }
}

// Crear un vector para almacenar las personas entrevistadas
let personas = [];

// Función para agregar una persona
function agregarPersona() {
  let nombre = prompt("Ingrese el nombre de la persona:");
  let identificacion = prompt("Ingrese el número de identificación (cédula):");
  let fechaNacimiento = prompt("Ingrese la fecha de nacimiento:");
  let correo = prompt("Ingrese el correo electrónico:");
  let ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
  let ciudadOrigen = prompt("Ingrese la ciudad de origen:");

  let persona = new Persona(nombre, identificacion, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);
  personas.push(persona);

  console.log("Persona agregada exitosamente.");
}

// Función para mostrar la información personal de una persona por su posición en el vector
function mostrarInformacionPersona() {
  let posicion = parseInt(prompt("Ingrese la posición de la persona en el vector (0 - " + (personas.length - 1) + "):"));

  if (posicion >= 0 && posicion < personas.length) {
    let persona = personas[posicion];
    console.log("Nombre: " + persona.nombre);
    console.log("Identificación: " + persona.identificacion);
    console.log("Fecha de nacimiento: " + persona.fechaNacimiento);
    console.log("Correo electrónico: " + persona.correo);
    console.log("Ciudad de residencia: " + persona.ciudadResidencia);
    console.log("Ciudad de origen: " + persona.ciudadOrigen);
    console.log("Canciones favoritas:");
    for (let i = 0; i < persona.cancionesFavoritas.length; i++) {
      console.log("Canción " + (i + 1) + ": " + persona.cancionesFavoritas[i].artista + " - " + persona.cancionesFavoritas[i].titulo);
    }
  } else {
    console.log("Error: Posición inválida.");
  }
}

// Menú principal
let opcion = "";
while (opcion !== "0") {
  console.log("==== Menú ====");
  console.log("1. Agregar una persona");
  console.log("2. Mostrar información personal de una persona");
  console.log("0. Salir");

  opcion = prompt("Ingrese la opción deseada:");

  switch (opcion) {
    case "1":
      agregarPersona();
      break;
    case "2":
      mostrarInformacionPersona();
      break;
    case "0":
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción inválida. Por favor, ingrese una opción válida.");
  }
}
