import {
  FaHeart,
  FaMapMarkerAlt,
  FaChurch,
  FaLocationArrow,
  FaCar,
  FaBus,
  FaParking,
  FaStar,
  FaHome,
  FaDirections,
  FaRing,
} from "react-icons/fa";
import { MdLocationOn, MdLocalParking } from "react-icons/md";
import { GiFlowerTwirl, GiChampagneCork } from "react-icons/gi";

const Venue = () => {
  const venues = [
    {
      id: 1,
      name: "Traditional Wedding Venue",
      venueName: "House 3, Road E",
      address: ["All Saints Community, Phase 1, Ogombo", "Eti-Osa, Lagos"],
      icon: <FaRing className="text-3xl" />,
      color: "from-amber-600 to-amber-700",
      date: "March 18, 2026",
      time: "12:00 PM",
      directions: [
        "Located in All Saints Community, Phase 1",
        "Off the main Ogombo Road",
        "Look for the community signpost at the entrance",
      ],
      transport: {
        car: "Accessible via Ogombo Road, 20 mins from Lekki-Epe Expressway",
        bus: "Nearest bus stop: Ogombo Bus Stop",
        parking: "Limited street parking available",
      },
    },
    {
      id: 2,
      name: "White Wedding Venue",
      venueName: "Christ Embassy Isheri",
      address: ["No 8 Channels TV Road, Opic Estate", "Isheri, Lagos"],
      icon: <GiChampagneCork className="text-3xl" />,
      color: "from-amber-400 to-amber-500",
      date: "March 21, 2026",
      time: "10:00 AM",
      directions: [
        "Located within Opic Estate",
        "Off Lagos-Ibadan Expressway",
        "Opposite Channels TV Office",
      ],
      transport: {
        car: "Off Lagos-Ibadan Expressway, near the Opic Estate gate",
        bus: "Bus stop: Opic Estate (along Lagos-Ibadan Expressway)",
        parking: "Ample parking available within the church premises",
      },
    },
  ];

  const openGoogleMaps = (address: string) => {
    const query = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank",
    );
  };

  return (
    <section
      id="venue"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-amber-50"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gold pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 30 L30 10 L50 30 L30 50 L10 30 L30 30" fill="none" stroke="%23FBBF24" stroke-width="0.5"/%3E%3C/svg%3E")',
            backgroundSize: "60px 60px",
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
            Venues & Locations
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

        {/* Two Venues Layout */}
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {venues.map((venue) => (
            <div key={venue.id} className="relative group">
              {/* Glowing effect behind card */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${venue.color} opacity-20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`}
              />

              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50">
                {/* Decorative top gold line with venue-specific color */}
                <div className={`h-2 bg-gradient-to-r ${venue.color}`} />

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Venue Details */}
                    <div className="space-y-8">
                      {/* Venue Name with Icon */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`bg-gradient-to-br ${venue.color} p-4 rounded-2xl shadow-lg`}
                        >
                          <div className="text-white">{venue.icon}</div>
                        </div>
                        <div>
                          <p className="text-sm text-amber-600 font-light tracking-wider mb-1">
                            {venue.name}
                          </p>
                          <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
                            {venue.venueName}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-amber-600">
                            <span>{venue.date}</span>
                            <span>•</span>
                            <span>{venue.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Full Address */}
                      <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200">
                        <div className="flex items-start gap-3">
                          <MdLocationOn className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-amber-700 font-light mb-1">
                              ADDRESS
                            </p>
                            {venue.address.map((line, index) => (
                              <p
                                key={index}
                                className="text-gray-700 text-lg leading-relaxed"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Directions */}
                      <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-md">
                        <h4 className="font-serif text-lg text-gray-800 mb-3 flex items-center gap-2">
                          <FaDirections className="text-amber-500" />
                          How to Get There
                        </h4>
                        <ul className="space-y-2">
                          {venue.directions.map((direction, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="text-amber-500 font-bold mr-2">
                                •
                              </span>
                              {direction}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Map Button */}
                      <button
                        onClick={() => openGoogleMaps(venue.address.join(", "))}
                        className="group/btn w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-3 rounded-xl group-hover/btn:scale-110 transition-transform">
                              <FaLocationArrow className="text-2xl" />
                            </div>
                            <div className="text-left">
                              <p className="text-sm text-amber-100 font-light">
                                OPEN WITH
                              </p>
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
                    </div>

                    {/* Right Column - Transportation Info */}
                    <div className="space-y-6">
                      {/* Map Preview (using placeholder) */}
                      <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group/map h-64">
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                          <div className="text-center">
                            <FaMapMarkerAlt className="text-amber-600 text-4xl mx-auto mb-2" />
                            <p className="text-amber-800 font-medium">
                              {venue.venueName}
                            </p>
                            <p className="text-sm text-amber-600">
                              {venue.address[0]}
                            </p>
                          </div>
                        </div>

                        {/* Overlay with view on map button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                          <button
                            onClick={() =>
                              openGoogleMaps(venue.address.join(", "))
                            }
                            className="bg-white text-amber-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                          >
                            <FaMapMarkerAlt />
                            View on Map
                          </button>
                        </div>
                      </div>

                      {/* Transportation Info */}
                      <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200">
                        <h4 className="font-serif text-lg text-gray-800 mb-4 flex items-center gap-2">
                          <FaCar className="text-amber-500" />
                          Transportation
                        </h4>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full mt-1">
                              <FaCar className="text-amber-500 text-sm" />
                            </div>
                            <p className="text-sm text-gray-600">
                              {venue.transport.car}
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full mt-1">
                              <FaBus className="text-amber-500 text-sm" />
                            </div>
                            <p className="text-sm text-gray-600">
                              {venue.transport.bus}
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-white p-2 rounded-full mt-1">
                              <MdLocalParking className="text-amber-500 text-sm" />
                            </div>
                            <p className="text-sm text-gray-600">
                              {venue.transport.parking}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-amber-200">
                          <FaParking className="text-amber-500 text-xl mb-2" />
                          <p className="text-sm text-gray-600">Parking</p>
                          <p className="font-medium text-gray-800 text-sm">
                            {venue.id === 1
                              ? "Street parking"
                              : "On-site parking"}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-200">
                          <FaHome className="text-amber-500 text-xl mb-2" />
                          <p className="text-sm text-gray-600">Area</p>
                          <p className="font-medium text-gray-800 text-sm">
                            {venue.id === 1 ? "Ogombo" : "Isheri"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Bottom */}
                  <div className="mt-8 pt-6 border-t border-amber-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-amber-400" />
                      <span className="text-sm text-gray-500">
                        We can't wait to see you there!
                      </span>
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
          ))}
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
