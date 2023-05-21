import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { User } from '@/plugins/auth';

export const useUser = create(
  combine(
    {
      loading: true,
      data: null as User | null,
    },
    (set) => ({
      setLoading: (loading: boolean) => set({ loading }),
      setData: (data: User | null) => set({ data }),
    }),
  ),
);
