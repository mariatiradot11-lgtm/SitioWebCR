let indiceFotoActual = 0;
const todasLasFotos = document.querySelectorAll('.foto'); // Atrapa todas las fotos

function mostrarImagen(indice) {
    const cuadro = document.getElementById('pantalla-negra');
    const imagenGigante = document.getElementById('foto-ampliada');

    // Si nos pasamos del final, volvemos a la primera
    if (indice >= todasLasFotos.length) indice = 0;
    if (indice < 0) indice = todasLasFotos.length - 1;

    indiceFotoActual = indice;
    imagenGigante.src = todasLasFotos[indiceFotoActual].src;
    cuadro.style.display = 'flex';
}

function cambiarFoto(direccion) {
    mostrarImagen(indiceFotoActual + direccion);
}

function cerrarImagen() {
    document.getElementById('pantalla-negra').style.display = 'none';
}
