import { ContentPage } from 'Pages/Content/ContentPage';
import { NotFoundPage } from 'Pages/NotFound/NotFoundPage';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import { LocaleProvider } from 'locales';
import './services/ApiService/ApiService';
import { Page } from 'ui/Page/Page';

const App = () => {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path="/" element={<ContentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </LocaleProvider>
  );
};

render(React.createElement(App), document.getElementById('root'));
