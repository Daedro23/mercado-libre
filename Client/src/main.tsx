import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.scss';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); 
  root.render(
    // Esta comentado unicamente para desarrollo para evitar el llamado doble de las API 
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
  );
}
