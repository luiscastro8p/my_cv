import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from './hooks/useTheme';
import i18n from './i18n';

import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/inter';
import './styles/tokens.css';
import './styles/base.css';
import './styles/utilities.css';
import './components/ui/ui.css';

/** Renderiza una ruta a HTML estático para el prerender del build. */
export async function render(url, lang) {
  await i18n.changeLanguage(lang);

  const helmetContext = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <ThemeProvider>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;
  const head = [
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  return { html, head, htmlAttributes: helmet?.htmlAttributes?.toString() ?? '' };
}
