
const galerias = [
    ["../Imagenes/PE1.jpeg", "../Imagenes/PE2.jpeg", "../Imagenes/PE3.jpeg", "../Imagenes/PE4.jpeg", "../Imagenes/PE5.jpeg", "../Imagenes/PE6.jpeg"], // Proyectos
    ["../Imagenes/PRE1.jpeg", "../Imagenes/PRE2.jpeg", "../Imagenes/PRE3.jpeg", "../Imagenes/PRE4.jpeg", "../Imagenes/PRE5.jpeg", "../Imagenes/PRE6.jpeg"], // Preescolar
    ["../Imagenes/PRI1.jpeg", "../Imagenes/PRI2.jpeg", "../Imagenes/PRI3.jpeg", "../Imagenes/PRI4.jpeg", "../Imagenes/PRI5.jpeg", "../Imagenes/PRI6.jpeg"],  // Primaria
    ["../Imagenes/EA1.jpeg", "../Imagenes/EA2.jpeg", "../Imagenes/EA3.jpeg", "../Imagenes/EA4.jpeg", "../Imagenes/EA5.jpeg", "../Imagenes/EA6.jpeg"],  // Excursiones Académicas
    ["../Imagenes/AD1.jpeg", "../Imagenes/AD2.jpeg", "../Imagenes/AD3.jpeg", "../Imagenes/AD4.jpeg", "../Imagenes/AD5.jpeg", "../Imagenes/AD6.jpeg"],  // Actividades Deportivas
    ["../Imagenes/AC1.jpeg", "../Imagenes/AC2.jpeg", "../Imagenes/AC3.jpeg", "../Imagenes/AC4.jpeg", "../Imagenes/AC5.jpeg", "../Imagenes/AC6.jpeg"],  // Arte y Cultura
    ["../Imagenes/EC1.jpeg", "../Imagenes/EC2.jpeg", "../Imagenes/EC3.jpeg", "../Imagenes/EC4.jpeg", "../Imagenes/EC5.jpeg", "../Imagenes/EC6.jpeg"],  // Encuentros con Cristo
    ["../Imagenes/HB1.jpeg", "../Imagenes/HB2.jpeg", "../Imagenes/HB3.jpeg", "../Imagenes/HB4.jpeg", "../Imagenes/HB5.jpeg", "../Imagenes/HB6.jpeg"],  // Honores a la Bandera
    ["../Imagenes/E1.jpeg", "../Imagenes/E2.jpeg", "../Imagenes/E3.jpeg", "../Imagenes/E4.jpeg", "../Imagenes/E5.jpeg", "../Imagenes/E.jpeg"]  // Eucaristía

];

let galeriaActual = 0;
let imagenIndex = 0;

const modal = document.getElementById("miModal");
const imgModal = document.getElementById("imagenModal");

function abrirModal(indiceGaleria) {
    galeriaActual = indiceGaleria;
    imagenIndex = 0; 
    modal.style.display = "block";
    actualizarImagen();
}

function cerrarModal() {
    modal.style.display = "none";
}

function cambiarImagen(paso) {
    imagenIndex += paso;
    
    if (imagenIndex >= galerias[galeriaActual].length) imagenIndex = 0;
    if (imagenIndex < 0) imagenIndex = galerias[galeriaActual].length - 1;
    
    actualizarImagen();
}

function actualizarImagen() {
    imgModal.src = galerias[galeriaActual][imagenIndex];
}

window.onclick = function(event) {
    if (event.target == modal) cerrarModal();
}