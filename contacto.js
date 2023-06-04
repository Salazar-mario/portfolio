$(document).ready(function() {
    $("#formulario-contacto").submit(function(e) {
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
            success: function(response) {
                // Manejar la respuesta del servidor
                // Puedes mostrar un mensaje de éxito o redirigir a una página de confirmación
                console.log("Correo enviado exitosamente");
            },
            error: function(xhr, status, error) {
                // Manejar cualquier error que ocurra durante la solicitud AJAX
                console.error(error);
            }
        });
    });
});
