import { Trans, useTranslation } from 'react-i18next';
import TypingEffect from '@/components/TypingEffect';
import SocialIcon from '@/components/icons/SocialIcon';
import { SOCIAL_LABELS } from '@/components/icons/brands';
import UiIcon from '@/components/icons/UiIcon';
import TerminalFrame from '@/components/ui/TerminalFrame';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { technologies } from '@/data/skills';
import { yearsOfExperience } from '@/utils/dates';
import resumePdf from '@/assets/portafolio.pdf';
import portrait from '@/assets/img/about.webp';
import './Hero.css';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const years = yearsOfExperience(profile.careerStart);
  const roles = t('hero.roles', { returnObjects: true });

  const stats = [
    { value: `${years}+`, label: t('hero.stats.years') },
    { value: `${projects.length}`, label: t('hero.stats.projects') },
    { value: `${Object.keys(technologies).length}`, label: t('hero.stats.tech') },
  ];

  return (
    <section className="hero section" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          {profile.available ? (
            <p className="badge">
              <span className="badge__dot" aria-hidden="true" />
              {t('hero.available')}
            </p>
          ) : null}

          <p className="hero__greeting">{t('hero.greeting')}</p>
          <h1 className="hero__name" id="hero-title">
            {t('hero.name')}
          </h1>
          <TypingEffect phrases={Array.isArray(roles) ? roles : [String(roles)]} />

          <p className="hero__summary">
            <Trans
              i18nKey="hero.summary"
              values={{ years }}
              components={{
                1: <strong className="hero__mark" />,
                3: <strong className="hero__mark" />,
                5: <strong className="hero__mark" />,
              }}
            />
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={resumePdf} target="_blank" rel="noreferrer">
              <UiIcon name="download" size={17} />
              {t('hero.ctaResume')}
            </a>
            <a className="btn btn--ghost" href="#contacto">
              <UiIcon name="mail" size={17} />
              {t('hero.ctaContact')}
            </a>
          </div>

          <ul className="hero__social">
            {profile.social.map((item) => (
              <li key={item.id}>
                <a
                  className="hero__social-link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${SOCIAL_LABELS[item.id]} — ${t('a11y.externalLink')}`}
                >
                  <SocialIcon id={item.id} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__aside">
          <TerminalFrame title={`${profile.shortName.toLowerCase().replace(' ', '-')} — zsh`}>
            <div className="hero__portrait">
              <img
                src={portrait}
                alt={t('meta.ogAlt')}
                width={420}
                height={560}
                fetchpriority="high"
                decoding="async"
              />
            </div>
            <dl className="hero__meta">
              <div>
                <dt>location</dt>
                <dd>
                  <UiIcon name="pin" size={14} /> {profile.city}
                </dd>
              </div>
              <div>
                <dt>lang</dt>
                <dd>{i18n.language === 'en' ? 'Spanish (native) · English' : 'Español · Inglés'}</dd>
              </div>
            </dl>
          </TerminalFrame>

          <ul className="hero__stats">
            {stats.map((stat) => (
              <li key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
