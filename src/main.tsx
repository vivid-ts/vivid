import './index.css';

import ReactDOM from 'react-dom/client';
import { Routes } from './router';

import '@mock/register';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Routes />,
);
