import React, { useState, useEffect } from "react"
import Link from "next/link"

export default function CardGod (props) {
    
    const [arrayNameGods, setArrayNameGods] = useState(
    [{nameFr: "Déesse de la Téléportation", nameEn: "GoddessOfTeleportation"},
    {nameFr: "Dieu de la Mort", nameEn: "GodOfDeath"},
    {nameFr: "Dieu de la Terre", nameEn: "GodOfEarth"},
    {nameFr: "Dieu de la Secte", nameEn: "GodOftheCult"},
    {nameFr: "Déesse de l'Eau", nameEn: "GoddessOfWater"},
    {nameFr: "Dieu de la Glace", nameEn: "GodOfIce"},
    {nameFr: "Déesse de la Vie", nameEn: "GoddessOfLife"},
    {nameFr: "Dieu du Feu", nameEn: "GodOfFire"},
    {nameFr: "Déesse de la Foudre", nameEn: "GoddessOfThunder"},
    {nameFr: "Déesse du Vent", nameEn: "GoddessOfWind"},])
    
    const [href, setHref] = useState("/Gods");

  useEffect(() => {
    for (let i = 0; i < arrayNameGods.length; i++) {
      if (props.item.name === arrayNameGods[i].nameFr) {
        setHref(`/Gods/${arrayNameGods[i].nameEn}`);
        return;
      }
    }
    
    setHref("/Gods");
  }, [props.item.name, arrayNameGods]);
        
    return (
        <Link href={href}>
            <div className="m-2 flex justify-center items-center">
                <button className="transform hover:scale-105 transition-transform">
                    <div className="bg-gradient-to-br from-gray-400 to-gray-900 shadow-md rounded-lg flex flex-col items-center text-center">
                    <img className="w-full" src={props.item.img} width={150} height={75} />
                        <div className="">
                            <h2 className="text-lg font-semibold break-words text-white">{props.item.name}</h2>
                        </div>
                    </div>
                </button>
            </div>
        </Link>
    )
}