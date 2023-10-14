import React from 'react';

const SectionGameplayRules = () => {
  return (
    <div className="h-screen m-4 flex flex-col justify-center text-center">
      <h1 className='text-5xl font-bold'>Comment jouer à GodsChess ?</h1>
      <p className='text-lg p-4 text-center m-8'><span className="font-bold">GodsChess </span>
      conserve les règles classiques des échecs tout en y incorporant des pouvoirs, sans détruire ce qui a été construit.<br/> 
      Au contraire, il apporte une nouvelle dimension avec la division des pièces en factions et un niveau stratégique accru grâce à l'ajout de pouvoirs se jouant de manière passive. 
      Vous devez toujours mettre en échec et mat le roi adverse pour gagner.<br/>  
      Cependant, l'inventivité, l'imagination et la créativité vous permettront de développer votre propre façon de jouer à <span className="font-bold">GodsChess </span>
      </p>
    </div>
  );
}

export default SectionGameplayRules;