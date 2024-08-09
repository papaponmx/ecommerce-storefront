'use client'

import React from 'react';

interface MeasurementSliderProps {
  label: string;
  value: string | number;
  min: string | number;
  max: string | number;
}

const MeasurementSlider: React.FC<MeasurementSliderProps> = ({ label, value, min, max }) => {
  const parseValue = (val: string | number): number => {
    return typeof val === 'string' ? parseFloat(val) || 0 : val;
  };

  const numericValue = parseValue(value);
  const numericMin = parseValue(min);
  const numericMax = parseValue(max);

  const percentage = Math.max(0, Math.min(100, ((numericValue - numericMin) / (numericMax - numericMin)) * 100));

  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span>TIGHT</span>
        <span>{label.toUpperCase()}</span>
        <span>LOOSE</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded">
        <div className="absolute left-0 top-0 h-full bg-green-500 rounded" style={{ width: '60%' }}></div>
        <div className="absolute top-full left-0 w-full flex justify-between -mt-1">
          <div className="w-1/3 h-1 bg-red-500"></div>
          <div className="w-1/3 h-1 bg-green-500"></div>
          <div className="w-1/3 h-1 bg-red-500"></div>
        </div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black rounded-full"
          style={{ left: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MeasurementSlider;
