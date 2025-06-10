import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Edit3, Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/services', link: 'Subscribe' },
    { path: '/contact', link: 'Contact' },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <header className="bg-white text-black top-0 right-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          {/* Top Section */}
          <div className="flex justify-between items-center py-4 pt-10">
            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-black hover:text-gray-600" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className="text-black hover:text-gray-600" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="text-black hover:text-gray-600" aria-label="Instagram">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <FaInstagram className="w-6 h-6 text-black" />
                </div>
              </a>
              <a href="#" className="text-black hover:text-gray-600" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>

            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2 mb-1 pr-20">
              <Edit3 className="w-6 h-6 text-black" />
              <span className="text-3xl font-normal text-black">
                InkSpire <span className="font-bold">X</span>
              </span>
            </NavLink>

            {/* Right User Icons */}
            <div className="flex items-center space-x-6">

              {/* Search Icon */}
              <button className="text-black hover:text-gray-600"><Search className="w-7 h-7" /></button>

              {/* Mobile Toggle */}
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-black">
                  {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center pb-4 ">
            <ul className="flex items-center space-x-14 pl-10 mb-6 ">
              {navItems.map(({ path, link }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-xl font-extralight tracking-wide ${isActive ? "text-black" : "text-black hover:text-gray-600"}`
                    }
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden block space-y-4 px-4 py-6 bg-white border-t border-gray-100 ${
            isMenuOpen ? "fixed top-0 left-0 w-full z-50" : "hidden"
          }`}
        >
          {/* Mobile Header */}
          <li className="flex justify-between items-center pb-4 border-b border-gray-200">
            <NavLink to="/" className="flex items-center space-x-2">
              <Edit3 className="w-6 h-6 text-black" />
              <span className="text-xl font-normal text-black">
                Writeology <span className="font-bold">X</span>
              </span>
            </NavLink>
            <button onClick={toggleMenu} className="text-black">
              <FaXmark className="w-5 h-5" />
            </button>
          </li>

          {/* Nav Items */}
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-lg font-medium ${isActive ? "text-orange-500" : "text-black hover:text-gray-600"}`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}

          {/* Mobile Social Icons */}
          <li className="flex items-center space-x-4 pt-4 border-t border-gray-200">
            <a href="#" className="text-black hover:text-gray-600"><FaFacebook /></a>
            <a href="#" className="text-black hover:text-gray-600"><FaTwitter /></a>
            <a href="#" className="text-black hover:text-gray-600">
              <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                <FaInstagram className="w-4 h-4 text-white" />
              </div>
            </a>
            <a href="#" className="text-black hover:text-gray-600"><FaLinkedin /></a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
