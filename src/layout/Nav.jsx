import { useTranslation } from 'react-i18next';
import UiIcon from '@/components/icons/UiIcon';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { SECTIONS, SECTION_IDS } from './sections';
import './Nav.css';

export default function Nav() {
  const { t } = useTranslation();
  const activeId = useScrollSpy(SECTION_IDS);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="nav" aria-label={t('nav.label')}>
      <ul className="nav__list">
        {SECTIONS.map((section) => {
          const label = t(section.labelKey);
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                className={`nav__item${isActive ? ' is-active' : ''}`}
                onClick={() => goTo(section.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <UiIcon name={section.icon} size={21} />
                <span className="nav__tooltip" aria-hidden="true">
                  {label}
                </span>
                <span className="visually-hidden">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
