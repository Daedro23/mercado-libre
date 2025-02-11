import { useState, useEffect } from 'react';
import axiosInstance from '../plugins';
import { Item, ApiResponse } from './interfaceProductDetails';

export const useFetchProductDetails = (id: string | undefined) => {
    const [product, setProduct] = useState<Item | null>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
    const [error, setError] = useState<{ message: string; code?: string; status?: number } | null>(null);

    useEffect(() => {
        if (id) {
            axiosInstance
                .get<ApiResponse>(`/api/items/${id}`)
                .then(({ data }) => {
                    setProduct(data.item);
                    setBreadcrumbs(data.categories);
                })
                .catch((err) => {
                    setError({
                        message: err.message || 'Error desconocido',
                        status: err.response?.status || 500,
                    });
                });
        }}, [id]);

    return { product, breadcrumbs, error };
};
