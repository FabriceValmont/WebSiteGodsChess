import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SectionGameplayClan from '../Components/SectionGameplayClan';
import SectionGameplayRules from '../Components/SectionGameplayRules';
import SectionGameplayFaction from '../Components/SectionGameplayFaction';
import SectionGameplayRulesGodsChess from '../Components/SectionGameplayRulesGodsChess';

const Gameplay = () => {
    return (
        <div>
          <Header/>
          <main className="">
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