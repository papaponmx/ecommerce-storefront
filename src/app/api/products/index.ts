import { PrismaClient, Product } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export const getProducts = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method === 'GET') {
        try {
            const products: Product[] = await prisma.product.findMany();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch products' });
        }
    } else if (req.method === 'POST') {
        const { name, description, price, imageUrl, stock }: Product = req.body;
        try {
            const product: Product = await prisma.product.create({
                data: { name, description, price, imageUrl, stock },
            });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Unable to create product' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};