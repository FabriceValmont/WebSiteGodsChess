import React from 'react';
import Image from 'next/image';

const SectionGameplayClan = () => {
  return (
    <div className="bg-black flex text-white">
      <div className="m-4 text-center flex flex-col justify-center align-center items-center">
        <h2 className="p-4 text-3xl font-bold">Clan</h2>
        <p className="text-lg">Dans ce mode de jeu, vous utilisez le pouvoir passif du dieu choisi pour l’ensemble des pièces contre un autre dieu. Ensuite, à vous de tirer parti de la spécificité de chaque pièce pour vous mener à la victoire !</p>
      </div>
      <div className="m-4">
        <Image className="" src="/gameplay/Plateau_d'échec_new_clan.png" width={1200} height={1200}/>
      </div>
    </div>
  );
}

export default SectionGameplayClan;