import { useForm } from '@mantine/form';
import { Button, TextInput } from '@mantine/core';
import { shallow } from 'zustand/shallow';
import { brand } from '@/config';
import type { HandleFunctionResolver } from '@/router';
import { signIn } from '@/plugins/auth';
import { Navigate, useNavigate } from '@/router/utils';
import { useUser } from '@/hooks/useUser';

export default function Login() {
  const [user, userLoading] = useUser(
    (state) => [state.data, state.loading],
    shallow,
  );

  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    validate: {
      name: (value) => value.trim().length <= 0 && 'Name is required',
      password: (value) => value.trim().length <= 0 && 'Password is required',
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    const u = await signIn(values);

    if (!u) {
      form.setErrors({
        name: 'Not allowed',
        password: 'Not allowed',
      });
    }

    navigate('/');
  });

  if (!userLoading && user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="flex-grow items-center justify-center flex flex-col">
      <img src={brand.logo} alt={brand.name} className="w-24 mb-12 -mt-24" />

      <form onSubmit={onSubmit}>
        <TextInput
          label="Name"
          {...form.getInputProps('name')}
          className="mb-4"
        />
        <TextInput
          label="Password"
          type="password"
          {...form.getInputProps('password')}
        />

        <Button type="submit" className="mt-8" fullWidth>
          Login
        </Button>
      </form>
    </section>
  );
}

export const Handle: HandleFunctionResolver = () => ({
  title: 'Login',
  authedOnly: false,
  layout: 'blank',
});
