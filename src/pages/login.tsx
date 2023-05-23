import { useForm } from '@mantine/form';
import { Button, TextInput } from '@mantine/core';
import { brand } from '@/config';
import type { Meta } from '@/router';
import { signIn } from '@/plugins/auth';

export default function Login() {
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
    const user = await signIn(values);

    if (!user) {
      form.setErrors({
        name: 'Not allowed',
        password: 'Not allowed',
      });
    }
  });

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

export const handle: Meta = {
  title: 'Login',
  authedOnly: false,
  layout: 'blank',
};
