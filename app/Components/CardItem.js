import React from "react"
import Link from "next/link"

export default function CardItem (props) {
    let href = "/Store";

    if (props.item.nom === "T-shirt GodsChess") {
        href = "/Store/Item1";
      }
    else if (props.item.nom === "Item 2") {
        href = "/Store/Item2";
    }else{
        href = "/Store";
    }
        
    return (
        <Link href={href}>
            <div className="m-2 flex justify-center items-center">
                <button className="transform hover:scale-105 transition-transform">
                    <div className="bg-gradient-to-br from-gray-400 to-gray-900 shadow-md rounded-lg flex flex-col items-center text-center">
                    <img className="w-full" src={props.item.image_url} width={100} height={50} />
                        <div className="">
                            <h2 className="text-lg font-semibold break-words text-white">{props.item.nom}</h2>
                        </div>
                        <div className="">
                            <p className="text-lg font-semibold break-words text-white">{props.item.description}</p>
                        </div>
                        <div className="">
                            <p className="text-lg font-semibold break-words text-white">{props.item.prix}</p>
                        </div>
                    </div>
                </button>
            </div>
        </Link>
    )
}