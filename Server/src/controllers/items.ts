import { Request, Response } from 'express';
import axiosInstance from '../axios';
import { ItemsResponse } from '../interface/itemsResponse'; 
import { ProductDescription } from "../interface/product";
import author from '../utils/author';
import { getProductWithDescription } from '../utils/function';

export const getProducts = async (req: Request, res: Response) => {
    const query = req.query.q as string; 

    try {
        const { data: products } = await axiosInstance.get<ItemsResponse>(`/sites/MLA/search?q=${query}&limit=4`);
        const { filters } = products;
        let categories = [];

        if (filters.length) {
            const { path_from_root } = filters[0].values[0];
            categories = path_from_root.map((category) => category.name);
        } else {
            console.log('entro')
            const category = products.results[0].category_id
            const { data: categoryData } = await axiosInstance.get(`/categories/${category}`);
            const { path_from_root } = categoryData;
            categories = path_from_root.map((category: { name: string[]; }) => category.name);
        }

        const result = {
            author,
            categories,
            products
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};

export const getProductInfo = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const {data: product} = await axiosInstance.get(`/items/${id}`)
        const { data: categoryData } = await axiosInstance.get(`/categories/${product.category_id}`);
        const { path_from_root } = categoryData;
        const categories = path_from_root.map((cat: { name: any[]; }) => cat.name);
        
        let productDescription: ProductDescription = {};
        try {
            const { data } = await axiosInstance.get(`/items/${id}/description`);
            productDescription = data;
        } catch (err) {
            console.log(err)
        }
        const item = getProductWithDescription(product, productDescription.plain_text || '');
        const formattedObject = { author, item, categories };

        res.json(formattedObject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching product info' });
    }
};
