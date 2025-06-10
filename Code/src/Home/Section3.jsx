import { useState } from "react";
import { LockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- import this

const navItems = [
  { path: "/services", link: "Subscribe" },
];

// Content card data
const contentCards = [
  {
    image: "https://i.pinimg.com/736x/19/b1/6b/19b16b15d76d0236be5277fe080f0864.jpg",
    label: "TIPS",
    title: "A comprehensive guide on Agile development",
  },
  {
    image: "https://i.pinimg.com/736x/a3/1c/1c/a31c1cb62a401f0f95adadbde8050c3e.jpg",
    label: "TIPS",
    title: "10 Productivity tools that are worth checking out",
    hasButton: true,
  },
  {
    image: "https://i.pinimg.com/736x/59/a0/9f/59a09f6ec1dd6ee361c100f7402c68c5.jpg",
    label: "RESOURCES",
    title: "Top 7 Must have management tools for productivity",
  },
];

const Section3 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate(); // <-- initialize navigate

  const handleSubscribeClick = () => {
    navigate(navItems[0].path); // navigates to "/services"
  };

  return (
    <div className="bg-black w-full py-20 px-4 mt-20">
      <section className="w-full max-w-7xl mx-auto text-white">
        {/* Hero Section */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold mb-6">
            Subscribe to unlock premium content
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-inter">
            Join our community of curious minds and passionate readers. Get
            exclusive access to in-depth articles, expert tips, and
            behind-the-scenes stories delivered straight to your inbox.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {contentCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden bg-gray-900 shadow-lg"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image with Overlay */}
              <div className="relative h-80 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10"></div>
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />

                {/* Label */}
                <span className="absolute top-4 left-4 bg-gray-800/80 px-3 py-1 text-xs tracking-wider font-light font-nunito z-20 rounded-full">
                  {card.label}
                </span>

                {/* Title overlay on image */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-semibold text-white opacity-20">
                    {card.title}
                  </h3>
                </div>

                {/* Unlock Button (only for cards with hasButton === true) */}
                {card.hasButton && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button
                      onClick={handleSubscribeClick}
                      className="bg-white text-black font-medium rounded-full px-6 py-3 flex items-center gap-2 hover:shadow-lg transition-all"
                    >
                      <LockIcon size={16} />
                      Unlock content
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section3;
