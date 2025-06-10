import { useNavigate } from "react-router-dom";
import { User, Clock } from "lucide-react";
import Slidecompo from "../components/Slidecompo";

const Section2 = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/blogs/${encodedTitle}`);
  };

  const articles = [
    {
      id: 1,
      category: "HEALTH",
      title: "Essential Vitamins To Improve Male Fertility",
      description: "Explore the key nutrients that can help boost male fertility and overall reproductive health.",
      author: "Rohit Tiwari",
      date: "October 4, 2023",
      image: "https://i.pinimg.com/736x/2e/b4/fe/2eb4fe988fb1ab5a9e9021c2a996c247.jpg",
      categoryColor: "bg-orange-100 text-orange-700",
    },
    {
      id: 2,
      category: "GUIDE",
      title: "A Comprehensive Guide Into Men’s Sexual Health",
      description: "Understand the essentials of men’s sexual wellness, and how to address key concerns through expert-backed advice.",
      author: "Aditya Singh",
      date: "October 1, 2023",
      image: "https://i.pinimg.com/736x/f1/05/30/f105303d57eb105b5563770f88eec068.jpg",
      categoryColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      category: "WELLNESS",
      title: "Discover The Ultimate Secret To Staying Fit In Your 40s!",
      description: "Learn how to maintain your energy and health in your 40s with simple, science-backed fitness strategies.",
      author: "Ankit Pandey",
      date: "October 1, 2023",
      image: "https://i.pinimg.com/736x/97/42/a8/9742a8afa7d252ed5cb70a9b1aa5fd70.jpg",
      categoryColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      category: "NUTRITION",
      title: "A Guide To The Dietary Needs Of Men",
      description: "From macronutrients to micronutrients, discover what your body really needs to function at its best.",
      author: "Rudra Sawant",
      date: "October 1, 2023",
      image: "https://i.pinimg.com/736x/e1/44/1b/e1441b171d65f1a5d2e50cf76f95b3be.jpg",
      categoryColor: "bg-purple-100 text-purple-700",
    },
    {
      id: 5,
      category: "LIFESTYLE",
      title: "Discover The Secret To Aging Gracefully!",
      description: "Graceful aging isn’t a myth — explore tips and habits that promote vitality and longevity in your later years.",
      author: "Meet Rao",
      date: "October 1, 2023",
      image: "https://i.pinimg.com/736x/4b/71/4a/4b714a320a3f4082ca8091c53446836d.jpg",
      categoryColor: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="grid grid-cols-[75%_25%] min-h-screen bg-white">
      <div className="pl-16">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold font-inter text-gray-900 mb-8">Latest articles</h1>

          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                onClick={() => handleClick(article.title)}
                className="cursor-pointer grid grid-cols-[300px_1fr] gap-6 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow min-h-[280px]"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden rounded-2xl w-[300px] h-[280px] p-4">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6 flex flex-col gap-4 justify-start">
                  <span
                    className={`inline-block px-3 py-1 font-nunito rounded-full text-sm text-gray-500 font-semibold uppercase tracking-wider `}
                  >
                    {article.category}
                  </span>

                  <h2 className="text-2xl font-semibold font-inter text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">{article.description}</p>

                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 mt-auto">
                    <div className="w-8 h-8 bg-gray-200 rounded-full grid place-items-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{article.author}</span>
                    <div className="grid grid-cols-[auto_auto] items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{article.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Slidecompo />
    </div>
  );
};

export default Section2;
