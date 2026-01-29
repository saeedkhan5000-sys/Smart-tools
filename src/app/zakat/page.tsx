export const metadata = {
  title: 'Zakat Calculator 2026 | Calculate Your Nisab Accurately',
  description: 'Easy-to-use Zakat calculator based on 2026 gold and silver prices. Calculate zakat on cash, gold, silver, and investments instantly.',
  keywords: ['Zakat calculator', 'Nisab 2026', 'Calculate Zakat online', 'Islamic wealth tax', 'Gold and silver Nisab'],
  openGraph: {
    title: 'Accurate Zakat Calculator | Free Online Tool',
    description: 'Calculate your Zakat accurately in seconds with our professional tool.',
    type: 'website',
  },
};

import ZakatCalculator from '@/components/ZakatCalculator'
import React from 'react'

const Zakat = () => {
  return (
    <div>
        <ZakatCalculator/>
    </div>
  )
}

export default Zakat