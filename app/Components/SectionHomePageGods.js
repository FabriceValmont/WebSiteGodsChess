import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/Panorama_des_Dieux_IA.png)' }}>
      <p className="text-7xl text-black mx-auto my-14">Dieux</p>
      <div className="text-6xl text-white flex flex-col">
        <p className="text-4xl mx-auto mt-[14rem]"> Découvre une multitude de dieu avec chacun un pouvoir unique</p>
      </div>
      <div className="w-full h-screen flex flex-col bg-cover bg-center relative justify-end">
        <button className="text-6xl text-white mb-[10rem]">Découvrir les dieux</button>
      </div>
    </div>
  );
}

export default SectionHomePage;