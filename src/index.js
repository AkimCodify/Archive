import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AutoContextProvider from './context/AutoContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AutoContextProvider>
      <App />
    </AutoContextProvider>
  </BrowserRouter>
);