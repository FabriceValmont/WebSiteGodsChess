"use client"

import React from 'react'
import ProfilGod from '../../Components/ProfilGod';
import useFetch from '@/app/CustomHooks/useFetch';

const GoddessOfTeleportation = () => {

  const dataProfilGods = useFetch('http://localhost:3000/gods')

    return (
        <div>
          {dataProfilGods[0] && (
          <ProfilGod
            name={dataProfilGods[0].name}
            sprite_god={dataProfilGods[0].sprite_god}
            sprite_sign={dataProfilGods[0].sprite_sign}
            sprite_pawn={dataProfilGods[0].sprite_pawn}
            sprite_knight={dataProfilGods[0].sprite_knight}
            sprite_bishop={dataProfilGods[0].sprite_bishop}
            sprite_rook={dataProfilGods[0].sprite_rook}
            sprite_queen={dataProfilGods[0].sprite_queen}
            sprite_king={dataProfilGods[0].sprite_king}
            explanation_power_passif={dataProfilGods[0].explanation_power_passif}
            explanation_power_pawn={dataProfilGods[0].explanation_power_pawn}
            explanation_power_knight={dataProfilGods[0].explanation_power_knight}
            explanation_power_bishop={dataProfilGods[0].explanation_power_bishop}
            explanation_power_rook={dataProfilGods[0].explanation_power_rook}
            explanation_power_queen={dataProfilGods[0].explanation_power_queen}
            explanation_power_king={dataProfilGods[0].explanation_power_king}
            gif_power_passif={dataProfilGods[0].gif_power_passif}
            gif_power_pawn={dataProfilGods[0].gif_power_pawn}
            gif_power_knight={dataProfilGods[0].gif_power_knight}
            gif_power_bishop={dataProfilGods[0].gif_power_bishop}
            gif_power_rook={dataProfilGods[0].gif_power_rook}
            gif_power_queen={dataProfilGods[0].gif_power_queen}
            gif_power_king={dataProfilGods[0].gif_power_king}
            />)}
        </div>
      );
    }

export default GoddessOfTeleportation