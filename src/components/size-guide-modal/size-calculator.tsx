'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import MeasurementSlider from './measurement-slider';

interface SizeCalculatorProps {
  unit: 'cm' | 'inches';
  onUnitChange: (unit: 'cm' | 'inches') => void;
}

const sizeChart = [
  { size: 'S', chest: [92, 96], waist: [77, 81], hip: [92, 96] },
  { size: 'M', chest: [97, 101], waist: [82, 86], hip: [97, 101] },
  { size: 'L', chest: [102, 106], waist: [87, 91], hip: [101, 106] },
  { size: 'XL', chest: [107, 111], waist: [92, 96], hip: [107, 111] },
];

const SizeCalculator: React.FC<SizeCalculatorProps> = ({ unit, onUnitChange }) => {
  const [measurements, setMeasurements] = useState({ chest: '', waist: '', hip: '' });
  const [preferredFit, setPreferredFit] = useState('Regular');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    calculateSize();
  }, [measurements]);

  const calculateSize = () => {
    const { chest, waist, hip } = measurements;
    if (chest && waist && hip) {
      const chestValue = parseInt(chest);
      const waistValue = parseInt(waist);
      const hipValue = parseInt(hip);

      for (const sizeInfo of sizeChart) {
        if (
          chestValue >= sizeInfo.chest[0] && chestValue <= sizeInfo.chest[1] &&
          waistValue >= sizeInfo.waist[0] && waistValue <= sizeInfo.waist[1] &&
          hipValue >= sizeInfo.hip[0] && hipValue <= sizeInfo.hip[1]
        ) {
          setRecommendedSize(sizeInfo.size);
          return;
        }
      }
      setRecommendedSize('Custom');
    } else {
      setRecommendedSize(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-2">
        <button
          type="button"
          className={`px-3 py-1 rounded ${unit === 'cm' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => onUnitChange('cm')}
        >
          CM
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded ml-2 ${unit === 'inches' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => onUnitChange('inches')}
        >
          INCHES
        </button>
      </div>
      {['chest', 'waist', 'hip'].map((part) => (
        <div key={part} className="flex items-center">
          <label className="w-24">{part.charAt(0).toUpperCase() + part.slice(1)}</label>
          <input
            type="number"
            name={part}
            value={measurements[part as keyof typeof measurements]}
            onChange={handleInputChange}
            className="flex-grow border rounded px-2 py-1"
            placeholder={`Enter ${part} measurement`}
          />
          <span className="ml-2">{unit}</span>
        </div>
      ))}
      <div className="flex items-center">
        <label className="w-24">Fit preferido</label>
        <select
          value={preferredFit}
          onChange={(e) => setPreferredFit(e.target.value)}
          className="flex-grow border rounded px-2 py-1 appearance-none"
        >
          <option>Regular</option>
          <option>Ajustado</option>
          <option>Holgado</option>
        </select>
        <ChevronDown className="ml-2" size={20} />
      </div>

      {recommendedSize && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">We recommend the size:</h3>
          <div className="text-4xl font-bold mb-4">{recommendedSize}</div>

          {['chest', 'waist', 'hip'].map((part) => (
            <MeasurementSlider
              key={part}
              label={part}
              value={parseInt(measurements[part as keyof typeof measurements]) || 0}
              min={sizeChart[0][part as keyof typeof sizeChart[0]][0]}
              max={sizeChart[sizeChart.length - 1][part as keyof typeof sizeChart[0]][1]}
            />
          ))}

          <div className="mt-4">
            <h4 className="font-bold mb-2">See other sizes:</h4>
            <div className="flex items-center">
              <ChevronLeft size={20} />
              <button className="mx-1 px-3 py-1 bg-gray-200 rounded">L</button>
              <button className="mx-1 px-3 py-1 bg-gray-300 rounded font-bold">XL</button>
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-sm text-gray-600">Privacy</a>
      </div>
    </div>
  );
};

export default SizeCalculator;
