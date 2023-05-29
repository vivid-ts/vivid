import './index.css';

import ReactDOM from 'react-dom/client';
import { Routes } from './router';
import { api } from './config';

const start = async () => {
  if (import.meta.env.DEV && api.enableMocking) {
    const { worker } = await import('@mock');
    await worker.start();
  }

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Routes />,
  );
};

start();
