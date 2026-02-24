import lugares from './lugares.js';

// Gestión de navegación activa
const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Íconos por estado
const ICONOS = {
  'Ceniza constante':   'bi-cloud-haze',
  'Niebla densa':       'bi-cloud-fog',
  'Ceniza ligera':      'bi-cloud-drizzle',
  'Tormenta de ceniza': 'bi-cloud-lightning',
  'Neblina':            'bi-cloud-haze2',
  'Ceniza pesada':      'bi-clouds',
  'Niebla espesa':      'bi-cloud-fog2',
  'Oscuridad y ceniza': 'bi-cloud-moon',
  'Ceniza moderada':    'bi-cloud-rain',
  'Neblina matutina':   'bi-clouds-fill',
};

// 1️⃣ Obtener ID desde la URL
const urlParams = new URLSearchParams(window.location.search);
const locationId = urlParams.get('id');

// 2️⃣ Buscar ciudad
const lugarEncontrado = () => {
  return lugares.find((lugar) => lugar.id == locationId);
};

const ciudadActual = lugarEncontrado();

// 🔥 Validación importante
if (!ciudadActual) {
  document.getElementById('lugar').innerHTML = `
    <div class="alert alert-danger">
      Lugar no encontrado.
    </div>
  `;
  throw new Error('Lugar no encontrado');
}

// 3️⃣ Mostrar información principal
const lugarContainer = document.getElementById('lugar');

const mostrarLugar = () => {
  const content = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-lg-4 d-flex justify-content-center align-items-center">
          <i class="bi ${ICONOS[ciudadActual.estadoActual]}" style="font-size: 90px"></i>
        </div>
        <div class="col-lg-8">
          <div class="card-body">
            <h2 class="card-title">${ciudadActual.nombre}</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${ciudadActual.estadoActual}</li>
              <li class="list-group-item">
                Temperatura: ${ciudadActual.tempActual}°C
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  lugarContainer.innerHTML = content;
};

mostrarLugar();

// 4️⃣ Pronóstico semanal
const pronosticoContainer = document.getElementById('pronosticoSemanal');

ciudadActual.pronosticoSemanal.forEach((dia) => {
  const content = `
    <li class="list-group-item">
      <i class="bi ${ICONOS[dia.estado]}"></i>
      ${dia.dia}: ${dia.max}°C
    </li>
  `;
  pronosticoContainer.innerHTML += content;
});

// 5️⃣ Estadísticas
const temperaturasMinimas = ciudadActual.pronosticoSemanal.map(d => d.min);
const temperaturasMaximas = ciudadActual.pronosticoSemanal.map(d => d.max);

const minimaSemanal = Math.min(...temperaturasMinimas);
const maximaSemanal = Math.max(...temperaturasMaximas);

const promedioSemanal = (
  temperaturasMaximas.reduce((acc, val) => acc + val, 0) /
  temperaturasMaximas.length
).toFixed(2);

document.getElementById('minTemp').textContent = minimaSemanal;
document.getElementById('maxTemp').textContent = maximaSemanal;
document.getElementById('avTemp').textContent  = promedioSemanal;

// 6️⃣ Estado predominante
const conteoEstados = {};

ciudadActual.pronosticoSemanal.forEach(dia => {
  conteoEstados[dia.estado] = (conteoEstados[dia.estado] || 0) + 1;
});

const estadoPredominante = Object.entries(conteoEstados)
  .reduce((a, b) => (a[1] > b[1] ? a : b))[0];

document.getElementById('resumen').innerHTML = `
  <p class="text-muted">
    Semana con clima mayormente ${estadoPredominante}.
    Máxima ${maximaSemanal}°C, mínima ${minimaSemanal}°C.
  </p>
`;

// 7️⃣ Tabla estados
const encabezadosTabla = document.getElementById('titulosEstadisticas');
const filaTabla = document.getElementById('filaEstadistica');

Object.entries(conteoEstados).forEach(([estado, cantidad]) => {
  encabezadosTabla.innerHTML += `<th>Días ${estado}</th>`;
  filaTabla.innerHTML += `<td>${cantidad}</td>`;
});