import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '@/data/profile';

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

// Los nombres de campo son los que espera google-apps-script/Code.gs.
export const EMPTY_FORM = { nombre: '', correo: '', descripcion: '', website: '' };

export const LIMITS = { nombre: 100, correo: 150, descripcion: 3000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(form) {
  const errors = {};

  const name = form.nombre.trim();
  if (!name) errors.nombre = 'nameRequired';
  else if (name.length < 2) errors.nombre = 'nameTooShort';

  const email = form.correo.trim();
  if (!email) errors.correo = 'emailRequired';
  else if (!EMAIL_RE.test(email)) errors.correo = 'emailInvalid';

  const message = form.descripcion.trim();
  if (!message) errors.descripcion = 'messageRequired';
  else if (message.length < 10) errors.descripcion = 'messageTooShort';

  return errors;
}

export function useContactForm() {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [feedback, setFeedback] = useState('');

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setForm((current) => ({ ...current, [name]: value }));
      // Sólo revalidamos en vivo un campo que ya mostró error, para no regañar
      // al usuario mientras todavía está escribiendo por primera vez.
      if (touched[name]) {
        setErrors((current) => ({ ...current, [name]: validate({ ...form, [name]: value })[name] }));
      }
    },
    [form, touched]
  );

  const handleBlur = useCallback(
    (event) => {
      const { name } = event.target;
      setTouched((current) => ({ ...current, [name]: true }));
      setErrors((current) => ({ ...current, [name]: validate(form)[name] }));
    },
    [form]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const nextErrors = validate(form);
      setErrors(nextErrors);
      setTouched({ nombre: true, correo: true, descripcion: true });
      if (Object.keys(nextErrors).length > 0) {
        setStatus('error');
        setFeedback('');
        return;
      }

      if (!ENDPOINT) {
        setStatus('error');
        setFeedback(t('contact.errors.notConfigured', { email: profile.email }));
        return;
      }

      setStatus('sending');
      setFeedback('');

      try {
        // text/plain evita el preflight CORS que Apps Script no responde.
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ ...form, lang: i18n.language }),
        });
        const data = await response.json();

        if (data.ok) {
          setStatus('ok');
          setFeedback(t('contact.success'));
          setForm(EMPTY_FORM);
          setTouched({});
        } else {
          setStatus('error');
          setFeedback(data.error || t('contact.errors.generic'));
        }
      } catch {
        setStatus('error');
        setFeedback(t('contact.errors.network', { email: profile.email }));
      }
    },
    [form, i18n.language, t]
  );

  const fieldError = useCallback(
    (name) => (errors[name] ? t(`contact.errors.${errors[name]}`) : ''),
    [errors, t]
  );

  return useMemo(
    () => ({
      form,
      status,
      feedback,
      fieldError,
      handleChange,
      handleBlur,
      handleSubmit,
      isSending: status === 'sending',
    }),
    [form, status, feedback, fieldError, handleChange, handleBlur, handleSubmit]
  );
}
