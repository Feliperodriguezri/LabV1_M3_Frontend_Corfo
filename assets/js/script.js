//Pregunta 1
function mostrarAlerta(event) {
    // Prevenir el envío del formulario
    event.preventDefault();
    
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Mostrar los datos en la consola
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);

    // Mostrar los datos en una alerta
    alert(`Nombre: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`);

    return false; // Retornar false para evitar el envío del formulario
}

function mostrarMensaje() {
    console.log("¡Has hecho clic en el botón Enviar!");
    alert("¡Has hecho clic en el botón Enviar!");
}

//Pregunta 2

// Solicitar información al usuario
const nombre = prompt("Por favor, ingresa tu nombre:");
const email = prompt("Por favor, ingresa tu email:");
const telefono = prompt("Por favor, ingresa tu teléfono:");

// Validar el email
if (email && email.includes("@") && email.includes(".")) {
    // Mostrar los datos en la consola
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Teléfono:", telefono);

    // Mostrar los datos en una alerta
    alert(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}`);
} else {
    // Mensaje de error si el email es inválido
    alert("El email ingresado no es válido. Asegúrate de que contenga un '@' y un '.'");
}

//Pregunta 3


