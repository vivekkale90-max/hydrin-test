import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 text-sm text-hydrinSilver">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© Hydrin • All test content</div>
        <div className="flex items-center gap-4">
          <a href="#" className="underline">Instagram</a>
          <a href="#" className="underline">YouTube</a>
          <a href="#" className="underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
