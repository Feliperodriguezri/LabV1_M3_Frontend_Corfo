const listaDoctores = document.getElementById('lista-doctores');
const filtroEspecialidad = document.getElementById('especialidad');
const botonFiltrar = document.getElementById('filtrar');
const doctorSelect = document.getElementById('doctor');

// Función para mostrar doctores en el DOM
function renderizarDoctores(doctores) {
    console.log("Mostrando doctores:", doctores); // Log para verificar los doctores
    listaDoctores.innerHTML = ''; // Limpiar contenido previo

    if (doctores.length === 0) {
        listaDoctores.innerHTML = '<p>No se encontraron doctores disponibles.</p>';
        return;
    }

    doctores.forEach(doctor => {
        const doctorDiv = document.createElement('div');
        doctorDiv.classList.add('doctor-card');

        doctorDiv.innerHTML = `
            <h3>${doctor.nombre}</h3>
            <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
            <p><strong>Experiencia:</strong> ${doctor.experiencia} años</p>
            <p><strong>Horarios:</strong></p>
            <ul>
                ${Object.entries(doctor.horarios).map(([dia, horario]) => `<li>${dia}: ${horario}</li>`).join('')}
            </ul>
            <button class="btn-reservar" data-id="${doctor.id}">Seleccionar</button>
        `;

        listaDoctores.appendChild(doctorDiv);
    });

    // Actualizar select para el formulario de reserva
    actualizarDoctorSelect(doctores);
}

// Función para actualizar el select del formulario de reserva
function actualizarDoctorSelect(doctores) {
    doctorSelect.innerHTML = '<option value="">Selecciona un doctor</option>';
    doctores.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.nombre;
        doctorSelect.appendChild(option);
    });
}

// Función para obtener todos los doctores
async function obtenerDoctores() {
    try {
        const datos = await fetch('./assets/json/doctores.json').then(res => res.json());
        console.log("Datos obtenidos:", datos); // Log para verificar los datos completos del JSON
        renderizarDoctores(datos.doctores);
    } catch (error) {
        console.error("Error al obtener los doctores:", error);
        listaDoctores.innerHTML = '<p>Error al cargar la lista de doctores. Intente nuevamente más tarde.</p>';
    }
}

// Evento para filtrar doctores
botonFiltrar.addEventListener('click', async () => {
    const especialidadSeleccionada = filtroEspecialidad.value;

    try {
        const datos = await fetch('./assets/json/doctores.json').then(res => res.json());
        console.log("Datos antes de filtrar:", datos.doctores); // Log para verificar antes de filtrar
        const doctoresFiltrados = especialidadSeleccionada
            ? datos.doctores.filter(doctor => doctor.especialidad === especialidadSeleccionada)
            : datos.doctores;

        console.log("Doctores filtrados:", doctoresFiltrados); // Log para verificar los doctores filtrados
        renderizarDoctores(doctoresFiltrados);
    } catch (error) {
        console.error("Error al filtrar los doctores:", error);
    }
});

// Inicializar con todos los doctores
obtenerDoctores();


// Respuesta 2
// Operación 1: Clonación de un objeto JSON y modificación sin afectar el original
function clonarYModificar(doctor) {
    const doctorClon = JSON.parse(JSON.stringify(doctor)); // Clonación profunda
    doctorClon.nombre += " (Modificado)";
    console.log("Doctor Original:", doctor);
    console.log("Doctor Clonado y Modificado:", doctorClon);
    return doctorClon;
}

// Operación 2: Fusionar dos objetos JSON (Merge)
function fusionarDoctoresConServicios(doctores, servicios) {
    const fusionados = doctores.map(doctor => ({
        ...doctor,
        servicios: servicios[doctor.id] || []
    }));
    console.log("Objetos Fusionados:", fusionados);
    return fusionados;
}

