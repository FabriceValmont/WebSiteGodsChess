import React from "react";
import SectionHomePagePlay from "./Components/SectionHomePagePlay";
import SectionHomePageMode from "./Components/SectionHomePageMode";
import SectionHomePageGods from "./Components/SectionHomePageGods";
import SectionHomePageNews from "./Components/SectionHomePageNews";

export default function Home() {

  return (
      <main>
        <SectionHomePagePlay/>
        <SectionHomePageMode/>
        <SectionHomePageGods/>
        <SectionHomePageNews/>
      </main> 
  );
}
