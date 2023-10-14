import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One } from "@next/font/google";
import ProfilUser from '../Components/ProfilUser';

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
});

function page() {
  return (
    <div className={BOO.className}>
        <Header />
        <ProfilUser />
        <Footer />
    </div>
  )
}

export default page