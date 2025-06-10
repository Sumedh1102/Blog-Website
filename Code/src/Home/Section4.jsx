import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const Section4 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold font-nunito text-gray-900 mb-8">Subscribe to our newsletter</h1>

      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-inter">
        Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus amet dui quam vitae quis leo velit aliquam.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 h-14 px-6 text-base border-2 border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none focus:ring-0 placeholder:text-gray-500"
        />
        <button className="h-14 px-8 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200 font-nunito">
          Subscribe
        </button>
      </div>

      <div className="flex justify-center items-center gap-8">
        <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
        <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
        <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
        <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
        <Youtube className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
      </div>
    </div>
  )
}

export default Section4
