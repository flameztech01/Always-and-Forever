import { useEffect, useState } from 'react';
import { FaHeart, FaHome, FaImages, FaCalendarAlt, FaCheckCircle, FaGift, FaRing, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', icon: <FaHome className="mr-2" />, id: 'home' },
    { name: 'Gallery', icon: <FaImages className="mr-2" />, id: 'gallery' },
    { name: 'Details', icon: <FaCalendarAlt className="mr-2" />, id: 'details' },
    { name: 'Venue', icon: <FaMapMarkerAlt className="mr-2" />, id: 'venue' },
    { name: 'RSVP', icon: <FaCheckCircle className="mr-2" />, id: 'rsvp' },
    { name: 'Gift Registry', icon: <FaGift className="mr-2" />, id: 'gift-registry' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <FaRing className="text-2xl text-amber-500 transform group-hover:rotate-12 transition-all duration-300" />
            <span className="font-serif text-2xl font-light tracking-wider bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Forever & Always
            </span>
            <FaHeart className="text-amber-400 text-sm animate-pulse" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {item.icon}
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-2 border border-amber-100">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 rounded-xl ${
                  index !== navItems.length - 1 ? 'border-b border-amber-100' : ''
                }`}
              >
                <span className="text-amber-500 mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                <FaHeart className="ml-auto text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
    </nav>
  );
};

export default Navbar;