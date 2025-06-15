<p align="center">
  <img src="https://images.vexels.com/content/203685/preview/bread-white-bread-icon-e41368.png" alt="Panadería Montoya Logo" width="120" />
</p>

# Panadería Montoya Web

> **Refuerza la presencia digital de tu panadería con IA y animaciones modernas**

---

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-4.3.9-lightgray?logo=vite&logoColor=purple" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.3.2-teal?logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/FramerMotion-10.12.16-pink?logo=framermotion&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</p>

---

## 📖 Descripción

Proyecto integrador del Diplomado en Inteligencia Artificial que combina generación de prompts, animaciones y web moderna para crear una experiencia interactiva y cinematográfica de la Panadería Montoya.

---

## ✨ Características Principales

* **Animaciones Pan & Humo**
  Uso de Framer Motion para animar elementos decorativos alrededor del video.
* **Patrón de Fondo**
  SVG semitransparente que aporta textura sin recargar la vista.
* **Video Embebido**
  `<iframe>` de Google Drive para reproducir el spot con controles nativos.
* **Estructura Modular**
  Basado en React con Vite, estilizado con Tailwind CSS.

---

## 🛠 Tech Stack

| Área          | Herramienta / Lenguaje                         |
| ------------- | ---------------------------------------------- |
| Frontend      | React, Vite                                    |
| Estilos       | Tailwind CSS                                   |
| Animaciones   | Framer Motion                                  |
| Construcción  | Vite, PostCSS, Autoprefixer                    |
| Generación IA | Sora (prompts video), MusicGen, Magenta Studio |

---

## 📂 Estructura del Proyecto

```
video_ia/
├── src/
│   ├── main.jsx            # Punto de entrada React
│   ├── index.css           # Estilos globales Tailwind
│   ├── App.jsx             # Componente principal con animaciones
│   ├── pancarga.png        # Ilustración de pan (doodle)
│   └── humo.png            # Ilustración de humo (doodle)
├── index.html              # Plantilla base
├── package.json            # Dependencias y scripts
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # PostCSS plugins
└── vite.config.js          # Configuración de Vite
```

---

## 🚀 Flujo de Trabajo

1. **Concepto y Guion**
   Definir duración total de 60 s dividido en clips de 10 s; redactar prompts cinematográficos para IA.
2. **Generación de Contenido**

   * **Video**: 7 prompts detallados en Sora para capturar planos y atmósfera.
   * **Audio**: prompts de 30 s para MusicGen y Magenta Studio con guitarras y ritmos andinos.
3. **Diseño de Miniatura**
   Prompt para imagen destacada: primer plano de pan dorado, humo suave, tipografía elegante.
4. **Desarrollo Frontend**

   * Configurar proyecto con Vite y React.
   * Integrar animaciones de Framer Motion.
   * Insertar `<iframe>` de Google Drive con autoplay opcional y loop.
5. **Pruebas y Ajustes**
   Realizar pruebas de responsividad, accesibilidad y rendimiento.

---

## ⚙️ Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/sjaquer/panaderia-montoya.git
cd panaderia-montoya

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:5173`.

---

## 📝 Contribuciones

Para sugerir mejoras o reportar errores, abre un issue o envía un pull request al repositorio.

---

## 📜 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

---

<p align="center">
  Desarrollado por **sjaquer@** como proyecto final del Diplomado en Inteligencia Artificial.
</p>
