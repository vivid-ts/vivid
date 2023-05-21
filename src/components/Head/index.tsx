import { Helmet } from 'react-helmet-async';

export const Head = ({ children }: { children: React.ReactNode }) => {
  return <Helmet>{children}</Helmet>;
};
