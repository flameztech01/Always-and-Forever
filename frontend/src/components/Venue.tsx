
import { 
  FaHeart, 
  FaMapMarkerAlt, 
  FaChurch, 
  FaLocationArrow,
  FaCar,
  FaBus,
  FaParking,
  FaRegBuilding,
  FaStar
} from 'react-icons/fa';
import { MdLocationOn, MdLocalParking, MdAccessibility } from 'react-icons/md';
import { GiFlowerTwirl } from 'react-icons/gi';

const Venue = () => {
  const openGoogleMaps = () => {
    const query = encodeURIComponent('Christ Embassy Cornerstone Church, LCA Car Park, Oregun, Ikeja, Lagos');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="venue" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-amber-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gold pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 30 L30 10 L50 30 L30 50 L10 30 L30 30" fill="none" stroke="%23FBBF24" stroke-width="0.5"/%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 animate-float-slow">
          <FaChurch className="text-amber-200/30 text-7xl" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float">
          <FaHeart className="text-amber-200/30 text-6xl" />
        </div>
        <div className="absolute top-40 left-20 animate-spin-slow">
          <GiFlowerTwirl className="text-amber-200/30 text-5xl" />
        </div>
        <div className="absolute bottom-40 right-20 animate-bounce">
          <FaLocationArrow className="text-amber-200/30 text-5xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative line and icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-l from-amber-400 to-transparent" />
            <div className="relative">
              <FaChurch className="text-3xl text-amber-500" />
              <FaHeart className="text-xs text-amber-400 absolute -top-1 -right-1 animate-ping" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-3">
            Wedding
          </h2>
          <p className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Venue & Location
          </p>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-2 mt-4">
            <FaHeart className="text-amber-300 text-sm" />
            <FaHeart className="text-amber-400 text-base" />
            <FaHeart className="text-amber-500 text-lg" />
            <FaHeart className="text-amber-400 text-base" />
            <FaHeart className="text-amber-300 text-sm" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Venue Card */}
          <div className="relative group">
            {/* Glowing effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50">
              
              {/* Decorative top gold line */}
              <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
              
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column - Venue Details */}
                  <div className="space-y-8">
                    {/* Venue Name with Icon */}
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-2xl shadow-lg">
                        <FaChurch className="text-white text-3xl" />
                      </div>
                      <div>
                        <p className="text-sm text-amber-600 font-light tracking-wider mb-1">THE VENUE</p>
                        <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
                          Christ Embassy Cornerstone Church
                        </h3>
                      </div>
                    </div>

                    {/* Full Address */}
                    <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200">
                      <div className="flex items-start gap-3">
                        <MdLocationOn className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-amber-700 font-light mb-1">ADDRESS</p>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Christ Embassy Cornerstone Church, LCA Car Park, Oregun, Ikeja, Lagos.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Map Button */}
                    <button
                      onClick={openGoogleMaps}
                      className="group/btn w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-white/20 p-3 rounded-xl group-hover/btn:scale-110 transition-transform">
                            <FaLocationArrow className="text-2xl" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm text-amber-100 font-light">OPEN WITH</p>
                            <p className="font-serif text-xl">Google Maps</p>
                          </div>
                        </div>
                        <FaStar className="text-amber-300 text-2xl animate-pulse" />
                      </div>
                      
                      {/* Progress line on hover */}
                      <div className="mt-4 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full w-0 group-hover/btn:w-full bg-white transition-all duration-700 rounded-full" />
                      </div>
                    </button>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-amber-200">
                        <FaParking className="text-amber-500 text-xl mb-2" />
                        <p className="text-sm text-gray-600">Parking</p>
                        <p className="font-medium text-gray-800">Available on-site</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-200">
                        <MdAccessibility className="text-amber-500 text-xl mb-2" />
                        <p className="text-sm text-gray-600">Accessibility</p>
                        <p className="font-medium text-gray-800">Wheelchair friendly</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Map Preview */}
                  <div className="space-y-6">
                    {/* Map Image Preview */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group/map">
                      <div className="aspect-w-4 aspect-h-3">
                        <img 
                          src="https://maps.googleapis.com/maps/api/staticmap?center=Christ+Embassy+Cornerstone+Church+Lagos&zoom=15&size=600x400&maptype=roadmap&markers=color:gold%7CChrist+Embassy+Cornerstone+Church+Lagos&key=YOUR_API_KEY"
                          alt="Church location map"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if Google Maps static API fails
                            e.currentTarget.src = 'https://via.placeholder.com/600x400/FBBF24/ffffff?text=Christ+Embassy+Cornerstone+Church';
                          }}
                        />
                      </div>
                      
                      {/* Overlay with view on map button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <button
                          onClick={openGoogleMaps}
                          className="bg-white text-amber-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                        >
                          <FaMapMarkerAlt />
                          View Larger Map
                        </button>
                      </div>
                    </div>

                    {/* Transportation Info */}
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200">
                      <h4 className="font-serif text-lg text-gray-800 mb-4 flex items-center gap-2">
                        <FaCar className="text-amber-500" />
                        Getting There
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-white p-2 rounded-full">
                            <FaCar className="text-amber-500 text-sm" />
                          </div>
                          <p className="text-sm text-gray-600">15 mins from Ikeja City Mall</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-white p-2 rounded-full">
                            <FaBus className="text-amber-500 text-sm" />
                          </div>
                          <p className="text-sm text-gray-600">Bus stop: Oregun Bus Stop (5 min walk)</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-white p-2 rounded-full">
                            <MdLocalParking className="text-amber-500 text-sm" />
                          </div>
                          <p className="text-sm text-gray-600">Free parking available for guests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom */}
                <div className="mt-8 pt-6 border-t border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-amber-400" />
                    <span className="text-sm text-gray-500">We can't wait to see you there!</span>
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-amber-300 text-xs" />
                    <FaStar className="text-amber-400 text-sm" />
                    <FaStar className="text-amber-500 text-base" />
                    <FaStar className="text-amber-400 text-sm" />
                    <FaStar className="text-amber-300 text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Accommodations Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200">
              <FaRegBuilding className="text-amber-500" />
              <p className="text-sm text-gray-600">
                <span className="font-medium text-amber-700">Nearby hotels:</span> Pick your favorite spot to stay
              </p>
              <button className="text-amber-600 hover:text-amber-700 font-medium text-sm ml-2">
                View Recommendations →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      {/* <style jsx>{`
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
      `}</style> */}
    </section>
  );
};

export default Venue;