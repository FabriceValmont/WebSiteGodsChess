'use client'

import React from 'react'
import CardItem from '../Components/CardItem';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One} from "@next/font/google"
import useFetch from '../CustomHooks/useFetch';

const BOO = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']

})

const Item = () => {

  const dataItem = useFetch('http://localhost:3000/produits')

  const cardsItems= dataItem.map(item => {
      return (
          <CardItem
              key={item.id}
              item={item}
          />
      )
    })

    return (
        <div className={BOO.className}>
          <Header/>
          <h1 className="flex m-2 justify-center items-center text-center text-5xl font-semibold">Magasin</h1>
          <div className="m-4 grid grid-cols-4">
            {cardsItems}
          </div>
          <Footer/>
        </div>
      );
    }

export default Item