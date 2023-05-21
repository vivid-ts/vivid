import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Metadata } from '@/components/Metadata';

export default function App() {
  return (
    <HelmetProvider>
      <Metadata />

      <Outlet />
    </HelmetProvider>
  );
}
