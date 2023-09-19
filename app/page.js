import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionHomePagePlay from "./Components/SectionHomePagePlay";
import SectionHomePageMode from "./Components/SectionHomePageMode";
import SectionHomePageGods from "./Components/SectionHomePageGods";
import SectionHomePageContact from "./Components/SectionHomePageContact";

export default function Home() {

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <SectionHomePagePlay src="/Fond_site_web1.png" alt="Description de l'image" width={2000} height={500} />
        <SectionHomePageMode src="/GameBoardScreen.png" alt="Description de l'image" width={2000} height={500}/>
        <SectionHomePageGods src="/Panorama_des_Dieux_IA.png" alt="Description de l'image" width={2000} height={500}/>
        <SectionHomePageContact src="/Porte_GodsChess.png" alt="Description de l'image" width={2000} height={500}/>
      </main> 
      <Footer />
    </div>
  );
}
