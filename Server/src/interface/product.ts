interface Product {
    id: any;
    title: string;
    currency_id: string;
    price: number;
    pictures: { url: string }[];
    thumbnail: string;
    condition: string | number;
    shipping: { free_shipping: boolean };
    sold_quantity: number;
}

interface ProductDescription {
    plain_text?: string;
}



export { Product, ProductDescription }