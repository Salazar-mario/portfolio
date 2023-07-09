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

$(document).ready(function () {
    // Obtén la posición de cada sección
    var inicioOffset = $('#inicio').offset().top;
    var sobreMiOffset = $('#sobre-mi').offset().top;
    var educacionOffset = $('#educacion').offset().top;
    var proyectosOffset = $('#proyectos').offset().top;
    var contactoOffset = $('#contacto').offset().top;

    // Agrega un evento de desplazamiento suave al hacer clic en los enlaces del navbar
    $('.navbar-nav a').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var offset = 0; // Ajusta este valor según tus necesidades


        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 100, function () {
            setTimeout(function () {
                $('.navbar-nav a').removeClass('active');
                $(event.target).addClass('active');
            }, 0);
        });
    });

    // Resalta el enlace activo según la posición de desplazamiento
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        $('.navbar-nav a').removeClass('active');

        if (scrollPos >= inicioOffset && scrollPos < sobreMiOffset) {
            $('.navbar-nav a[href="#inicio"]').addClass('active');
        } else if (scrollPos >= sobreMiOffset && scrollPos < educacionOffset) {
            $('.navbar-nav a[href="#sobre-mi"]').addClass('active');
        } else if (scrollPos >= educacionOffset && scrollPos < proyectosOffset) {
            $('.navbar-nav a[href="#educacion"]').addClass('active');
        } else if (scrollPos >= proyectosOffset && scrollPos < contactoOffset) {
            $('.navbar-nav a[href="#proyectos"]').addClass('active');
        } else if (scrollPos >= contactoOffset) {
            $('.navbar-nav a[href="#contacto"]').addClass('active');
        }
    });
});
