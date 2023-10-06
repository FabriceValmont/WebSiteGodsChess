import dataItem from '@/dataItem';
import React from 'react'
import CardItem from '../Components/CardItem';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One} from "@next/font/google"

const BOO = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']

})

const cardsItems= dataItem.map(item => {
    return (
        <CardItem
            key={item.id}
            item={item}
        />
    )
  })

const Item = () => {
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