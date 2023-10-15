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
            <SectionGameplayRulesGodsChess/>
          </main>
        </div>
      );
    }

export default Gameplay