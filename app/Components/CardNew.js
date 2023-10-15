import React from "react"
import Link from "next/link"

export default function CardNew (props) {
    let href = "/";
        
    return (
        <Link href={href}>
            <div className="m-2 flex justify-center items-center">
                <button className="transform hover:scale-105 transition-transform">
                    <div className="bg-gradient-to-br from-gray-400 to-gray-900 shadow-md rounded-lg flex flex-col items-center text-center">
                    <img className="w-1/2" src={props.item.img} width={100} height={50} />
                        <div className="">
                            <h1 className="text-xl font-semibold break-words text-white">{props.item.title}</h1>
                        </div>
                        <div className="">
                            <p className="text font-semibold break-words text-white">{props.item.description}</p>
                        </div>
                    </div>
                </button>
            </div>
        </Link>
    )
}