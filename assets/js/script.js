import lugares from './lugares.js';

// Gestión de navegación activa
var enlacesMenu = document.querySelectorAll('.nav-link');

enlacesMenu.forEach(function (enlace) {
  if (enlace.href === window.location.href) {
    enlace.classList.add('active');
  } else {
    enlace.classList.remove('active');
  }
});

// Íconos por estado del clima de Scadrial
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

// Mostrar lugares en el Index
const lugaresContainer = document.getElementById('lugares');

const mostrarLugares = () => {
  lugares.forEach((lugar) => {
    const tarjeta = `
      <div class="col">
        <article class="card weather-card h-100 text-center">
          <i class="bi ${ICONOS[lugar.estadoActual]} card__icon"></i>
          <div class="card-body">
            <h5 class="card-title">${lugar.nombre}</h5>
            <p class="card-text">${lugar.tempActual}°C</p>
            <p class="card-text">${lugar.estadoActual}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <a class="card-link" href="./detalle.html?id=${lugar.id}">Ver detalle</a>
          </div>
        </article>
      </div>
    `;
    lugaresContainer.innerHTML += tarjeta;
  });
};

mostrarLugares();