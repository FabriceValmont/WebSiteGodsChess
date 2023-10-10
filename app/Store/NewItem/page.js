'use client'

import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ItemForm from '../../Components/ItemForm';
import { Black_Ops_One} from "@next/font/google"

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  
  })


const NewItem = () => {

    return (
        <div className={BOO.className}>
          <Header/>
          <ItemForm />
          <Footer/>
        </div>
      );
    }

export default NewItem