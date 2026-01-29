export const metadata = {
  title: 'Time is Money Calculator | Calculate Your Hourly Value',
  description: 'Ever wondered what your time is really worth? Use this tool to calculate your hourly rate and the real cost of your tasks.',
  keywords: ['Time is money calculator', 'Hourly rate tool', 'Opportunity cost calculator', 'Productivity tool', 'Time value'],
  openGraph: {
    title: 'Time is Money Calculator - Discover Your True Worth',
    description: 'Analyze your income versus time spent to maximize your productivity.',
    type: 'website',
  },
};

import TimeIsMoney from '@/components/TimeIsMoney'
import React from 'react'

const Time = () => {
  return (
    <div>
        <TimeIsMoney/>
    </div>
  )
}

export default Time