import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// jsdom no implementa estas APIs y el sitio las usa para el tema y los reveals.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}

class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

globalThis.IntersectionObserver = IntersectionObserverMock;
window.IntersectionObserver = IntersectionObserverMock;

window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();
