// Obtener el elemento del título
var tituloMaquina = document.getElementById('titulo-maquina');

// Obtener el texto del título
var textoTitulo = tituloMaquina.innerText;

// Limpiar el texto del título
tituloMaquina.innerText = '';

// Variable para almacenar la posición actual del texto
var posicion = 0;

// Función para simular el efecto de escritura
function escribirTexto() {
    // Obtener un fragmento del texto actual
    var fragmento = textoTitulo.slice(0, posicion);

    // Establecer el fragmento como contenido del título
    tituloMaquina.innerText = fragmento;

    // Incrementar la posición
    posicion++;

    // Comprobar si se ha llegado al final del texto
    if (posicion <= textoTitulo.length) {
        // Esperar un tiempo antes de escribir el siguiente carácter
        setTimeout(escribirTexto, 90);
    }
}

// Llamar a la función para iniciar el efecto de escritura
escribirTexto();

$(document).ready(function () {
    $('nav').hover(function () {
        $(this).toggleClass('hovered');
    });
});

window.addEventListener('scroll', function () {
    var btnArrow = document.getElementById('btn-arrow');
    if (window.pageYOffset > 300) { // Mostrar el botón cuando el desplazamiento sea mayor a 300px
        btnArrow.style.display = 'block';
    } else {
        btnArrow.style.display = 'none';
    }
});
// Obtén el elemento del botón de hamburguesa y de la navegación colapsable
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Agrega un evento de clic al botón de hamburguesa para alternar la visibilidad de la navegación
navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});
