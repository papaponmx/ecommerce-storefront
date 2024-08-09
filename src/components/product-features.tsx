import React from 'react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <ul className="list-disc list-inside mb-4">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-700">{feature}</li>
      ))}
    </ul>
  );
};

export default ProductFeatures;
