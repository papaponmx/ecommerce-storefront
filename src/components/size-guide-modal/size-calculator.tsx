'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SizeCalculatorProps {
  unit: 'cm' | 'inches';
  onUnitChange: (unit: 'cm' | 'inches') => void;
}

const SizeCalculator: React.FC<SizeCalculatorProps> = ({ unit, onUnitChange }) => {
  const [measurements, setMeasurements] = useState({ chest: '', waist: '', hip: '' });
  const [preferredFit, setPreferredFit] = useState('Regular');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement size calculation logic here
    console.log('Calculating size with:', measurements, preferredFit);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      {['Pecho', 'Cintura', 'Cadera'].map((part) => (
        <div key={part} className="flex items-center">
          <label className="w-24">{part}</label>
          <input
            type="number"
            name={part.toLowerCase()}
            value={measurements[part.toLowerCase() as keyof typeof measurements]}
            onChange={handleInputChange}
            className="flex-grow border rounded px-2 py-1"
            placeholder={`Enter ${part.toLowerCase()} measurement`}
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
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Calcular mi talla
      </button>
    </form>
  );
};

export default SizeCalculator;
