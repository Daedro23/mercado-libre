interface ItemsResponse {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: Paging;
    results: Result[];
    sort: Sort;
    available_sorts: Sort[];
    filters: Filter[];
    available_filters: AvailableFilter[];
    pdp_tracking: Record<string, unknown>;
    user_context: null | Record<string, unknown>;
  }
  
  interface Paging {
    total: number;
    offset: number;
    limit: number;
    primary_results: number;
  }
  
  interface Result {
    id: string;
    site_id: string;
    title: string;
    price: number;
    currency_id: string;
    available_quantity: number;
    condition: string;
    category_id: string;
    thumbnail: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    shipping: Shipping;
    attributes: Attribute[];
  }
  
  interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  }
  
  interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
  }
  
  interface Attribute {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
  }
  
  interface Sort {
    id: string;
    name: string;
  }
  
  interface Filter {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
  }
  
  interface FilterValue {
    id: string;
    name: string;
    path_from_root: pathFromRootFilterValue[];
  }

  interface pathFromRootFilterValue {
    id: string;
    name: string;
  }
  
  interface AvailableFilter {
    id: string;
    name: string;
    type: string;
    values: AvailableFilterValue[];
  }
  
  interface AvailableFilterValue {
    id: string;
    name: string;
    results: number;
  }
  
  export type { ItemsResponse, AvailableFilter }