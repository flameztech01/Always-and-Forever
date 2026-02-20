import React, { useState } from 'react';
import { FaHeart, FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaDownload } from 'react-icons/fa';
import { MdOutlinePhotoLibrary } from 'react-icons/md';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Create 9 items with the same couple.jpg image
  const galleryImages = Array(9).fill({
    src: '/couples.jpg',
    alt: 'Couple portrait',
    title: 'Beautiful Moments'
  });

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleDownload = async () => {
    if (selectedImage === null) return;
    try {
      const response = await fetch(galleryImages[selectedImage].src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `wedding-photo-${selectedImage + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage]);

  return (
    <section id="gallery" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gold sparkles pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FBBF24 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating hearts */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <FaHeart className="text-amber-200/30 text-5xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float">
          <FaHeart className="text-amber-200/30 text-6xl" />
        </div>
        <div className="absolute top-40 right-20 animate-spin-slow">
          <FaImages className="text-amber-200/30 text-4xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative line and icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-l from-amber-400 to-transparent" />
            <div className="relative">
              <MdOutlinePhotoLibrary className="text-3xl text-amber-500" />
              <FaHeart className="text-xs text-amber-400 absolute -top-1 -right-1 animate-ping" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-3">
            Our Beautiful
          </h2>
          <p className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Love Story in Pictures
          </p>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A glimpse into our journey of love, laughter, and happily ever after
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="relative aspect-w-4 aspect-h-5">
                <img
                  src={image.src}
                  alt={`${image.alt} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gold Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative Frame */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50 rounded-2xl transition-all duration-500 m-[2px]" />
                
                {/* Photo Number Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-amber-700 font-medium border border-amber-200 transform -translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-xs" />
                    Photo {index + 1}
                  </span>
                </div>
                
                {/* Zoom Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 border-2 border-amber-400">
                    <FaSearchPlus className="text-2xl text-amber-600" />
                  </div>
                </div>
                
                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-serif text-lg">{image.title}</p>
                  <p className="text-amber-200 text-sm">Memory {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaImages className="group-hover:scale-110 transition-transform" />
            View Full Gallery
            <FaHeart className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all duration-300"
          >
            <FaTimes size={24} />
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="absolute top-6 right-20 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all duration-300"
            title="Download photo"
          >
            <FaDownload size={20} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-6 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-4 transition-all duration-300"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-6 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-4 transition-all duration-300"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={`${galleryImages[selectedImage].alt} ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white font-serif text-xl">
                {galleryImages[selectedImage].title} - {selectedImage + 1} of {galleryImages.length}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaHeart className="text-amber-400" />
                <span className="text-amber-200">A beautiful moment captured</span>
              </div>
            </div>

            {/* Photo Counter Dots */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedImage 
                      ? 'w-8 bg-amber-400' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default Gallery;