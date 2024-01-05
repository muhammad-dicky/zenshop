import { Category, Product } from "@/types";
import queryString from "query-string";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    subcatId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            subcatId: query.subcatId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        },
    })

    const res = await fetch(url)


    return res.json();
};

export default getProducts; 