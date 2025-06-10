import React from 'react'
import img from '../Img/Heroimg.jpg'

const Section = () => {
  return (
  <div className="relative h-[700px] w-full my-1">
      {/* Background image */}
      <img
        src={img}
        alt="Typing on laptop"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-40 left-40 text-white ">
        <span className="bg-white text-black text-lg font-light font-nunito px-2 py-1 rounded">TIPS</span>
        <h1 className="mt-4 text-3xl md:text-6xl font-bold leading-tight font-nunito">
          3 tips to avoid Internet<br />
          distractions at work
        </h1>
        <div className="flex items-center gap-4 mt-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pinimg.com/736x/c3/ca/b5/c3cab5b336680ea41f335662669c6201.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <span>John Carter</span>
          </div>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            June 16, 2022
          </span>
        </div>
      </div>
    </div>
  )
}

export default Section
