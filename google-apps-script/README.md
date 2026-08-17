# Backend del formulario de contacto (Google Apps Script)

El sitio es estático (GitHub Pages), así que el envío de correo lo hace un
Apps Script desplegado como aplicación web. El correo sale de tu propia cuenta
de Gmail hacia `luisarmandocastro12@gmail.com`. Cuota gratuita: 100 correos/día.

## Pasos (una sola vez, ~5 minutos)

1. Entra a https://script.google.com con tu cuenta de Google y crea un
   **Proyecto nuevo**.
2. Borra el contenido de `Código.gs` y pega todo el contenido de
   [Code.gs](Code.gs).
3. Guarda (Ctrl+S) y ponle nombre al proyecto, ej. `cv-contacto`.
4. Pulsa **Implementar → Nueva implementación**.
   - Tipo (icono del engranaje): **Aplicación web**
   - Descripción: `contacto cv`
   - **Ejecutar como:** `Yo (tu-correo@gmail.com)`
   - **Quién tiene acceso:** `Cualquier usuario` ← imprescindible, si no el
     formulario recibirá un error de permisos.
5. **Implementar**. Google pedirá autorizar el script: *Revisar permisos* →
   elige tu cuenta → "Google no ha verificado esta aplicación" →
   **Configuración avanzada** → *Ir a cv-contacto (no seguro)* → **Permitir**.
   Es tu propio script, ese aviso es normal.
6. Copia la **URL de la aplicación web** (termina en `/exec`).
7. En la raíz del proyecto, pega esa URL en el archivo `.env`:

   ```
   REACT_APP_CONTACT_ENDPOINT=https://script.google.com/macros/s/AKfy.../exec
   ```

8. Reinicia `npm start` (las variables de entorno de CRA solo se leen al
   arrancar) y prueba el formulario.
9. Para publicarlo: `npm run deploy`.

## Si luego editas `Code.gs`

Los cambios **no** se aplican solos: hay que ir a
**Implementar → Gestionar implementaciones → ✏️ editar → Versión: Nueva versión
→ Implementar**. Así la URL se mantiene igual.
