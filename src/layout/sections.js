/** Secciones de la página, en el orden en que aparecen en el documento. */
export const SECTIONS = [
  { id: 'inicio', icon: 'home', labelKey: 'nav.home' },
  { id: 'sobre-mi', icon: 'user', labelKey: 'nav.about' },
  { id: 'experiencia', icon: 'briefcase', labelKey: 'nav.experience' },
  { id: 'habilidades', icon: 'terminal', labelKey: 'nav.skills' },
  { id: 'proyectos', icon: 'folder', labelKey: 'nav.projects' },
  { id: 'contacto', icon: 'mail', labelKey: 'nav.contact' },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);
