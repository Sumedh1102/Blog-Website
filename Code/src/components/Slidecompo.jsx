import React from 'react'
import { Search, PenTool } from "lucide-react"
import {  Feather } from "lucide-react"

const filterButtons = ["TIPS", "RESOURCES", "GUIDES"]

const popularArticles = [
  {
    id: 1,
    title: "10 Best collaboration software for your team",
    image: "https://i.pinimg.com/736x/d8/2e/b1/d82eb175b4f40e40663d9d22bd35b7b1.jpg",
  },
  {
    id: 2,
    title: "A complete guide to learn project management",
    image: "https://i.pinimg.com/736x/b4/28/e7/b428e7260923cb57c734f82609ee91e5.jpg",
  },
  {
    id: 3,
    title: "How time tracking can improve team management",
    image: "https://i.pinimg.com/736x/0d/1a/a0/0d1aa082616da30d0727a95ba38ea8b2.jpg",
  },
]

const Slidecompo = () => {
  return (
   <div className="hidden sm:grid w-auto bg-white p-6 grid-cols-1 gap-8 h-screen sticky top-0 overflow-y-auto ">
      {/* Brand Header */}
      <div className="grid grid-cols-[auto_1fr] items-center gap-3">
        <Feather className="h-8 w-8 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-900">InkSpire X</h1>
      </div>

      {/* Description */}
      <p className="text-xl text-gray-600 leading-relaxed">
        Discover insightful stories, expert tips, and creative inspiration crafted to elevate your writing journey.
      </p>

      {/* Search Field */}
      <div className="relative">
        <input
          type="search"
          placeholder="Search articles"
          className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none text-base"
        />
        <Search className="absolute right-5 top-[48%] transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      <hr className="border-gray-200" />

      {/* Category Filters */}
      <div className="grid grid-cols-3 gap-2">
        <button className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider py-2 px-4 transition-colors">
          TIPS
        </button>
        <button className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider py-2 px-4 transition-colors">
          RESOURCES
        </button>
        <button className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-wider py-2 px-4 transition-colors">
          GUIDES
        </button>
      </div>

      {/* Featured Resource Card */}
      <div className="relative overflow-hidden rounded-xl shadow-sm h-96">
  <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
    <img
      src="https://i.pinimg.com/736x/50/e6/bc/50e6bc733c4a003745cdf18ac262b6fd.jpg"
      alt="Laptop screen showing management software"
      className="w-full h-full object-cover rounded-xl"
    />
    <div className="absolute inset-0 bg-black/40 rounded-xl" />
    <div className="absolute bottom-4 left-4 text-white">
      <div className="inline-block bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-2">
        RESOURCES
      </div>
      <h3 className="text-lg font-semibold font-nunito leading-tight">How to choose the best management software</h3>
    </div>
  </div>
</div>

      {/* Popular Articles List */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-lg font-bold text-gray-900">Popular articles</h2>
        <div className="grid grid-cols-1 gap-8">
          {popularArticles.map((article) => (
            <div key={article.id} className="grid grid-cols-[56px_1fr] gap-3 items-start">
              <img
                src={article.image || "/placeholder.svg"}
                alt=""
                className="w-14 h-14 rounded-lg object-cover bg-gray-100"
              />
              <h3 className="text-base font-medium text-gray-900 leading-snug line-clamp-2">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slidecompo
