import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Enlaces reales (no botones) para que los rastreadores sigan la versión
 * alterna del sitio y para que funcione el clic con el botón central.
 */
export default function LangSwitch() {
  const { t, i18n } = useTranslation();
  const { hash } = useLocation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="topbar__lang" role="group" aria-label={t('a11y.langLabel')}>
      <Link
        to={`/${hash}`}
        className={`topbar__lang-item${isEnglish ? '' : ' is-active'}`}
        hrefLang="es"
        aria-current={isEnglish ? undefined : 'true'}
        aria-label={t('a11y.langToSpanish')}
      >
        ES
      </Link>
      <span aria-hidden="true" className="topbar__lang-sep">
        /
      </span>
      <Link
        to={`/en/${hash}`}
        className={`topbar__lang-item${isEnglish ? ' is-active' : ''}`}
        hrefLang="en"
        aria-current={isEnglish ? 'true' : undefined}
        aria-label={t('a11y.langToEnglish')}
      >
        EN
      </Link>
    </div>
  );
}
