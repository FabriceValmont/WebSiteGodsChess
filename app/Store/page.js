'use client'

import React, { useState, useEffect } from 'react';
import CardItem from '../Components/CardItem';
import useFetch from '../CustomHooks/useFetch';
import { useSession } from '../CustomHooks/SessionContext';
import Link from 'next/link';
import PriceFilter from '../Components/PriceFilter';
import SearchBar from '../Components/SearchBar';

const Item = () => {
  const originalData = useFetch('http://localhost:3000/products');
  const { isAuthenticated } = useSession();
  const [filteredData, setFilteredData] = useState(originalData);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleFilterChange = ({ min, max }) => {
    const minPrice = parseFloat(min);
    const maxPrice = parseFloat(max);

    const updatedFilteredData = originalData.filter((item) => {
      const itemPrice = parseFloat(item.price);
      return (
        (isNaN(minPrice) || itemPrice >= minPrice) &&
        (isNaN(maxPrice) || itemPrice <= maxPrice)
      );
    });

    setFilteredData(updatedFilteredData);
    setIsFilterApplied(true);
  };

  const handleSearch = (query) => {
    const results = originalData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    
    setFilteredData(results);
    setIsFilterApplied(true);
  };

  useEffect(() => {
    setFilteredData(originalData);
    setIsFilterApplied(false);
  }, [originalData]);

  const cardsItems = filteredData.map((item) => {
    return <CardItem key={item.id} item={item} />;
  });

  return (
    <div>
      <div className='flex flex-col items-center'>
        <h1 className="flex m-2 text-5xl font-semibold">Magasin</h1>
        <p className="flex m-2 text-2xl">Filtre</p>
        <SearchBar onSearch={handleSearch}/>
        <PriceFilter onFilterChange={handleFilterChange} />
        {isAuthenticated ? (
          <Link href="/Store/NewItem">
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ajouter un article à vendre
            </button>
          </Link>
        ) : (
          ''
        )}
      </div>
      <div className="m-4 grid grid-cols-5">{cardsItems}</div>
      {isFilterApplied && filteredData.length === 0 && (
        <p>Aucun résultat trouvé pour les critères de filtre spécifiés.</p>
      )}
    </div>
  );
};

export default Item;
