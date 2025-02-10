interface Author {
    name: string;
    lastname: string;
}


interface BreadcrumbProps {
    categories: string[]; 
  }

interface Condition {
    eligible: boolean;
    context_restrictions: string[];
    start_time: string;
    end_time: string;
}

interface SalePrice {
    price_id: string;
    amount: number;
    conditions: Condition;
    currency_id: string;
    exchange_rate: null;
    payment_method_prices: [];
    payment_method_type: string;
    regular_amount: number;
    type: string;
    metadata: {
        campaign_discount_percentage: number;
        discount_meli_amount: number;
        funding_mode: string;
        promotion_id: string;
        promotion_type: string;
        variation: string;
        campaign_end_date: string;
        campaign_id: string;
        experiment_id: string;
        order_item_price: number;
    };
}

interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: null;
    promise: null;
    shipping_score: number;
}

interface Seller {
    id: number;
    nickname: string;
}

interface AttributeValue {
    id: string;
    name: string;
    struct: {
        number: number;
        unit: string;
    } | null;
    source: number;
}

interface Attribute {
    id: string;
    name: string;
    value_id: string | null;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct: {
        number: number;
        unit: string;
    } | null;
    values: AttributeValue[];
    source: number;
    value_type: string;
}

interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
    metadata: {
        meliplus_installments: boolean;
        additional_bank_interest: boolean;
    };
}

interface Product {
    address: string;
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string;
    listing_type_id: string;
    sanitized_title: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: number;
    sale_price: SalePrice;
    available_quantity: number;
    official_store_id: null;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    shipping: Shipping;
    stop_time: string;
    seller: Seller;
    attributes: Attribute[];
    installments: Installments;
    catalog_listing: boolean;
    discounts: null;
    promotions: [];
    inventory_id: string;
}

interface ApiResponse {
    author: Author;
    categories: string[];
    products: {
        site_id: string;
        country_default_time_zone: string;
        query: string;
        paging: {
            total: number;
            primary_results: number;
            offset: number;
            limit: number;
        };
        results: Product[];
    };
}

export type { ApiResponse, Product, BreadcrumbProps }
