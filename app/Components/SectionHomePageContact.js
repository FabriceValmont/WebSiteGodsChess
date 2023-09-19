import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div className="w-full h-full">
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="w-full h-full" />
    </div>
  );
}

export default SectionHomePage;