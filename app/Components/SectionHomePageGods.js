import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/Panorama_des_Dieux_IA.png)' }}>
      <p className="text-7xl text-black mx-auto my-14">Dieux</p>
    </div>
  );
}

export default SectionHomePage;