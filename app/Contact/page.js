import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One} from "@next/font/google"
import Contact from '../Components/Contact';

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  
  })

const PageContact = () => {
  return (
    <div className={BOO.className}>
      <Header/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default PageContact