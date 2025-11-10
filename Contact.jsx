import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-14">
      <h2 className="text-3xl font-bold">Contact / Support</h2>
      <p className="text-hydrinSilver mt-2">For support, email <strong>infohydrin@gmail.com</strong> or use the form below.</p>
      <form className="mt-6 max-w-xl" onSubmit={(e)=>{e.preventDefault(); alert('Message sent — test environment.')}}>
        <input placeholder="Name" className="p-3 bg-transparent border border-white/10 rounded-md" required/>
        <input placeholder="Email" className="p-3 bg-transparent border border-white/10 rounded-md" required/>
        <textarea placeholder="Message" rows="4" className="p-3 bg-transparent border border-white/10 rounded-md"></textarea>
        <button className="mt-3 bg-hydrinAqua text-black px-5 py-2 rounded-md">Send Message</button>
      </form>
    </section>
  )
}