// Operación 3: Recorrido y stringify
function recorrerYStringify(doctores) {
    const listaElement = document.createElement('ul');
    doctores.forEach(doctor => {
        const li = document.createElement('li');
        li.textContent = `Doctor: ${doctor.nombre} - Especialidad: ${doctor.especialidad}`;
        listaElement.appendChild(li);
    });
    document.body.appendChild(listaElement); // Mostrar la lista en el navegador

    const doctoresString = JSON.stringify(doctores, null, 2); // Formateado para mejor lectura
    console.log("Doctores como String:", doctoresString);
}

// Datos de ejemplo
async function ejecutarOperaciones() {
    try {
        const datos = await fetch('./assets/json/doctores.json').then(res => res.json());

        // Operación 1: Clonación
        const doctorModificado = clonarYModificar(datos.doctores[0]);

        // Operación 2: Merge (Servicios de ejemplo)
        const servicios = {
            "1": ["Consulta General", "Electrocardiograma"],
            "2": ["Consulta Pediátrica", "Vacunación"]
        };
        const doctoresConServicios = fusionarDoctoresConServicios(datos.doctores, servicios);

        // Operación 3: Recorrido y stringify
        recorrerYStringify(datos.doctores);
    } catch (error) {
        console.error("Error al realizar las operaciones con JSON:", error);
    }
}

// Ejecutar las operaciones al cargar la página
ejecutarOperaciones();

// Respuesta 3
// Lista de doctores
let doctores = [];

// Agregar un doctor
function agregarDoctor(doctor) {
    doctores.push(doctor);
    console.log("Doctor agregado:", doctor);
}

// Eliminar un doctor por ID
function eliminarDoctor(id) {
    doctores = doctores.filter(doctor => doctor.id !== id);
    console.log("Doctor eliminado. Lista actualizada:", doctores);
}

// Buscar un doctor por nombre
function buscarDoctor(nombre) {
    const resultado = doctores.filter(doctor => doctor.nombre.toLowerCase().includes(nombre.toLowerCase()));
    console.log("Doctores encontrados:", resultado);
    return resultado;
}

// Pila de citas
let pilaCitas = [];

// Agregar una cita
function agregarCita(cita) {
    pilaCitas.push(cita);
    console.log("Cita agregada:", cita);
}

// Eliminar la última cita (atendida)
function atenderCita() {
    const citaAtendida = pilaCitas.pop();
    console.log("Cita atendida:", citaAtendida);
    return citaAtendida;
}

// Ver la última cita agendada
function verUltimaCita() {
    const ultimaCita = pilaCitas[pilaCitas.length - 1];
    console.log("Última cita agendada:", ultimaCita);
    return ultimaCita;
}

// Cola de pacientes
let colaPacientes = [];

// Agregar paciente a la cola
function encolarPaciente(paciente) {
    colaPacientes.push(paciente);
    console.log("Paciente agregado a la cola:", paciente);
}

// Atender al siguiente paciente (desencolar)
function atenderPaciente() {
    const pacienteAtendido = colaPacientes.shift();
    console.log("Paciente atendido:", pacienteAtendido);
    return pacienteAtendido;
}

// Ver el próximo paciente
function verProximoPaciente() {
    const proximoPaciente = colaPacientes[0];
    console.log("Próximo paciente:", proximoPaciente);
    return proximoPaciente;
}

// Respuesta 4
// Función para buscar un doctor por nombre usando búsqueda lineal
function buscarDoctorPorNombre(nombre, doctores) {
    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            console.log("Doctor encontrado:", doctores[i]);
            return doctores[i];
        }
    }
    console.log("Doctor no encontrado.");
    return null;
}

// Función para ordenar doctores por experiencia usando ordenamiento por inserción
function ordenarDoctoresPorExperiencia(doctores) {
    for (let i = 1; i < doctores.length; i++) {
        let key = doctores[i];
        let j = i - 1;

        // Mover elementos mayores que la experiencia actual
        while (j >= 0 && doctores[j].experiencia > key.experiencia) {
            doctores[j + 1] = doctores[j];
            j = j - 1;
        }
        doctores[j + 1] = key;
    }
    console.log("Doctores ordenados por experiencia:", doctores);
    return doctores;
}