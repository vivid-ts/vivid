import type { Meta } from '@/router';

export default function Login() {
  return <section>Login</section>;
}

export const handle: Meta = {
  title: 'Login',
  authedOnly: false,
};
