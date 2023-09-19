import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionHomePage from "./Components/SectionHomePage";
import CardGod from "./Components/CardGod";
import data from "../data"

export default function Home() {

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <SectionHomePage src="/Chaton.jpg" alt="Description de l'image" width={500} height={250} />
        <SectionHomePage src="" alt="Description de l'image" width={300} height={200}/>
      </main> 
      <Footer />
    </div>
  );
}
