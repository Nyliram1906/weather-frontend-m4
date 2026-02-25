🌦️ El Tiempo en Scadrial – Módulo 4

Aplicación web de clima temática inspirada en el mundo de Mistborn de Brandon Sanderson.

📝 Descripción

Esta es una aplicación frontend que muestra el clima de 10 ciudades del Imperio Final.

En esta versión (Módulo 4) el foco está en la lógica de programación en JavaScript, modelando los datos del clima como estructuras de datos y calculando estadísticas semanales dinámicamente.

La aplicación permite:

Ver listado de ciudades con clima actual

Acceder al detalle de cada ciudad

Visualizar pronóstico semanal

Consultar estadísticas calculadas desde JavaScript

🧠 Modelado de datos

Los datos del clima están definidos en un archivo lugares.js como un arreglo de objetos:

const lugares = [
  {
    id: 1,
    nombre: "Luthadel",
    tempActual: 14,
    estadoActual: "Ceniza constante",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 14, estado: "Ceniza constante" },
      { dia: "Martes", min: 11, max: 15, estado: "Niebla densa" },
      ...
    ]
  },
  ...
];

Cada lugar contiene:

id

nombre

tempActual

estadoActual

pronosticoSemanal (arreglo con día, temperatura mínima, máxima y estado)

No hay datos "quemados" en el HTML; todo se genera dinámicamente desde JavaScript.

📊 Estadísticas calculadas

En la vista de detalle se genera automáticamente una sección “Estadísticas de la semana”, que calcula:

🔹 Temperatura mínima semanal

🔹 Temperatura máxima semanal

🔹 Temperatura promedio semanal

🔹 Cantidad de días por tipo de clima

🔹 Resumen textual generado dinámicamente

Ejemplo de resumen generado:

"Semana con clima mayormente Ceniza constante. La temperatura máxima fue 16°C y la mínima 9°C."

Las estadísticas se calculan recorriendo el arreglo pronosticoSemanal usando:

Ciclos (forEach, map)

Condicionales (if)

Funciones reutilizables

⚙️ Lógica implementada

El proyecto incluye:

Función para obtener un lugar por ID desde la URL

Función para calcular estadísticas a partir del pronóstico

Uso de variables intermedias (sumas, contadores)

Manipulación del DOM para renderizar datos dinámicamente

🛠️ Tecnologías utilizadas

HTML5 semántico

SASS / SCSS (estructura modular)

Bootstrap 5.3.8

JavaScript (ES Modules)

Bootstrap Icons

🚀 Cómo usar

Clonar repositorio:

🌦️ El Tiempo en Scadrial – Módulo 4

Aplicación web de clima temática inspirada en el mundo de Mistborn de Brandon Sanderson.

📝 Descripción

Esta es una aplicación frontend que muestra el clima de 10 ciudades del Imperio Final.

En esta versión (Módulo 4) el foco está en la lógica de programación en JavaScript, modelando los datos del clima como estructuras de datos y calculando estadísticas semanales dinámicamente.

La aplicación permite:

Ver listado de ciudades con clima actual

Acceder al detalle de cada ciudad

Visualizar pronóstico semanal

Consultar estadísticas calculadas desde JavaScript

🧠 Modelado de datos

Los datos del clima están definidos en un archivo lugares.js como un arreglo de objetos:

const lugares = [
  {
    id: 1,
    nombre: "Luthadel",
    tempActual: 14,
    estadoActual: "Ceniza constante",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 14, estado: "Ceniza constante" },
      { dia: "Martes", min: 11, max: 15, estado: "Niebla densa" },
      ...
    ]
  },
  ...
];

Cada lugar contiene:

id

nombre

tempActual

estadoActual

pronosticoSemanal (arreglo con día, temperatura mínima, máxima y estado)

No hay datos "quemados" en el HTML; todo se genera dinámicamente desde JavaScript.

📊 Estadísticas calculadas

En la vista de detalle se genera automáticamente una sección “Estadísticas de la semana”, que calcula:

🔹 Temperatura mínima semanal

🔹 Temperatura máxima semanal

🔹 Temperatura promedio semanal

🔹 Cantidad de días por tipo de clima

🔹 Resumen textual generado dinámicamente

Ejemplo de resumen generado:

"Semana con clima mayormente Ceniza constante. La temperatura máxima fue 16°C y la mínima 9°C."

Las estadísticas se calculan recorriendo el arreglo pronosticoSemanal usando:

Ciclos (forEach, map)

Condicionales (if)

Funciones reutilizables

⚙️ Lógica implementada

El proyecto incluye:

Función para obtener un lugar por ID desde la URL

Función para calcular estadísticas a partir del pronóstico

Uso de variables intermedias (sumas, contadores)

Manipulación del DOM para renderizar datos dinámicamente

🛠️ Tecnologías utilizadas

HTML5 semántico

SASS / SCSS (estructura modular)

Bootstrap 5.3.8

JavaScript (ES Modules)

Bootstrap Icons

🚀 Cómo usar

Clonar repositorio:

git clone https://github.com/Nyliram1906/weather-frontend-m4.git

Entrar a la carpeta:

cd weather-frontend-m4

Compilar SASS:

sass assets/scss/main.scss assets/css/main.css

Abrir index.html en navegador o usar Live Server.

📁 Estructura principal
assets/
 ├── css/
 ├── js/
 │    ├── lugares.js
 │    ├── script.js
 │    └── detalle.js
 └── scss/
🎓 Objetivos de aprendizaje cumplidos

✅ Modelado de datos con arrays y objetos
✅ Uso de ciclos y condicionales
✅ Funciones reutilizables
✅ Cálculo dinámico de estadísticas
✅ Manipulación del DOM
✅ Proyecto gestionado con Git/GitHub

👩‍💻 Autor

Marilyn Villalobos

Entrar a la carpeta:

cd weather-frontend-m3

Compilar SASS:

sass assets/scss/main.scss assets/css/main.css

Abrir index.html en navegador o usar Live Server.

📁 Estructura principal
assets/
 ├── css/
 ├── js/
 │    ├── lugares.js
 │    ├── script.js
 │    └── detalle.js
 └── scss/
🎓 Objetivos de aprendizaje cumplidos

✅ Modelado de datos con arrays y objetos
✅ Uso de ciclos y condicionales
✅ Funciones reutilizables
✅ Cálculo dinámico de estadísticas
✅ Manipulación del DOM
✅ Proyecto gestionado con Git/GitHub

👩‍💻 Autor

Marilyn Villalobos