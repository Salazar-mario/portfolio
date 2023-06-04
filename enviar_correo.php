<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configurar los detalles del correo electrónico
    $destinatario = 'mario.agustin.salazar@gmail.com'; // Cambia esto por tu dirección de correo electrónico
    $asunto = 'Nuevo mensaje de contacto';
    $contenido = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

    // Enviar el correo electrónico
    $enviado = mail($destinatario, $asunto, $contenido);

    if ($enviado) {
        echo 'Correo enviado exitosamente';
    } else {
        echo 'Error al enviar el correo';
    }
} else {
    echo 'Acceso no válido';
}
?>
