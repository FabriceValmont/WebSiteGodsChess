'use client'

import React from 'react'
import useFetch from '@/app/CustomHooks/useFetch';
import ProfilItem from '@/app/Components/ProfilItem';

const Items1 = () => {

    const dataItem = useFetch('http://localhost:3000/products')

    return (
        <div>
          {dataItem[0] && (
          <ProfilItem
          img={dataItem[0].img}
          name={dataItem[0].name}
          description={dataItem[0].description}
          price={dataItem[0].price}
          />)}
        </div>
      );
    }

export default Items1