import React from 'react'
import Slidecompo from '../components/Slidecompo'
import Section2 from '../Blog/Section2'

const Grid = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-[25%_75%] min-h-screen bg-gray-50 my-5 md:my-10 gap-4 md:gap-2 p-4 md:p-6">
    <Slidecompo/>
    <Section2 />
    </div>
    </>
  )
}

export default Grid
