import React from 'react'
import BlogPage from '../components/BlogPage'
import image11 from '../assets/image7.jpg'

const Blogs = () => {
  return (

    <>
      <div className='px-4 md:px-8 lg:px-18 sm:px-6 xl:px-7'>
      <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden rounded-2xl ">
          <div className="absolute inset-0">
            <img
              src=''
              alt="Abstract red and black pattern"
              fill
              className=""
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blogs Page</h1>
          </div>
        </div>
      </div>

      <BlogPage />
    </>

  )
}

export default Blogs
