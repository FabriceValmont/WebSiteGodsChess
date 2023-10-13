import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One } from "@next/font/google";
import Login from '../Components/Login';

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
});

const PageLogin = () => {

    return (
        <div className={BOO.className}>
            <Header />
            <Login />
            <Footer />
        </div>
    );
}

export default PageLogin;