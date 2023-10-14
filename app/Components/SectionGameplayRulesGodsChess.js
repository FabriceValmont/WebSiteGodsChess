"use client"

import React from 'react';
import Carrousel from './Carrousel';

const SectionGameplayClan = () => {

  const slides = [
    <div className="bg-black flex text-white">
      <div className="m-4 text-center flex flex-col justify-center align-center items-center">
        <h2 className="p-4 text-3xl font-bold">La règle de l’auto Echec et Mat</h2>
        <p>Si un joueur crée une situation d'échec pour son propre roi lors de son tour,
          alors que c'est au tour de son adversaire ensuite, il se met lui-même en auto-échec et perd le match
        </p>
      </div>
      <div className="m-4">
        <img src="/gameplay/Auto_echec.png" alt="Auto echec" width={600}/>
      </div>
    </div>,

    <div className="bg-black flex text-white">
    <div className="m-4 text-center flex flex-col justify-center align-center items-center">
      <h2 className="p-4 text-3xl font-bold">La règle de la limite du terrain</h2>
      <p>Les pouvoirs qui sont susceptibles de faire sortir les pièces en dehors du terrain par quelconque moyen ne peuvent se faire que par la limite droite et gauche du terrain.
         Les limites haut et bas ne sont pas impacter par les pouvoirs, les pièces resteront bloquer à la limite du terrain
      </p>
    </div>
    <div className="m-4">
      <img src="/gameplay/Regle_limite_du_terrain.png" alt="Limite terrain" width={600}/>
    </div>
  </div>,

<div className="bg-black flex text-white">
<div className="m-4 text-center flex flex-col justify-center align-center items-center">
  <h2 className="p-4 text-3xl font-bold">Annulation d’un effet</h2>
  <p>Si une pièce est tué par un effet d’un pouvoir ou mit hors zone (hors du plateau d’échec) alors l’activation de l’effet du pouvoir de cette pièce est annulé
  </p>
</div>
<div className="m-4">
  <img src="/gameplay/Effet_annulé.png" alt="Effet annulé" width={600}/>
</div>
</div>,

<div className="bg-black flex text-white">
    <div className="m-4 text-center flex flex-col justify-center align-center items-center">
      <h2 className="p-4 text-3xl font-bold">Mouvement du cavalier</h2>
      <p>Pour éviter l’ambiguïté du déplacement du cavalier pour l’utilisation d’un pouvoir. 
        Le cavalier se déplace sur le plateau de la manière suivante, deux cases dans la même direction (haut, bas, gauche, droite) puis une case latérale (haut, bas, gauche, droite)
      </p>
    </div>
    <div className="m-4">
      <img src="/gameplay/Regle_mouvement_cavalier.png" alt="Mouvement cavalier" width={600}/>
    </div>
  </div>,

<div className="bg-black flex text-white">
<div className="m-4 text-center flex flex-col justify-center align-center items-center">
  <h2 className="p-4 text-3xl font-bold">Pas d’effet contre le roi</h2>
  <p>le roi est invulnérable à tout type d’effet présent dans le jeu
  </p>
</div>
<div className="m-4">
  <img src="/gameplay/Effet_Roi.png" alt="Effet Roi" width={600}/>
</div>
</div>,

<div className="bg-black flex text-white">
    <div className="m-4 text-center flex flex-col justify-center align-center items-center">
      <h2 className="p-4 text-3xl font-bold">Echelle de force de GodChess</h2>
      <p> Faction Pion {"<"} Faction Cavalier {"<"} Faction Fou {"<"} Faction Tour {"<"} Faction Reine {"<"} Faction Roi
      </p>
    </div>
    <div className="m-4">
      <img src="/gameplay/Regle_échelle_de_force_faction.png" alt="Echelle de force" width={600}/>
    </div>
  </div>,
    
    
  ];

  return (
    <Carrousel slides={slides} />
  );
}

export default SectionGameplayClan;

