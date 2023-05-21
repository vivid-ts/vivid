import { useGlobalState } from '@/hooks/useGlobalState';
import { useUser } from '@/hooks/useUser';

export const initializeApp = async () => {
  const resolveUser = useUser.getState().fetch;

  await resolveUser();

  useGlobalState.setState({
    loading: false,
  });
};
