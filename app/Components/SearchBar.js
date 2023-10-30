import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mb-4"
        type="text"
        placeholder="Votre recherche..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
