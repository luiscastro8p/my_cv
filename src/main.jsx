import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from './hooks/useTheme';
import './i18n';

import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/inter';
import './styles/tokens.css';
import './styles/base.css';
import './styles/utilities.css';
import './components/ui/ui.css';

const container = document.getElementById('root');

const tree = (
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);

// El build de producción deja HTML prerenderizado: en ese caso hidratamos.
// Se mira childElementCount y no hasChildNodes porque en desarrollo el marcador
// <!--app-html--> sigue en el DOM y cuenta como nodo hijo.
if (container.childElementCount > 0) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
