import { useEffect, useState } from 'react';
import Layout from '../../components/base/Layout';
import Lightbox from '../../components/feature/Lightbox';

export default function YouthServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    'https://readdy.ai/api/search-image?query=youth%20participating%20in%20leadership%20workshop%20with%20facilitator%20showing%20engagement%20and%20learning&width=600&height=400&seq=youth-gallery-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=diverse%20teenagers%20working%20together%20on%20creative%20art%20project%20showing%20collaboration%20and%20expression&width=600&height=400&seq=youth-gallery-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=young%20people%20volunteering%20in%20community%20garden%20showing%20service%20and%20environmental%20stewardship&width=600&height=400&seq=youth-gallery-3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=youth%20presenting%20at%20public%20speaking%20event%20showing%20confidence%20and%20empowerment&width=600&height=400&seq=youth-gallery-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=teenagers%20in%20sports%20activity%20showing%20teamwork%20physical%20wellness%20and%20fun&width=600&height=400&seq=youth-gallery-5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=youth%20in%20digital%20media%20lab%20creating%20content%20showing%20technology%20skills%20and%20innovation&width=600&height=400&seq=youth-gallery-6&orientation=landscape'
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <Layout>
      {/* Hero Section with very transparent background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=empowered%20diverse%20Black%20youth%20celebrating%20success%20and%20achievement%20together%20with%20raised%20hands%20showing%20confidence%20joy%20and%20determination%20in%20bright%20modern%20youth%20center%20with%20inspirational%20atmosphere&width=1920&height=800&seq=youth-hero-1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-midnight dark:text-white drop-shadow-lg">Youth Empowerment</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              Building resilience, fostering growth, and inspiring futures
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Hub */}
      <section id="mental-health" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                Mental Health Hub
              </h2>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 leading-relaxed">
                Our Mental Health Empowerment Initiative provides comprehensive support for youth mental wellness. We break stigmas and create safe spaces for young people to express themselves and seek help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-heart-pulse-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-1">Individual Counseling</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">Professional one-on-one support with licensed therapists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-team-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-1">Peer Support Groups</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">Safe spaces for youth to connect and share experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-1">24/7 Crisis Support</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">Immediate assistance when you need it most</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20youth%20in%20supportive%20mental%20health%20counseling%20group%20session%20with%20therapist%20showing%20emotional%20wellness%20healing%20and%20peer%20support%20in%20comfortable%20safe%20space&width=800&height=600&seq=youth-mental-1&orientation=landscape"
                alt="Mental Health Support"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* At-Risk Youth Support */}
      <section id="at-risk" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=caring%20mentor%20working%20with%20at-risk%20youth%20showing%20guidance%20hope%20and%20positive%20transformation%20in%20supportive%20community%20environment%20with%20warm%20lighting&width=800&height=600&seq=youth-atrisk-1&orientation=landscape"
                alt="At-Risk Youth Support"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                At-Risk Youth Empowerment
              </h2>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 leading-relaxed">
                We provide intensive, personalized support for youth facing significant challenges. Our holistic approach addresses immediate needs while building long-term resilience and pathways to success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cream dark:bg-darkmode-bg p-4 rounded-xl">
                  <div className="text-3xl font-bold text-peach mb-1">95%</div>
                  <div className="text-sm text-gray-700 dark:text-cream/90">Program Completion Rate</div>
                </div>
                <div className="bg-cream dark:bg-darkmode-bg p-4 rounded-xl">
                  <div className="text-3xl font-bold text-peach mb-1">85%</div>
                  <div className="text-sm text-gray-700 dark:text-cream/90">Positive Outcomes</div>
                </div>
                <div className="bg-cream dark:bg-darkmode-bg p-4 rounded-xl">
                  <div className="text-3xl font-bold text-peach mb-1">200+</div>
                  <div className="text-sm text-gray-700 dark:text-cream/90">Youth Served</div>
                </div>
                <div className="bg-cream dark:bg-darkmode-bg p-4 rounded-xl">
                  <div className="text-3xl font-bold text-peach mb-1">24/7</div>
                  <div className="text-sm text-gray-700 dark:text-cream/90">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Self-Expression */}
      <section id="wellness" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Youth Leadership Academy
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-2xl mx-auto">
            Developing the next generation of community leaders through skill-building, mentorship, and hands-on experience
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Leadership Training</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Comprehensive workshops on public speaking, decision-making, team building, and community organizing
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-palette-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Creative Expression</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Art, music, dance, and digital media programs that allow youth to express themselves and develop talents
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-trophy-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Youth Entrepreneurship</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Business skills, financial literacy, and startup support to help youth launch their own ventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Circles */}
      <section className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                Youth Empowerment Circles
              </h2>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 leading-relaxed">
                Regular gatherings where youth come together to share experiences, build community, and support each other's growth. These circles create lasting bonds and provide a foundation for personal development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-2xl text-peach"></i>
                  <span className="text-gray-700 dark:text-cream/90">Weekly peer support sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-2xl text-peach"></i>
                  <span className="text-gray-700 dark:text-cream/90">Skill-sharing workshops</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-2xl text-peach"></i>
                  <span className="text-gray-700 dark:text-cream/90">Community service projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-2xl text-peach"></i>
                  <span className="text-gray-700 dark:text-cream/90">Cultural celebration events</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20youth%20sitting%20in%20circle%20during%20empowerment%20workshop%20showing%20engagement%20connection%20and%20community%20building%20in%20bright%20welcoming%20space&width=800&height=600&seq=youth-circles-1&orientation=landscape"
                alt="Youth Empowerment Circles"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Youth in Action
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Moments from our youth programs and activities
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative h-64 rounded-xl overflow-hidden shadow-lux hover:shadow-xl transition cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image}
                  alt={`Youth Activity ${index + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                  <i className="ri-zoom-in-line text-4xl text-white opacity-0 group-hover:opacity-100 transition"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-midnight dark:bg-darkmode-bg text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Join Our Youth Programs</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a young person looking for support or an adult wanting to mentor, we welcome you
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                const modal = document.getElementById('volunteer-modal');
                if (modal) modal.classList.add('active');
              }}
              className="px-8 py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </Layout>
  );
}
