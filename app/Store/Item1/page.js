'use client'

import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Black_Ops_One} from "@next/font/google"
import useFetch from '@/app/CustomHooks/useFetch';
import ProfilItem from '@/app/Components/ProfilItem';

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  
  })


const Items1 = () => {

    const dataItem = useFetch('http://localhost:3000/products')

    return (
        <div className={BOO.className}>
          <Header/>
          {dataItem[0] && (
          <ProfilItem
          img={dataItem[0].img}
          name={dataItem[0].name}
          description={dataItem[0].description}
          price={dataItem[0].price}
          />)}
          <Footer/>
        </div>
      );
    }

export default Items1