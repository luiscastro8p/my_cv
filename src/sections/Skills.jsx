import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/ui/SectionHeading';
import TechIcon from '@/components/icons/TechIcon';
import { techBrandColor } from '@/components/icons/brands';
import { skillGroups, technologies } from '@/data/skills';
import { useReveal } from '@/hooks/useReveal';
import './Skills.css';

function SkillGroup({ group, index }) {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <div className="skills__group reveal" ref={ref} style={{ '--reveal-delay': `${index * 90}ms` }}>
      <h3 className="skills__group-title">
        <span aria-hidden="true">#</span> {t(`skills.groups.${group.id}`)}
      </h3>
      <ul className="skills__list">
        {group.items.map((id) => (
          <li className="skills__item" key={id} style={{ '--brand': techBrandColor(id) }}>
            <TechIcon id={id} size={26} />
            <span>{technologies[id].label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="section" id="habilidades" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          command={t('skills.title')}
          title={t('skills.heading')}
          intro={t('skills.intro')}
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
