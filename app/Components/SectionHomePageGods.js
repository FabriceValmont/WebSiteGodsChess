import React from 'react';
import Image from 'next/image'; 

const SectionHomePageGods = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/Panorama_des_Dieux_IA.png)' }}>
      <p className="text-7xl text-black mx-auto my-14 font-outline-2-white">Dieux</p>
      <div className="text-6xl text-white flex flex-col">
        <p className="text-4xl mx-auto mt-[14rem] font-outline-2-black"> Découvre une multitude de dieux, chacun doté d'un pouvoir unique</p>
      </div>
      <div className="w-full h-screen flex flex-col bg-cover bg-center relative justify-end">
        <button className="text-6xl text-white hover:text-red-500 mb-[10rem] font-outline-2-black">Découvrir les dieux</button>
      </div>
    </div>
  );
}

export default SectionHomePageGods;