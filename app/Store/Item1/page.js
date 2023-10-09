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

    const dataItem = useFetch('http://localhost:3000/produits')

    return (
        <div className={BOO.className}>
          <Header/>
          {dataItem[0] && (
          <ProfilItem
          image_url={dataItem[0].image_url}
          nom={dataItem[0].nom}
          description={dataItem[0].description}
          prix={dataItem[0].prix}
          />)}
          <Footer/>
        </div>
      );
    }

export default Items1