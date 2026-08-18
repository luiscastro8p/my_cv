/**
 * Convierte las capturas de proyectos y el retrato a WebP.
 * Idempotente: si el .webp ya existe y es más nuevo que el original, lo salta.
 * Ejecutar tras añadir imágenes nuevas: `npm run images`.
 */
import sharp from 'sharp';
import { readdirSync, statSync, existsSync, unlinkSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const WORKS = join(root, 'src/assets/img/works');
const IMG = join(root, 'src/assets/img');

const SOURCE_EXT = ['.png', '.jpg', '.jpeg'];

async function convert(file, { width, quality = 78, alpha = false }) {
  const target = file.replace(extname(file), '.webp');
  if (existsSync(target) && statSync(target).mtimeMs > statSync(file).mtimeMs) return null;

  const before = statSync(file).size;
  // failOn:'none' tolera JPEG con datos truncados (docap.jpg lo está).
  await sharp(file, { failOn: 'none' })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, alphaQuality: alpha ? 90 : 100, effort: 6 })
    .toFile(target);
  const after = statSync(target).size;

  console.log(
    `  ${file.replace(root + '/', '')} → ${(before / 1024).toFixed(0)} kB → ${(after / 1024).toFixed(0)} kB`
  );
  return { file, before, after };
}

const results = [];

for (const name of readdirSync(WORKS)) {
  if (!SOURCE_EXT.includes(extname(name).toLowerCase())) continue;
  const result = await convert(join(WORKS, name), { width: 1440, quality: 76 });
  if (result) results.push(result);
}

const portrait = join(IMG, 'about.png');
if (existsSync(portrait)) {
  const result = await convert(portrait, { width: 900, quality: 82, alpha: true });
  if (result) results.push(result);
}

// Borra los originales ya convertidos para que no acaben en el repo ni en dist.
for (const { file } of results) {
  unlinkSync(file);
}

const before = results.reduce((sum, r) => sum + r.before, 0);
const after = results.reduce((sum, r) => sum + r.after, 0);
console.log(
  results.length
    ? `\n  ${results.length} imágenes: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB`
    : '\n  Nada que convertir.'
);
