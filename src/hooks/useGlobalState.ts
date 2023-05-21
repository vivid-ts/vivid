import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { Page } from './useCurrentPage';

export const useGlobalState = create(
  combine(
    {
      loading: true,

      currentPage: null as Page | null,
    },
    (set) => ({
      setLoading: (loading: boolean) => set({ loading }),

      setCurrentPage: (currentPage: Page | null) => set({ currentPage }),
    }),
  ),
);
