import { useGlobalState } from '@/hooks/useGlobalState';
import { useUser } from '@/hooks/useUser';
import { resolve as resolveUser } from '@/plugins/auth';

export const initializeApp = async () => {
  const user = await resolveUser();

  useUser.setState({
    loading: false,
    data: user,
  });

  useGlobalState.setState({
    loading: false,
  });
};
