import React from 'react'
import Hero from './sections/Hero'
import Purity from './sections/Purity'
import Rewards from './sections/Rewards'
import About from './sections/About'
import Dealer from './sections/Dealer'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-hydrinBlack text-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="flex items-center justify-between py-6">
          <div className="text-2xl font-bold tracking-widest">HYDRIN</div>
          <nav className="space-x-6 text-sm text-hydrinSilver hidden md:block">
            <a href="#home">Home</a>
            <a href="#purity">Purity</a>
            <a href="#rewards">Rewards</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <Hero />
          <Purity />
          <Rewards />
          <About />
          <Dealer />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
