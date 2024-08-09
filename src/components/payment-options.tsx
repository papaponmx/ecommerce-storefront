import React from 'react';

const PaymentOptions: React.FC = () => {
  return (
    <div className="mt-4">
      <p className="mb-2">Paga hasta en 12 quincenas, con</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">kueskipay</button>
      <p className="mt-2 text-blue-600 cursor-pointer">¡Conócenos!</p>
    </div>
  );
};

export default PaymentOptions;
