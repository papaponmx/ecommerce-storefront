'use client'

import { useTheme } from '@/context/theme-context';
import React from 'react';

interface ProductDetailsClientProps {
  children: React.ReactNode;
}

const ProductDetailsClient: React.FC<ProductDetailsClientProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
};

export default ProductDetailsClient;
