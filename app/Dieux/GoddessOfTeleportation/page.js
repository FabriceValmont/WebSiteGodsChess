import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProfilGod from '../../Components/ProfilGod';

const GoddessOfTeleportation = () => {
    return (
        <div>
          <Header/>
          <ProfilGod
            name="Déesse de la Téléportation"
            sprite_god="../gods/Déesse_de_la_téléportation/Déesse_de_la_Téléportation_IA_-_Couleur.png"
            sprite_sign="../gods/Déesse_de_la_téléportation/Signe_de_la_Téléportation.png"
            sprite_pawn="../gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Pion.png"
            sprite_knight="../gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Cavalier.png"
            sprite_bishop="../gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Fou.png"
            sprite_rook="../gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Tour.png"
            sprite_queen="../gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Reine.png"
            sprite_king="../gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Roi.png"
            explanation_power="Chaque pièces possèdent sa zone de téléportation. La téléportation est obligatoirement symétrique par rapport à la pièce. Une pièce jouée sur une case comprenant deux zones de téléportation ou plus, la téléportation ne s’effectue pas. Il ne peut y avoir qu’une téléportation au cours d’un mouvement. Les pièces adverses ne peuvent pas activer la téléportation."
            gif_power="../gods/Déesse_de_la_téléportation/Plateau_d'échec_Spécial_gif_passif_1.gif"
            />
          <Footer/>
        </div>
      );
    }

export default GoddessOfTeleportation