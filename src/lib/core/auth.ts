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
export const defineSignOut = (handler: () => PromiseLike<void>) => {
  const resolver = async () => {
    useUser.setState({
      loading: true,
    });

    await handler();

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
export const defineSignIn = (handler: () => PromiseLike<User | null>) => {
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
