import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const profilGod = () => {
    return (
        <div>
          <Header/>
          <div className="w-full flex">
            <img src={"./image_dieux/Déesse_de_la_Téléportation_IA_-_Couleur.png"} width={300} height={150}/>
            <div className="w-full text-center">
                <h1 className="m-2 text-2xl font-black">Déesse de la Téléportation</h1>
                <div>
                    <h2 className="m-2 text-xl font-black">Pouvoir</h2>
                    <div className="flex justify-around m-2">
                         <h3>Passif</h3>
                         <h3>Pion</h3>
                         <h3>Cavalier</h3>
                         <h3>Fou</h3>
                         <h3>Tour</h3>
                         <h3>Reine</h3>
                         <h3>Roi</h3>
                    </div>
                    <div className="m-2">
                        <p>Chaque pièces possèdent sa zone de téléportation. La téléportation est obligatoirement symétrique par rapport à la pièce. Une pièce jouée sur une case comprenant deux zones de téléportation ou plus, la téléportation ne s’effectue pas. Il ne peut y avoir qu’une téléportation au cours d’un mouvement. Les pièces adverses ne peuvent pas activer la téléportation.</p>
                    </div>
                    <div className="m-2 flex justify-center items-center">
                        <img src={"./gif_pouvoir_dieux/Plateau_d'échec_Spécial_gif_passif_1.gif"} width={300}/>
                    </div>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }

export default profilGod