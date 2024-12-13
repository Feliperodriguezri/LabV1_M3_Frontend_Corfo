//Pregunta 1 (taller 2)
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

//Pregunta 2 y pregunta 4 (taller 2)

// Solicitar información al usuario
const nombre = prompt("Por favor, ingresa tu nombre:");
const email = prompt("Por favor, ingresa tu email:");
const telefono = prompt("Por favor, ingresa tu teléfono:");

try {
    // Validar el email
    if (!email || !email.includes("@") || !email.includes(".")) {
        throw new Error("El email ingresado no es válido. Asegúrate de que contenga un '@' y un '.'");
    }

    // Validar el teléfono (solo números, longitud mínima de 8 dígitos)
    if (!telefono || isNaN(telefono) || telefono.length <= 8) {
        throw new Error("El teléfono ingresado no es válido. Debe contener solo números y tener al menos 8 dígitos.");
    }

    // Mostrar los datos en la consola
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Teléfono:", telefono);

    // Mostrar los datos en una alerta
    alert(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}`);
} catch (error) {
    // Manejar errores y mostrar mensajes al usuario
    console.error("Error:", error.message);
    alert(`Error: ${error.message}`);
} finally {
    console.log("Validación completada.");
}

//Pregunta 3 (taller 2)

document.addEventListener("DOMContentLoaded", function () {
    // Datos estáticos de los médicos
    const medicos = [
        {
            nombre: "Dr. Roberto González",
            especialidad: "Cardiología",
            experiencia: 6,
            imagen: "./assets/img/img_doctor1.jpg",
            descripcion: "El Dr. González es cardiólogo con especialización en enfermedades del corazón y sistema circulatorio."
        },
        {
            nombre: "Dra. Laura Fernández",
            especialidad: "Medicina Interna",
            experiencia: 15,
            imagen: "./assets/img/img_doctor2.jpg",
            descripcion: "La Dra. Fernández es experta en el diagnóstico y tratamiento de enfermedades crónicas y complejas."
        },
        {
            nombre: "Dra. Carolina Martínez",
            especialidad: "Pediatría",
            experiencia: 6,
            imagen: "./assets/img/img_doctor4.jpg",
            descripcion: "La Dra. Martínez se especializa en el cuidado integral de niños desde su nacimiento hasta la adolescencia."
        },
        {
            nombre: "Dr. Juan Pérez",
            especialidad: "Traumatología y Ortopedia",
            experiencia: 10,
            imagen: "./assets/img/img_doctor3.jpg",
            descripcion: "El Dr. Pérez es experto en el diagnóstico y tratamiento de lesiones musculoesqueléticas."
        }
    ];

    // Seleccionar el contenedor de los médicos
    const listaMedicos = document.getElementById("medicos-lista");

    // Iterar sobre los médicos y agregar solo los que tienen más de 5 años de experiencia
    medicos.forEach(medico => {
        if (medico.experiencia > 5) {
            const medicoCard = `
                <div class="col-lg-6 col-12 mb-4">
                    <div class="card">
                        <img src="${medico.imagen}" class="card-img-top" alt="${medico.nombre}">
                        <div class="card-body">
                            <h3>${medico.nombre}</h3>
                            <h5>Especialidad: ${medico.especialidad}</h5>
                            <p> Experiencia: ${medico.experiencia} años</p>
                            <p class="card-text">${medico.descripcion}</p>
                        </div>
                    </div>
                </div>
            `;
            listaMedicos.innerHTML += medicoCard;
        }
    });
});



