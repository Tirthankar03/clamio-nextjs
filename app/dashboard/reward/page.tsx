
import HeaderMain from '@/components/shared/HeaderMain'
import CallToAction from '@/components/shared/rewards/CallToAction'
import Hero from '@/components/shared/rewards/Hero'
import LevelUp from '@/components/shared/rewards/LevelUp'
import RewardDetails from '@/components/shared/rewards/RewardsDetails'
import Steps from '@/components/shared/rewards/Steps'
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