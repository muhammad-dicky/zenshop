// useCartStore.ts
import { create } from 'zustand';


// interface CartItem {
//   quantity: number;
//   stock: number;
// }

// export const useCartStore = create<{
//   stock: {
//     [id: string]: number;
//   };
//   setStock: (id: string, newStock: number) => void;
// }>((set) => ({
//   stock: {},
//   setStock: (id: string, newStock: number) =>
//     set((state) => ({
//       stock: {
//         ...state.stock,
//         [id]: newStock,
//       },
//     })),
// }));



interface CartItem {
  quantity: number;
  stock: number;
}

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
