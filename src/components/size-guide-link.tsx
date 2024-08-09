import React from 'react';

interface SizeGuideLinkProps {
  onClick: () => void;
}

const SizeGuideLink: React.FC<SizeGuideLinkProps> = ({ onClick }) => {
  return (
    <button
      className="text-sm text-gray-600 underline mt-2 mb-4"
      onClick={onClick}
    >
      Guía de tallas
    </button>
  );
};

export default SizeGuideLink;
