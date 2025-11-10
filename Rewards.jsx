import React from 'react'

export default function Rewards(){
  return (
    <section id="rewards" className="py-14">
      <h2 className="text-3xl font-bold">Rewards</h2>
      <p className="text-hydrinSilver mt-2">Collect QR scans to earn points and redeem exclusive Hydrin merchandise.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-lg">
          <strong>10 points</strong>
          <p className="text-hydrinSilver mt-2">Reusable tote bag</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg">
          <strong>25 points</strong>
          <p className="text-hydrinSilver mt-2">Hydrin steel bottle</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg">
          <strong>50 points</strong>
          <p className="text-hydrinSilver mt-2">Factory tour + sampler pack</p>
        </div>
      </div>
    </section>
  )
}
