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
      <div className=" w-full h-screen text-3xl text-white flex justify-around items-center mx-auto">
        <div className=" flex flex-col text-center mx-auto">
        <p className="whitespace-normal">Deux Dieux </p>
        <p className="whitespace-normal">Deux pouvoirs unique  </p>
        <p className="whitespace-normal px-16">Pour une bataille tactique épique </p>
        </div>
        <Image src="/Plateau_d'échec_new_clan.png" alt="Plateau d'échec" width={700} height={500} objectFit="cover" objectPosition="center" className="border-8 rounded-lg border-black items-center" />
        <div className=" flex flex-col text-center mx-auto">
        <p className="whitespace-normal px-16">Le mode classique de GodsChess </p>
        <p className="whitespace-normal">Mélanger 6 Dieux/Pouvoirs </p>
        <p className="whitespace-normal">pour encore plus de combinaison </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHomePage;