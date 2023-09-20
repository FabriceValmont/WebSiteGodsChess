import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[220px] -translate-y-1/2">
        <input type="email" placeholder="E-mail" className="bg-white bg-opacity-90 m-2 p-2 rounded-md w-[500px]" />
        <input type="text" placeholder="Titre" className="bg-white bg-opacity-90 m-2 p-2 rounded-md w-[500px]" />
        <textarea id="message" name="message" className="bg-white bg-opacity-90 m-2 p-2 border rounded-md w-[500px] h-[300px]" placeholder="Ton message" required />
      </div>
    </div>
);
}

export default SectionHomePage;