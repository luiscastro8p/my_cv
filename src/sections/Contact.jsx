import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalFrame from '@/components/ui/TerminalFrame';
import UiIcon from '@/components/icons/UiIcon';
import SocialIcon from '@/components/icons/SocialIcon';
import { SOCIAL_LABELS } from '@/components/icons/brands';
import { LIMITS, useContactForm } from '@/hooks/useContactForm';
import { profile } from '@/data/profile';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const { form, status, feedback, fieldError, handleChange, handleBlur, handleSubmit, isSending } =
    useContactForm();

  const renderField = (name, type = 'text') => {
    const error = fieldError(name);
    const labelKey = name === 'nombre' ? 'name' : name === 'correo' ? 'email' : 'message';
    const isTextarea = name === 'descripcion';
    const commonProps = {
      id: name,
      name,
      value: form[name],
      onChange: handleChange,
      onBlur: handleBlur,
      maxLength: LIMITS[name],
      placeholder: t(`contact.form.${labelKey}Placeholder`),
      'aria-invalid': error ? 'true' : undefined,
      'aria-describedby': error ? `${name}-error` : undefined,
      className: error ? 'field__control has-error' : 'field__control',
    };

    return (
      <p className="field">
        <label className="field__label" htmlFor={name}>
          <span className="field__sigil" aria-hidden="true">
            &gt;
          </span>
          {t(`contact.form.${labelKey}`)}
        </label>
        {isTextarea ? <textarea rows="5" {...commonProps} /> : <input type={type} {...commonProps} />}
        {error ? (
          <span className="field__error" id={`${name}-error`}>
            <UiIcon name="alert" size={14} />
            {error}
          </span>
        ) : null}
      </p>
    );
  };

  return (
    <section className="section" id="contacto" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          command={t('contact.title')}
          title={t('contact.heading')}
        />

        <div className="contact__grid">
          <div className="contact__aside">
            <p className="contact__intro">{t('contact.intro')}</p>

            <p className="contact__direct">
              {t('contact.directEmail')}{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>

            <ul className="contact__social">
              {profile.social.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${SOCIAL_LABELS[item.id]} — ${t('a11y.externalLink')}`}
                  >
                    <SocialIcon id={item.id} size={18} />
                    {SOCIAL_LABELS[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <TerminalFrame title="contact.sh" className="contact__terminal">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {renderField('nombre')}
              {renderField('correo', 'email')}
              {renderField('descripcion')}

              {/* Honeypot: invisible para personas, tentador para bots. */}
              <input
                type="text"
                name="website"
                className="honeypot"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div
                className={`contact__status${status === 'ok' ? ' is-ok' : ''}${
                  status === 'error' && feedback ? ' is-error' : ''
                }`}
                role="status"
                aria-live="polite"
              >
                {feedback ? (
                  <>
                    <UiIcon name={status === 'ok' ? 'check' : 'alert'} size={15} />
                    {feedback}
                  </>
                ) : null}
              </div>

              <button type="submit" className="btn btn--primary" disabled={isSending}>
                {isSending ? t('contact.form.sending') : t('contact.form.submit')}
                {!isSending ? <UiIcon name="arrowRight" size={16} /> : null}
              </button>
            </form>
          </TerminalFrame>
        </div>
      </div>
    </section>
  );
}
