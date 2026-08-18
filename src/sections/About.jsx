import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/ui/SectionHeading';
import UiIcon from '@/components/icons/UiIcon';
import { profile } from '@/data/profile';
import { calculateAge, yearsOfExperience } from '@/utils/dates';
import { useReveal } from '@/hooks/useReveal';
import './About.css';

export default function About() {
  const { t } = useTranslation();
  const ref = useReveal();
  const age = calculateAge(profile.birthDate);
  const years = yearsOfExperience(profile.careerStart);

  const facts = [
    { key: 'name', value: profile.name },
    { key: 'age', value: t('about.facts.ageValue', { count: age }) },
    { key: 'location', value: `${profile.city}, ${profile.country}` },
    { key: 'experience', value: t('about.facts.experienceValue', { count: years }) },
    { key: 'email', value: profile.email, href: `mailto:${profile.email}` },
    {
      key: 'availability',
      value: t('about.facts.availabilityValue'),
      accent: profile.available,
    },
  ];

  return (
    <section className="section" id="sobre-mi" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" command={t('about.title')} title={t('about.heading')} />

        <div className="about__grid reveal" ref={ref}>
          <div className="about__bio">
            <p>{t('about.bio')}</p>
            <p>{t('about.bio2')}</p>
          </div>

          <dl className="about__facts">
            {facts.map((fact) => (
              <div className="about__fact" key={fact.key}>
                <dt>{t(`about.facts.${fact.key}`)}</dt>
                <dd className={fact.accent ? 'is-accent' : undefined}>
                  {fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}
                  {fact.accent ? <UiIcon name="check" size={14} /> : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
