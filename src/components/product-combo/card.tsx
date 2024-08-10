'use client'

import React from 'react';
import Image from 'next/image';

interface ProductItem {
  name: string;
  quantity: number;
  images: string[];
}

interface ProductComboCardProps {
  title: string;
  subtitle: string;
  mainProduct: ProductItem;
  freeProducts: ProductItem;
  onBuildCombo: () => void;
}

const ProductComboCard: React.FC<ProductComboCardProps> = ({
  title,
  subtitle,
  mainProduct,
  freeProducts,
  onBuildCombo
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm inline-block mb-2">
        ¡AHORRA!
      </div>
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-600 mb-4">{subtitle}</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{mainProduct.name}</h3>
            <p className="text-sm text-gray-500">Add {mainProduct.quantity} item</p>
          </div>
          <div className="flex space-x-2">
            {mainProduct.images.map((src, index) => (
              <div key={index} className="w-10 h-10 relative">
                <Image
                  src={src}
                  alt={mainProduct.name}
                  layout="fill"
                  objectFit="fill"
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{freeProducts.name}</h3>
            <p className="text-sm text-gray-500">Add {freeProducts.quantity} item{freeProducts.quantity > 1 ? 's' : ''}</p>
          </div>
          <div className="flex space-x-2">
            {freeProducts.images.map((src, index) => (
              <div key={index} className="w-10 h-10 relative">
                <Image
                  src={src}
                  alt={freeProducts.name}
                  layout="fill"
                  objectFit="fill"
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onBuildCombo}
        className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800 transition duration-300"
      >
        ARMAR COMBO
      </button>
    </div>
  );
};

export default ProductComboCard;
