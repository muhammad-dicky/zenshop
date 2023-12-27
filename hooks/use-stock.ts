import { create } from "zustand";

type useStockProps = {
    isTotal: number;
    setIsTotal: (isTotal: number) => void;
  };
  
  const useStock = create<useStockProps>((set) => ({
    isTotal: 1,
    setIsTotal: (isTotal: number) => set({isTotal})
  }));
  
  export default useStock;