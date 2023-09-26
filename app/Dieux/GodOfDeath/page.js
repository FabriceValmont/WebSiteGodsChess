import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProfilGod from '@/app/Components/ProfilGod';

const GodOfDeath = () => {
    return (
        <div>
          <Header/>
          <ProfilGod
            name="Dieu de la Mort"
            sprite_god="../gods/Dieu_de_la_mort/Dieu_de_la_Mort_IA_-_Couleur.png"
            sprite_sign="../gods/Dieu_de_la_mort/Signe_de_la_Mort.png"
            sprite_pawn="../gods/Dieu_de_la_mort/Base_pièce_doubler_-_Pion.png"
            sprite_knight="../gods/Dieu_de_la_mort/Base_pièce_doubler_-_Cavalier.png"
            sprite_bishop="../gods/Dieu_de_la_mort/Base_pièce_doubler_-_Fou.png"
            sprite_rook="../gods/Dieu_de_la_mort/Base_pièce_doubler_-_Tour.png"
            sprite_queen="../gods/Dieu_de_la_mort/Base_pièce_doubler_-_Reine.png"
            sprite_king="../gods/Dieu_de_la_mort/Base_pièce_doubler_-_Roi.png"
            explanation_power="Lorsqu’une de vos pièces ce fait prendre par une pièces adverses, pose un compte à rebours sur une pièces adverse aléatoirement par rapport à l’échelle de force de GodChess. Le compte à rebours est de 5 tours. La faction pris ne peut poser un compte à rebours seulement sur une faction inférieur à lui (Exception lié à la faction des pions). L’effet de la mort ne s’active que si la pièce se fait prendre seulement."
            gif_power="../gods/Dieu_de_la_mort/Plateau_d'échec_animation_Mort_passif_1.gif"
            />
          <Footer/>
        </div>
      );
    }

export default GodOfDeath