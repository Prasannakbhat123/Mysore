import React, { useEffect } from 'react';
import CommunityHero from '../components/community/CommunityHero';
import CommunityMission from '../components/community/CommunityMission';
import CommunityMap from '../components/community/CommunityMap';

const Community = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <CommunityHero />
      <CommunityMission />
      <CommunityMap />
    </div>
  );
};

export default Community;
