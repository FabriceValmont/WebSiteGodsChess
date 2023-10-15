"use client"

import React from 'react'
import CardGod from '../Components/CardGod';
import useFetch from '@/app/CustomHooks/useFetch';

const Gods = () => {
  
  const dataSelectGods = useFetch('http://localhost:3000/selectionGods')
  
  const cardsGods = dataSelectGods.map(item => {
    return (
        <CardGod
            key={item.id}
            item={item}
        />
    )
  })

    return (
        <div>
          <h1 className="flex m-2 justify-center items-center text-center text-5xl font-semibold">Dieux et Déesse</h1>
          <div className="m-4 grid grid-cols-5">
            {cardsGods}
          </div>
        </div>
      );
    }

export default Gods