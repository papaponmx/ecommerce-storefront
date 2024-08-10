import React from 'react';
import ProductComboCard from './card';

const ProductCombosSection: React.FC = () => {
  const handleBuildCombo = (comboName: string) => {
    console.log(`Building combo: ${comboName}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ProductComboCard
        title="DUFFLE BAG MB-40 + 2 TOPS GRATIS"
        subtitle="Compra una Duffle Bag MB-40 y te regalamos dos tops."
        mainProduct={{
          name: "Duffle Bag MB-40",
          quantity: 1,
          images: ['/products/beige_bag.jpg', '/products/black_bag.jpg']
        }}
        freeProducts={{
          name: "TOPS",
          quantity: 2,
          images: ['/products/blue.jpg', '/products/gray.jpg', '/products/blue.jpg']
        }}
        onBuildCombo={() => handleBuildCombo("DUFFLE BAG MB-40 + 2 TOPS")}
      />

      <ProductComboCard
        title="DRY BAG P-15 + 1 TOP GRATIS"
        subtitle="Compra una Dry Bag P-15 y te regalamos un top."
        mainProduct={{
          name: "Dry Bag P-15",
          quantity: 1,
          images: ['/path/to/dry-bag-1.jpg', '/path/to/dry-bag-2.jpg', '/path/to/dry-bag-3.jpg']
        }}
        freeProducts={{
          name: "TOPS",
          quantity: 1,
          images: ['/path/to/top-1.jpg', '/path/to/top-2.jpg', '/path/to/top-3.jpg']
        }}
        onBuildCombo={() => handleBuildCombo("DRY BAG P-15 + 1 TOP")}
      />
    </div>
  );
};

export default ProductCombosSection;
