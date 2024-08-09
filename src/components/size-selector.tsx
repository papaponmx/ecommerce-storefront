'use client'

import React, { useState } from 'react';

interface SizeSelectorProps {
  sizes: string[];
  initialSize?: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, initialSize, onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(initialSize || sizes[0]);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
    onSizeChange(size);
  };

  return (
    <div className="mb-4">
      <p className="text-sm font-medium mb-2">Size: {selectedSize}</p>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`w-10 h-10 rounded-full border ${selectedSize === size
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white text-black'
              } flex items-center justify-center text-sm font-medium`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
