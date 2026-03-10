import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@splidejs/react-splide/css'
import './config/styles/index.css';
import './config/styles/variables.css';
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
