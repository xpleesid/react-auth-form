import React from 'react';
import { render } from 'react-dom';
import style from './App.module.css';

const App = () => {
  return <h1 className={style.main}>Hello, world!</h1>;
};

render(React.createElement(App), document.getElementById('root'));
