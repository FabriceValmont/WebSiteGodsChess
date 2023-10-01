import React from 'react'
import dataProfilGods from '@/dataProfilGods';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProfilGod from '@/app/Components/ProfilGod';
import { Black_Ops_One} from "@next/font/google"

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  
  })


const GodOfDeath = () => {

    const data = dataProfilGods
    return (
        <div className={BOO.className}>
          <Header/>
          <ProfilGod
            name={data[1].name}
            sprite_god={data[1].sprite_god}
            sprite_sign={data[1].sprite_sign}
            sprite_pawn={data[1].sprite_pawn}
            sprite_knight={data[1].sprite_knight}
            sprite_bishop={data[1].sprite_bishop}
            sprite_rook={data[1].sprite_rook}
            sprite_queen={data[1].sprite_queen}
            sprite_king={data[1].sprite_king}
            explanation_power_passif={data[1].explanation_power_passif}
            explanation_power_pawn={data[1].explanation_power_pawn}
            explanation_power_knight={data[1].explanation_power_knight}
            explanation_power_bishop={data[1].explanation_power_bishop}
            explanation_power_rook={data[1].explanation_power_rook}
            explanation_power_queen={data[1].explanation_power_queen}
            explanation_power_king={data[1].explanation_power_king}
            gif_power_passif={data[1].gif_power_passif}
            gif_power_pawn={data[1].gif_power_pawn}
            gif_power_knight={data[1].gif_power_knight}
            gif_power_bishop={data[1].gif_power_bishop}
            gif_power_rook={data[1].gif_power_rook}
            gif_power_queen={data[1].gif_power_queen}
            gif_power_king={data[1].gif_power_king}
            />
          <Footer/>
        </div>
      );
    }

export default GodOfDeath