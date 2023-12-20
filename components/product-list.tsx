import { Product } from "@/types";
import NoResult from "./ui/no-result";

interface ProductProps {
    title: string;
    items: Product[];
}


const ProductList: React.FC<ProductProps> = ({
    title,items
}) => {
    return ( 
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">
            {title}
            </h3>
            {items.length === 0 && <NoResult/>}
        </div>
     );
}
 
export default ProductList;