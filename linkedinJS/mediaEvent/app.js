'use strict'

const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function() {
    console.log('el video ha iniciado');
});

video.addEventListener('seeking', function() {
    console.log('se esta buscando en el video', this.currentTime);
});

video.addEventListener('ended', function() {
    console.log('el video ha terminado');
});