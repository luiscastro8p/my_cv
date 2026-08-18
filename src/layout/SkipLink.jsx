import { useTranslation } from 'react-i18next';
import './SkipLink.css';

export default function SkipLink() {
  const { t } = useTranslation();
  return (
    <a className="skip-link" href="#contenido">
      {t('a11y.skip')}
    </a>
  );
}
