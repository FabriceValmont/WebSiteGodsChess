import React, { useState } from 'react';

const PriceFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ min: minPrice, max: maxPrice });
  };

  return (
    <div>
      <label>Min Price:</label>
      <input
        className="mr-4"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label>Max Price:</label>
      <input
        className="mr-4"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterChange}>Filtrer</button>
    </div>
  );
};

export default PriceFilter;
