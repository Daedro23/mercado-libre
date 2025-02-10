interface Author {
    name: string;
    lastname: string;
}

interface Price {
    currency: string;
    amount: number;
    decimals: number;
}

interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    description: string;
}

interface ApiResponse {
    author: Author;
    item: Item;
    categories: string[];
}

export interface ProductDetailProps {
    product: Item;
}


export type { ApiResponse, Item }