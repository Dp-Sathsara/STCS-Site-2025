import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from '../UI/ThemeToggle';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="https://placehold.co/200x80?text=SCSSA+Logo" alt="SCSSA Logo" className="h-10 md:h-12" />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Home
          </Link>
          <Link to="/events" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Events
          </Link>
          <Link to="/news" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            News
          </Link>
          <Link to="/blog" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            Contact
          </Link>
          <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium">
            About Us
          </Link>
          <ThemeToggle />
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Join SCSSA
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-gray-800 dark:text-gray-200 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/events" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/news" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2" onClick={toggleMenu}>
              News
            </Link>
            <Link to="/blog" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium py-2" onClick={toggleMenu}>
              About Us
            </Link>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors text-center" onClick={toggleMenu}>
              Join SCSSA
            </a>
          </div>
        </div>}
    </header>;
};
export default Header;