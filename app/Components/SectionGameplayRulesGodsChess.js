"use client"

import React from 'react';
import Carrousel from './Carrousel';

const SectionGameplayClan = () => {

  const slides = [
    <div className="bg-black flex text-white">
      <div className="m-8 text-center flex flex-col justify-center align-center items-center">
        <h2 className="p-4 text-3xl font-bold">La règle de l’auto Echec et Mat</h2>
        <p>Si un joueur crée une situation d'échec pour son propre roi lors de son tour,
          alors que c'est au tour de son adversaire ensuite, il se met lui-même en auto-échec et perd le match
        </p>
        <p className="italic mt-4">
          Ici, sur l'image, le joueur ne déplace pas sa Reine du Feu. 
          C'est au tour de l'autre joueur qui convertit la Reine du Feu en Reine de la Secte, laquelle peut donc attaquer directement le Roi du Feu
        </p>
      </div>
      <div className="m-8">
        <img src="/gameplay/Auto_echec.png" alt="Auto echec" width={800}/>
      </div>
    </div>,

    <div className="bg-black flex text-white">
    <div className="m-8 text-center flex flex-col justify-center align-center items-center">
      <h2 className="p-4 text-3xl font-bold">La règle de la limite du terrain</h2>
      <p>Les pouvoirs susceptibles de faire sortir les pièces du terrain ne peuvent être activés que sur les limites droite et gauche du terrain.<br/>
         Les limites supérieure et inférieure ne sont pas impactées par ces pouvoirs, les pièces resteront bloquées à la limite du terrain
      </p>
    </div>
    <div className="m-8">
      <img src="/gameplay/Regle_limite_du_terrain.png" alt="Limite terrain" width={550}/>
    </div>
  </div>,

<div className="bg-black flex text-white">
<div className="m-8 text-center flex flex-col justify-center align-center items-center">
  <h2 className="p-4 text-3xl font-bold">Annulation d’un effet</h2>
  <p>Si une pièce est tuée par un effet de pouvoir ou est mise hors zone (hors du plateau d'échec), l'activation de l'effet du pouvoir de cette pièce est annulée
  </p>
  <p className="italic mt-4">
    Sur la première image, le pion magnétique prend le pion de glace en a5, activant le pouvoir du pion de glace.
  </p>
  <p className="italic mt-4">
    Sur la deuxième image, le cavalier magnétique se déplace en b5, poussant le pion de glace hors du terrain. Dans ce cas, le pouvoir ne s'active pas
  </p>
</div>
<div className="m-8">
  <img src="/gameplay/Effet_annulé.png" alt="Effet annulé" width={650}/>
</div>
</div>,

<div className="bg-black flex text-white">
    <div className="m-8 text-center flex flex-col justify-center align-center items-center">
      <h2 className="p-4 text-3xl font-bold">Mouvement du cavalier</h2>
      <p>Pour éviter l’ambiguïté du déplacement du cavalier pour l’utilisation d’un pouvoir.<br/>
      Le cavalier se déplace sur le plateau de la manière suivante : deux cases dans la même direction (haut, bas, gauche ou droite), puis une case latérale (à droite, à gauche, en haut ou en bas)
      </p>
    </div>
    <div className="m-8">
      <img src="/gameplay/Regle_mouvement_cavalier.png" alt="Mouvement cavalier" width={800}/>
    </div>
  </div>,

<div className="bg-black flex justify-center align-center items-center text-white w-full">
<div className="m-8 text-center flex flex-col justify-center align-center items-center">
  <h2 className="p-4 text-3xl font-bold">Pas d’effet contre le roi</h2>
  <p>Le roi est invulnérable à tous les types d'effets présents dans le jeu
  </p>
</div>
<div className="m-8 translate-x-[10rem]">
  <img src="/gameplay/Effet_Roi.png" alt="Effet Roi" width={470}/>
</div>
</div>,

<div className="bg-black flex text-white w-full">
    <div className="m-8 text-center flex flex-col justify-center align-center items-center">
      <h2 className="p-4 text-3xl font-bold">Echelle de force de GodChess</h2>
      <p> Faction Pion {"<"} Faction Cavalier {"<"} Faction Fou {"<"} Faction Tour {"<"} Faction Reine {"<"} Faction Roi
      </p>
    </div>
    <div className="m-8 translate-x-[3rem]">
      <img src="/gameplay/Regle_échelle_de_force_faction.png" alt="Echelle de force" width={600}/>
    </div>
  </div>,
    
    
  ];

  return (
    <Carrousel slides={slides} />
  );
}

export default SectionGameplayClan;

