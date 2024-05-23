const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//   push de traumatología

const nuevaAgendaTrauma = traumatologia.map((cita) => cita);

const nuevasHoras = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];

nuevasHoras.forEach((cita) => nuevaAgendaTrauma.push(cita));
console.log(nuevaAgendaTrauma);

/**
 * Opción para el punto 1:
 * a) mapear arreglo original a nuevo arreglo llamado nuevaAgendaTrauma
 * b) insertar todos los objetos en las variables L138-142 en un solo arreglo. nuevasHoras
 * c) nuevasHoras.forEach(cita => nuevaAgendaTrauma.push(cita));
 */

// shift y pop de Radiología

const agendaNueva = radiologia.map((cita) => cita);

agendaNueva.pop();
agendaNueva.shift();

console.log("Array original", radiologia);
console.log("Array nueva agenda", agendaNueva);

// Agenda Dental

/**
 * 1) Declaro un elemento de mi DOM para pintar el resultado.
 * 2) Itero dental (), y dentro de la función del iterador
 */

const consultasMedicas = document.querySelector("#dental");
dental.forEach((cita) => {
  const contenido = Object.values(cita).join(" - ");
  const parrafo = `<p>${contenido}</p>`;
  consultasMedicas.innerHTML += parrafo;
});

// Pacientes del centro

const listadoPacientes = { radiologia, traumatologia, dental };

// Listado de pacientes

const pacientes = document.querySelector("#pacientesCentro");

Object.values(listadoPacientes).forEach((lista) => {
  lista.forEach((paciente) => {
    const parrafo = `<p>${paciente.paciente}</p>`;
    pacientes.innerHTML += parrafo;
  });
});


// Prevision pacientes Dental
//                      ISAPRE

const isapre = document.querySelector("#isapre");

dental.forEach(paciente => {
    if (paciente.prevision === 'ISAPRE') {
        const nombre = paciente.paciente;
        const prevision = paciente.prevision;
        const parrafo = `<p>${nombre} - ${prevision}</p>`;
        isapre.innerHTML += parrafo;
    }
});

// Prevision pacientes Traumatologia
//                      FONASA

const fonasa = document.querySelector("#fonasa");

traumatologia.forEach(paciente => {
    if (paciente.prevision === 'FONASA') {
        const nombre = paciente.paciente;
        const prevision = paciente.prevision;
        const parrafo = `<p>${nombre} - ${prevision}</p>`;
        fonasa.innerHTML += parrafo;
    }
});
