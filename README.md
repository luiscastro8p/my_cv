# Currículum interactivo — Luis Castro

Portafolio y CV en línea, bilingüe (español / inglés), con modo oscuro y
formulario de contacto funcional. En producción: **https://mrlacc.com**

- Español: https://mrlacc.com/
- English: https://mrlacc.com/en

## Stack

| Pieza | Elección |
|---|---|
| Build | Vite + React 18 |
| Rutas | react-router (una ruta por idioma) |
| i18n | react-i18next, diccionarios en `src/i18n/locales` |
| Estilos | CSS propio con design tokens (`src/styles/tokens.css`) |
| Iconos | [Simple Icons](https://simpleicons.org/) (CC0) + set propio de interfaz |
| SEO | Prerender de ambos idiomas en el build + JSON-LD + sitemap |
| Formulario | Google Apps Script (ver `google-apps-script/`) |
| Tests | Vitest + Testing Library |
| Deploy | GitHub Pages (`gh-pages`) con dominio propio |

## Empezar

Requiere **Node 18 o superior** (hay un `.nvmrc` con la versión usada).

```bash
nvm use            # opcional, fija Node 22
npm install
cp .env.example .env   # y pega ahí la URL de tu Apps Script
npm run dev
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción **+ prerender** de `/` y `/en` |
| `npm run preview` | Sirve `dist/` para revisar el build |
| `npm test` | Suite de pruebas |
| `npm run lint` | ESLint (react, hooks, jsx-a11y) |
| `npm run format` | Prettier |
| `npm run images` | Convierte imágenes nuevas a WebP |
| `npm run og` | Regenera `public/og-image.png` |
| `npm run deploy` | Build y publicación en GitHub Pages |

## Cómo está organizado

```
src/
  data/         Contenido estructurado (experiencia, proyectos, tecnologías)
  i18n/locales/ Todos los textos, en es.json y en.json
  sections/     Las seis secciones de la página
  layout/       Navegación, barra superior, pie, enlace de salto
  components/   Piezas reutilizables (UI, iconos, modal, typing)
  hooks/        Tema, scroll spy, reveal, formulario de contacto
  styles/       Tokens, reset y utilidades
```

**Para actualizar contenido** casi nunca hay que tocar componentes:

- ¿Nuevo empleo? → `src/data/experience.js` + textos en `src/i18n/locales/*.json`
  bajo `experience.items.<id>`. Un puesto vigente lleva `end: null` (se pinta
  como "En curso"); `type: 'freelance'` le añade la etiqueta correspondiente,
  que es lo que permite mostrar dos roles simultáneos sin que parezca un error.
- ¿Nuevo proyecto? → deja la captura en `src/assets/img/works/`, ejecuta
  `npm run images`, y añade la entrada en `src/data/projects.js` + los textos en
  `projects.items.<id>`.
- ¿Datos personales, redes? → `src/data/profile.js`.

Los dos diccionarios deben tener exactamente las mismas claves; si falta una en
inglés, se muestra el texto en español como respaldo.

## Idiomas y SEO

La versión española vive en `/` y la inglesa en `/en`. No hay redirecciones por
JavaScript: cada idioma es una URL propia, con su `canonical` y sus etiquetas
`hreflang`, y ambas se prerenderizan a HTML estático durante el build
(`scripts/prerender.mjs`), de modo que el contenido es indexable sin ejecutar JS.

Tras desplegar conviene enviar `https://mrlacc.com/sitemap.xml` en Google Search
Console.

## Modo oscuro

El tema se aplica con `<html data-theme="light|dark">`. Se elige, por orden:
la preferencia guardada en `localStorage`, y si no la hay, la del sistema
operativo (`prefers-color-scheme`), que además se sigue en vivo. Un script
mínimo en `index.html` lo fija antes del primer pintado para que no haya
destello de color al cargar.

## Formulario de contacto

El front-end no guarda secretos: envía un POST a la URL de Apps Script definida
en `VITE_CONTACT_ENDPOINT`. El backend (`google-apps-script/Code.gs`) valida de
nuevo los campos, descarta los envíos del honeypot y manda el correo con
`replyTo` del remitente. Instrucciones de despliegue en
`google-apps-script/README.md`.

## Despliegue

```bash
npm run deploy
```

Publica `dist/` en la rama `gh-pages`. El archivo `public/CNAME` mantiene el
dominio `mrlacc.com`, y `404.html` (copia de la home) permite que GitHub Pages
resuelva rutas como `/en` al recargar.

---

© Luis Armando Castro Cota
