"use client"

import React from 'react'
import CardGod from '../Components/CardGod';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One} from "@next/font/google"
import useFetch from '@/app/CustomHooks/useFetch';

const BOO = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']

})

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
        <div className={BOO.className}>
          <Header/>
          <h1 className="flex m-2 justify-center items-center text-center text-5xl font-semibold">Dieux et Déesse</h1>
          <div className="m-4 grid grid-cols-5">
            {cardsGods}
          </div>
          <Footer/>
        </div>
      );
    }

export default Gods