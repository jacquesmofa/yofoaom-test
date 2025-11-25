import { useEffect, useState } from 'react';
import Layout from '../../components/base/Layout';
import { Link } from 'react-router-dom';
import DonateModal from '../../components/feature/DonateModal';

export default function GetInvolvedPage() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section with very transparent background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=diverse%20Black%20volunteers%20and%20community%20members%20joining%20hands%20together%20in%20circle%20showing%20unity%20teamwork%20and%20commitment%20to%20social%20change%20with%20inspiring%20uplifting%20atmosphere&width=1920&height=800&seq=involved-hero-1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-midnight dark:text-white drop-shadow-lg">Get Involved</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              Make a difference in the lives of youth and families in our community
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Ways to Make an Impact
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-2xl mx-auto">
            Choose the way that works best for you to support our mission
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hand-heart-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Volunteer</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-6">
                Share your time and skills to directly impact youth and families in our programs
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-midnight text-cream rounded-xl font-bold hover:bg-midnight/90 transition cursor-pointer whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-gift-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Donate</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-6">
                Your financial support helps us expand programs and reach more families in need
              </p>
              <button
                onClick={() => setDonateModalOpen(true)}
                className="px-6 py-3 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
              >
                Donate Now
              </button>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Partner</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-6">
                Collaborate with us to create sustainable solutions for our community
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-midnight text-cream rounded-xl font-bold hover:bg-midnight/90 transition cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Volunteer Opportunities
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Find the perfect role that matches your skills and interests
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: 'ri-user-heart-line', title: 'Youth Mentor', desc: 'Guide and support young people through one-on-one mentorship relationships', time: '2-4 hours/week' },
              { icon: 'ri-book-open-line', title: 'Homework Tutor', desc: 'Help students with homework and academic support in various subjects', time: '2-3 hours/week' },
              { icon: 'ri-calendar-event-line', title: 'Event Coordinator', desc: 'Help plan and execute community events, workshops, and activities', time: 'Flexible, event-based' },
              { icon: 'ri-computer-line', title: 'Digital Media Assistant', desc: 'Support our digital media lab and help youth develop technology skills', time: '3-5 hours/week' },
              { icon: 'ri-restaurant-line', title: 'Food Pantry Volunteer', desc: 'Assist with food distribution and nutrition program activities', time: '2-4 hours/week' },
              { icon: 'ri-translate-2', title: 'Language Interpreter', desc: 'Provide translation services for newcomer families and programs', time: 'As needed' }
            ].map((opp, index) => (
              <div key={index} className="bg-cream dark:bg-darkmode-bg p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${opp.icon} text-2xl text-midnight dark:text-peach`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-midnight dark:text-peach mb-2">{opp.title}</h3>
                    <p className="text-gray-700 dark:text-cream/90 text-sm mb-3">{opp.desc}</p>
                    <p className="text-xs text-gray-600 dark:text-cream/70">
                      <strong>Time Commitment:</strong> {opp.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                Your Donation Makes a Difference
              </h2>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 leading-relaxed">
                Every contribution helps us provide essential programs and services to youth and families in need. Your generosity creates lasting positive change in our community.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <p className="text-gray-700 dark:text-cream/90">$50 provides school supplies for 5 students</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <p className="text-gray-700 dark:text-cream/90">$100 funds a week of summer camp for one youth</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <p className="text-gray-700 dark:text-cream/90">$250 supports a family through our newcomer services</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <p className="text-gray-700 dark:text-cream/90">$500 provides mental health counseling for 10 youth</p>
                </div>
              </div>
              <button
                onClick={() => setDonateModalOpen(true)}
                className="px-8 py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
              >
                Make a Donation
              </button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=happy%20diverse%20youth%20and%20families%20benefiting%20from%20community%20programs%20showing%20gratitude%20hope%20and%20positive%20transformation%20with%20warm%20lighting%20and%20uplifting%20atmosphere&width=800&height=600&seq=involved-donate-1&orientation=landscape"
                alt="Donation Impact"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section id="partner" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-3xl mx-auto">
            We welcome partnerships with organizations that share our commitment to empowering youth and strengthening families
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-briefcase-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Corporate Sponsors</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Support our programs through financial sponsorship, in-kind donations, or employee volunteer programs
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-building-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Educational Institutions</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Collaborate on vocational training, internships, and educational programs for youth development
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-community-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Community Organizations</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Partner on joint programs, resource sharing, and collaborative community initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-midnight dark:bg-darkmode-bg text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in creating positive change for youth and families in our community
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-cream text-midnight rounded-xl font-bold hover:bg-peach transition cursor-pointer whitespace-nowrap"
            >
              Volunteer Today
            </Link>
            <button
              onClick={() => setDonateModalOpen(true)}
              className="px-8 py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {donateModalOpen && (
        <DonateModal onClose={() => setDonateModalOpen(false)} />
      )}
    </Layout>
  );
}
