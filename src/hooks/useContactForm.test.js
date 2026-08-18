import { describe, expect, it } from 'vitest';
import { validate } from './useContactForm';

const valid = {
  nombre: 'Ada Lovelace',
  correo: 'ada@example.com',
  descripcion: 'Hola, me gustaría hablar de un proyecto contigo.',
  website: '',
};

describe('validate', () => {
  it('acepta un formulario correcto', () => {
    expect(validate(valid)).toEqual({});
  });

  it('exige los tres campos', () => {
    expect(validate({ nombre: '', correo: '', descripcion: '', website: '' })).toEqual({
      nombre: 'nameRequired',
      correo: 'emailRequired',
      descripcion: 'messageRequired',
    });
  });

  it('rechaza correos mal formados', () => {
    expect(validate({ ...valid, correo: 'ada@example' }).correo).toBe('emailInvalid');
    expect(validate({ ...valid, correo: 'ada.example.com' }).correo).toBe('emailInvalid');
  });

  it('ignora los espacios en blanco al validar', () => {
    expect(validate({ ...valid, nombre: '   ' }).nombre).toBe('nameRequired');
    expect(validate({ ...valid, descripcion: '   corto  ' }).descripcion).toBe('messageTooShort');
  });
});
