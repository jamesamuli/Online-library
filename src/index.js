import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './Assets/Fonts/Fonts.css'
import './index.css';
import store from './logic/store';
import App from './View/Pages/App/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* {store} */}
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);


