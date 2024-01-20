import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoomCard from './components/RoomCard'
import FeatureCard from './components/FeatureCard'
import Slider from './components/Slider'

const App = () => {
  return (
    <>
      <Navbar />
      <RoomCard />
      <FeatureCard />
      <Slider />
      <Footer />
    </>
  )
}

export default App