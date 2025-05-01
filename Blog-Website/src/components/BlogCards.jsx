import React from 'react'
import Blogs from './blogsData.json'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const BlogCards = () => {

  return (
    <div className=' mt-10'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-9' >
     
    {
        Blogs.map ((blog) =><Link key={blog.id} className='p-4 cursor-pointer rounded-xl '>
            <div>
               <img src={blog.image} alt="" className=' h-[300px] w-[300px] rounded-xl object-cover'/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
              {blog.title}
            </h3>
            <p className='mb-4  text-gray-400'><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
            <p className='text-sm text-gray-500'>Published : {blog.published_date}</p>
        </Link>)
     }

    </div>
    </div>
   
  )
}

export default BlogCards
