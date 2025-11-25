import { useEffect } from 'react';
import Layout from '../../components/base/Layout';

export default function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    { name: 'City of Brampton', type: 'Municipal Partner', logo: 'government building icon' },
    { name: 'Peel District School Board', type: 'Education Partner', logo: 'school building icon' },
    { name: 'William Osler Health System', type: 'Healthcare Partner', logo: 'hospital icon' },
    { name: 'United Way Greater Toronto', type: 'Funding Partner', logo: 'charity organization icon' },
    { name: 'YMCA of Greater Toronto', type: 'Community Partner', logo: 'community center icon' },
    { name: 'Sheridan College', type: 'Education Partner', logo: 'college building icon' }
  ];

  return (
    <Layout>
      {/* Hero Section with very transparent background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=diverse%20Black%20community%20members%20volunteers%20and%20organizations%20working%20together%20in%20outdoor%20community%20event%20showing%20collaboration%20partnership%20unity%20and%20social%20impact%20with%20vibrant%20atmosphere&width=1920&height=800&seq=community-hero-1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-midnight dark:text-white drop-shadow-lg">Community Engagement</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              Building stronger communities through collaboration and partnership
            </p>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Our Community Partners
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-3xl mx-auto">
            We work hand in hand with local organizations, businesses, and institutions to create sustainable solutions that uplift our entire community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux text-center hover:shadow-xl transition">
                <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-building-line text-4xl text-midnight dark:text-peach"></i>
                </div>
                <h3 className="text-xl font-bold text-midnight dark:text-peach mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gold dark:text-gold/90 font-semibold">
                  {partner.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Zones Initiative */}
      <section className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                Community Safe Zones
              </h2>
              <p className="text-xl text-gold dark:text-gold/90 font-semibold mb-4">
                Breaking the Cycle, Building a Safer Future
              </p>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 leading-relaxed">
                Our Community Resilience Against Gun and Gang Violence Initiative creates safe spaces throughout the neighborhood where youth can gather, learn, and thrive free from violence and negative influences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-1">Violence Prevention Programs</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">Education, intervention, and support to prevent gang involvement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-home-heart-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-1">Safe Community Spaces</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">Designated safe zones with supervision and positive activities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-heart-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-1">Mentorship & Support</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">Positive role models and pathways away from violence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20community%20members%20and%20youth%20standing%20together%20in%20unity%20showing%20strength%20resilience%20and%20hope%20in%20safe%20neighborhood%20environment%20with%20determination%20and%20positive%20atmosphere&width=800&height=600&seq=community-safe-1&orientation=landscape"
                alt="Community Safe Zones"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Program */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20volunteers%20working%20together%20in%20community%20service%20project%20showing%20teamwork%20dedication%20and%20social%20impact%20with%20smiles%20and%20positive%20energy&width=800&height=600&seq=community-volunteer-1&orientation=landscape"
                alt="Volunteer Program"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                Volunteer Program with Certificates
              </h2>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 leading-relaxed">
                Join our community of dedicated volunteers making a real difference. We offer comprehensive training, meaningful opportunities, and official certificates recognizing your valuable contributions.
              </p>
              <div className="bg-white dark:bg-darkmode-card p-6 rounded-xl mb-6">
                <h3 className="font-bold text-midnight dark:text-peach mb-4">Volunteer Benefits:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-cream/90">
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-xl text-peach"></i>
                    Official volunteer certificates for resumes
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-xl text-peach"></i>
                    Comprehensive training and skill development
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-xl text-peach"></i>
                    Flexible scheduling to fit your life
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-xl text-peach"></i>
                    Community connections and networking
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="ri-check-line text-xl text-peach"></i>
                    Recognition events and appreciation
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  const modal = document.getElementById('volunteer-modal');
                  if (modal) modal.classList.add('active');
                }}
                className="px-8 py-4 bg-midnight text-cream rounded-xl font-bold hover:bg-midnight/90 transition cursor-pointer whitespace-nowrap"
              >
                Apply to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section id="events" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Upcoming Community Events
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Join us for these exciting community gatherings and activities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Community BBQ & Family Day', date: 'July 15, 2024', time: '12:00 PM - 4:00 PM', icon: 'ri-restaurant-line' },
              { title: 'Youth Leadership Summit', date: 'August 5, 2024', time: '9:00 AM - 5:00 PM', icon: 'ri-trophy-line' },
              { title: 'Multicultural Festival', date: 'August 20, 2024', time: '11:00 AM - 6:00 PM', icon: 'ri-global-line' },
              { title: 'Back to School Fair', date: 'September 1, 2024', time: '10:00 AM - 3:00 PM', icon: 'ri-book-line' },
              { title: 'Community Clean-Up Day', date: 'September 15, 2024', time: '8:00 AM - 12:00 PM', icon: 'ri-leaf-line' },
              { title: 'Fall Harvest Celebration', date: 'October 10, 2024', time: '1:00 PM - 5:00 PM', icon: 'ri-plant-line' }
            ].map((event, index) => (
              <div key={index} className="bg-cream dark:bg-darkmode-bg p-6 rounded-xl shadow-lux">
                <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center mb-4">
                  <i className={`${event.icon} text-2xl text-midnight dark:text-peach`}></i>
                </div>
                <h3 className="text-xl font-bold text-midnight dark:text-peach mb-2">{event.title}</h3>
                <p className="text-sm text-gray-700 dark:text-cream/90 mb-1">
                  <i className="ri-calendar-line mr-2"></i>{event.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-cream/90">
                  <i className="ri-time-line mr-2"></i>{event.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Partner With Us
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-3xl mx-auto">
            We welcome partnerships with businesses, organizations, and institutions that share our commitment to community empowerment
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-briefcase-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Corporate Partnerships</h3>
              <p className="text-gray-700 dark:text-cream/90">
                Sponsor programs, provide employment opportunities, and engage your team in community service
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-government-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Government Collaboration</h3>
              <p className="text-gray-700 dark:text-cream/90">
                Work with us on policy initiatives, funding programs, and community development projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-community-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Community Organizations</h3>
              <p className="text-gray-700 dark:text-cream/90">
                Collaborate on programs, share resources, and amplify our collective impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-midnight dark:bg-darkmode-bg text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Get Involved in Your Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you want to volunteer, partner with us, or attend our events, there are many ways to engage
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                const modal = document.getElementById('volunteer-modal');
                if (modal) modal.classList.add('active');
              }}
              className="px-8 py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
