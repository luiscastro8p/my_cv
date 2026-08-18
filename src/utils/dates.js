/** Edad cumplida a partir de una fecha ISO (YYYY-MM-DD). */
export function calculateAge(birthDate, today = new Date()) {
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age;
}

/** Años completos de trayectoria desde la primera fecha de trabajo. */
export function yearsOfExperience(startDate, today = new Date()) {
  return calculateAge(startDate, today);
}

function toDate(value) {
  // Acepta 'YYYY-MM' y 'YYYY-MM-DD'; el día 1 evita saltos por zona horaria.
  const [year, month = '01', day = '01'] = String(value).split('-');
  return new Date(Number(year), Number(month) - 1, Number(day));
}

/** "feb 2022" / "Feb 2022" según el idioma activo. */
export function formatMonthYear(value, locale) {
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(toDate(value));
}

/** Rango legible; si `end` es null se usa la etiqueta de "actualidad". */
export function formatPeriod(start, end, locale, presentLabel) {
  const from = formatMonthYear(start, locale);
  const to = end ? formatMonthYear(end, locale) : presentLabel;
  return `${from} — ${to}`;
}

/** Formato ISO para el atributo datetime de <time>. */
export function isoDate(value) {
  return String(value).length === 7 ? `${value}-01` : String(value);
}
