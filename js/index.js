function animateTextWithCorrection(text, elementId) {
    var currentCharIndex = 0;
    var writer = "";
    var speed = 50; // Puedes ajustar la velocidad según tus preferencias

    function writeText() {
        if (currentCharIndex < text.length) {
            writer += text.charAt(currentCharIndex);
            document.getElementById(elementId).innerHTML = writer;

            currentCharIndex++;

            setTimeout(writeText, speed); // Espera antes de escribir el siguiente carácter
        } else {
            setTimeout(eraseAndCorrect, speed * 2); // Espera antes de borrar y corregir el texto
        }
    }

    function eraseAndCorrect() {
        if (currentCharIndex > 0) {
            currentCharIndex--;
            writer = writer.substring(0, currentCharIndex);
            document.getElementById(elementId).innerHTML = writer;

            setTimeout(writeFullText, speed * 1); // Espera antes de mostrar todo el texto corregido
        }
    }

    writeText(); // Comienza la animación escribiendo letra por letra
}

// Animación para el texto
var text = "Desarrollador Frontend Diseñando Experiencias Visuales..";
animateTextWithCorrection(text, "text");

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelector(".skills");
    skills.classList.add("show");
});


// validación de formulario
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Limpiar mensajes de error
    document.getElementById("errorNombre").innerText = "";
    document.getElementById("errorEmail").innerText = "";
    document.getElementById("errorMensaje").innerText = "";

    // Validar nombre
    if (nombre.trim() === "") {
      document.getElementById("errorNombre").innerText = "Por favor, ingresa tu nombre.";
      return false;
    }

    // Validar email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("errorEmail").innerText = "Por favor, ingresa un correo electrónico válido.";
      return false;
    }

    // Validar mensaje
    if (mensaje.trim() === "") {
      document.getElementById("errorMensaje").innerText = "Por favor, ingresa tu mensaje.";
      return false;
    }

    //  agregar aquí la lógica para enviar el formulario.
    return true;
  }