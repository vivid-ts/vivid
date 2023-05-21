import { useGlobalState } from '@/hooks/useGlobalState';
import { useUser } from '@/hooks/useUser';
import { resolve as resolveUser } from '@/plugins/auth';

export const initializeApp = async () => {
  useUser.setState({
    loading: true,
  });

  useGlobalState.setState({
    loading: true,
  });

  const user = await resolveUser();

  useUser.setState({
    loading: false,
    data: user,
  });

  useGlobalState.setState({
    loading: false,
  });
};
