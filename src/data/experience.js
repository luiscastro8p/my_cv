/**
 * Trayectoria profesional (fuente: currículum en PDF + confirmación del autor).
 * Los textos (puesto, logros) se traducen: locales -> experience.<id>.*
 *
 * `end: null` significa que el puesto sigue vigente. Ochoa y Fragmento se
 * solapan a propósito: son un empleo y una colaboración freelance en paralelo,
 * y por eso `type` distingue una cosa de la otra en la interfaz.
 *
 * Orden: primero lo vigente, después lo pasado de más reciente a más antiguo.
 */
export const experience = [
  {
    id: 'ochoa',
    company: 'Ochoa Technology',
    location: 'Los Mochis, Sin.',
    start: '2022-02',
    end: null,
    type: 'employment',
    tech: ['angular', 'rxjs', 'sass', 'typescript', 'react', 'python', 'jinja'],
    projects: ['nas', 'captiosys'],
  },
  {
    id: 'fragmento',
    company: 'Fragmento',
    location: 'Los Mochis, Sin.',
    start: '2018-08',
    end: null,
    type: 'freelance',
    tech: ['angular', 'sass', 'react', 'javascript', 'bootstrap'],
    projects: ['agronodo', 'docapital', 'alma', 'asi'],
  },
  {
    id: 'freelance',
    companyKey: 'experience.items.freelance.company',
    location: 'Los Mochis, Sin.',
    start: '2025-02',
    end: '2025-03',
    type: 'freelance',
    tech: ['nodejs', 'typescript', 'angular', 'sass', 'bootstrap'],
    projects: ['sorteo'],
  },
  {
    id: 'thinkcares',
    company: 'ThinkCares',
    location: 'Los Mochis, Sin.',
    start: '2024-09',
    end: '2024-11',
    type: 'employment',
    tech: ['javascript', 'css', 'html'],
    projects: [],
  },
  {
    id: 'hackademy',
    company: 'Hackademy',
    location: 'Culiacán, Sin. (remoto)',
    start: '2019-04',
    end: '2021-03',
    type: 'employment',
    tech: ['react', 'angular', 'javascript', 'sass'],
    projects: ['clariti', 'wep'],
  },
];

export const education = [
  {
    id: 'itlm',
    school: 'Instituto Tecnológico de Los Mochis',
    location: 'Los Mochis, Sin.',
    start: '2017-02',
    end: null,
  },
];

/** Nombre visible del empleador: literal, o traducido si es genérico. */
export function companyName(item, t) {
  return item.companyKey ? t(item.companyKey) : item.company;
}

/** Puestos vigentes hoy. */
export const currentRoles = experience.filter((item) => item.end === null);
