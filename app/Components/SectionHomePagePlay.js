import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="w-full h-full bg-[url('/Fond_site_web1.png')] bg-cover bg-center">
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="" />
      <Image src="/New_logo_Dimension.png" alt="Here" width={1000} height={250} objectFit="cover" objectPosition="center" className="" />
      <p className="relative text-[75px] text-white top-1/2 m-[12rem] transform top-[17rem] left-[17rem]">Jouer</p>
    </div>
  );
}

export default SectionHomePage;