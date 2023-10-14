import React from 'react';
import Image from 'next/image';

const SectionGameplayFaction = () => {
  return (
    <div className="flex">
      <div className="m-4">
        <Image className="" src="/gameplay/Plateau_d'échec_new_faction.png" width={850} height={850}/>
      </div>
      <div className="text-center flex flex-col justify-center align-center items-center">
        <h2 className="p-4 text-5xl font-bold">Faction</h2>
        <p className="text-lg m-8">Dans ce mode de jeu, chaque joueur doit choisir six dieux, chacun à leur tour, correspondant à une faction.<br/> La draft s'effectue dans l'ordre suivant : Pion, Cavalier, Fou, Tour, Reine, Roi.<br/> Les joueurs doivent bannir un dieu avant de commencer la sélection</p>
        <p className="text-lg">Combinez les pouvoirs des différents dieux et devenez le <span className="font-bold">GodChess</span>!</p>
      </div>
    </div>
  );
}

export default SectionGameplayFaction;