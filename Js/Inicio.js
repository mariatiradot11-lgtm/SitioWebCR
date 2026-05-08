let indice = 0;
const fotos = document.querySelectorAll('.foto');

function cambiar(direccion) {
    // Quitar la clase activa de la foto actual
    fotos[indice].classList.remove('activa');

    // Calcular el nuevo índice de forma circular
    indice = (indice + direccion + fotos.length) % fotos.length;

    // Poner la clase activa a la nueva foto
    fotos[indice].classList.add('activa');
}
/*Testimonios*/

const vids = document.querySelectorAll('.vid');
const btnAtras = document.getElementById('atras');
const btnSig = document.getElementById('sig');
let i = 0;

function mover(n) {

  const videoActual = vids[i].querySelector('video');
  if (videoActual) {
    videoActual.pause();
  }


  vids[i].classList.remove('activo');

  i = (n + vids.length) % vids.length;

  vids[i].classList.add('activo');
}
btnSig.onclick = () => mover(i + 1);
btnAtras.onclick = () => mover(i - 1);


/*Exalumnos*/
const modal = document.getElementById('ventana');
const video = document.getElementById('reproductor');

function abrir(ruta) {
    video.src = ruta;
    modal.style.display = 'flex';
    video.play();
}

function cerrar() {
    modal.style.display = 'none';
    video.pause();
    video.src = "";
}

// Cerrar si hacen clic fuera del video
window.onclick = function(event) {
    if (event.target == modal) {
        cerrar();
    }
}