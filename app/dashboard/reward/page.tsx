import CallToAction from '@/components/rewards/CallToAction'
import Hero from '@/components/rewards/Hero'
import LevelUp from '@/components/rewards/LevelUp'
import RewardDetails from '@/components/rewards/RewardsDetails'
import Steps from '@/components/rewards/Steps'
import HeaderMain from '@/components/shared/HeaderMain'
import React from 'react'

function page() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Steps />
      <CallToAction />
      <RewardDetails />
      <LevelUp />
    </div>
  )
}

export default page