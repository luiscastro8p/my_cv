import { useTranslation } from 'react-i18next';
import UiIcon from '@/components/icons/UiIcon';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="topbar__button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? t('a11y.themeToLight') : t('a11y.themeToDark')}
      title={t('a11y.themeToggle')}
    >
      <UiIcon name={isDark ? 'sun' : 'moon'} size={18} />
    </button>
  );
}
