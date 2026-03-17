const silabos = [
  { curso: "Ing de Software", estado: "Aprobado" },
  { curso: "Taller de Proyectos", estado: "Pendiente" },
  { curso: "Ing de Software II", estado: "Pendiente" },
  { curso: "Pruebas de Software", estado: "Rechazado" }
];

const lista = document.getElementById("lista");

/* RENDER */
function render(data) {
  lista.innerHTML = "";

  data.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="left">
        <div class="dot"></div>
        <span>${s.curso}</span>
      </div>

      <div class="actions">
        <div class="estado ${s.estado.toLowerCase()}"></div>
        <button onclick="ver('${s.curso}', '${s.estado}')">👁️</button>
      </div>
    `;

    lista.appendChild(card);
  });
}

/* CARGA INICIAL */
render(silabos);

/* BUSCADOR */
document.getElementById("busqueda").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();

  const filtrado = silabos.filter(s =>
    s.curso.toLowerCase().includes(texto)
  );

  render(filtrado);
});

/* MODAL */
function ver(curso, estado) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalTitulo").innerText = curso;

  let contenido = "";

  if (estado === "Aprobado") {
    contenido = "Este sílabo está aprobado y listo para usarse.";
  } else if (estado === "Pendiente") {
    contenido = "Este sílabo está en revisión.";
  } else {
    contenido = "Este sílabo fue rechazado. Revisar observaciones.";
  }

  document.getElementById("modalEstado").innerText = contenido;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

/* BOTÓN + */
function nuevoSilabo() {
  alert("Redirigiendo a la creación de un nuevo sílabo...");
}
