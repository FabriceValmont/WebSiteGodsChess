import React from "react";

const ProfilGod = (props) => {
    return (
        <div>
          <div className="w-full flex">
            <img src={props.sprite_god} width={350} height={175}/>
            <div className="w-full">
                <h1 className="m-2 text-2xl font-black text-center">{props.name}</h1>
                <div className="border-2 border-black m-2">
                    <div className='flex m-2'>
                        <h2 className="flex w-1/6 justify-center items-center text-xl font-black border-2 border-black border-l-0 border-t-0 border-b-0">Pouvoir</h2>
                        <h2 className="flex w-5/6 justify-center items-center text-xl font-black">Faction</h2>
                    </div>
                    <div className="flex justify-around mb-2 border-2 border-black border-r-0 border-l-0">
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-l-0">
                            <h3>Passif</h3>
                            <img src={props.sprite_sign} width={100}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Pion</h3>
                            <img src={props.sprite_pawn} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Cavalier</h3>
                            <img src={props.sprite_knight} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Fou</h3>
                            <img src={props.sprite_bishop} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Tour</h3>
                            <img src={props.sprite_rook} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <h3>Reine</h3>
                            <img src={props.sprite_queen} width={50}/>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-r-0">
                            <h3>Roi</h3>
                            <img src={props.sprite_king} width={50}/>
                        </div>
                    </div>
                    <div className="m-2">
                        <p>{props.explanation_power}</p>
                    </div>
                    <div className="m-2 flex justify-center items-center">
                        <img src={props.gif_power} width={300}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
    }

export default ProfilGod