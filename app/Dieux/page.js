import data from '@/data';
import React from 'react'
import CardGod from '../Components/CardGod';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const cardsGods = data.map(item => {
    return (
        <CardGod
            key={item.id}
            item={item}
        />
    )
  })

const Dieux = () => {
    return (
        <div>
          <Header/>
          <h1 className="flex m-2 justify-center items-center text-center text-5xl font-semibold">Dieux et Déesse</h1>
          <div className="m-4 grid grid-cols-5">
            {cardsGods}
          </div>
          <Footer/>
        </div>
      );
    }

export default Dieux