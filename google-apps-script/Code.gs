/**
 * Backend del formulario de contacto del CV.
 * Se despliega como "Aplicación web" desde Google Apps Script y envía
 * el correo con la propia cuenta de Gmail del dueño del script.
 *
 * Instrucciones de despliegue en el README.md de esta carpeta.
 */

const DESTINATARIO = "luisarmandocastro12@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: si viene relleno es un bot. Respondemos ok para no darle pistas.
    if (data.website) {
      return json({ ok: true });
    }

    const nombre = String(data.nombre || "").trim();
    const correo = String(data.correo || "").trim();
    const descripcion = String(data.descripcion || "").trim();
    // Idioma en el que el visitante vio el sitio (opcional, llega desde v2).
    const idioma = data.lang === "en" ? "EN" : data.lang === "es" ? "ES" : "";

    if (!nombre || !correo || !descripcion) {
      return json({ ok: false, error: "Faltan campos obligatorios" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      return json({ ok: false, error: "Correo inválido" });
    }
    if (nombre.length > 100 || correo.length > 150 || descripcion.length > 3000) {
      return json({ ok: false, error: "Contenido demasiado largo" });
    }

    MailApp.sendEmail({
      to: DESTINATARIO,
      replyTo: correo,
      subject: "Nuevo mensaje desde tu CV" + (idioma ? " [" + idioma + "]" : "") + ": " + nombre,
      htmlBody:
        "<h3>Nuevo mensaje desde el formulario del CV</h3>" +
        "<p><b>Nombre:</b> " + escapeHtml(nombre) + "</p>" +
        "<p><b>Correo:</b> " + escapeHtml(correo) + "</p>" +
        (idioma ? "<p><b>Idioma del sitio:</b> " + idioma + "</p>" : "") +
        "<p><b>Mensaje:</b></p>" +
        "<p>" + escapeHtml(descripcion).replace(/\n/g, "<br>") + "</p>",
    });

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, msg: "Endpoint activo" });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function escapeHtml(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
