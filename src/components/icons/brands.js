import {
  siAngular,
  siBootstrap,
  siCss,
  siFacebook,
  siGit,
  siGithub,
  siHtml5,
  siInstagram,
  siIonic,
  siJavascript,
  siJinja,
  siNodedotjs,
  siPython,
  siReact,
  siReactivex,
  siSass,
  siTypescript,
  siWhatsapp,
} from 'simple-icons';

/** Marcas de Simple Icons (CC0): un path monocromo que hereda currentColor. */
export const TECH_ICONS = {
  angular: siAngular,
  react: siReact,
  ionic: siIonic,
  rxjs: siReactivex,
  typescript: siTypescript,
  javascript: siJavascript,
  python: siPython,
  jinja: siJinja,
  html: siHtml5,
  css: siCss,
  sass: siSass,
  bootstrap: siBootstrap,
  nodejs: siNodedotjs,
  git: siGit,
};

export const SOCIAL_ICONS = {
  github: siGithub,
  facebook: siFacebook,
  instagram: siInstagram,
  whatsapp: siWhatsapp,
};

export const SOCIAL_LABELS = {
  github: 'GitHub',
  facebook: 'Facebook',
  instagram: 'Instagram',
  whatsapp: 'WhatsApp',
};

/** Color oficial de la marca, para acentos en hover. */
export function techBrandColor(id) {
  return TECH_ICONS[id] ? `#${TECH_ICONS[id].hex}` : 'currentColor';
}
