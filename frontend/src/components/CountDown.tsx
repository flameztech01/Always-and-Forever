import { useState, useEffect } from 'react';
import { FaClock, FaHeart, FaRing, FaGlassCheers, FaStar, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdWaves } from 'react-icons/md';
import { GiChampagneCork } from 'react-icons/gi';

const CountDown = () => {
  // Traditional wedding: March 19, 2026 at 4:00 PM
  const [traditionalTimeLeft, setTraditionalTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // White wedding: March 21, 2026 (assuming 12:00 PM - adjust if different)
  const [whiteWeddingTimeLeft, setWhiteWeddingTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set traditional wedding date: March 19, 2026 at 4:00 PM
    const traditionalDate = new Date(2026, 2, 19, 16, 0, 0); // Month is 0-indexed, so 2 = March

    // Set white wedding date: March 21, 2026 at 12:00 PM (adjust time as needed)
    const whiteWeddingDate = new Date(2026, 2, 21, 12, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      
      // Calculate for traditional wedding
      const traditionalDistance = traditionalDate.getTime() - now;
      if (traditionalDistance < 0) {
        setTraditionalTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTraditionalTimeLeft({
          days: Math.floor(traditionalDistance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((traditionalDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((traditionalDistance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((traditionalDistance % (1000 * 60)) / 1000)
        });
      }

      // Calculate for white wedding
      const whiteWeddingDistance = whiteWeddingDate.getTime() - now;
      if (whiteWeddingDistance < 0) {
        setWhiteWeddingTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setWhiteWeddingTimeLeft({
          days: Math.floor(whiteWeddingDistance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((whiteWeddingDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((whiteWeddingDistance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((whiteWeddingDistance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const TimeBlock = ({ value, label, icon, bgColor = "from-amber-300/20 to-amber-500/20" }: { 
    value: number; 
    label: string; 
    icon: React.ReactNode;
    bgColor?: string;
  }) => (
    <div className="group relative">
      {/* Glowing effect behind */}
      <div className={`absolute inset-0 bg-gradient-to-r ${bgColor} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
      
      {/* Main block */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 text-amber-300/30">
          <FaStar className="text-xs" />
        </div>
        <div className="absolute top-2 right-2 text-amber-300/30">
          <FaStar className="text-xs" />
        </div>
        <div className="absolute bottom-2 left-2 text-amber-300/30">
          <FaStar className="text-xs" />
        </div>
        <div className="absolute bottom-2 right-2 text-amber-300/30">
          <FaStar className="text-xs" />
        </div>

        {/* Icon */}
        <div className="text-amber-500 text-2xl md:text-3xl mb-2 flex justify-center">
          {icon}
        </div>

        {/* Value */}
        <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-1">
          {formatNumber(value)}
        </div>

        {/* Label */}
        <div className="text-xs md:text-sm text-amber-700 font-light tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );

  const EventCard = ({ 
    title, 
    date, 
    time, 
    venue, 
    address,
    icon,
    timeLeft,
    bgGradient = "from-amber-500 to-amber-600"
  }: { 
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string[];
    icon: React.ReactNode;
    timeLeft: { days: number; hours: number; minutes: number; seconds: number };
    bgGradient?: string;
  }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-amber-200/50 hover:border-amber-400 transition-all duration-500">
      {/* Event Header */}
      <div className={`bg-gradient-to-r ${bgGradient} p-6 text-white`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl">{icon}</div>
          <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
        </div>
        <div className="flex items-center gap-4 text-amber-100">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-sm" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-sm" />
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="p-6">
        <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
          <TimeBlock 
            value={timeLeft.days} 
            label="DAYS" 
            icon={<FaClock />}
            bgColor="from-amber-300/20 to-amber-500/20"
          />
          <TimeBlock 
            value={timeLeft.hours} 
            label="HRS" 
            icon={<FaClock />}
            bgColor="from-amber-300/20 to-amber-500/20"
          />
          <TimeBlock 
            value={timeLeft.minutes} 
            label="MINS" 
            icon={<FaClock />}
            bgColor="from-amber-300/20 to-amber-500/20"
          />
          <TimeBlock 
            value={timeLeft.seconds} 
            label="SECS" 
            icon={<FaClock />}
            bgColor="from-amber-300/20 to-amber-500/20"
          />
        </div>

        {/* Venue Details */}
        <div className="border-t border-amber-100 pt-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-amber-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800">{venue}</p>
              {address.map((line, index) => (
                <p key={index} className="text-sm text-gray-600">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="countdown" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-amber-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gold sparkles */}
        <div className="absolute top-10 left-10 animate-pulse">
          <FaHeart className="text-amber-200/30 text-4xl" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce">
          <FaRing className="text-amber-200/30 text-5xl" />
        </div>
        <div className="absolute top-20 right-20 animate-spin-slow">
          <FaStar className="text-amber-200/30 text-6xl" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float">
          <MdWaves className="text-amber-200/30 text-5xl" />
        </div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #FBBF24 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative line and icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-l from-amber-400 to-transparent" />
            <div className="relative">
              <FaClock className="text-3xl text-amber-500" />
              <FaHeart className="text-xs text-amber-400 absolute -top-1 -right-1 animate-ping" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-3">
            Counting Down to
          </h2>
          <p className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Our Wedding Celebrations
          </p>

          {/* Decorative heart line */}
          <div className="flex justify-center gap-2 mt-4">
            <FaHeart className="text-amber-300 text-sm" />
            <FaHeart className="text-amber-400 text-base" />
            <FaHeart className="text-amber-500 text-lg" />
            <FaHeart className="text-amber-400 text-base" />
            <FaHeart className="text-amber-300 text-sm" />
          </div>
        </div>

        {/* Two Column Countdown Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Traditional Wedding */}
            <EventCard
              title="Traditional Wedding"
              date="March 19, 2026"
              time="4:00 PM"
              venue="House 3, Road E"
              address={[
                "All Saints Community, Phase 1, Ogombo",
                "Eti-Osa, Lagos"
              ]}
              icon={<FaRing />}
              timeLeft={traditionalTimeLeft}
              bgGradient="from-amber-600 to-amber-700"
            />

            {/* White Wedding */}
            <EventCard
              title="White Wedding"
              date="March 21, 2026"
              time="11:00 AM" // Assuming 11:00 AM - please adjust if different
              venue="Christ Embassy Isheri"
              address={[
                "No 8 Channels TV Road, Opic Estate",
                "Isheri, Lagos"
              ]}
              icon={<GiChampagneCork />}
              timeLeft={whiteWeddingTimeLeft}
              bgGradient="from-amber-500 to-amber-600"
            />
          </div>

          {/* Financial Information Card */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 border border-amber-200 shadow-lg">
              <div className="text-amber-600 text-2xl font-bold">₦</div>
              <div className="text-left">
                <p className="text-sm text-amber-700 font-medium">Bank Transfer</p>
                <p className="text-gray-800 font-serif">
                  <span className="font-bold">0129880836</span> • GTBank
                </p>
                <p className="text-xs text-gray-600">Chukwuemeka Amarachi R.</p>
              </div>
              <div className="border-l border-amber-200 pl-3">
                <p className="text-xs text-amber-600">Espees Username</p>
                <p className="text-sm font-mono text-gray-700">joekenryod74065</p>
              </div>
            </div>
          </div>

          {/* Message under countdown */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-200 shadow-lg">
              <FaGlassCheers className="text-amber-500 text-xl" />
              <p className="text-gray-700">
                <span className="font-medium">We can't wait to celebrate with you!</span>{' '}
                <span className="text-amber-600">{traditionalTimeLeft.days} days until traditional, {whiteWeddingTimeLeft.days} days until white wedding</span>
              </p>
              <div className="relative">
                <FaHeart className="text-amber-400 animate-pulse" />
                <FaHeart className="text-amber-300 text-xs absolute -top-1 -right-1 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 50L60 55C120 60 240 70 360 70C480 70 600 60 720 50C840 40 960 30 1080 30C1200 30 1320 40 1380 45L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" 
            fill="url(#gradient)" 
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="50" x2="1440" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Add custom animations */}
      {/* <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default CountDown;