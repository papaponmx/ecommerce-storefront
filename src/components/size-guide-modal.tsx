'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');

  if (!isOpen) return null;

  const sizeChart = [
    { size: 'S', chest: '92 - 96', waist: '77 - 81', hip: '92 - 96' },
    { size: 'M', chest: '97 - 101', waist: '82 - 86', hip: '97 - 101' },
    { size: 'L', chest: '102 - 106', waist: '87 - 91', hip: '101 - 106' },
    { size: 'XL', chest: '107 - 111', waist: '92 - 96', hip: '107 - 111' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Guía de tallas</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex mb-4">
          <button
            className={`mr-2 px-4 py-2 rounded ${unit === 'cm' ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setUnit('cm')}
          >
            cm
          </button>
          <button
            className={`px-4 py-2 rounded ${unit === 'inches' ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setUnit('inches')}
          >
            inches
          </button>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">TALLA</th>
              <th className="py-2 px-4 text-left">Pecho</th>
              <th className="py-2 px-4 text-left">Cintura</th>
              <th className="py-2 px-4 text-left">Cadera</th>
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((row) => (
              <tr key={row.size} className="border-b">
                <td className="py-2 px-4 font-bold">{row.size}</td>
                <td className="py-2 px-4">{row.chest}</td>
                <td className="py-2 px-4">{row.waist}</td>
                <td className="py-2 px-4">{row.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mb-2">* Puedes encontrar tu talla ideal en Culto Apparel basándote en las medidas de la tabla.</p>
        <p className="text-sm text-gray-600 mb-2">* Datos basados en la media de la población mexicana en prendas activewear.</p>
        <p className="text-sm text-gray-600">* Las medidas de la tabla son medidas corporales, no de la prenda.</p>
      </div>
    </div>
  );
};

export default SizeGuideModal;
