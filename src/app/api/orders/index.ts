import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

interface OrderItem {
    productId: number;
    quantity: number;
    price: number;
}

export async function GET() {
    try {
        const orders = await prisma.order.findMany({
            include: { orderItems: true },
        });
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Unable to fetch orders' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const { userId, total, status, items } = await req.json();
    try {
        const order = await prisma.order.create({
            data: {
                userId,
                total,
                status,
                orderItems: {
                    create: items.map((item: OrderItem) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
        });
        return NextResponse.json(order, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Unable to create order' }, { status: 500 });
    }
}