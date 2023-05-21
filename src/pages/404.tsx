import { NotAvailable } from '@/layouts/not-available';

export default function NotFound() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <NotAvailable title="Not Found" description="Page not found" />
    </main>
  );
}
