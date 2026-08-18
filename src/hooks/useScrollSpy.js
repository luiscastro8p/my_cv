import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección visible. Usa IntersectionObserver en lugar de
 * recalcular offsets en cada evento de scroll.
 */
export function useScrollSpy(ids, { rootMargin = '-45% 0px -50% 0px' } = {}) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        // Con varias secciones en cuadro gana la primera en orden del documento.
        const next = ids.find((id) => visible.has(id));
        if (next) setActiveId(next);
      },
      { rootMargin, threshold: 0 }
    );

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
