import React from 'react';
import Image from 'next/image';
import { getProductById } from '@/lib/utils';
import { mockProduct } from '@/mocks/mock-product';
import ProductDetails from '@/components/product-details';

export default async function ProductPage({ params }: { params: { id: string } }) {
  // const product = await getProductById(params.id);
  const product = mockProduct;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={'/products/image.png'}
            alt={product.name}
            width={400}
            height={500}
            className="w-full object-cover"
          />
        </div>
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
