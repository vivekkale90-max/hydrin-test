import React from 'react'

export default function Dealer(){
  return (
    <section id="dealer" className="py-14">
      <h2 className="text-3xl font-bold">Dealer Enquiry</h2>
      <p className="text-hydrinSilver mt-2">Interested in retail or distribution? Fill the form and our operations team will reach out within 48 hours.</p>
      <form className="mt-6 grid gap-3 max-w-xl" onSubmit={(e)=>{e.preventDefault(); alert('Dealer enquiry received — thank you.')}}>
        <input placeholder="Name" className="p-3 bg-transparent border border-white/10 rounded-md" required/>
        <input placeholder="Company / Shop name" className="p-3 bg-transparent border border-white/10 rounded-md"/>
        <input placeholder="Phone" className="p-3 bg-transparent border border-white/10 rounded-md"/>
        <textarea placeholder="Message (region, expected order)" rows="3" className="p-3 bg-transparent border border-white/10 rounded-md"></textarea>
        <button className="mt-3 bg-hydrinAqua text-black px-5 py-2 rounded-md">Submit Enquiry</button>
      </form>
    </section>
  )
}
