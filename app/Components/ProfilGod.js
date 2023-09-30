"use client"
import React, {useState} from "react";

const ProfilGod = (props) => {

    const [textExplain, setTextExplain] = useState(props.explanation_power_passif)
    const [gifExplain, setgifExplain] = useState(props.gif_power_passif)
    const [myClassNamePassif, setMyClassNamePassif] = useState("font-black text-red-600");
    const [myClassNamePawn, setMyClassNamePawn] = useState("");
    const [myClassNameKnight, setMyClassNameKnight] = useState("");
    const [myClassNameBishop, setMyClassNameBishop] = useState("");
    const [myClassNameRook, setMyClassNameRook] = useState("");
    const [myClassNameQueen, setMyClassNameQueen] = useState("");
    const [myClassNameKing, setMyClassNameKing] = useState("");
    
    function passifClick () {
        if (textExplain != props.explanation_power_passif){
            setTextExplain(props.explanation_power_passif)
            setgifExplain(props.gif_power_passif)
        }

        if(myClassNamePassif == ""){
            setMyClassNamePassif("font-black text-red-600")
            setMyClassNamePawn("")
            setMyClassNameKnight("")
            setMyClassNameBishop("")
            setMyClassNameRook("")
            setMyClassNameQueen("")
            setMyClassNameKing("")
        }
    }

    function pawnClick () {
        if (textExplain != props.explanation_power_pawn){
            setTextExplain(props.explanation_power_pawn)
            setgifExplain(props.gif_power_pawn)
        }

        if(myClassNamePawn == ""){
            setMyClassNamePawn("font-black text-red-600")
            setMyClassNamePassif("")
            setMyClassNameKnight("")
            setMyClassNameBishop("")
            setMyClassNameRook("")
            setMyClassNameQueen("")
            setMyClassNameKing("")
        }
    }

    function knightClick () {
        if (textExplain != props.explanation_power_knight){
            setTextExplain(props.explanation_power_knight)
            setgifExplain(props.gif_power_knight)
        }

        if(myClassNameKnight == ""){
            setMyClassNameKnight("font-black text-red-600")
            setMyClassNamePassif("")
            setMyClassNamePawn("")
            setMyClassNameBishop("")
            setMyClassNameRook("")
            setMyClassNameQueen("")
            setMyClassNameKing("")
        }
    }

    function bishopClick () {
        if (textExplain != props.explanation_power_bishop){
            setTextExplain(props.explanation_power_bishop)
            setgifExplain(props.gif_power_bishop)
        }

        if(myClassNameBishop == ""){
            setMyClassNameBishop("font-black text-red-600")
            setMyClassNamePassif("")
            setMyClassNamePawn("")
            setMyClassNameKnight("")
            setMyClassNameRook("")
            setMyClassNameQueen("")
            setMyClassNameKing("")
        }
    }

    function rookClick () {
        if (textExplain != props.explanation_power_rook){
            setTextExplain(props.explanation_power_rook)
            setgifExplain(props.gif_power_rook)
        }

        if(myClassNameRook == ""){
            setMyClassNameRook("font-black text-red-600")
            setMyClassNamePassif("")
            setMyClassNamePawn("")
            setMyClassNameKnight("")
            setMyClassNameBishop("")
            setMyClassNameQueen("")
            setMyClassNameKing("")
        }
    }

    function queenClick () {
        if (textExplain != props.explanation_power_queen){
            setTextExplain(props.explanation_power_queen)
            setgifExplain(props.gif_power_queen)
        }

        if(myClassNameQueen == ""){
            setMyClassNameQueen("font-black text-red-600")
            setMyClassNamePassif("")
            setMyClassNamePawn("")
            setMyClassNameKnight("")
            setMyClassNameBishop("")
            setMyClassNameRook("")
            setMyClassNameKing("")
        }
    }

    function kingClick () {
        if (textExplain != props.explanation_power_king){
            setTextExplain(props.explanation_power_king)
            setgifExplain(props.gif_power_king)
        }

        if(myClassNameKing == ""){
            setMyClassNameKing("font-black text-red-600")
            setMyClassNamePassif("")
            setMyClassNamePawn("")
            setMyClassNameKnight("")
            setMyClassNameBishop("")
            setMyClassNameRook("")
            setMyClassNameQueen("")
        }
    }

    return (
          <div className="w-full flex">
            <img src={props.sprite_god} width={350} height={175}/>
            <div className="w-full">
                <h1 className="m-2 text-5xl font-black text-center">{props.name}</h1>
                <h2 className="m-2 text-3xl font-black text-center">Pouvoir</h2>
                <div className="border-2 border-black m-2">
                    <div className=''>
                        <h2 className="flex justify-center items-center text-center text-xl font-black">Faction</h2>
                    </div>
                    <div className="flex justify-around mb-2 border-2 border-black border-r-0 border-l-0">
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-l-0">
                            <button onClick={passifClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">
                            <h3 className={myClassNamePassif}>Passif</h3>
                            <img src={props.sprite_sign} width={106}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={pawnClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">
                                <h3 className={myClassNamePawn}>Pion</h3>
                                <img src={props.sprite_pawn} width={60}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={knightClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">  
                            <h3 className={myClassNameKnight}>Cavalier</h3>
                            <img src={props.sprite_knight} width={60}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={bishopClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">
                            <h3 className={myClassNameBishop}>Fou</h3>
                            <img src={props.sprite_bishop} width={60}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button  onClick={rookClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">
                            <h3 className={myClassNameRook}>Tour</h3>
                            <img src={props.sprite_rook} width={60}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0">
                            <button onClick={queenClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">
                            <h3 className={myClassNameQueen}>Reine</h3>
                            <img src={props.sprite_queen} width={60}/>
                            </button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center border-2 border-black border-t-0 border-b-0 border-r-0">
                            <button onClick={kingClick} className="w-full text-lg flex flex-col justify-center items-center transform hover:bg-gradient-to-br from-gray-400 to-gray-800">
                            <h3 className={myClassNameKing}>Roi</h3>
                            <img src={props.sprite_king} width={60}/>
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-2/3 m-2 flex text-xl">
                            <p>{textExplain}</p>
                        </div>
                        <div className="w-1/3 m-2 flex justify-center items-center">
                            <img src={gifExplain} width={400} className=""/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      );
    }

export default ProfilGod