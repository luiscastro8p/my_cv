import { describe, expect, it } from 'vitest';
import { calculateAge, formatMonthYear, formatPeriod, isoDate } from './dates';

describe('calculateAge', () => {
  it('resta un año si aún no ha sido el cumpleaños', () => {
    expect(calculateAge('1999-10-29', new Date(2026, 7, 17))).toBe(26);
  });

  it('cuenta el año el mismo día del cumpleaños', () => {
    expect(calculateAge('1999-10-29', new Date(2026, 9, 29))).toBe(27);
  });
});

describe('formatPeriod', () => {
  it('usa la etiqueta de actualidad cuando no hay fecha de fin', () => {
    expect(formatPeriod('2022-02', null, 'es-MX', 'Actualidad')).toContain('Actualidad');
  });

  it('formatea el rango en el idioma pedido', () => {
    expect(formatPeriod('2022-02', '2025-07', 'en-US', 'Present')).toBe('Feb 2022 — Jul 2025');
  });

  it('no desplaza el mes por la zona horaria', () => {
    expect(formatMonthYear('2022-01', 'en-US')).toBe('Jan 2022');
  });
});

describe('isoDate', () => {
  it('completa el día en las fechas de mes', () => {
    expect(isoDate('2022-02')).toBe('2022-02-01');
    expect(isoDate('2022-02-15')).toBe('2022-02-15');
  });
});
