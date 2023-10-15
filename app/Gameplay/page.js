import React from 'react'
import SectionGameplayClan from '../Components/SectionGameplayClan';
import SectionGameplayRules from '../Components/SectionGameplayRules';
import SectionGameplayFaction from '../Components/SectionGameplayFaction';
import SectionGameplayRulesGodsChess from '../Components/SectionGameplayRulesGodsChess';

const Gameplay = () => {
    return (
        <div>
          <main>
            <SectionGameplayRules/>
            <SectionGameplayClan/>
            <SectionGameplayFaction/>
            <h1 className="bg-black text-center text-white text-4xl pt-4"> Règles spécifiques de GodChess</h1>
            <SectionGameplayRulesGodsChess/>
          </main>
        </div>
      );
    }

export default Gameplay