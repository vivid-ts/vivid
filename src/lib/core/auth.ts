import { useUser } from '@/hooks/useUser';
import { type User } from '@/plugins/auth';

/**
 * Use this function to define the resolver function for the user.
 *
 * *If you need to update the user's abilities, you can do it here.*
 *
 * @param handler The resolver function for the user.
 */
export const defineResolve = (handler: () => PromiseLike<User | null>) => {
  const resolver = async () => {
    useUser.setState({
      loading: true,
    });

    const user = await handler();

    useUser.setState({
      loading: false,
      data: user,
    });

    return user;
  };

  return resolver;
};

/**
 * Use this function to define the sign out function for the user.
 *
 * *If you need to update the user's abilities, you can do it here.*
 *
 * @param handler The resolver function for the user.
 */
export const defineSignOut = (handler: (user: User) => PromiseLike<void>) => {
  const resolver = async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = useUser.getState().data!;

    useUser.setState({
      loading: true,
    });

    await handler(user);

    useUser.setState({
      loading: false,
      data: null,
    });
  };

  return resolver;
};

/**
 * Use this function to define the sign in function for the user.
 *
 * *If you need to update the user's abilities, you can do it here.*
 *
 * @param handler The resolver function for the user.
 */
export const defineSignIn = <T extends object>(
  handler: (options: T) => PromiseLike<User | null>,
) => {
  const resolver = async (options: T) => {
    useUser.setState({
      loading: true,
    });

    const user = await handler(options);

    useUser.setState({
      loading: false,
      data: user,
    });

    return user;
  };

  return resolver;
};
