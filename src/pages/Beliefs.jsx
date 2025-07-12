import React from 'react';
import BeliefsHero from '../components/beliefs/BeliefsHero';
import CoreBeliefs from '../components/beliefs/CoreBeliefs';
import EschatologyBeliefs from '../components/beliefs/EschatologyBeliefs';

const Beliefs = () => {
  return (
    <div>
      <BeliefsHero />
      <CoreBeliefs />
      <EschatologyBeliefs />
    </div>
  );
};

export default Beliefs;
