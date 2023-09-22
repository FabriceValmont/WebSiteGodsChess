import React from 'react';
import Image from 'next/image'; 

const SectionHomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-start bg-cover bg-center relative" style={{ backgroundImage: 'url(/GameBoardScreenWeb.png)' }}>
      <p className="text-7xl text-black mx-auto my-14">Mode</p>
    </div>
  );
}

export default SectionHomePage;