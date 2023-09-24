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
        <SectionHomePagePlay/>
        <SectionHomePageMode/>
        <SectionHomePageGods/>
        <SectionHomePageContact/>
      </main> 
      <Footer />
    </div>
  );
}
