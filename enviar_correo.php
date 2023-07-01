if ($_SERVER["REQUEST_METHOD"] == "POST") {
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$to = "mario.agustin.salazar@gmail.com";
$subject = "Nuevo mensaje de contacto";
$message = "Nombre: " . $nombre . "\n\nCorreo electrónico: " . $email . "\n\nMensaje: " . $mensaje;
$headers = "From: " . $email;
if (mail($to, $subject, $message, $headers)) {
echo "Mensaje enviado con éxito.";
} else {
echo "Error al enviar el mensaje.";
}
}
?>