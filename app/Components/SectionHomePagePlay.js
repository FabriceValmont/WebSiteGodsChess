import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="w-full h-full">
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform translate-y-[24rem] transform -translate-x-[7rem]">
      <p className="text-white text-[75px]"> Jouer</p>
      </div>
    </div>
  );
}

export default SectionHomePage;