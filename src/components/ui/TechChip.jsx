import TechIcon from '@/components/icons/TechIcon';
import { techBrandColor } from '@/components/icons/brands';
import { technologies } from '@/data/skills';

export default function TechChip({ id, showIcon = true }) {
  const tech = technologies[id];
  if (!tech) return null;

  return (
    <span className="chip" style={{ '--chip-brand': techBrandColor(id) }}>
      {showIcon ? <TechIcon id={id} size={14} /> : null}
      {tech.label}
    </span>
  );
}
