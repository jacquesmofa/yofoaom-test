import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/15555555555', '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed right-6 bottom-20 w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-xl z-50 hover:scale-110 transition cursor-pointer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 w-12 h-12 flex items-center justify-center bg-midnight text-cream rounded-full shadow-xl z-50 hover:scale-110 transition cursor-pointer"
          aria-label="Back to top"
          title="Back to Top"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      )}
    </>
  );
}
