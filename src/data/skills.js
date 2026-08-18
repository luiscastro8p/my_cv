/**
 * Catálogo de tecnologías. `id` es la clave usada por TechIcon y por los chips
 * de proyectos/experiencia; `level` agrupa para la sección de habilidades.
 */
export const technologies = {
  angular: { label: 'Angular', group: 'framework' },
  react: { label: 'React', group: 'framework' },
  ionic: { label: 'Ionic', group: 'framework' },
  rxjs: { label: 'RxJS', group: 'framework' },
  jinja: { label: 'Jinja', group: 'framework' },
  typescript: { label: 'TypeScript', group: 'language' },
  javascript: { label: 'JavaScript', group: 'language' },
  python: { label: 'Python', group: 'language' },
  html: { label: 'HTML5', group: 'language' },
  css: { label: 'CSS3', group: 'language' },
  sass: { label: 'Sass / SCSS', group: 'language' },
  bootstrap: { label: 'Bootstrap', group: 'tooling' },
  nodejs: { label: 'Node.js', group: 'tooling' },
  git: { label: 'Git', group: 'tooling' },
};

export const skillGroups = [
  { id: 'language', items: ['typescript', 'javascript', 'python', 'html', 'css', 'sass'] },
  { id: 'framework', items: ['angular', 'react', 'rxjs', 'ionic', 'jinja'] },
  { id: 'tooling', items: ['nodejs', 'git', 'bootstrap'] },
];
