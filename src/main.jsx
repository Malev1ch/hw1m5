// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      
    </BrowserRouter>
  </ProductProvider>
);
