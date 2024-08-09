'use client'

import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';
import PriceDisplay from '@/components/price-display';
import ProductFeatures from '@/components/product-features';
import PaymentOptions from '@/components/payment-options';
import SizeSelector from '@/components/size-selector';
import SizeGuideLink from '@/components/size-guide-link';
import QuantitySelector from '@/components/quantity-selector';
import { Product } from '@/types/product'; // Assume you have this type defined

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { name, rating, reviewCount, price, description, features, modelInfo, sizes, stock } = product;
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
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

  return (
    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <div className="mt-2 flex items-center">
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
      <p className="mt-4 text-gray-700">{description}</p>
      <ProductFeatures features={features} />
      <p className="text-sm text-gray-600 mt-4 mb-4">{modelInfo}</p>
      <p className="mt-4 text-gray-600">Stock: {stock}</p>
      <SizeSelector
        sizes={sizes}
        initialSize={selectedSize}
        onSizeChange={handleSizeChange}
      />
      <SizeGuideLink onClick={handleSizeGuideClick} />
      <QuantitySelector
        initialQuantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <PaymentOptions />
      <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
        Add to Cart
      </button>
      {/* You would add your SizeGuideModal here, controlled by isSizeGuideOpen state */}
    </div>
  );
};

export default ProductDetails;
