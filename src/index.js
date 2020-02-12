import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Counter, CounterContext} from './model';

import './index.css';

const counter = new Counter();

ReactDOM.render(
  <CounterContext.Provider value={counter}>
    <App />
  </CounterContext.Provider>,
  document.getElementById('root')
);
