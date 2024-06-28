// src/RewardsPage.js
import React from 'react';

import Header from './Header';
import Hero from './Hero';
import Steps from './Steps';
import CallToAction from './CallToAction';
import RewardDetails from './RewardsDetails';
import LevelUp from './LevelUp';


const RewardsPage = () => {
  return (
    <div className='-z-30'>
      <Header/>
      <Hero/>
      <Steps/>
      <CallToAction/>
      <RewardDetails/>
      <LevelUp/>
    </div>
  );
};

export default RewardsPage;
