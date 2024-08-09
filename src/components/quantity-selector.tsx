'use client'

import React, { useState } from 'react';

interface QuantitySelectorProps {
  initialQuantity?: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev - 1);
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="mb-4">
      <p className="text-sm font-medium mb-2">Cantidad:</p>
      <div className="flex items-center space-x-2">
        <button
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
