import React from 'react'
import Slidecompo from "../components/Slidecompo";
import Section4 from '../Home/Section4'

const Page4 = () => {
    
  return (
    <>
    <div className="grid grid-cols-[25%_75%] min-h-screen bg-gray-50 gap-10">
  {/* Sidebar (optional – add content here or remove if unused) */}
  <aside className="bg-white p-0">
    <Slidecompo/>
  </aside>

  {/* Main Blog Content */}
  <section className="flex flex-col py-10 px-4 md:px-12 mt-10 md:mt-0 max-w-5xl">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#333] leading-snug tracking-wide text-center md:text-left">
      Page 4
    </h1>

    <div className="leading-relaxed text-gray-700 text-[18px] whitespace-pre-line">
      <p>
     page4
      </p>
    </div>
  </section>
</div>
<hr className="border-gray-100"/>
  <Section4/>
    </>
  )
}

export default Page1
