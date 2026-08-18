import { SOCIAL_ICONS } from './brands';

export default function SocialIcon({ id, size = 22 }) {
  const icon = SOCIAL_ICONS[id];
  if (!icon) return null;

  return (
    <svg
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
