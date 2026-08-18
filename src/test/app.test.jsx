import { describe, expect, it, beforeEach } from 'vitest';
import { screen, within } from '@testing-library/react';
import { renderApp } from './utils';
import en from '@/i18n/locales/en.json';

/** Todas las rutas de clave del diccionario, p. ej. "hero.ctaResume". */
function flattenKeys(object, prefix = '') {
  return Object.entries(object).flatMap(([key, value]) =>
    value && typeof value === 'object' && !Array.isArray(value)
      ? flattenKeys(value, `${prefix}${key}.`)
      : [`${prefix}${key}`]
  );
}

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

describe('idiomas por ruta', () => {
  it('sirve la versión en español en la raíz', async () => {
    renderApp('/');
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('Luis Castro');
    expect(screen.getByText('Experiencia profesional')).toBeInTheDocument();
    // El puesto se repite en dos empleos de la trayectoria.
    expect(screen.getAllByText('Líder de desarrollo Front-End')).toHaveLength(2);
  });

  it('sirve la versión en inglés en /en', async () => {
    renderApp('/en');
    expect(await screen.findByText('Work experience')).toBeInTheDocument();
    expect(screen.getAllByText('Front-End Development Lead')).toHaveLength(2);
  });

  it('no deja claves de traducción sin resolver', async () => {
    const { container } = renderApp('/en');
    const text = container.textContent;
    const leaked = flattenKeys(en).filter((key) => text.includes(key));
    expect(leaked).toEqual([]);
  });
});

describe('trayectoria', () => {
  it('marca como vigentes los dos puestos simultáneos', async () => {
    renderApp('/');
    // Ochoa (empleo) y Fragmento (freelance) corren en paralelo hoy.
    expect(await screen.findAllByText('En curso')).toHaveLength(2);
    expect(screen.getAllByText('Actualidad', { exact: false })).toHaveLength(2);
  });

  it('etiqueta las colaboraciones freelance para que el solape se entienda', () => {
    renderApp('/');
    expect(screen.getAllByText('Freelance')).toHaveLength(2);
  });

  it('traduce el nombre genérico de los proyectos independientes', () => {
    renderApp('/en');
    expect(screen.getByRole('heading', { name: /Independent projects/ })).toBeInTheDocument();
  });
});

describe('estructura y accesibilidad', () => {
  it('rinde una sola cabecera de nivel 1 y las seis secciones', () => {
    renderApp('/');
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'proyectos', 'contacto'].forEach((id) => {
      expect(document.getElementById(id)).not.toBeNull();
    });
  });

  it('la navegación son botones accesibles por teclado', () => {
    renderApp('/');
    const nav = screen.getByRole('navigation');
    expect(within(nav).getAllByRole('button')).toHaveLength(6);
  });

  it('el enlace de salto apunta al contenido principal', () => {
    renderApp('/');
    expect(screen.getByRole('link', { name: 'Saltar al contenido' })).toHaveAttribute(
      'href',
      '#contenido'
    );
  });
});

describe('404', () => {
  it('muestra la página de error en rutas desconocidas', async () => {
    renderApp('/no-existe');
    expect(await screen.findByText('Página no encontrada')).toBeInTheDocument();
  });
});
