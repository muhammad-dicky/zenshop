export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: string;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    stock: number;
    price: string;
    isFeatured: boolean;
    size: Size;
    subcat: Subcat;
    color: Color;
    images: Image[];
};

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Subcat {
    id: string;
    name: string;
    value: string;
}

export interface Color{ 
    id: string;
    name: string;
    value: string;
}

export interface OrderItem{
    id: string
    orderId: string
    product: Product;
    productId: Product;
    quantity: number;
}


// export interface Order{
//     id: string
//     name: string
//     value: string
//     isPaid: boolean
//     phone: string
//     address: string
//     total: number
// }

export interface Order{
    id: string
    phone: string
    address: string
    product: Product[];
    orderItems: OrderItem[];
    totalPrice: number
    isPaid: boolean
    createdAt: Date
    total: number
}