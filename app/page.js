import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionHomePagePlay from "./Components/SectionHomePagePlay";
import SectionHomePageMode from "./Components/SectionHomePageMode";
import SectionHomePageGods from "./Components/SectionHomePageGods";
import SectionHomePageContact from "./Components/SectionHomePageContact";
import { Black_Ops_One} from "@next/font/google"

const BOO = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']

})

export default function Home() {

  return (
    <div>
      <Header />
      <main className={BOO.className}>
        <SectionHomePagePlay/>
        <SectionHomePageMode/>
        <SectionHomePageGods/>
        <SectionHomePageContact/>
      </main> 
      <Footer />
    </div>
  );
}
