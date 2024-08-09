'use client'

import React from 'react';

interface TabNavigationProps {
  activeTab: 'guide' | 'calculator';
  onTabChange: (tab: 'guide' | 'calculator') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex mb-4">
      <button
        className={`mr-2 px-4 py-2 rounded ${activeTab === 'guide' ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={() => onTabChange('guide')}
      >
        Guía de tallas
      </button>
      <button
        className={`px-4 py-2 rounded ${activeTab === 'calculator' ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={() => onTabChange('calculator')}
      >
        Calcular mi talla
      </button>
    </div>
  );
};

export default TabNavigation;
