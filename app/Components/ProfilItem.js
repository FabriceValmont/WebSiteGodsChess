'use client'

import React from 'react'

const ProfilItem = (props) => {
  return (
    <div className="w-full flex">
        <img src={props.img} width={350} height={175}/>
        <div className='w-full border-4 border-black m-4'>
            <h1 className="m-4 text-5xl font-black text-center">{props.name}</h1>
            <p className='text-center m-4'>{props.description}</p>
            <div className='flex justify-around'>
                <p className='text-left'>{props.price}</p>
                <button className='border-2 border-black hover:text-red-500'>Ajouter au panier</button>
            </div>
        </div>
    </div>
  )
}

export default ProfilItem