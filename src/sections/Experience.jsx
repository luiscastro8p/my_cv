import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/ui/SectionHeading';
import TechChip from '@/components/ui/TechChip';
import UiIcon from '@/components/icons/UiIcon';
import { companyName, education, experience } from '@/data/experience';
import { formatMonthYear, formatPeriod, isoDate } from '@/utils/dates';
import { useReveal } from '@/hooks/useReveal';
import './Experience.css';

const INTL_LOCALE = { es: 'es-MX', en: 'en-US' };

function TimelineItem({ item, locale, index }) {
  const { t } = useTranslation();
  const ref = useReveal();
  const bullets = t(`experience.items.${item.id}.bullets`, { returnObjects: true });
  const isCurrent = item.end === null;

  return (
    <li
      className={`timeline__item reveal${isCurrent ? ' is-current' : ''}`}
      ref={ref}
      style={{ '--reveal-delay': `${index * 70}ms` }}
    >
      <span className="timeline__marker" aria-hidden="true" />
      <article className="timeline__card">
        <header className="timeline__header">
          <div>
            <h3 className="timeline__company">
              {companyName(item, t)}
              {item.type === 'freelance' ? (
                <span className="timeline__tag">{t('experience.types.freelance')}</span>
              ) : null}
            </h3>
            <p className="timeline__role">{t(`experience.items.${item.id}.role`)}</p>
          </div>
          <div className="timeline__when">
            <time dateTime={isoDate(item.start)}>
              {formatPeriod(item.start, item.end, locale, t('experience.present'))}
            </time>
            {isCurrent ? (
              <span className="timeline__current">
                <span className="timeline__current-dot" aria-hidden="true" />
                {t('experience.current')}
              </span>
            ) : null}
            <span className="timeline__place">
              <UiIcon name="pin" size={13} />
              {item.location}
            </span>
          </div>
        </header>

        {Array.isArray(bullets) ? (
          <ul className="timeline__bullets">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        <ul className="timeline__tech">
          {item.tech.map((tech) => (
            <li key={tech}>
              <TechChip id={tech} />
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function Experience() {
  const { t, i18n } = useTranslation();
  const locale = INTL_LOCALE[i18n.language] ?? INTL_LOCALE.es;

  return (
    <section className="section" id="experiencia" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          command={t('experience.title')}
          title={t('experience.heading')}
          intro={t('experience.intro')}
        />

        <ol className="timeline">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} locale={locale} index={index} />
          ))}
        </ol>

        <h3 className="experience__subtitle">
          <UiIcon name="graduation" size={19} />
          {t('experience.educationTitle')}
        </h3>
        <ul className="education">
          {education.map((item) => (
            <li className="education__item" key={item.id}>
              <div>
                <p className="education__degree">{t(`experience.education.${item.id}.degree`)}</p>
                <p className="education__school">{item.school}</p>
              </div>
              <time className="education__when" dateTime={isoDate(item.start)}>
                {formatMonthYear(item.start, locale)}
              </time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
