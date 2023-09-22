import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="bg-black container text-center text-white">
        <p className=""> Vous pouvez nous suivre sur </p>
        <p className="flex justify-center gap-2"><AiFillFacebook size={32} /> <FaDiscord size={32}/> <RiTwitterXFill size={32}/> <AiFillYoutube size={32}/> <FaTwitch size={32}/></p>
        <p className="">GodsChess 2023, Fabrice et Jean-Jacques Valmont. Tous droits réservés. Mentions légales.</p>
      </div>
    </footer>
  );
};

export default Footer;