
import { useEffect, useState } from 'react';
import axiosInstance from '../plugins';
import { ApiResponse, Product } from './interface';

export const useFetchProducts = (query: string | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const [error, setError] = useState<{ message: string; code?: string; status?: number } | null>(null);

  useEffect(() => {
    if (query) {
      axiosInstance
        .get<ApiResponse>(`/api/items?q=${query}`) 
        .then(({ data }) => {
            setProducts(data.products.results); 
            setBreadcrumbs(data.categories);
        })
        .catch((err) => {
          console.error(err);
          setError({
            message: err.message || 'Error desconocido',
            status: err.response?.status || 500,
            });
        });
    }
  }, [query]);

  return { products, breadcrumbs, error };
};
