import { FaCalendarAlt, FaMapMarkerAlt, FaRing } from 'react-icons/fa';
import { BsArrowDownCircle } from 'react-icons/bs';
import { GiFlowerEmblem } from 'react-icons/gi';

const Hero = () => {
  const scrollToNextSection = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Royal Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/couples1.jpeg")',
          }}
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-amber-900/40 to-black/40" />
        
        {/* Subtle gold pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, gold 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Decorative floating elements - subtle */}
      <div className="absolute top-20 left-10 animate-float-slow hidden lg:block opacity-30">
        <FaRing className="text-amber-300 text-4xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed hidden lg:block opacity-30">
        <GiFlowerEmblem className="text-amber-300 text-5xl" />
      </div>

      {/* Main Content - Centered vertically */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Card */}
        <div className="max-w-4xl mx-auto">
          {/* Decorative top line */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/60"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          
          {/* Subtitle - Changed from "celebration" to "ceremony" as requested */}
          <p className="text-amber-200/90 font-light tracking-[0.3em] text-sm md:text-base mb-4 text-center uppercase">
            The Wedding Ceremony
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 text-center leading-tight drop-shadow-2xl">
            Amarachi 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mx-2">&</span> 
            Joekenry
          </h1>

          {/* Subhead */}
          <p className="text-amber-100/90 text-lg md:text-xl mb-8 text-center font-light italic">
            Are delighted to announce their union
          </p>

          {/* Date and Location Card - Now showing both traditional and white wedding */}
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 mb-8 border border-amber-500/20 shadow-2xl">
            {/* Traditional Wedding */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-12 mb-6 pb-6 border-b border-amber-500/20">
              {/* Traditional Date */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-3 rounded-lg">
                  <FaCalendarAlt className="text-amber-400 text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-amber-300/80 font-light mb-1">TRADITIONAL • MARCH 19, 2026</p>
                  <p className="font-serif text-lg md:text-xl text-white">4:00 PM</p>
                </div>
              </div>

              {/* Traditional Venue */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-amber-400 text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-amber-300/80 font-light mb-1">VENUE</p>
                  <p className="font-serif text-base md:text-lg text-white">House 3, Road E</p>
                  <p className="text-xs text-amber-200/70">All Saints Community, Phase 1, Ogombo</p>
                  <p className="text-xs text-amber-200/70">Eti-Osa, Lagos</p>
                </div>
              </div>
            </div>

            {/* White Wedding */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-12">
              {/* White Wedding Date */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-3 rounded-lg">
                  <FaCalendarAlt className="text-amber-400 text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-amber-300/80 font-light mb-1">WHITE WEDDING • MARCH 21, 2026</p>
                  <p className="font-serif text-lg md:text-xl text-white">Time TBA</p>
                </div>
              </div>

              {/* White Wedding Venue */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-amber-400 text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-amber-300/80 font-light mb-1">VENUE</p>
                  <p className="font-serif text-base md:text-lg text-white">Christ Embassy Isheri</p>
                  <p className="text-xs text-amber-200/70">No 8 Channels TV Road, Opic Estate</p>
                  <p className="text-xs text-amber-200/70">Isheri, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 w-full sm:w-auto"
            >
              RSVP Now
            </button>
            
            <button 
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-amber-400/30 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 w-full sm:w-auto"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="bg-black/20 backdrop-blur-sm p-2 rounded-full border border-amber-500/30 group-hover:border-amber-500/50 transition-all">
          <BsArrowDownCircle className="text-2xl text-amber-400/80 group-hover:text-amber-300 transition-colors" />
        </div>
      </button>

      {/* <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default Hero;