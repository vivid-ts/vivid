import { resolve as resolveUser } from '@auth';
import { useGlobalState } from '@/hooks/useGlobalState';

export const initializeApp = async () => {
  useGlobalState.setState({
    loading: true,
  });

  await resolveUser();

  useGlobalState.setState({
    loading: false,
  });
};
