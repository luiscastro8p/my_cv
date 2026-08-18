import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from '@/routes/HomePage';
import NotFound from '@/routes/NotFound';

/**
 * El idioma lo manda la ruta. Se aplica durante el render (no en un efecto)
 * para que el HTML del prerender salga ya en el idioma correcto.
 */
function LocaleRoute({ lang, children }) {
  const { i18n } = useTranslation();

  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LocaleRoute lang="es">
            <HomePage />
          </LocaleRoute>
        }
      />
      <Route
        path="/en/*"
        element={
          <LocaleRoute lang="en">
            <HomePage />
          </LocaleRoute>
        }
      />
      {/* La versión española vive en la raíz; /es se conserva por compatibilidad. */}
      <Route path="/es" element={<Navigate to="/" replace />} />
      <Route
        path="*"
        element={
          <LocaleRoute lang="es">
            <NotFound />
          </LocaleRoute>
        }
      />
    </Routes>
  );
}
