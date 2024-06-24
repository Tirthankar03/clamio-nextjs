import CallToAction from '@/components/Reward/CallToAction'
import Hero from '@/components/Reward/Hero'
import LevelUp from '@/components/Reward/LevelUp'
import RewardDetails from '@/components/Reward/RewardsDetails'
import Steps from '@/components/Reward/Steps'
import HeaderMain from '@/components/shared/HeaderMain'
import React from 'react'

function page() {
  return (
    <div className='overflow-x-hidden'>
      <HeaderMain/>
         <Hero/>
      <Steps/>
      <CallToAction/>
      <RewardDetails/>
      <LevelUp/>
    </div>
  )
}

export default page