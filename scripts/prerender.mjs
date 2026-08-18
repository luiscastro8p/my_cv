/**
 * Prerender de las dos versiones de idioma tras `vite build`.
 *
 * Sin esto el contenido sólo existe si el rastreador ejecuta JavaScript.
 * Con esto, / y /en son HTML estático completo (texto, enlaces y JSON-LD),
 * y el bundle de React hidrata encima al cargar.
 */
import { build } from 'vite';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, '.ssr-build');

const ROUTES = [
  { url: '/', lang: 'es', out: 'index.html' },
  { url: '/en/', lang: 'en', out: 'en/index.html' },
  // Copia en /en.html: hostings que no redirigen /en → /en/ la sirven igual.
  { url: '/en/', lang: 'en', out: 'en.html' },
];

async function buildServerBundle() {
  await build({
    root,
    logLevel: 'warn',
    // react-helmet-async se publica sólo como CommonJS: hay que empaquetarlo
    // en el bundle SSR en lugar de dejarlo como dependencia externa.
    ssr: { noExternal: ['react-helmet-async'] },
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: '.ssr-build',
      emptyOutDir: true,
      ssrEmitAssets: false,
      copyPublicDir: false,
    },
  });
}

function checkAssets(html) {
  // Los hashes del build SSR y del cliente se derivan del contenido, pero si
  // alguno divergiera el HTML apuntaría a un archivo inexistente: lo avisamos.
  const missing = [];
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) {
    if (!existsSync(join(distDir, match[1]))) missing.push(match[1]);
  }
  return missing;
}

async function main() {
  const template = readFileSync(join(distDir, 'index.html'), 'utf8');

  await buildServerBundle();
  const { render } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

  const allMissing = new Set();

  for (const route of ROUTES) {
    const { html, head } = await render(route.url, route.lang);

    const page = template
      .replace('<html lang="es"', `<html lang="${route.lang}"`)
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', html)
      // Helmet serializa la prop de React tal cual (hrefLang); el atributo
      // canónico en HTML es todo en minúsculas.
      .replace(/hrefLang=/g, 'hreflang=');

    checkAssets(page).forEach((asset) => allMissing.add(asset));

    const target = join(distDir, route.out);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, page);
    console.log(`  prerender  ${route.out}  (${route.lang}, ${(page.length / 1024).toFixed(1)} kB)`);
  }

  // GitHub Pages sirve 404.html en rutas desconocidas: usamos la versión
  // española para que el enrutador del cliente resuelva sin pantalla en blanco.
  copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'));
  console.log('  prerender  404.html  (fallback SPA)');

  rmSync(ssrDir, { recursive: true, force: true });

  if (allMissing.size > 0) {
    console.error('\n  Assets referenciados que no existen en dist/:');
    allMissing.forEach((asset) => console.error(`   - ${asset}`));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
