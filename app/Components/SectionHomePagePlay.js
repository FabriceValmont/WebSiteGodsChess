import React from 'react';
import Image from 'next/image';

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/Fond_site_web1.png)' }}>
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="" />
      <Image src="/New_logo_Dimension.png" alt="Logo" width={750} height={250} objectFit="cover" objectPosition="center" className="mx-auto my-3" />
      <p className="text-5xl text-white text-center">Le jeu d'échec le plus stratégique au monde !</p>
      <div className="relative">
        <Image src="/Bouton_entier.png" alt="Bouton" width={300} height={100} objectFit="cover" objectPosition="center" className="mx-auto my-3" />
        <p className="absolute text-6xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Jouer</p>
      </div>
    </div>
  );
}

export default SectionHomePage;
