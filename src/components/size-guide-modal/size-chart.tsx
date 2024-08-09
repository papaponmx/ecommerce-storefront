'use client'

import React from 'react';

interface SizeChartProps {
  unit: 'cm' | 'inches';
}

const SizeChart: React.FC<SizeChartProps> = ({ unit }) => {
  const sizeChart = [
    { size: 'S', chest: '92 - 96', waist: '77 - 81', hip: '92 - 96' },
    { size: 'M', chest: '97 - 101', waist: '82 - 86', hip: '97 - 101' },
    { size: 'L', chest: '102 - 106', waist: '87 - 91', hip: '101 - 106' },
    { size: 'XL', chest: '107 - 111', waist: '92 - 96', hip: '107 - 111' },
  ];

  return (
    <>
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
    </>
  );
};

export default SizeChart;
