'use client'

import React from 'react'
import CardItem from '../Components/CardItem';
import useFetch from '../CustomHooks/useFetch';

const Item = () => {

  const dataItem = useFetch('http://localhost:3000/products')

  const cardsItems= dataItem.map(item => {
      return (
          <CardItem
              key={item.id}
              item={item}
          />
      )
    })

    return (
        <div>
          <h1 className="flex m-2 justify-center items-center text-center text-5xl font-semibold">Magasin</h1>
          <div className="m-4 grid grid-cols-4">
            {cardsItems}
          </div>
        </div>
      );
    }

export default Item