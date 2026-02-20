import { useState, useEffect } from 'react';
import { FaClock, FaHeart, FaRing, FaGlassCheers, FaStar } from 'react-icons/fa';
import { MdWaves } from 'react-icons/md';

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date to 2 days from now at 12:00 PM
    const weddingDate = new Date();
    weddingDate.setDate(weddingDate.getDate() + 2);
    weddingDate.setHours(12, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const TimeBlock = ({ value, label, icon }: { value: number; label: string; icon: React.ReactNode }) => (
    <div className="group relative">
      {/* Glowing effect behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      {/* Main block */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
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
        <div className="text-amber-500 text-3xl mb-3 flex justify-center">
          {icon}
        </div>

        {/* Value */}
        <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold mb-1">
          {formatNumber(value)}
        </div>

        {/* Label */}
        <div className="text-sm md:text-base text-amber-700 font-light tracking-wider">
          {label}
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
            Our Special Day
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

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <TimeBlock 
              value={timeLeft.days} 
              label="DAYS" 
              icon={<FaClock />} 
            />
            <TimeBlock 
              value={timeLeft.hours} 
              label="HOURS" 
              icon={<FaClock />} 
            />
            <TimeBlock 
              value={timeLeft.minutes} 
              label="MINUTES" 
              icon={<FaClock />} 
            />
            <TimeBlock 
              value={timeLeft.seconds} 
              label="SECONDS" 
              icon={<FaClock />} 
            />
          </div>

          {/* Message under countdown */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-200 shadow-lg">
              <FaGlassCheers className="text-amber-500 text-xl" />
              <p className="text-gray-700">
                <span className="font-medium">Can't wait to celebrate with you!</span>{' '}
                <span className="text-amber-600">{timeLeft.days} days to go</span>
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
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default CountDown;