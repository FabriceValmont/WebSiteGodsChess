"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  
  return (
    <header className="bg-black sticky top-0 z-10">
        <nav>
          <ul className ="flex items-center justify-between">
            <div className ="flex items-center">
              <Link href="/">
                <Image className="mr-4" src="/header/New_logo_Dimension.png" alt="Logo GodsChess" width={150} height={75}/>
              </Link>
            <li className="mr-4 text-white text-[24px]">
              <Link href="/">Gameplay</Link>
              </li>
            <li className="mr-4 text-white text-[24px]">
              <Link href="/Gods">Dieux</Link>
            </li>
            <li className="mr-4 text-white text-[24px]">
              <Link href="/Contact">Contact</Link>
            </li>
            </div>
            <div className="flex items-center">
            <li className="mr-4 text-white text-[14px]">
            <Link href="/SignIn">Inscription</Link>
            </li>
              <Link href="/Login">           
              <Image className="justify-end" src="/header/Image_compte_T.png" alt="Compte connexion" width={100} height={50} />
              </Link>
            </div>
          </ul>
        </nav>
      </header>
  )
}

export default Header