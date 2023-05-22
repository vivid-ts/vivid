import { Button } from '@mantine/core';
import { SmileyXEyes } from '@phosphor-icons/react';
import { useNavigate } from '@/router/utils';

export interface NotAvailableProps {
  title?: string;
  description?: string;
}

export const NotAvailable = ({
  title = 'Not Allowed',
  description = 'You are not allowed to access this resource',
}: NotAvailableProps) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col flex-grow w-full h-full justify-center items-center">
      <SmileyXEyes weight="fill" size={128} className="mb-4 text-base-500" />

      <h1 className="text-3xl mb-1 font-semibold text-base-600 dark:text-base-50">
        {title}
      </h1>
      <p className="text-base-100 mb-12">{description}</p>

      <Button onClick={() => navigate(-1)}>Go back</Button>
    </section>
  );
};
