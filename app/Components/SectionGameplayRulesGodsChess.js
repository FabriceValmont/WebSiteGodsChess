"use client"

import React from 'react';
import Carrousel from './Carrousel';

const SectionGameplayClan = () => {

  const slides = [
    <img src="/gameplay/Plateau_d'échec_new_clan.png" alt="Image 1" width={150}/>,
    <img src="/homePage/News_Image.png" alt="Image 2" width={150}/>,
    // Ajoutez autant d'éléments que nécessaire
  ];

  return (
    <Carrousel slides={slides} />
  );
}

export default SectionGameplayClan;

