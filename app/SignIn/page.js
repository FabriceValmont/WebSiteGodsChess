import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One} from "@next/font/google"
import SignIn from '../Components/SignIn';

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  
  })

const PageSignIn = () => {
  return (
    <div className={BOO.className}>
        <Header/>
        <SignIn />
        <Footer/>
    </div>
);
}

export default PageSignIn