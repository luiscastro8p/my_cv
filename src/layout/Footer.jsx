import { useTranslation } from 'react-i18next';
import { profile } from '@/data/profile';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__line">
          <span className="footer__sigil" aria-hidden="true">
            $
          </span>
          © {year} {profile.name}. {t('footer.rights')}
        </p>
        <p className="footer__line footer__muted">
          {t('footer.builtWith')}{' '}
          <a href="https://github.com/luiscastro8p/my_cv" target="_blank" rel="noreferrer">
            {t('footer.sourceCode')}
          </a>
        </p>
      </div>
    </footer>
  );
}
