import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="w-full h-full">
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="w-full h-full" />
      <div className="grid grid-rows-3 gap-4">
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Titre"/>
        <input type="text" placeholder="Ton message"/>
      </div>
    </div>
    
  );
}

export default SectionHomePage;