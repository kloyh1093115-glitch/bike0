import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// FIX: Re-added the import for the logo as requested.
// This assumes 'logo02.svg' is in a folder like 'src/assets'.
import logo02 from '../assets/logo2.svg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: '事業内容', path: '/service' },
  { name: 'YouTube', path: '/youtube' },
  { name: '当店について', path: '/about' },
  { name: 'よくあるご質問', path: '/faq' },
  { name: 'お問い合わせ', path: '/contact' },
];

const MobileMenu = ({ links, onClose }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 p-8"
    >
      <div className="flex justify-end mb-8">
        <button onClick={onClose}>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <nav className="flex flex-col space-y-6">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `text-2xl font-semibold ${isActive ? 'text-gray-900' : 'text-gray-800'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300 bg-white"
        animate={{
          height: isScrolled ? '64px' : '80px',
          boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <Link to="/" className="z-50 flex items-center h-full md:ml-[-2.5rem]">
            <motion.img 
              // FIX: Changed the src to use the imported logo variable.
              src={logo02}
              alt="Bike Station Tono Logo"
              animate={{ height: isScrolled ? 56 : 64 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => {
                  const baseClasses = "relative font-medium transition-colors duration-300";
                  const colorClasses = isActive ? 'text-gray-900 font-bold' : 'text-gray-700 hover:text-gray-900';
                  const underlineClasses = `after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`;
                  const underlineColor = 'after:bg-gray-800';
                  
                  return `${baseClasses} ${colorClasses} ${underlineClasses} ${underlineColor}`;
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
          </div>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isMenuOpen && <MobileMenu links={navLinks} onClose={() => setIsMenuOpen(false)} />} 
      </AnimatePresence>
    </>
  );
};

export default Header;

