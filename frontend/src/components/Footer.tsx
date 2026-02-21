import { 
  FaHeart, 
  FaRing, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaStar
} from 'react-icons/fa';
import { GiFlowerTwirl } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 50L60 45C120 40 240 30 360 30C480 30 600 40 720 50C840 60 960 70 1080 70C1200 70 1320 60 1380 55L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" 
            fill="#FBBF24" 
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FBBF24 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float-slow opacity-20">
        <FaRing className="text-6xl text-amber-300" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20">
        <GiFlowerTwirl className="text-7xl text-amber-300" />
      </div>
      <div className="absolute top-40 right-20 animate-spin-slow opacity-10">
        <FaStar className="text-8xl text-amber-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <FaRing className="text-amber-400 text-2xl" />
              <h3 className="font-serif text-2xl text-white">Amarachi <span className="text-amber-400">&</span> Joekenry</h3>
            </div>
            <p className="text-amber-200/80 text-sm leading-relaxed mb-4">
              Joined in love, celebrating forever. Thank you for being part of our journey and sharing in our joy.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="#" className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaInstagram className="text-amber-300 hover:text-white text-lg" />
              </a>
              <a href="#" className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaFacebook className="text-amber-300 hover:text-white text-lg" />
              </a>
              <a href="#" className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaTwitter className="text-amber-300 hover:text-white text-lg" />
              </a>
              <a href="#" className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-colors duration-300">
                <FaWhatsapp className="text-amber-300 hover:text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-white mb-4 pb-2 border-b border-amber-700/50">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-amber-200/80 hover:text-amber-400 transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('countdown')} className="text-amber-200/80 hover:text-amber-400 transition-colors text-sm">
                  Countdown
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('details')} className="text-amber-200/80 hover:text-amber-400 transition-colors text-sm">
                  Event Details
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('venue')} className="text-amber-200/80 hover:text-amber-400 transition-colors text-sm">
                  Venues
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gift-registry')} className="text-amber-200/80 hover:text-amber-400 transition-colors text-sm">
                  Gift Registry
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rsvp')} className="text-amber-200/80 hover:text-amber-400 transition-colors text-sm">
                  RSVP
                </button>
              </li>
            </ul>
          </div>

          {/* Event Dates */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-white mb-4 pb-2 border-b border-amber-700/50">Our Celebrations</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <div className="bg-amber-800/50 p-1.5 rounded-full">
                  <FaCalendarAlt className="text-amber-400 text-xs" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-amber-300">Traditional</p>
                  <p className="text-sm text-white">March 19, 2026 • 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <div className="bg-amber-800/50 p-1.5 rounded-full">
                  <FaCalendarAlt className="text-amber-400 text-xs" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-amber-300">White Wedding</p>
                  <p className="text-sm text-white">March 21, 2026 • 11:00 AM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-white mb-4 pb-2 border-b border-amber-700/50">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <div className="bg-amber-800/50 p-1.5 rounded-full">
                  <FaPhone className="text-amber-400 text-xs" />
                </div>
                <span className="text-sm text-amber-200/80">+234 (0) 812 345 6789</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <div className="bg-amber-800/50 p-1.5 rounded-full">
                  <FaEnvelope className="text-amber-400 text-xs" />
                </div>
                <span className="text-sm text-amber-200/80">rsvp@wedding.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2">
                <div className="bg-amber-800/50 p-1.5 rounded-full mt-1">
                  <FaMapMarkerAlt className="text-amber-400 text-xs" />
                </div>
                <span className="text-sm text-amber-200/80 text-left">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-amber-800/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-amber-900 to-amber-950 px-4 text-amber-400">
              <FaHeart className="text-xl animate-pulse" />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-amber-400/70">
          <p className="mb-2 md:mb-0">
            © {currentYear} Amarachi & Joekenry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p>Crafted with <FaHeart className="inline text-amber-500 text-xs mx-1" /> for our special day</p>
            <div className="hidden md:flex gap-1">
              <FaStar className="text-amber-500 text-xs" />
              <FaStar className="text-amber-500 text-xs" />
              <FaStar className="text-amber-500 text-xs" />
            </div>
          </div>
        </div>

        {/* Made with love note */}
        <div className="text-center mt-6 text-xs text-amber-800">
          <p>Forever begins March 19, 2026</p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;