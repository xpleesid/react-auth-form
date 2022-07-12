import { ContentPage } from 'Pages/Content/ContentPage';
import { NotFoundPage } from 'Pages/NotFound/NotFoundPage';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

render(React.createElement(App), document.getElementById('root'));
