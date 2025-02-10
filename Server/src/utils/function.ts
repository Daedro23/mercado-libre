import { Product } from "../interface/product";
import { AvailableFilter } from "../interface/itemsResponse";
const validConditions: Record<string, string> = {
    new: 'Nuevo',
    used: 'Usado',
    refurbished: 'Reacondicionado',
    not_specified: 'Estado sin especificar',
};

export const getCategoryId = (availableFilters: AvailableFilter[]): string | null => {
    if (!availableFilters || availableFilters.length === 0) {
      return null;
    }
  
    const sortedCategories = availableFilters[0].values.sort((a, b) => {
      return b.results - a.results; 
    });
  
    return sortedCategories.length > 0 ? sortedCategories[0].id : null; 
  };

const getDecimals = (price: number) => {
    return +price.toString().split('.')[1] || 0;
};

export const getProductWithDescription = (product: Product, description: string): any => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price), 
        },
        picture: product.pictures[0]?.url || product.thumbnail,
        condition: validConditions[product.condition] || 'Estado desconocido',
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description,
    };
};
