'use strict'

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function() {
    let email = prompt("Escribe tu correo para ver mas videos", "data@info.com");
    if (email == null email == "") {
        console.log("sin datos");
    } else {
        console.log(email);
    }
})