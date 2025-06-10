import React from 'react'
import { Clock } from "lucide-react"
import { useNavigate } from "react-router-dom";


const navItems = [
  { path: "/blogs1", link: "Subscribe" },
];

const Section1 = () => {

  const navigate = useNavigate(); // <-- initialize navigate

  const handleSubscribeClick = () => {
    navigate(navItems[0].path); // navigates to "/services"
  }; 
  return (
     <div className="max-w-6xl mx-auto py-16">
  <div className="grid lg:grid-cols-[1.7fr_1fr]  gap-6 items-start">
    {/* Left Side - Featured Blog Card */}
    <div className="relative">
      <button onClick={handleSubscribeClick} className='hover:-translate-y-1 transition duration-300'>
      <div
        className="relative h-96 lg:h-[525px] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content overlay */}
        <div className="relative h-full flex flex-col justify-between p-6 max-w-none w-full">
          {/* Tips label */}
          <div className="self-start">
            <span className="inline-block bg-white text-black text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              TIPS
            </span>
          </div>

          {/* Bottom content */}
          <div className="space-y-4">
            <h2 className="text-white text-3xl lg:text-4xl font-semibold font-nunito leading-tight text-left">
              How Startups Are Innovating Men's Fitness Gear
            </h2>

            {/* Author info */}
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                <img
                  src="https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg"
                  alt="John Carter"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium">John Carter</span>
              <Clock className="w-4 h-4" />
              <span className="text-sm">June 16, 2022</span>
            </div>
          </div>
        </div>
      </div>
      </button>
    </div>

    {/* Right Side - Blog Links */}
    <div className="bg-white rounded-2xl p-8 space-y-8">
  {/* Blog links... */}
  <div className="space-y-3">
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-nunito">Health</span>
    <button className='hover:-translate-y-1 transition duration-300 '>
    <h3 className="text-2xl font-semibold font-inter text-gray-900 leading-tight text-left ">
      Top 7 Habits To Boost Men’s Mental Health
    </h3>
    </button>
  </div>
  <div className="border-t border-gray-200" />

  <div className="space-y-3">
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-nunito">life</span>
    <button className='hover:-translate-y-1 transition duration-300'>
    <h3 className="text-2xl font-semibold font-inter text-gray-900 leading-tight text-left">
      Mastering Work-Life Balance: Tips For Modern Men
    </h3>
    </button>
  </div>
  <div className="border-t border-gray-200" />

  <div className="space-y-3">
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-nunito">AI</span>
    <button className='hover:-translate-y-1 transition duration-300 '>
    <h3 className="text-2xl font-semibold font-inter text-gray-900 leading-tight text-left">
      AI and Healthcare: Transforming Men's Wellness
    </h3>
    </button>
  </div>
</div>
  </div>
</div>

  )
}

export default Section1
