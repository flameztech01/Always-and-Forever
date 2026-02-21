import React, { useState } from 'react';
import { 
  FaHeart, 
  FaRing, 
  FaUser, 
  FaUsers, 
  FaCheckCircle,
  FaRegEnvelope,
  FaStar
} from 'react-icons/fa';
import { MdAttractions, MdChurch, MdCelebration, MdMessage } from 'react-icons/md';
import { GiFlowerTwirl } from 'react-icons/gi';

const RSVP = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    attendance: '',
    numberOfGuests: '1',
    events: {
      traditional: false,
      white: false
    },
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      events: {
        ...prev.events,
        [name]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Prepare the selected events string
    const selectedEvents = [];
    if (formData.events.traditional) selectedEvents.push('Traditional');
    if (formData.events.white) selectedEvents.push('White');
    const eventsString = selectedEvents.length > 0 ? selectedEvents.join(' & ') : 'Not selected';

    // Prepare data for Formspree
    const formDataToSend = {
      fullName: formData.fullName,
      attendance: formData.attendance,
      numberOfGuests: formData.numberOfGuests,
      events: eventsString,
      message: formData.message || 'No message provided',
      submittedAt: new Date().toLocaleString()
    };

    try {
      const response = await fetch('https://formspree.io/f/xdalwgwa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          attendance: '',
          numberOfGuests: '1',
          events: {
            traditional: false,
            white: false
          },
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => {
        if (submitStatus === 'success') {
          setSubmitStatus('idle');
        }
      }, 5000);
    }
  };

  return (
    <section id="rsvp" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
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
        <div className="absolute top-10 right-10 animate-float-slow opacity-20">
          <FaStar className="text-amber-300 text-6xl" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float opacity-20">
          <FaRing className="text-amber-300 text-7xl" />
        </div>
        <div className="absolute top-40 left-20 animate-spin-slow opacity-20">
          <GiFlowerTwirl className="text-amber-300 text-5xl" />
        </div>
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
            Join the
          </h2>
          <p className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Celebration
          </p>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Kindly let us know if you'll be joining us as we celebrate our love. Your presence means the world to us!
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

        {/* RSVP Form Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Glowing effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl border border-amber-100 hover:border-amber-300 transition-all duration-500">
              
              {/* Decorative corner elements */}
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

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span>Thank you for your RSVP! We look forward to celebrating with you!</span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-amber-400 text-sm" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Will you attend? */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Will you attend? <span className="text-amber-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`relative flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                      formData.attendance === 'yes' 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-amber-200 hover:border-amber-300'
                    }`}>
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === 'yes'}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <span className="flex items-center gap-2">
                        <FaCheckCircle className={formData.attendance === 'yes' ? 'text-amber-500' : 'text-gray-300'} />
                        <span className={formData.attendance === 'yes' ? 'text-amber-700' : 'text-gray-600'}>Yes, I'll be there!</span>
                      </span>
                    </label>
                    <label className={`relative flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                      formData.attendance === 'no' 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-amber-200 hover:border-amber-300'
                    }`}>
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === 'no'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="flex items-center gap-2">
                        <FaHeart className={formData.attendance === 'no' ? 'text-amber-500' : 'text-gray-300'} />
                        <span className={formData.attendance === 'no' ? 'text-amber-700' : 'text-gray-600'}>Sorry, can't make it</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Number of guests - only show if attending */}
                {formData.attendance === 'yes' && (
                  <div>
                    <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of guests (including yourself)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUsers className="text-amber-400 text-sm" />
                      </div>
                      <select
                        id="numberOfGuests"
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Which event? - only show if attending */}
                {formData.attendance === 'yes' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which event(s) will you attend? <span className="text-amber-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <label className={`relative flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                        formData.events.traditional 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-amber-200 hover:border-amber-300'
                      }`}>
                        <input
                          type="checkbox"
                          name="traditional"
                          checked={formData.events.traditional}
                          onChange={handleEventChange}
                          className="sr-only"
                        />
                        <span className="flex items-center gap-2">
                          <MdAttractions className={formData.events.traditional ? 'text-amber-500' : 'text-gray-300'} />
                          <span className={formData.events.traditional ? 'text-amber-700' : 'text-gray-600'}>Traditional</span>
                        </span>
                      </label>
                      <label className={`relative flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                        formData.events.white 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-amber-200 hover:border-amber-300'
                      }`}>
                        <input
                          type="checkbox"
                          name="white"
                          checked={formData.events.white}
                          onChange={handleEventChange}
                          className="sr-only"
                        />
                        <span className="flex items-center gap-2">
                          <MdChurch className={formData.events.white ? 'text-amber-500' : 'text-gray-300'} />
                          <span className={formData.events.white ? 'text-amber-700' : 'text-gray-600'}>White</span>
                        </span>
                      </label>
                      <label className={`relative flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                        (formData.events.traditional && formData.events.white) 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-amber-200 hover:border-amber-300'
                      }`}
                      onClick={() => {
                        if (!(formData.events.traditional && formData.events.white)) {
                          setFormData(prev => ({
                            ...prev,
                            events: {
                              traditional: true,
                              white: true
                            }
                          }));
                        }
                      }}>
                        <span className="flex items-center gap-2">
                          <MdCelebration className={(formData.events.traditional && formData.events.white) ? 'text-amber-500' : 'text-gray-300'} />
                          <span className={(formData.events.traditional && formData.events.white) ? 'text-amber-700' : 'text-gray-600'}>Both</span>
                        </span>
                      </label>
                    </div>
                    {formData.attendance === 'yes' && !formData.events.traditional && !formData.events.white && (
                      <p className="text-xs text-amber-600 mt-2">Please select at least one event</p>
                    )}
                  </div>
                )}

                {/* Message (optional) */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MdMessage className="text-amber-400 text-sm" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="block w-full pl-10 pr-3 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/50 backdrop-blur-sm"
                      placeholder="Leave us a sweet message..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || (formData.attendance === 'yes' && !formData.events.traditional && !formData.events.white)}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaRegEnvelope className="group-hover:scale-110 transition-transform" />
                        <span>Send RSVP</span>
                        <FaHeart className="group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Note */}
                <p className="text-xs text-center text-gray-500 mt-4">
                  Fields marked with <span className="text-amber-500">*</span> are required
                </p>
              </form>

              {/* Decorative bottom border */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      {/* <style>{`
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

export default RSVP;