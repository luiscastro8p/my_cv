import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { profile, SITE_URL } from '@/data/profile';
import { companyName, currentRoles, education } from '@/data/experience';
import { projects } from '@/data/projects';
import { technologies } from '@/data/skills';
import { yearsOfExperience } from '@/utils/dates';

// Con barra final: así es como los hostings estáticos (GitHub Pages incluido)
// sirven un directorio; sin ella responden con un 301 a esta misma URL.
const PATHS = { es: '/', en: '/en/' };

export default function Seo() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const years = yearsOfExperience(profile.careerStart);

  const title = t('meta.title');
  const description = t('meta.description', { years });
  const canonical = `${SITE_URL}${PATHS[lang] ?? PATHS.es}`;
  const ogImage = `${SITE_URL}/og-image.png`;

  const roles = t('hero.roles', { returnObjects: true });
  const jobTitle = Array.isArray(roles) ? roles[0] : String(roles);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.shortName,
    url: SITE_URL,
    image: ogImage,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    jobTitle,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Mochis',
      addressRegion: 'Sinaloa',
      addressCountry: 'MX',
    },
    alumniOf: education.map((item) => ({
      '@type': 'CollegeOrUniversity',
      name: item.school,
    })),
    // Sólo los puestos vigentes van en worksFor; los anteriores no, porque
    // worksFor significa "trabaja ahí ahora".
    worksFor: currentRoles.map((item) => ({
      '@type': 'Organization',
      name: companyName(item, t),
    })),
    hasOccupation: {
      '@type': 'Occupation',
      name: jobTitle,
      occupationLocation: { '@type': 'City', name: 'Los Mochis' },
      skills: Object.values(technologies)
        .map((tech) => tech.label)
        .join(', '),
    },
    knowsAbout: Object.values(technologies).map((tech) => tech.label),
    knowsLanguage: ['es', 'en'],
    sameAs: profile.social.map((item) => item.url),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: profile.name,
    url: SITE_URL,
    inLanguage: lang,
    author: { '@type': 'Person', name: profile.name },
    about: projects.map((project) => t(`projects.items.${project.id}.title`)),
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />
      <link rel="canonical" href={canonical} />

      <link rel="alternate" hrefLang="es" href={`${SITE_URL}/`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={profile.shortName} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_MX'} />
      <meta property="og:locale:alternate" content={lang === 'en' ? 'es_MX' : 'en_US'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t('meta.ogAlt')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
