import React from 'react'
import img from '../Img/Heroimg.jpg'
import { CalendarIcon } from "lucide-react"


const Section = () => {
  return (
  <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[700px] my-0">
      {/* Background image */}
      <img
        src={img}
        alt="Typing on laptop"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="text-white max-w-3xl">
          <span className="bg-white text-black text-sm md:text-lg font-light font-nunito px-2 py-1 rounded">TIPS</span>
          <h1 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-nunito">
            3 tips to avoid Internet
            <br className="hidden sm:block" />
            distractions at work
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-3 md:mt-4 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <img
                src="https://i.pinimg.com/736x/c3/ca/b5/c3cab5b336680ea41f335662669c6201.jpg"
                alt="Author"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
              />
              <span>John Carter</span>
            </div>
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              June 16, 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
