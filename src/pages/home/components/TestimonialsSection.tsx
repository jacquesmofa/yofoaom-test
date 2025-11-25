import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "My son was drifting before Summer Horizons. The paid internship transformed his confidence. He's now enrolled in college and working part-time. YAFOAM gave him a purpose.",
      author: "— Maria S., Mother of Program Participant"
    },
    {
      quote: "The FreshStart team navigated the complex immigration paperwork for us. We felt lost until they connected us to housing and language classes. Truly life-saving support.",
      author: "— The Al-Hassan Family, Newcomer Services"
    },
    {
      quote: "The Youth Mental Health Hub is the only place where I felt heard without judgment. The Wellness Circles are my safe space.",
      author: "— Anonymous Youth, Wellness Circles"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-center text-midnight dark:text-peach mb-10 fade-in-up">
        Stories of Impact & Transformation
      </h1>

      <div className="relative max-w-4xl mx-auto glass-card p-8 shadow-lux overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 text-center p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-double-quotes-l text-4xl text-peach"></i>
              </div>
              <blockquote className="text-2xl italic font-display text-gray-700 dark:text-cream/90">
                {testimonial.quote}
              </blockquote>
              <p className="font-semibold mt-6">{testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-peach/50 hover:bg-peach transition cursor-pointer"
            aria-label="Previous testimonial"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-peach/50 hover:bg-peach transition cursor-pointer"
            aria-label="Next testimonial"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition cursor-pointer ${
                currentSlide === index ? 'bg-peach w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
