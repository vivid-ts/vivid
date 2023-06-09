import Axios from 'axios';
import { router } from '@/router';
import { useGlobalState } from '@/hooks/useGlobalState';
import { api } from '@/config';

export const axios = Axios.create(api.axios);

axios.interceptors.request.use((c) => {
  const token = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line no-param-reassign
    c.headers.Authorization = `Bearer ${token}`;
  }

  return c;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      useGlobalState.getState().currentPage?.id !== 'login'
    ) {
      router.navigate('/login');
    }

    return Promise.reject(error);
  },
);
