import { useState, useEffect } from 'react';
import axiosInstance from '../plugins';
import { Item, ApiResponse } from './interfaceProductDetails';

export const useFetchProductDetails = (id: string | undefined) => {
    const [product, setProduct] = useState<Item | null>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            axiosInstance
                .get<ApiResponse>(`/api/items/${id}`)
                .then(({ data }) => {
                    setProduct(data.item);
                    setBreadcrumbs(data.categories);
                })
                .catch((err) => {
                    console.error(err);
                    setError('Error al encontrar los detalles del producto');
                });
        }
    }, [id]);

    return { product, breadcrumbs, error };
};
