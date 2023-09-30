import React from "react"
import Link from "next/link"

export default function CardGod (props) {
    let href = "/Dieux/GoddessOfTeleportation";

    if (props.item.name === "Déesse de la Téléportation") {
        href = "/Dieux/GoddessOfTeleportation";
      }
    else if (props.item.name === "Dieu de la Mort") {
        href = "/Dieux/GodOfDeath";
    }else{
        href = "/Dieux";
    }
        
    return (
        <Link href={href}>
            <div className="m-2 flex justify-center items-center">
                <button className="transform hover:scale-105 transition-transform">
                    <div className="bg-gradient-to-br from-green-400 to-green-900 p-4 shadow-md rounded-lg flex flex-col items-center text-center">
                    <img src={props.item.img} width={150} height={75} />
                        <div className="w-40">
                            <h2 className="text-lg font-semibold break-words">{props.item.name}</h2>
                        </div>
                    </div>
                </button>
            </div>
        </Link>
    )
}