import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOrders = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const orders = await prisma.order.findMany({
                include: { orderItems: true },
            });
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch orders' });
        }
    } else if (req.method === 'POST') {
        const { userId, total, status, items } = req.body;
        try {
            const order = await prisma.order.create({
                data: {
                    userId,
                    total,
                    status,
                    orderItems: {
                        create: items.map(item => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            price: item.price,
                        })),
                    },
                },
            });
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: 'Unable to create order' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};