import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const ProfilGod = () => {
    return (
        <div>
          <Header/>
          <div className="w-full flex">
            <img src={"./gods/Dieu_de_la_mort/Dieu_de_la_Mort_IA_-_Couleur.png"} width={350} height={175}/>
            <div className="w-full">
                <h1 className="m-2 text-2xl font-black text-center">Dieu de la Mort</h1>
                <div className="border-2 border-black m-2">
                    <div className='flex m-2'>
                        <h2 className="flex w-1/6 justify-center items-center text-xl font-black border-2 border-black border-l-0 border-t-0 border-b-0">Pouvoir</h2>
                        <h2 className="flex w-5/6 justify-center items-center text-xl font-black">Faction</h2>
                    </div>
                    <div className="flex justify-around mb-2 border-2 border-black border-r-0 border-l-0">
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-l-0">
                            <h3>Passif</h3>
                            <img src={"./gods/Dieu_de_la_mort/Signe_de_la_Mort.png"} width={100}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Pion</h3>
                            <img src={"./gods/Dieu_de_la_mort/Base_pièce_doubler_-_Pion.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Cavalier</h3>
                            <img src={"./gods/Dieu_de_la_mort/Base_pièce_doubler_-_Cavalier.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Fou</h3>
                            <img src={"./gods/Dieu_de_la_mort/Base_pièce_doubler_-_Fou.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Tour</h3>
                            <img src={"./gods/Dieu_de_la_mort/Base_pièce_doubler_-_Tour.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Reine</h3>
                            <img src={"./gods/Dieu_de_la_mort/Base_pièce_doubler_-_Reine.png"} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-r-0">
                            <h3>Roi</h3>
                            <img src={"./gods/Dieu_de_la_mort/Base_pièce_doubler_-_Roi.png"} width={50}/>
                        </div>
                    </div>
                    <div className="m-2">
                        <p>Lorsqu’une de vos pièces ce fait prendre par une pièces adverses, pose un compte à rebours sur une pièces adverse aléatoirement par rapport à l’échelle de force de GodChess. Le compte à rebours est de 5 tours. La faction pris ne peut poser un compte à rebours seulement sur une faction inférieur à lui (Exception lié à la faction des pions). L’effet de la mort ne s’active que si la pièce se fait prendre seulement.</p>
                    </div>
                    <div className="m-2 flex justify-center items-center">
                        <img src={"./gods/Dieu_de_la_mort/Plateau_d'échec_animation_Mort_passif_1.gif"} width={300}/>
                    </div>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
    }

export default ProfilGod