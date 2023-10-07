import React from 'react';
import Image from 'next/image';

const SectionGameplayFaction = () => {
  return (
    <div className="flex">
      <div className="m-4">
        <Image className="" src="/gameplay/Plateau_d'échec_new_clan.png" width={1300} height={1300}/>
      </div>
      <div className="m-4 text-center flex flex-col justify-center align-center items-center">
        <h2 className="p-4 text-3xl font-bold">Faction</h2>
        <p className="text-lg">Dans ce mode de jeu, chaque joueur doit choisir six dieux, chacun à leur tour, correspondant à une faction. La draft s'effectue dans l'ordre suivant : Pion, Cavalier, Fou, Tour, Reine, Roi. Les joueurs doivent bannir un dieu avant de commencer la sélection.</p>
        <p className="text-lg">Combinez les pouvoirs des différents dieux et devenez le <span className="font-bold">GodChess</span>!</p>
      </div>
    </div>
  );
}

export default SectionGameplayFaction;