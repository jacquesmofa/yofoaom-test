import { useEffect } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer z-10"
        aria-label="Close lightbox"
      >
        <i className="ri-close-line text-2xl text-white"></i>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
        aria-label="Previous image"
      >
        <i className="ri-arrow-left-line text-2xl text-white"></i>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition cursor-pointer"
        aria-label="Next image"
      >
        <i className="ri-arrow-right-line text-2xl text-white"></i>
      </button>

      <div 
        className="max-w-6xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <div className="text-center mt-4 text-white/80">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
