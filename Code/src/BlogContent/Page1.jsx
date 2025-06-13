import React from 'react'
import Slidecompo from "../components/Slidecompo";
import Section4 from '../Home/Section4'

const Page1 = () => {
    
  return (
    <>
    <div className="flex flex-col lg:grid lg:grid-cols-[25%_75%] min-h-screen bg-gray-50 gap-2">
      {/* Sidebar - Full width on mobile, 25% on desktop */}
      <aside className="bg-white p-0 order-2 lg:order-1 ">
        <Slidecompo />
      </aside>

      {/* Main Blog Content - Full width on mobile, 75% on desktop */}
      <section className="flex flex-col py-6 px-4 sm:py-8 md:py-10 md:px-8 lg:px-12 mt-4 lg:mt-0 max-w-full lg:max-w-4xl order-1 lg:order-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#333] leading-snug tracking-wide text-center lg:text-left">
          How Startups Are Innovating Men's Fitness Gear
        </h1>

        <div className="leading-relaxed text-gray-700 text-base sm:text-lg whitespace-pre-line">
          <p className="mb-4">
            Startups are revolutionizing men's fitness gear by challenging established norms and embracing cutting-edge
            technologies, sustainable practices, and highly specialized design. Moving beyond generic athletic wear,
            these agile companies are focusing on hyper-functionality, creating apparel and accessories engineered for
            specific activities like high-intensity interval training, powerlifting, or endurance running, often
            incorporating features like targeted compression zones, moisture-wicking fabrics with advanced odor control
            , and seamless constructions to prevent chafing.
          </p>

          <hr className="my-6" />

          <p className="mb-4">
            Startups are fundamentally transforming men's fitness gear by challenging the status quo and prioritizing
            innovation across multiple fronts. They're moving far beyond basic athletic wear, focusing intensely on
            hyper-functionality. This means creating apparel and accessories meticulously engineered for specific
            activities, whether it's the intense demands of HIIT, the targeted support needed for powerlifting, or the
            endurance requirements of marathon running.
          </p>

          <hr className="my-6" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            The Tech-Driven Evolution of Men's Fitness Apparel
          </h2>
          <p className="mb-4">
            Startups are revolutionizing men's fitness gear by blending technology, sustainability, and style in ways
            that traditional brands have often overlooked. These emerging companies are not just focusing on
            aesthetics—they are designing gear that meets the demands of modern, health-conscious men seeking
            performance, comfort, and personalization.
          </p>

          <hr className="my-6" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Next-Gen Gear: How Startups Are Elevating Men's Workouts
          </h2>
          <p className="mb-4">
            A significant driver of this revolution is the integration of smart technology. Many startups are embedding
            sensors directly into fabrics, transforming clothing into wearable tech that tracks biometric data in
            real-time. This provides athletes with immediate performance feedback, personalized training insights, and
            even alerts for potential issues like overheating or dehydration.
          </p>

          <hr className="my-6" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Beyond Basics: High-Tech Innovations in Men's Gym Wear
          </h2>
          <p className="mb-4">
            The rise of direct-to-consumer (DTC) models has also been crucial for startups. This approach allows them to
            foster strong community engagement, gather immediate feedback from their target audience, and rapidly
            iterate on their designs. This direct line of communication ensures their gear not only meets but
            anticipates the evolving demands and preferences of the modern male athlete.
          </p>
        </div>
      </section>
    </div>
    <Section4/>
    </>
  )
}

export default Page1
