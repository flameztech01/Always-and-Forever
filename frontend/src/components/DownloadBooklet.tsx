import { FaDownload, FaHeart, FaBook, FaRing } from 'react-icons/fa';

const DownloadBooklet = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/JK-Booklet.pdf'; // Path to your PDF file in the public folder
    link.download = 'JK-Wedding-Booklet.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Gold sparkle pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FBBF24 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-5 left-10 animate-float-slow opacity-30">
          <FaRing className="text-amber-400 text-3xl" />
        </div>
        <div className="absolute bottom-5 right-10 animate-float-delayed opacity-30">
          <FaHeart className="text-amber-400 text-4xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-r from-amber-900/10 via-white to-amber-900/10 rounded-2xl shadow-xl border border-amber-200/50 overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Left Side - Booklet Preview */}
              <div className="md:w-1/3 bg-gradient-to-br from-amber-500/10 to-amber-600/10 p-6 md:p-8 flex items-center justify-center border-r border-amber-200/50">
                <div className="text-center">
                  <div className="relative inline-block">
                    {/* Book Icon with Shadow */}
                    <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full"></div>
                    <FaBook className="text-6xl md:text-7xl text-amber-500 relative z-10" />
                  </div>
                  <div className="mt-4">
                    <p className="text-amber-700 font-serif text-sm italic">Your keepsake awaits</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-2/3 p-6 md:p-8">
                {/* Decorative Line */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent"></div>
                  <FaHeart className="text-amber-400 text-xs" />
                  <div className="h-px w-8 bg-gradient-to-l from-amber-400 to-transparent"></div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
                  Wedding Program Booklet
                </h3>
                
                {/* Subtitle */}
                <p className="text-amber-600 font-medium text-sm mb-3">
                  Amarachi <span className="text-amber-400">♥</span> Joekenry
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  Download our beautifully crafted wedding program booklet featuring the order of service, 
                  our love story, bridal party, and special messages from our hearts to yours.
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                    <FaHeart className="text-amber-400 text-[10px]" />
                    Order of Service
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                    <FaHeart className="text-amber-400 text-[10px]" />
                    Love Story
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                    <FaHeart className="text-amber-400 text-[10px]" />
                    Bridal Party
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                    <FaHeart className="text-amber-400 text-[10px]" />
                    Wedding Timeline
                  </span>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <FaDownload className="group-hover:animate-bounce" />
                    Download Program Booklet (PDF)
                  </span>
                  
                  {/* Decorative sparkle */}
                  <span className="relative z-10 text-xs opacity-80">📖</span>
                </button>

                {/* File Info */}
                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                  <span>📄</span> PDF Document • 2.4 MB • Ready to print
                </p>
              </div>
            </div>
          </div>

          {/* Optional: Additional decorative note */}
          <div className="text-center mt-4">
            <p className="text-xs text-amber-600/60 flex items-center justify-center gap-1">
              <FaHeart className="text-amber-400 text-[8px]" />
              A beautiful keepsake to cherish forever
              <FaHeart className="text-amber-400 text-[8px]" />
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DownloadBooklet;