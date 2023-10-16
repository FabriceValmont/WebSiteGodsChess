'use client'

import React from 'react'
import CardItem from '../Components/CardItem';
import useFetch from '../CustomHooks/useFetch';
import { useSession } from '../CustomHooks/SessionContext';
import Link from 'next/link';

const Item = () => {

  const dataItem = useFetch('http://localhost:3000/products')
  const { isAuthenticated } = useSession();

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
          <div className='flex flex-col items-center'>
            <h1 className="flex m-2 text-5xl font-semibold">Magasin</h1>
            {isAuthenticated ? 
            (<Link href="/Store/NewItem">
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter un article à vendre</button>
            </Link>) 
            : ("")}
          </div>
          <div className="m-4 grid grid-cols-4">
            {cardsItems}
          </div>
        </div>
      );
    }

export default Item