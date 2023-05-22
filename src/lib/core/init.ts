import { useGlobalState } from '@/hooks/useGlobalState';
import { resolve as resolveUser } from '@/plugins/auth';

export const initializeApp = async () => {
  useGlobalState.setState({
    loading: true,
  });

  await resolveUser();

  useGlobalState.setState({
    loading: false,
  });
};
