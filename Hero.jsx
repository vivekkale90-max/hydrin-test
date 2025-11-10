import React from 'react'
import { motion } from 'framer-motion'
import bottle from '../assets/bottle.png'

export default function Hero(){
  return (
    <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <div className="uppercase text-hydrinAqua font-semibold">Hydrin Natural Mineral Water</div>
        <h1 className="text-5xl font-extrabold mt-4 leading-tight">Experience Purity. Experience Hydrin.</h1>
        <p className="text-hydrinSilver mt-4 max-w-xl">Hydrin brings you naturally filtered mineral water, bottled with a premium touch — silver matte bottles, minimal labels, and uncompromised purity.</p>
        <div className="mt-8">
          <a href="#purity" className="inline-block bg-gradient-to-r from-hydrinAqua to-[#7fe7ff] text-black px-6 py-3 rounded-lg font-semibold">Experience Hydrin</a>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.div initial={{y:40, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8}}>
          <img src={bottle} alt="bottle" className="w-72 rounded-md shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
