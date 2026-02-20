
import { FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaRing } from 'react-icons/fa';
import { BsArrowDownCircle } from 'react-icons/bs';

const Hero = () => {
  const scrollToNextSection = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/couples.jpg")',
          }}
        />
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-amber-500/20 to-white/40" />
        {/* Decorative gold pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Floating hearts decoration */}
        <div className="absolute top-20 left-10 animate-bounce hidden lg:block">
          <FaHeart className="text-amber-300/40 text-4xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse hidden lg:block">
          <FaHeart className="text-amber-300/40 text-5xl" />
        </div>
        <div className="absolute top-40 right-20 animate-spin-slow hidden lg:block">
          <FaRing className="text-amber-300/30 text-3xl" />
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          {/* Decorative top line */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-600 mx-auto mb-6 rounded-full" />
          
          {/* Subtitle */}
          <p className="text-amber-800 font-light tracking-[0.3em] text-sm md:text-base mb-4">
            CELEBRATING LOVE
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-gray-800 mb-6 leading-tight">
            We're Getting 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
              Married
            </span>
          </h1>

          {/* Couple Names with decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl md:text-2xl text-gray-800">Pastor Oluwatosin Adetutu</span>
              <FaHeart className="text-amber-500 text-xl" />
              <span className="font-serif text-xl md:text-2xl text-gray-800">Pastor Favour NewMan</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          {/* Date and Location Card */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Date */}
              <div className="flex items-center gap-3">
                <div className="bg-amber-400/20 p-3 rounded-full">
                  <FaCalendarAlt className="text-amber-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-amber-700 font-light">DATE</p>
                  <p className="font-serif text-lg md:text-xl text-gray-800 font-medium">January 17, 2026</p>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="bg-amber-400/20 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-amber-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-amber-700 font-light">LOCATION</p>
                  <p className="font-serif text-lg md:text-xl text-gray-800 font-medium">Christ Embassy Cornerstone Church</p>
                  <p className="text-sm text-gray-600">LCA Car Park, Oregun, Ikeja, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                RSVP Now
                <FaHeart className="group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/80 text-amber-700 rounded-full font-medium border-2 border-amber-400 hover:bg-white hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="bg-white/30 backdrop-blur-sm p-2 rounded-full border border-amber-400/50 group-hover:border-amber-500 transition-all">
          <BsArrowDownCircle className="text-3xl text-amber-600 group-hover:text-amber-700 transition-colors" />
        </div>
      </button>

      {/* Add custom animation for spin-slow */}
      {/* <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style> */}
    </section>
  );
};

export default Hero;