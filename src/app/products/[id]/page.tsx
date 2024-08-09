import React, { useState } from 'react';
import Image from 'next/image';
import { getProductById } from '@/lib/utils';
import { StarIcon } from 'lucide-react';
import { mockProduct } from '@/mocks/mock-product';
import PriceDisplay from '@/components/price-display';
import ProductFeatures from '@/components/product-features';
import PaymentOptions from '@/components/payment-options';
import SizeSelector from '@/components/size-selector';
import SizeGuideLink from '@/components/size-guide-link';
import QuantitySelector from '@/components/quantity-selector';


export default async function ProductPage({ params }: { params: { id: string } }) {
  // const product = await getProductById(params.id);
  const product = mockProduct;
  const { name, rating, reviewCount, price, description, features, modelInfo } = product;
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleSizeGuideClick = () => {
    setIsSizeGuideOpen(true);
  };

  const closeSizeGuide = () => {
    setIsSizeGuideOpen(false);
  };


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

          <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({reviewCount})</span>
            </div>
            <PriceDisplay price={price} />
            <p className="text-gray-700 mb-4">{description}</p>
            <ProductFeatures features={features} />
            <p className="text-sm text-gray-600 mt-4 mb-4">{modelInfo}</p>
            <PaymentOptions />
            <QuantitySelector
              initialQuantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <SizeSelector
              sizes={product.sizes}
              initialSize={selectedSize}
              onSizeChange={handleSizeChange}
            />
            <SizeGuideLink onClick={handleSizeGuideClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
