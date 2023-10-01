import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SectionGameplayClan from '../Components/SectionGameplayClan';
import SectionGameplayRules from '../Components/SectionGameplayRules';
import SectionGameplayFaction from '../Components/SectionGameplayFaction';
import SectionGameplayRulesGodsChess from '../Components/SectionGameplayRulesGodsChess';
import { Black_Ops_One} from "@next/font/google"

const BOO = Black_Ops_One({
    subsets: ['latin'],
    weight: ['400']
  
  })

const Gameplay = () => {
    return (
        <div className={BOO.className}>
          <Header/>
          <main>
            <SectionGameplayRules/>
            <SectionGameplayClan/>
            <SectionGameplayFaction/>
            <SectionGameplayRulesGodsChess/>
          </main>
          <Footer/>
        </div>
      );
    }

export default Gameplay