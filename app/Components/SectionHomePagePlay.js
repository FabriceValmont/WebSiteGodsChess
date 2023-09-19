import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="w-full h-full">
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="w-full h-full" />
      <img className="absolute left-1/2 transform -translate-x-1/2 top-60 w-[50%] sm:w-[50%] md:w-[50%] lg:w-[50%]" src='/New_logo_Dimension.png'/>
      <div>
      <p className="absolute transform translate-x-1/2 top-[42rem] w-[50%] sm:w-[50%] md:w-[50%] lg:w-[50%] text-white text-[60px] text-center ">Le jeu d’échec le plus stratégique au monde !</p>
      </div>
    </div>
  );
}

export default SectionHomePage;