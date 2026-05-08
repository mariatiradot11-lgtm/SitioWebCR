const track = document.getElementById('track');
const images = document.querySelectorAll('.carousel-track img');
let index = 0;

function move() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Cambia la imagen cada 1.5 segundos
setInterval(move, 1500);