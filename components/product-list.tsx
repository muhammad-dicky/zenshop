import { Product } from "@/types";
import NoResult from "./ui/no-result";
import Container from "./ui/container";
import ProductCard from "./ui/product-card";

interface ProductProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductProps> = ({ title, items }) => {
  return (
    <div className="m-5 space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items?.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
