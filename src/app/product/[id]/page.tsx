import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const prisma = new PrismaClient();

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = await prisma.product.findUnique({
        where: { id },
    });

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <Image src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}