import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center relative mx-auto" style={{ backgroundImage: 'url(contact/Porte_GodsChess.png)' }}>
      <Header/>
      <div className="text-7xl text-white mx-auto">
      <p>Contact</p>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[280px] -translate-y-1/2">
        <input type="email" placeholder="E-mail" required className="bg-white bg-opacity-90 m-2 p-2 rounded-md w-[610px]" />
        <input type="text" placeholder="Titre" required className="bg-white bg-opacity-90 m-2 p-2 rounded-md w-[610px]" />
        <textarea id="message" name="message" className="bg-white bg-opacity-90 m-2 p-2 border rounded-md w-[610px] h-[300px]" placeholder="Ton message" required />
        <button className="w-full text-3xl text-white flex justify-start px-4">Envoyer</button>
      </div>
        <Footer/>
    </div>
  )
}

export default Contact