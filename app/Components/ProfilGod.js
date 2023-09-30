"use client"
import React from "react";

const ProfilGod = (props) => {

    const [textExplain, setTextExplain] = React.useState(props.explanation_power_passif)
    const [gifExplain, setgifExplain] = React.useState(props.gif_power_passif)
    
    function passifClick () {
        if (textExplain != props.explanation_power_passif){
            setTextExplain(props.explanation_power_passif)
            setgifExplain(props.gif_power_passif)
        }
    }

    function pawnClick () {
        if (textExplain != props.explanation_power_pawn){
            setTextExplain(props.explanation_power_pawn)
            setgifExplain(props.gif_power_pawn) 
        }
    }

    function knightClick () {
        if (textExplain != props.explanation_power_knight){
            setTextExplain(props.explanation_power_knight)
            setgifExplain(props.gif_power_knight)
        }
    }

    function bishopClick () {
        if (textExplain != props.explanation_power_bishop){
            setTextExplain(props.explanation_power_bishop)
            setgifExplain(props.gif_power_bishop)
        }
    }

    function rookClick () {
        if (textExplain != props.explanation_power_rook){
            setTextExplain(props.explanation_power_rook)
            setgifExplain(props.gif_power_rook)
        }
    }

    function queenClick () {
        if (textExplain != props.explanation_power_queen){
            setTextExplain(props.explanation_power_queen)
            setgifExplain(props.gif_power_queen)
        }
    }

    function kingClick () {
        if (textExplain != props.explanation_power_king){
            setTextExplain(props.explanation_power_king)
            setgifExplain(props.gif_power_king)
        }
    }

    return (
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
                            <button onClick={passifClick} className="w-full flex flex-col justify-center items-center">
                            <h3>Passif</h3>
                            <img src={props.sprite_sign} width={100}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={pawnClick} className="w-full flex flex-col justify-center items-center">
                                <h3>Pion</h3>
                                <img src={props.sprite_pawn} width={50}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={knightClick} className="w-full flex flex-col justify-center items-center">  
                            <h3>Cavalier</h3>
                            <img src={props.sprite_knight} width={50}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={bishopClick} className="w-full flex flex-col justify-center items-center">
                            <h3>Fou</h3>
                            <img src={props.sprite_bishop} width={50}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button  onClick={rookClick} className="w-full flex flex-col justify-center items-center">
                            <h3>Tour</h3>
                            <img src={props.sprite_rook} width={50}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={queenClick} className="w-full flex flex-col justify-center items-center">
                            <h3>Reine</h3>
                            <img src={props.sprite_queen} width={50}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-r-0">
                            <button onClick={kingClick} className="w-full flex flex-col justify-center items-center">
                            <h3>Roi</h3>
                            <img src={props.sprite_king} width={50}/>
                            </button>
                        </div>
                    </div>
                    <div className="m-2">
                        <p>{textExplain}</p>
                    </div>
                    <div className="m-2 flex justify-center items-center">
                        <img src={gifExplain} width={300}/>
                    </div>
                </div>
            </div>
          </div>
      );
    }

export default ProfilGod