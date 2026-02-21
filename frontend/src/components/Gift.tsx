import { useState } from 'react';
import { 
  FaHeart, 
  FaGift, 
  FaCheckCircle,
  FaUniversity,
  FaUserCircle,
  FaRegHeart,
  FaStar,
  // FaPhoneAlt,
  // FaEnvelope
} from 'react-icons/fa';
import { BiGift } from 'react-icons/bi';
import { GiFlowerTwirl } from 'react-icons/gi';
import { MdCelebration, MdContentCopy } from 'react-icons/md';

const Gift = () => {
  const [copiedEspees, setCopiedEspees] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const copyToClipboard = (text: string, type: 'espees' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'espees') {
      setCopiedEspees(true);
      setTimeout(() => setCopiedEspees(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  const bankDetails = {
    espees: "joekenryod74065",
    accountNumber: "0129880836",
    accountName: "Chukwuemeka Amarachi R.",
    bankName: "GTBank",
  };

  return (
    <section id="gift-registry" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-amber-50/50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gold coin pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 10px 10px, #FBBF24 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 animate-float-slow">
          <FaGift className="text-amber-200/30 text-7xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float">
          <BiGift className="text-amber-200/30 text-8xl" />
        </div>
        <div className="absolute top-40 right-20 animate-spin-slow">
          <FaStar className="text-amber-200/30 text-6xl" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce">
          <FaRegHeart className="text-amber-200/30 text-5xl" />
        </div>
        
        {/* Gold lines */}
        <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-amber-400 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative line and icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-l from-amber-400 to-transparent" />
            <div className="relative">
              <FaGift className="text-3xl text-amber-500" />
              <FaHeart className="text-xs text-amber-400 absolute -top-1 -right-1 animate-ping" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-3">
            Gift
          </h2>
          <p className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Registry
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Heartfelt Message Card */}
          <div className="relative mb-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-amber-200/50 text-center">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 text-amber-300/40">
                <GiFlowerTwirl className="text-2xl" />
              </div>
              <div className="absolute top-4 right-4 text-amber-300/40">
                <GiFlowerTwirl className="text-2xl rotate-90" />
              </div>
              <div className="absolute bottom-4 left-4 text-amber-300/40">
                <GiFlowerTwirl className="text-2xl -rotate-90" />
              </div>
              <div className="absolute bottom-4 right-4 text-amber-300/40">
                <GiFlowerTwirl className="text-2xl rotate-180" />
              </div>

              {/* Floating hearts */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                <FaHeart className="text-amber-400 text-sm animate-pulse" />
                <FaHeart className="text-amber-500 text-base animate-pulse delay-100" />
                <FaHeart className="text-amber-400 text-sm animate-pulse delay-200" />
              </div>

              <MdCelebration className="text-5xl text-amber-500 mx-auto mb-4" />
              
              <p className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
                Your presence at our wedding is the greatest gift of all.
              </p>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                However, if you wish to honor us with a gift, we sincerely appreciate your 
                thoughtfulness and kindly request that all gifts be converted into monetary value.
              </p>

              <div className="flex justify-center gap-2 mt-6">
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-300" />
              </div>
            </div>
          </div>

          {/* Gift Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* ESPEES Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-amber-500/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500" />
              
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-amber-200 group-hover:border-amber-400 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-16 h-16 rounded-2xl rotate-45 mx-auto mb-6 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500">
                  <FaUserCircle className="text-white text-3xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>

                <h3 className="font-serif text-xl text-center text-gray-800 mb-4">ESPEES</h3>
                
                <div className="bg-amber-50 rounded-xl p-4 mb-4 border border-amber-200">
                  <p className="text-sm text-amber-700 font-light mb-1">USERNAME</p>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-lg text-gray-800">{bankDetails.espees}</p>
                    <button
                      onClick={() => copyToClipboard(bankDetails.espees, 'espees')}
                      className="relative bg-white p-2 rounded-lg hover:bg-amber-100 transition-colors group/btn"
                      title="Copy to clipboard"
                    >
                      {copiedEspees ? (
                        <FaCheckCircle className="text-green-500 text-lg" />
                      ) : (
                        <MdContentCopy className="text-amber-600 text-lg group-hover/btn:scale-110 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">Click the copy button to copy username</p>
                </div>

                {copiedEspees && (
                  <div className="absolute -top-2 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                    Copied!
                  </div>
                )}
              </div>
            </div>

            {/* Bank Account Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500" />
              
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-amber-200 group-hover:border-amber-400 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 w-16 h-16 rounded-2xl rotate-45 mx-auto mb-6 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500">
                  <FaUniversity className="text-white text-3xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>

                <h3 className="font-serif text-xl text-center text-gray-800 mb-4">Bank Transfer</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                    <p className="text-xs text-amber-700 font-light mb-1">ACCOUNT NUMBER</p>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-lg text-gray-800">{bankDetails.accountNumber}</p>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                        className="relative bg-white p-2 rounded-lg hover:bg-amber-100 transition-colors group/btn"
                        title="Copy to clipboard"
                      >
                        {copiedAccount ? (
                          <FaCheckCircle className="text-green-500 text-lg" />
                        ) : (
                          <MdContentCopy className="text-amber-600 text-lg group-hover/btn:scale-110 transition-transform" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                    <p className="text-xs text-amber-700 font-light mb-1">ACCOUNT NAME</p>
                    <p className="font-medium text-gray-800">{bankDetails.accountName}</p>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                    <p className="text-xs text-amber-700 font-light mb-1">BANK</p>
                    <p className="font-medium text-gray-800">{bankDetails.bankName}</p>
                  </div>
                </div>

                {copiedAccount && (
                  <div className="absolute -top-2 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Thank You Note */}
          <div className="relative mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-amber-200/50 backdrop-blur-sm px-8 py-4 rounded-full border border-amber-300 shadow-lg">
              <FaHeart className="text-amber-500 animate-pulse" />
              <p className="text-gray-700">
                <span className="font-medium">Thank you for your generosity!</span>{' '}
                <span className="text-amber-600">We appreciate you ❤️</span>
              </p>
              <FaHeart className="text-amber-500 animate-pulse delay-150" />
            </div>
          </div>

          {/* Contact for Gift Issues */}
          {/* <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-400" />
              <span>+234 (0) 812 345 6789</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-amber-400" />
              <span>gift@wedding.com</span>
            </div>
          </div> */}
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

export default Gift;