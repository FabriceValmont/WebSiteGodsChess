import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/GameBoardScreenWeb.png)' }}>
      <p className="text-7xl text-black mx-auto my-14">Mode</p>
      <div className=" w-full text-6xl text-white flex justify-around items-start mx-auto">
        <p className="px-[13rem]">Clan</p>
        <button className="text-black whitespace-normal text-3xl justify-center">Jouer au échec comme vous n'avez jamais joué avec deux nouveaux modes unique</button>
        <p className="px-[10rem]">Faction</p>
      </div>
      <div className=" w-full h-screen text-3xl text-white flex justify-evenly items-center mx-auto ">
        <div className="flex flex-col text-center mx-auto">
          <p className="whitespace-normal pl-[6rem] pr-[4rem] ">Affronter d'autre joueur avec un pouvoir unique pour chaque clan</p>
          <p className="whitespace-normal"></p>
          <p className="whitespace-normal"></p>
        </div>
        <div className="w-full ml-[14rem]">
          <Image src="/Plateau_d'échec_new_clan.png" alt="Plateau d'échec" width={700} height={500} objectFit="cover" objectPosition="center" className="border-8 rounded-lg border-black"/>
        </div>
        <div className=" flex flex-col text-center mx-auto">
          <p className="whitespace-normal pl-[10rem] pr-[4rem]">Le mode classique de GodsChess. Passer stratégiquement au niveau supérieur en combinant le pouvoir de six dieux </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHomePage;