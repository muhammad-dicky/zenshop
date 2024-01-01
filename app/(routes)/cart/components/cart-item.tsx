"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import useStock from "@/hooks/use-stock";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { useCartStore } from "./useCartStore";


// interface useCartItemProps {
//     data: Product;
// };

// export const useCartStore = create<{
//     stock: {
//         [id: string]: number;
//     };
//     setStock: (id: string, newStock: number) => void;
// }>((set) => ({
//     stock: {},
//     setStock: (id: string, newStock: number) =>
//     set((state) => ({
//         stock: {
//             ...state.stock,
//             [id]: newStock,
//         },
//     })),
// }));


interface CartItemProps{
    data: Product;
    
};

const CartItem: React.FC<CartItemProps> = ({
    data,
}) => {
    const cart = useCart();

    // ini yg asli
    // const [stock, setStock] = useState(1);
    const {stock, setStock} = useCartStore((state) => ({
        stock: state.stock[data.id] || 1,
        setStock: state.setStock,
    }));
    

    const {isTotal, setIsTotal} = useStock();

   

    const onRemove = () => {
        cart.removeItem(data.id);
    };


  

    // const onStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const newStock = parseInt(event?.target.value, 10);
    //     const clampedStock = Math.max(1, newStock);
    
    //     setStock(clampedStock);
    //     cart.updateStock(data.id, clampedStock); // Update stock in the cart
    //   };
    const onStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStock = parseInt(event?.target.value, 10);
        const clampedStock = Math.max(1, newStock);
    
        setStock(data.id, clampedStock);
        cart.updateStock(data.id, clampedStock, data); // Update stock in the cart
      };

    const totalPrice = parseFloat(data.price) * stock;


    return (  
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.images[0].url} alt={"Product"} className="object-cover object-center"/>
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15}/>} />
                </div>
                
                <div className="relative pr-9 sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>

                   <div>
                    <label htmlFor={`stock-${data.id}`} >
                        Pieces
                    </label>
                    <input 
                    type="number" 
                    id={`stock-${data.id}`}
                    name={`stock-${data.id}`}
                    value={stock}
                    onChange={onStockChange}
                    className="mx-2 border rounded-md p-2 w-16 text-sm"  
                    />
                   </div>

                  <div>
                    Stock: {data.stock}
                  </div>
                

                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>
                    <Currency value={totalPrice}/>
                </div>
            </div>
        </li>
    );
}
 
export default CartItem;