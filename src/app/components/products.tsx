'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <Image src={product.imageUrl} alt={product.name} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;