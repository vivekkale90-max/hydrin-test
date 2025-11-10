import React from 'react'
import qrplaceholder from '../assets/qr_placeholder.png'

export default function Purity(){
  return (
    <section id="purity" className="py-14">
      <h2 className="text-3xl font-bold">Purity Check</h2>
      <p className="text-hydrinSilver mt-2 max-w-2xl">Scan the QR on your bottle to verify authenticity, batch details and lab test results. For test site, scan the QR below or enter the batch code manually.</p>
      <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="bg-white p-4 rounded-lg">
          <img src={qrplaceholder} alt="qr" className="w-40 h-40"/>
        </div>
        <div className="flex-1">
          <form onSubmit={(e)=>{e.preventDefault(); alert('Test: Purity lookup simulated for ID ' + e.target.code.value)}}>
            <input name="code" placeholder="Enter batch code (e.g. H-12345)" className="w-full bg-transparent border border-white/10 p-3 rounded-md" />
            <button className="mt-4 bg-hydrinAqua text-black px-5 py-2 rounded-md">Check Purity</button>
          </form>
        </div>
      </div>
    </section>
  )
}
