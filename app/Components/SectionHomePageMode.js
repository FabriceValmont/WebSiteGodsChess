import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/GameBoardScreenWeb.png)' }}>
      <p className="text-7xl text-black mx-auto my-14">Mode</p>
      <div className=" w-full text-5xl text-white flex justify-around items-start mx-auto">
        <p>Clan</p>
        <button className="text-black">Voir gameplay</button>
        <p>Faction</p>
      </div>
      <div className=" w-full h-screen text-2xl text-white flex justify-around items-center mx-auto">
        <p>Paragraphe pour le mode clan</p>
        <p className="text-black">Vidéo</p>
        <p>Paragraphe pour le mode faction</p>
      </div>
    </div>
  );
}

export default SectionHomePage;