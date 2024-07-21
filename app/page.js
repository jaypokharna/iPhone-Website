  import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

const page = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model />
    </main>
  )
}

export default page
