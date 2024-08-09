'use client'

import React, { useState } from 'react';
import { X, Info } from 'lucide-react';
import TabNavigation from './tab-navigation';
import UnitToggle from './unit-toggle';
import SizeChart from './size-chart';
import SizeCalculator from './size-calculator';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'calculator'>('guide');
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Guía de tallas</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'guide' ? (
          <>
            <UnitToggle unit={unit} onUnitChange={setUnit} />
            <SizeChart unit={unit} />
          </>
        ) : (
          <SizeCalculator unit={unit} onUnitChange={setUnit} />
        )}

        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-sm text-gray-600 flex items-center">
            <Info size={16} className="mr-1" /> Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
