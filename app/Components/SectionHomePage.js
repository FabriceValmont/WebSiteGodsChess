import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = ({ src, alt, width, height }) => {
  return (
    <div>
      <Image src={src} alt={alt} width={width} height={height} objectFit="cover" objectPosition="center" className="w-auto h-auto" />
    </div>
  );
}

export default SectionHomePage;