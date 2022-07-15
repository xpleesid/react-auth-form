import { ContentPage } from 'Pages/Content/ContentPage';
import { NotFoundPage } from 'Pages/NotFound/NotFoundPage';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import { LocaleProvider } from 'locales';
import './services/ApiService/ApiService';
import { Page } from 'ui/Page/Page';
import { isLoggedIn } from 'services/AuthService/AuthService';
import { AuthPage } from 'Pages/Auth/AuthPage';
import { RecoverPasswordPage } from 'Pages/RecoverPassword/RecoverPassword';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(isLoggedIn());

  React.useEffect(() => {
    const handleStorageEvent = () => {
      setLoggedIn(isLoggedIn());
    };

    window.addEventListener('storage', handleStorageEvent);

    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <BrowserRouter>
          <Page>
            <Routes>
              <Route path="/" element={loggedIn ? <ContentPage /> : <AuthPage />} />
              <Route path="/recover-password" element={<RecoverPasswordPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Page>
        </BrowserRouter>
      </LocaleProvider>
    </QueryClientProvider>
  );
};

render(React.createElement(App), document.getElementById('root'));
