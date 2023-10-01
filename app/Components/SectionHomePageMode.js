import React from 'react'; 

const SectionHomePageMode = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: 'url(/homePage/GameBoardScreenWeb.png)' }}>
      <p className="text-7xl text-black mx-auto my-14 font-outline-2-white">Mode</p>
      <div className="flex flex-row ">
        <div className="w-1/4 text-white flex flex-col items-center text-center">
          <p className=" text-6xl">Clan</p>
          <p className="whitespace-normal text-3xl py-[12rem] ">Affronter d'autre joueur avec un pouvoir unique pour chaque clan</p>
        </div>
        <div className="w-1/2 flex flex-col items-center text-center">
          <button className="text-black whitespace-normal text-3xl justify-center font-outline-2-white">Jouer au échec comme vous n'avez jamais joué avec deux nouveaux modes exclusif</button>
          <p className="whitespace-normal text-3xl my-auto">Vidéo </p>
        </div>
        <div className="w-1/4 text-white flex flex-col items-center text-center">
          <p className="text-6xl">Faction</p>
          <p className="whitespace-normal text-3xl my-auto">Le mode classique de GodsChess. Passer stratégiquement au niveau supérieur en combinant le pouvoir de six dieux </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHomePageMode;
