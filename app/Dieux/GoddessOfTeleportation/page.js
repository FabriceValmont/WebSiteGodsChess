import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const GoddessOfTeleportation = () => {
    return (
        <div>
          <Header/>
          <div className="w-full flex">
            <img src={"./gods/Déesse_de_la_téléportation/Déesse_de_la_Téléportation_IA_-_Couleur.png"} width={350} height={175}/>
            <div className="w-full">
                <h1 className="m-2 text-2xl font-black text-center">Déesse de la Téléportation</h1>
                <div className="border-2 border-black m-2">
                    <div className='flex m-2'>
                        <h2 className="flex w-1/6 justify-center items-center text-xl font-black border-2 border-black border-l-0 border-t-0 border-b-0">Pouvoir</h2>
                        <h2 className="flex w-5/6 justify-center items-center text-xl font-black">Faction</h2>
                    </div>
                    <div className="flex justify-around mb-2 border-2 border-black border-r-0 border-l-0">
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-l-0">
                            <h3>Passif</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Signe_de_la_Téléportation.png"} width={100}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Pion</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Pion.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Cavalier</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Cavalier.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Fou</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Fou.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Tour</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Tour.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Reine</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Reine.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-r-0">
                            <h3>Roi</h3>
                            <img src={"./gods/Déesse_de_la_téléportation/Base_pièce_doubler_-_Roi.png"} width={50}/>
                        </div>
                    </div>
                    <div className="m-2">
                        <p>Chaque pièces possèdent sa zone de téléportation. La téléportation est obligatoirement symétrique par rapport à la pièce. Une pièce jouée sur une case comprenant deux zones de téléportation ou plus, la téléportation ne s’effectue pas. Il ne peut y avoir qu’une téléportation au cours d’un mouvement. Les pièces adverses ne peuvent pas activer la téléportation.</p>
                    </div>
                    <div className="m-2 flex justify-center items-center">
                        <img src={"./gods/Déesse_de_la_téléportation/Plateau_d'échec_Spécial_gif_passif_1.gif"} width={300}/>
                    </div>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }

export default GoddessOfTeleportation