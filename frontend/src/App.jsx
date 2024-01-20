import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoomCard from './components/RoomCard'
import FeatureCard from './components/FeatureCard'

const App = () => {
  return (
    <>
      <Navbar />
      <RoomCard />
      <FeatureCard />
      <Footer />
    </>
  )
}

export default App