
import { useEffect, useState } from 'react';
import axiosInstance from '../plugins';
import { ApiResponse, Product } from './interface';

export const useFetchProducts = (query: string | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

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
          setError('No se pudo cargar la información de los productos.');
        });
    }
  }, [query]);

  return { products, breadcrumbs, error };
};
