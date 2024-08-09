'use client'

import React from 'react';

interface UnitToggleProps {
  unit: 'cm' | 'inches';
  onUnitChange: (unit: 'cm' | 'inches') => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ unit, onUnitChange }) => {
  return (
    <div className="flex mb-4">
      <button
        className={`mr-2 px-4 py-2 rounded ${unit === 'cm' ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={() => onUnitChange('cm')}
      >
        cm
      </button>
      <button
        className={`px-4 py-2 rounded ${unit === 'inches' ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={() => onUnitChange('inches')}
      >
        inches
      </button>
    </div>
  );
};

export default UnitToggle;
