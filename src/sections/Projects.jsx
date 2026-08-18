import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/ui/SectionHeading';
import TechChip from '@/components/ui/TechChip';
import UiIcon from '@/components/icons/UiIcon';
import ImageModal from '@/components/ImageModal';
import { projects } from '@/data/projects';
import { companyName, experience } from '@/data/experience';
import { useReveal } from '@/hooks/useReveal';
import './Projects.css';

function companyForProject(id, t) {
  const item = experience.find((entry) => entry.id === id);
  return item ? companyName(item, t) : id;
}

function ProjectCard({ project, index, onOpenImage }) {
  const { t } = useTranslation();
  const ref = useReveal();
  const title = t(`projects.items.${project.id}.title`);

  return (
    <li
      className="project reveal"
      ref={ref}
      style={{ '--reveal-delay': `${(index % 3) * 80}ms` }}
    >
      <button
        type="button"
        className="project__media"
        onClick={() => onOpenImage(project.img, title)}
        aria-label={t('a11y.openImage', { name: title })}
      >
        <img src={project.img} alt="" loading="lazy" decoding="async" width={640} height={400} />
        <span className="project__zoom" aria-hidden="true">
          <UiIcon name="grid" size={16} />
        </span>
      </button>

      <div className="project__body">
        <div className="project__head">
          <h3 className="project__title">{title}</h3>
          {project.company ? (
            <p className="project__company">
              {t('projects.atCompany', { company: companyForProject(project.company, t) })}
            </p>
          ) : null}
        </div>

        <p className="project__description">{t(`projects.items.${project.id}.description`)}</p>

        <ul className="project__tech">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechChip id={tech} />
            </li>
          ))}
        </ul>

        {project.url ? (
          <a className="project__link" href={project.url} target="_blank" rel="noreferrer">
            {t('projects.visit')}
            <UiIcon name="external" size={15} />
          </a>
        ) : null}
      </div>
    </li>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [layout, setLayout] = useState('grid');
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState({ open: false, image: null, title: '' });

  const visible = useMemo(
    () => (showAll ? projects : projects.filter((project) => project.featured)),
    [showAll]
  );

  const openImage = (image, title) => setModal({ open: true, image, title });
  const closeImage = () => setModal((current) => ({ ...current, open: false }));

  return (
    <section className="section" id="proyectos" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__top">
          <SectionHeading
            id="projects-title"
            command={t('projects.title')}
            title={t('projects.heading')}
            intro={t('projects.intro')}
          />

          <div className="projects__layout-toggle" role="group" aria-label={t('projects.heading')}>
            <button
              type="button"
              className={`projects__toggle${layout === 'grid' ? ' is-active' : ''}`}
              onClick={() => setLayout('grid')}
              aria-pressed={layout === 'grid'}
              title={t('projects.viewGrid')}
            >
              <UiIcon name="grid" size={17} />
              <span className="visually-hidden">{t('projects.viewGrid')}</span>
            </button>
            <button
              type="button"
              className={`projects__toggle${layout === 'list' ? ' is-active' : ''}`}
              onClick={() => setLayout('list')}
              aria-pressed={layout === 'list'}
              title={t('projects.viewList')}
            >
              <UiIcon name="list" size={17} />
              <span className="visually-hidden">{t('projects.viewList')}</span>
            </button>
          </div>
        </div>

        <ul className={`projects projects--${layout}`}>
          {visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenImage={openImage}
            />
          ))}
        </ul>

        <div className="projects__more">
          <button type="button" className="btn btn--ghost" onClick={() => setShowAll((v) => !v)}>
            {showAll ? t('projects.showLess') : t('projects.showAll', { count: projects.length })}
            <UiIcon name={showAll ? 'close' : 'arrowRight'} size={16} />
          </button>
        </div>
      </div>

      <ImageModal
        isOpen={modal.open}
        image={modal.image}
        title={modal.title}
        onClose={closeImage}
      />
    </section>
  );
}
