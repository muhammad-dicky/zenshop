// useCartStore.ts
import { create } from 'zustand';

export const useCartStore = create<{
  stock: {
    [id: string]: number;
  };
  setStock: (id: string, newStock: number) => void;
}>((set) => ({
  stock: {},
  setStock: (id: string, newStock: number) =>
    set((state) => ({
      stock: {
        ...state.stock,
        [id]: newStock,
      },
    })),
}));
