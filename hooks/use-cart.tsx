import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CardItem extends Product{
    quantity: number;
}

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
    updateStock: (id: string, newStock: number, data: Product) => void;
    totalPrice: number;
};

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if(existingItem){
                return toast("Item already in cart.");
            }

            set({ items: [...get().items, data] });
            
            toast.success("Item added to cart");
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from the cart.");
        },
        removeAll: () => set({ items: [] }),
        updateStock: (id: string, newStock: number, data:Product) => {
                        set({
                            items: get().items.map((item) =>
                            item.id === id ? {...item, quantity: newStock} : item
                            )
                        })
        },
        totalPrice: 0,

    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
);


export default useCart;