import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <h5 className="my-8 text-4xl font-extrabold text-center tracking-tight text-gray-900 dark:text-white">
            About Cozy Quarters
          </h5>
      <div
        className="flex flex-col mx-auto items-center bg-white my-10 md:flex-row md:max-w-7xl p-5"
      >
        <img
          className="object-cover md:w-1/2"
          src="https://plus.unsplash.com/premium_photo-1700182582190-f44a4660cce5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          In the heart of a bustling metropolis, where the cityscape pulsates with life, there exists an intricate tapestry of stories waiting to be unveiled. Skyscrapers reach for the heavens, their reflective surfaces capturing the dance of sunlight and shadow. Streets below are alive with a symphony of honking horns, footsteps, and the chatter of diverse languages blending seamlessly. As day gives way to night, the urban landscape transforms into a glittering mosaic, with neon lights casting an enchanting glow.

Amidst this urban theater, individuals navigate their own narratives. A young artist, armed with a paintbrush and dreams, transforms blank canvases into expressions of emotion. A diligent scientist labors in a high-tech laboratory, pushing the boundaries of human knowledge. Meanwhile, an old bookstore, with its creaking wooden floors, offers refuge to those seeking the solace of printed words.

In this dynamic city, each corner tells a unique tale—a microcosm of human experience.From the laughter shared in bustling cafes to the quiet introspection in hidden parks, the city's energy weaves a tapestry that reflects the myriad facets of life. Every moment is a paragraph, every person a sentence, and every intersection a punctuation mark in the grand narrative of urban existence.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About