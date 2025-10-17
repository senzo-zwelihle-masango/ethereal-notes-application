import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import Pricing from '@/components/home/pricing'
import Showcase from '@/components/home/showcase'
import React from 'react'

const Home = () => {
  return (
    <div className="mb-40 space-y-40">
      <Hero />
      <Showcase />
      <Features />
      <Pricing/>
    </div>
  )
}

export default Home
