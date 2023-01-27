import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './compontents/App';
import './index.css';

// ========================================

const rootElemnt = document.getElementById('root');
if (!rootElemnt) throw Error;

const root = ReactDOM.createRoot(rootElemnt);

root.render(<App />);
