import { 
  FaHeart, 
  FaRing, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  MdAttractions, 
  MdChurch, 
  MdCelebration 
} from 'react-icons/md';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { GiFlowerTwirl } from 'react-icons/gi';

const Details = () => {
  const events = [
    {
      id: 1,
      title: "Traditional Wedding",
      icon: <MdAttractions className="text-4xl" />,
      time: "12:00 PM",
      date: "Thursday, March 18th, 2026",
      venue: "House 3, Road E",
      address: [
        "All Saints Community, Phase 1, Ogombo",
        "Eti-Osa, Lagos"
      ],
      description: "Join us as we celebrate our traditional wedding ceremony with family and friends.",
      color: "from-amber-600 to-amber-700",
      dressCode: "Traditional attire"
    },
    {
      id: 2,
      title: "White Wedding",
      icon: <MdChurch className="text-4xl" />,
      time: "10:00 AM",
      date: "Saturday, March 21st, 2026",
      venue: "Christ Embassy Isheri",
      address: [
        "No 8 Channels TV Road, Opic Estate",
        "Isheri, Lagos"
      ],
      description: "Join us as we exchange our vows before God, family, and friends.",
      color: "from-amber-400 to-amber-500",
      dressCode: "Formal/Church attire"
    }
  ];

  return (
    <section id="details" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-amber-50/50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gold sparkle pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FBBF24 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating decorative icons */}
        <div className="absolute top-10 left-10 animate-float-slow">
          <FaStar className="text-amber-200/30 text-6xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float">
          <FaRing className="text-amber-200/30 text-7xl" />
        </div>
        <div className="absolute top-40 right-20 animate-spin-slow">
          <GiFlowerTwirl className="text-amber-200/30 text-5xl" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce">
          <FaRegHeart className="text-amber-200/30 text-5xl" />
        </div>
        
        {/* Gold lines decoration */}
        <div className="absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-20 h-px bg-gradient-to-l from-amber-400 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative line and icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-l from-amber-400 to-transparent" />
            <div className="relative">
              <MdCelebration className="text-3xl text-amber-500" />
              <FaHeart className="text-xs text-amber-400 absolute -top-1 -right-1 animate-ping" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-3">
            Event
          </h2>
          <p className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Details & Schedule
          </p>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Join us in celebrating our love story. Here's everything you need to know about our special days.
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

        {/* Events Grid - 2 columns for the 2 events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative"
            >
              {/* Glowing effect behind card */}
              <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100 hover:border-amber-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 text-amber-300/40">
                  <GiFlowerTwirl className="text-xl" />
                </div>
                <div className="absolute top-4 right-4 text-amber-300/40">
                  <GiFlowerTwirl className="text-xl rotate-90" />
                </div>
                
                {/* Event Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${event.color} rounded-2xl rotate-45 transform group-hover:rotate-0 transition-transform duration-500 shadow-lg`}>
                    <div className="absolute inset-0 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <div className="text-white">
                        {event.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating heart */}
                  <FaHeart className="absolute -top-2 -right-2 text-amber-400 text-sm animate-pulse" />
                </div>

                {/* Event Title */}
                <h3 className="font-serif text-2xl text-center text-gray-800 mb-4">
                  {event.title}
                </h3>

                {/* Event Details Card */}
                <div className="bg-amber-50/80 rounded-2xl p-4 mb-4 space-y-3">
                  {/* Time */}
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-200/50 p-2 rounded-lg">
                      <FaClock className="text-amber-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-amber-700 font-light">TIME</p>
                      <p className="text-sm md:text-base text-gray-700 font-medium">{event.time}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-200/50 p-2 rounded-lg">
                      <FaCalendarAlt className="text-amber-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-amber-700 font-light">DATE</p>
                      <p className="text-sm md:text-base text-gray-700 font-medium">{event.date}</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-200/50 p-2 rounded-lg mt-1">
                      <FaMapMarkerAlt className="text-amber-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-amber-700 font-light">VENUE</p>
                      <p className="text-sm md:text-base text-gray-700 font-medium">{event.venue}</p>
                      {event.address.map((line, index) => (
                        <p key={index} className="text-xs text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Dress Code */}
                <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg mt-auto">
                  <FaRing className="text-amber-500" />
                  <span>{event.dressCode}</span>
                </div>

                {/* Decorative bottom border */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Save the Date Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
            Save the Date
            <FaHeart className="group-hover:scale-110 transition-transform" />
          </button>
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

export default Details;