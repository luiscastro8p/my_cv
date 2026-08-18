/**
 * Genera public/og-image.png (1200x630), la tarjeta que se ve al compartir el
 * enlace en WhatsApp, LinkedIn, Slack o X. Se compone del retrato recortado
 * más una capa SVG con el texto, para no depender de fuentes del sistema.
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

const BG = '#0d1117';
const ACCENT = '#9ee07a';
const TEXT = '#e8eef4';
const MUTED = '#a9b6c3';

const mono = readFileSync(
  join(root, 'node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2')
).toString('base64');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <style>
      @font-face {
        font-family: 'JetBrains Mono';
        src: url(data:font/woff2;base64,${mono}) format('woff2');
      }
      .name { font-family: 'JetBrains Mono', monospace; font-size: 76px; font-weight: 700; fill: ${TEXT}; letter-spacing: -2px; }
      .role { font-family: 'JetBrains Mono', monospace; font-size: 36px; font-weight: 500; fill: ${ACCENT}; }
      .meta { font-family: 'JetBrains Mono', monospace; font-size: 24px; fill: ${MUTED}; }
      .prompt { font-family: 'JetBrains Mono', monospace; font-size: 24px; fill: ${ACCENT}; }
    </style>
    <linearGradient id="glow" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="${ACCENT}" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" fill="none" stroke="${ACCENT}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <text x="80" y="176" class="prompt">$ whoami</text>
  <text x="80" y="286" class="name">Luis Castro</text>
  <text x="80" y="348" class="role">Frontend Developer</text>
  <text x="80" y="430" class="meta">Angular · React · TypeScript</text>
  <text x="80" y="474" class="meta">Los Mochis, México</text>

  <rect x="80" y="524" width="132" height="6" rx="3" fill="${ACCENT}"/>
  <text x="80" y="580" class="meta">mrlacc.com</text>
</svg>`;

const portrait = await sharp(join(root, 'src/assets/img/about.webp'))
  .resize({ height: 600, fit: 'inside' })
  .toBuffer();

const { width: pw } = await sharp(portrait).metadata();

await sharp(Buffer.from(svg))
  .composite([{ input: portrait, top: H - 600, left: W - pw - 60 }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public/og-image.png'));

console.log('  public/og-image.png generado (1200x630)');
