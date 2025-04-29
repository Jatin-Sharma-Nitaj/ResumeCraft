import Header from '@/components/Custom/Header'
import { Button } from '@/components/ui/button'

import LandingPage from '@/dashboard/components/Landing Page'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Button /> */}

      <LandingPage/>
    </div>
  )
}

export default Home