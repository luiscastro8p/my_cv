import { TECH_ICONS } from './brands';

export default function TechIcon({ id, size = 20, className }) {
  const icon = TECH_ICONS[id];
  if (!icon) return null;

  return (
    <svg
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
