// Función para calcular el perímetro de un triángulo
function calcularPerimetroTriangulo(a, b, c) {
  return a + b + c;
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo(b, h) {
  return (b * h) / 2;
}

// Función para calcular el perímetro de un rectángulo
function calcularPerimetroRectangulo(base, altura) {
  return 2 * (base + altura);
}

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// Función para calcular el perímetro de un cuadrado
function calcularPerimetroCuadrado(lado) {
  return 4 * lado;
}

// Función para calcular el área de un cuadrado
function calcularAreaCuadrado(lado) {
  return lado * lado;
}

// Función para calcular el perímetro de una circunferencia
function calcularPerimetroCircunferencia(radio) {
  return 2 * Math.PI * radio;
}

// Función para calcular el área de una circunferencia
function calcularAreaCircunferencia(radio) {
  return Math.PI * radio * radio;
}

// Ejemplo de uso del programa
let figura = prompt("Ingresa la figura para calcular su perímetro y área: (triangulo, rectangulo, cuadrado, circunferencia)");

if (figura === "triangulo") {
  let a = parseFloat(prompt("Ingresa la longitud del lado a:"));
  let b = parseFloat(prompt("Ingresa la longitud del lado b:"));
  let c = parseFloat(prompt("Ingresa la longitud del lado c:"));
  let h = parseFloat(prompt("Ingresa la longitud de la altura h:"));


  let perimetroTriangulo = calcularPerimetroTriangulo(a, b, c);
  let areaTriangulo = calcularAreaTriangulo(b, h);

  console.log("El perímetro del triángulo es: " + perimetroTriangulo);
  console.log("El área del triángulo es: " + areaTriangulo);
} else if (figura === "rectangulo") {
  let base = parseFloat(prompt("Ingresa la longitud de la base:"));
  let altura = parseFloat(prompt("Ingresa la altura:"));

  let perimetroRectangulo = calcularPerimetroRectangulo(base, altura);
  let areaRectangulo = calcularAreaRectangulo(base, altura);

  console.log("El perímetro del rectángulo es: " + perimetroRectangulo);
  console.log("El área del rectángulo es: " + areaRectangulo);
} else if (figura === "cuadrado") {
  let lado = parseFloat(prompt("Ingresa la longitud del lado:"));

  let perimetroCuadrado = calcularPerimetroCuadrado(lado);
  let areaCuadrado = calcularAreaCuadrado(lado);

  console.log("El perímetro del cuadrado es: " + perimetroCuadrado);
  console.log("El área del cuadrado es: " + areaCuadrado);
} else if (figura === "circunferencia") {
  let radio = parseFloat(prompt("Ingresa la longitud del radio:"));

  let perimetroCircunferencia = calcularPerimetroCircunferencia(radio);
  let areaCircunferencia = calcularAreaCircunferencia(radio);

  console.log("El perímetro de la circunferencia es: " + perimetroCircunferencia);
  console.log("El área de la circunferencia es: " + areaCircunferencia);
} else {
  console.log("Figura inválida. Por favor, ingresa una figura válida.");
}
