export const metadata = {
  title: 'SIP Calculator | Estimate Your Mutual Fund Returns',
  description: 'Plan your wealth with our SIP calculator. Calculate the future value of your monthly investments in mutual funds easily.',
  keywords: ['SIP calculator', 'Mutual Fund return calculator', 'Investment planner', 'Wealth growth tool', 'SIP return estimate'],
  openGraph: {
    title: 'SIP Calculator - Plan Your Financial Future',
    description: 'See how much your monthly investments can grow over time.',
    type: 'website',
  },
};

import SipCalculator from '@/components/SipCalculator'
import React from 'react'

const Sip = () => {
  return (
    <div>
        <SipCalculator/>
    </div>
  )
}

export default Sip