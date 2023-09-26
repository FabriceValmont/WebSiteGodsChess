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
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center">
            <img src={props.item.img} width={150} height={75}/>
            <h2 className="text-lg font-semibold">{props.item.name}</h2>
            <p className="text-sm text-gray-600">{props.item.description}</p>
            <Link href={href}>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Voir le Dieu</button>
            </Link>
        </div>
    )
}