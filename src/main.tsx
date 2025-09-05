import React from 'react';

import App from './App';
import ReactDOM from 'react-dom/client';

import { initGA } from './utils/analytics';

// // Initialize Google Analytics
// initGA();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
