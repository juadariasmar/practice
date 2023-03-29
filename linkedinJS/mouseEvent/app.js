const button = document.querySelector('.button');

button.addEventListener('click', function() {
    console.log("el boton se ha pulsado");
})

button.addEventListener('mouseover', function() {
    console.log("el mouse esta sobre el boton");
})

button.addEventListener('mouseout', function() {
    console.log("el mouse esta fuera del boton");
})