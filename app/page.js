import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionHomePagePlay from "./Components/SectionHomePagePlay";
import SectionHomePageMode from "./Components/SectionHomePageMode";
import SectionHomePageGods from "./Components/SectionHomePageGods";
import SectionHomePageNews from "./Components/SectionHomePageNews";
import { Black_Ops_One} from "@next/font/google"

const BOO = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']

})

export default function Home() {

  return (
    <div className={BOO.className}>
      <Header />
      <main>
        <SectionHomePagePlay/>
        <SectionHomePageMode/>
        <SectionHomePageGods/>
        <SectionHomePageNews/>
      </main> 
      <Footer />
    </div>
  );
}
