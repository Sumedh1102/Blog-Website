import React from 'react'

const Section = () => {
  return (
    <div className="flex items-center justify-center my-10 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-8 text-center">
          <h2 className="text-gray-600 text-xl font-nunito font-medium mb-4">One-time payment</h2>

          <div className="text-5xl font-bold font-nunito mb-4">₹ 9.99 INR</div>

          <h3 className="text-2xl font-bold font-nunito mb-4">Get access to our premium articles & content</h3>

          <p className="text-gray-500 font-nunito mb-8">
            Sit porttitor potenti nisl proin penatibus velit etiam ac com faucibus nunc eu quis integer quis egesta.
          </p>

          <button className="w-full py-6 text-lg bg-black text-white rounded-md hover:bg-black/90 transition-colors">
            Subscribe today!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section
