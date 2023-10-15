import React from 'react';
import dataNews from '@/dataNews';
import CardNew from './CardNew';

const SectionHomePageNews = () => {

  const cardsNews= dataNews.map(item => {
    return (
        <CardNew
            key={item.id}
            item={item}
        />
    )
  })

  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/homePage/News_Image.png)' }}>
        <h1 className='text-5xl text-center mt-10 font-outline-2-white'>Actualitées</h1>
        <div className="m-4 grid grid-cols-3">
          {cardsNews}
        </div>
    </div>
  )}

export default SectionHomePageNews;