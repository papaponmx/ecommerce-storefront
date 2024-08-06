import React from 'react';
import Image from 'next/image';
import { getProductById } from '@/lib/utils';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

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
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-2 flex items-center">
            {/* {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))} */}
            <span className="ml-2 text-sm text-gray-600">(Reviews not implemented)</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="mt-4 text-gray-600">Stock: {product.stock}</p>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
