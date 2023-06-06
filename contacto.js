$(document).ready(function () {
    $("#formulario-contacto").submit(function (e) {
        e.preventDefault(); // Evita que el formulario se envíe normalmente

        // Obtener los valores del formulario
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();

        // Crear un objeto con los datos del formulario
        var formData = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };

        // Enviar la solicitud AJAX al servidor
        $.ajax({
            url: "enviar_correo.php",
            type: "POST",
            data: formData,
            success: function (response) {
                // Manejar la respuesta del servidor
                // Puedes mostrar un mensaje de éxito o redirigir a una página de confirmación
                console.log("Correo enviado exitosamente");
            },
            error: function (xhr, status, error) {
                // Manejar cualquier error que ocurra durante la solicitud AJAX
                console.error(error);
            }
        });
    });
});

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
