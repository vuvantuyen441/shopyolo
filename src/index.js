import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './scss/index.scss';
import {store} from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <Provider  store={store}>
          <App />
      </Provider>
 

);


