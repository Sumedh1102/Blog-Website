import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section4 = () => {
  const navigate = useNavigate();

  const navItems = [
    { path: '/', link: 'Browse all articles' },
  ];

  const handleHomeClick = () => {
    navigate(navItems[0].path); // Navigates to '/services'
  };

  const articles = [
    {
      id: "digital-project-management",
      category: "TIPS",
      title: "5 ways to improve your digital project management",
      image: "https://i.pinimg.com/736x/fb/61/a7/fb61a7c3ef6c7b9595c75df6de07efd1.jpg",
      href: "/articles/digital-project-management",
    },
    {
      id: "management-software",
      category: "TIPS",
      title: "How to choose the best management software",
      image: "https://i.pinimg.com/736x/53/b2/f8/53b2f8eec701c7e2e373099f8f0e0f5d.jpg",
      href: "/articles/management-software",
    },
    {
      id: "productivity-tools",
      category: "RESOURCES",
      title: "10 productivity tools that are worth checking out",
      image: "https://i.pinimg.com/736x/8f/f0/8a/8ff08a8ba40a19fd706bd78baa8931e6.jpg",
      href: "/articles/productivity-tools",
    },
  ];

  return (
    <>
      <div className="bg-white py-16 px-4 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Related articles</h1>
            <button
              onClick={handleHomeClick}
              className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-base transition-colors font-nunito"
            >
              {navItems[0].link}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="relative h-80 rounded-2xl overflow-hidden bg-gray-900 transition-transform duration-300 group-hover:scale-105"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="flex justify-start">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-semibold font-nunito leading-tight opacity-90">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
