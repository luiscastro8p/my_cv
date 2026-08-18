import { describe, expect, it, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from './utils';

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

describe('modo oscuro', () => {
  it('arranca en claro cuando el sistema no pide oscuro', () => {
    renderApp('/');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('alterna el tema y lo persiste', async () => {
    const user = userEvent.setup();
    renderApp('/');

    await user.click(screen.getByRole('button', { name: 'Activar modo oscuro' }));

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(window.localStorage.getItem('theme')).toBe('dark');
    expect(screen.getByRole('button', { name: 'Activar modo claro' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });

  it('respeta el tema guardado al montar', () => {
    window.localStorage.setItem('theme', 'dark');
    renderApp('/');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
