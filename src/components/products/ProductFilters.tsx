import React from 'react';

const ProductFilters: React.FC = () => {
  const filters = [
    'All',
    'New Arrivals',
    'Trending',
    'Price: High to Low',
    'Price: Low to High',
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
      <div className="space-x-6">
        {filters.map((filter) => (
          <button
            key={filter}
            className="font-body text-sm tracking-wider hover:text-gray-600 transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <span className="font-body text-sm text-gray-500">Currency:</span>
        <select className="font-body text-sm border-none bg-transparent focus:ring-0">
          <option value="usd">USD</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;