'use strict'

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function() {
    let result = confirm("Deseas ver el video nuevamente?");

    if (result) {
        video.play();
    } else {
        window.location = "https://www.google.com";
    }
})