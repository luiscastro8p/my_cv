import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import TerminalFrame from '@/components/ui/TerminalFrame';
import UiIcon from '@/components/icons/UiIcon';
import './NotFound.css';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="notfound">
      <Helmet>
        <title>{t('notFound.title')}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <TerminalFrame title="404.log" className="notfound__frame">
        <p className="notfound__code">{t('notFound.code')}</p>
        <h1 className="notfound__title">{t('notFound.title')}</h1>
        <p className="notfound__message">{t('notFound.message')}</p>
        <Link className="btn btn--primary" to="/">
          <UiIcon name="arrowRight" size={16} />
          {t('notFound.back')}
        </Link>
      </TerminalFrame>
    </main>
  );
}
