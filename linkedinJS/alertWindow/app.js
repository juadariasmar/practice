'use strict'

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function() {
    alert("El video ha terminado");
})