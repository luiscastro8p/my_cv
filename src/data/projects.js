import boletiza from '@/assets/img/works/boletiza.webp';
import unaFlor from '@/assets/img/works/una_flor.webp';
import fuelbishop from '@/assets/img/works/fuelbishop.webp';
import nas from '@/assets/img/works/nas.webp';
import agronodo from '@/assets/img/works/agronodo.webp';
import sorteo from '@/assets/img/works/Sorteo.webp';
import wep from '@/assets/img/works/wep.webp';
import docapital from '@/assets/img/works/docap.webp';
import clariti from '@/assets/img/works/claribot.webp';
import captiosys from '@/assets/img/works/cap.webp';
import futureDev from '@/assets/img/works/future.webp';
import asi from '@/assets/img/works/asi.webp';
import alma from '@/assets/img/works/alma.webp';

/**
 * Portafolio. Título y descripción se traducen: locales -> projects.<id>.*
 * `company` cruza con src/data/experience.js. `url` queda null hasta tener
 * enlaces públicos que mostrar.
 */
export const projects = [
  {
    id: 'boletiza',
    img: boletiza,
    tech: ['react', 'sass', 'typescript'],
    company: null,
    url: null,
    featured: true,
  },
  {
    id: 'unaFlor',
    img: unaFlor,
    tech: ['angular', 'sass', 'typescript'],
    company: null,
    url: null,
    featured: true,
  },
  {
    id: 'fuelbishop',
    img: fuelbishop,
    tech: ['react', 'sass', 'javascript'],
    company: null,
    url: null,
    featured: true,
  },
  {
    id: 'nas',
    img: nas,
    tech: ['angular', 'typescript', 'rxjs', 'sass'],
    company: 'ochoa',
    url: null,
    featured: true,
  },
  {
    id: 'agronodo',
    img: agronodo,
    tech: ['angular', 'typescript', 'bootstrap', 'sass'],
    company: 'fragmento',
    url: null,
    featured: true,
  },
  {
    id: 'sorteo',
    img: sorteo,
    tech: ['angular', 'typescript', 'bootstrap', 'nodejs', 'sass'],
    company: 'freelance',
    url: null,
    featured: true,
  },
  {
    id: 'wep',
    img: wep,
    tech: ['angular', 'bootstrap', 'sass'],
    company: 'hackademy',
    url: null,
    featured: false,
  },
  {
    id: 'docapital',
    img: docapital,
    tech: ['react', 'sass', 'javascript'],
    company: 'fragmento',
    url: null,
    featured: false,
  },
  {
    id: 'clariti',
    img: clariti,
    tech: ['react', 'sass', 'javascript'],
    company: 'hackademy',
    url: null,
    featured: false,
  },
  {
    id: 'captiosys',
    img: captiosys,
    tech: ['react', 'sass', 'javascript'],
    company: 'ochoa',
    url: null,
    featured: false,
  },
  {
    id: 'futureDev',
    img: futureDev,
    tech: ['angular', 'typescript', 'bootstrap', 'sass'],
    company: null,
    url: null,
    featured: false,
  },
  {
    id: 'asi',
    img: asi,
    tech: ['javascript', 'bootstrap', 'html', 'sass'],
    company: 'fragmento',
    url: null,
    featured: false,
  },
  {
    id: 'alma',
    img: alma,
    tech: ['javascript', 'bootstrap', 'html', 'sass'],
    company: 'fragmento',
    url: null,
    featured: false,
  },
];
