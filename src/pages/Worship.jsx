import React from 'react';
import WorshipHero from '../components/worship/WorshipHero';
import WorshipSchedule from '../components/worship/WorshipSchedule';
import WorshipExpectations from '../components/worship/WorshipExpectations';

const Worship = () => {
  return (
    <div>
      <WorshipHero />
      <WorshipSchedule />
      <WorshipExpectations />
    </div>
  );
};

export default Worship;
