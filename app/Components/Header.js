import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black">
        <nav>
          <ul className ="flex items-center justify-between">
            <div className ="flex items-center">
              <Link href="/">
                <Image className="mr-4" src="/New_logo_Dimension.png" alt="Logo GodsChess" width={150} height={75}/>
              </Link>
            <li className="mr-4 text-white text-[24px]">
              <Link href="/">Gameplay</Link>
              </li>
            <li className="mr-4 text-white text-[24px]">
              <Link href="/Dieux">Dieux</Link>
            </li>
            </div>
            <div>
            <Image className="justify-end" src="/Image_compte_T.png" alt="Compte connection" width={100} height={50} />
            </div>
          </ul>
        </nav>
      </header>
  )
}

export default Header