import React from 'react';

interface PriceDisplayProps {
  price: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  return (
    <p className="text-2xl font-bold mb-4">$ {price.toFixed(2)}</p>
  );
};

export default PriceDisplay;
