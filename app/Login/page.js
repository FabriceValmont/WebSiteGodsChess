"use client"

import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Black_Ops_One } from "@next/font/google";
import Login from '../Components/Login';
import ProfilUser from '../Components/ProfilUser';

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
});

const PageLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className={BOO.className}>
            <Header />
            {isLoggedIn ? <ProfilUser /> : <Login />}
            <Footer />
        </div>
    );
}

export default PageLogin;