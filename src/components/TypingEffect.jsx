import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import './TypingEffect.css';

const TYPE_MS = 65;
const DELETE_MS = 32;
const HOLD_MS = 1600;

/**
 * Escribe y borra una lista de frases en bucle. El texto completo vive siempre
 * en el DOM para lectores de pantalla; sólo la parte visible se anima.
 */
export default function TypingEffect({ phrases }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const current = phrases[index % phrases.length];

    if (!isDeleting && text === current) {
      const timer = setTimeout(() => setIsDeleting(true), HOLD_MS);
      return () => clearTimeout(timer);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((value) => (value + 1) % phrases.length);
      return undefined;
    }

    const timer = setTimeout(
      () => {
        setText((value) =>
          isDeleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1)
        );
      },
      isDeleting ? DELETE_MS : TYPE_MS
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <p className="typing">{phrases[0]}</p>;
  }

  return (
    <p className="typing">
      <span className="visually-hidden">{phrases.join('. ')}</span>
      <span aria-hidden="true">
        {text}
        <span className="typing__caret" />
      </span>
    </p>
  );
}
