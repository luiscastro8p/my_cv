import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from './utils';

const fill = async (user) => {
  await user.type(screen.getByLabelText(/Nombre y apellido/), 'Ada Lovelace');
  await user.type(screen.getByLabelText(/Correo electrónico/), 'ada@example.com');
  await user.type(screen.getByLabelText(/Mensaje/), 'Hola, me interesa trabajar contigo.');
};

beforeEach(() => {
  window.localStorage.clear();
  vi.stubEnv('VITE_CONTACT_ENDPOINT', 'https://script.google.com/macros/s/test/exec');
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('formulario de contacto', () => {
  it('muestra errores por campo y no llama al endpoint', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    renderApp('/');

    await user.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

    expect(await screen.findByText('Escribe tu nombre.')).toBeInTheDocument();
    expect(screen.getByText('Necesito un correo para responderte.')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre y apellido/)).toHaveAttribute('aria-invalid', 'true');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('envía el mensaje y confirma el resultado', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ json: async () => ({ ok: true }) });
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    renderApp('/');

    await fill(user);
    await user.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

    expect(await screen.findByText(/¡Mensaje enviado!/)).toBeInTheDocument();

    const [, options] = fetchMock.mock.calls[0];
    const payload = JSON.parse(options.body);
    expect(payload).toMatchObject({
      nombre: 'Ada Lovelace',
      correo: 'ada@example.com',
      website: '',
      lang: 'es',
    });
    // El backend en Apps Script no responde al preflight: debe ir como text/plain.
    expect(options.headers['Content-Type']).toMatch(/text\/plain/);
  });

  it('avisa cuando la red falla', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    const user = userEvent.setup();
    renderApp('/');

    await fill(user);
    await user.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

    expect(await screen.findByText(/No se pudo enviar el mensaje/)).toBeInTheDocument();
  });
});
