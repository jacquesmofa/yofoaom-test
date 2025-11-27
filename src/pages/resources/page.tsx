import { useEffect, useState } from 'react';
import Layout from '../../components/base/Layout';
import { Link } from 'react-router-dom';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('gallery');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    { category: 'Youth Success Stories', image: 'Black youth graduating from leadership program with certificate showing pride and achievement', title: 'Leadership Graduate' },
    { category: 'Youth Success Stories', image: 'young person presenting at community event showing confidence and public speaking skills', title: 'Youth Speaker' },
    { category: 'Youth Success Stories', image: 'teenager receiving mentorship award showing accomplishment and gratitude', title: 'Mentorship Award' },
    { category: 'Family Strengthening', image: 'diverse family participating in counseling session showing communication and healing', title: 'Family Counseling' },
    { category: 'Family Strengthening', image: 'parents attending parenting workshop taking notes and engaging', title: 'Parent Workshop' },
    { category: 'Family Strengthening', image: 'newcomer family celebrating successful settlement with community support', title: 'Newcomer Success' },
    { category: 'Community Outreach', image: 'volunteers serving food at community event showing service and compassion', title: 'Community BBQ' },
    { category: 'Community Outreach', image: 'diverse community members at cultural festival celebrating diversity', title: 'Cultural Festival' },
    { category: 'Community Outreach', image: 'youth and adults working together on community garden project', title: 'Garden Project' },
    { category: 'Workshops', image: 'participants in digital media workshop learning technology skills', title: 'Digital Media Lab' },
    { category: 'Workshops', image: 'cooking class with families learning healthy nutrition together', title: 'Nutrition Workshop' },
    { category: 'Workshops', image: 'youth in entrepreneurship workshop developing business skills', title: 'Business Skills' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=organized%20resource%20library%20with%20documents%20guides%20and%20educational%20materials%20in%20modern%20bright%20community%20center%20showing%20accessibility%20and%20information%20sharing&width=1920&height=800&seq=resources-hero-1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-midnight dark:text-white drop-shadow-lg">Resources</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              Helpful guides, success stories, and information for our community
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section with Tabs */}
      <section id="gallery" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Gallery & Success Stories
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Celebrating our community's achievements and memorable moments
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-3 rounded-xl font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'gallery' 
                  ? 'bg-peach text-midnight' 
                  : 'bg-white dark:bg-darkmode-card text-gray-700 dark:text-cream/90 hover:bg-peach/20'
              }`}
            >
              All Gallery
            </button>
            <button
              onClick={() => setActiveTab('youth')}
              className={`px-6 py-3 rounded-xl font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'youth' 
                  ? 'bg-peach text-midnight' 
                  : 'bg-white dark:bg-darkmode-card text-gray-700 dark:text-cream/90 hover:bg-peach/20'
              }`}
            >
              Youth Success Stories
            </button>
            <button
              onClick={() => setActiveTab('family')}
              className={`px-6 py-3 rounded-xl font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'family' 
                  ? 'bg-peach text-midnight' 
                  : 'bg-white dark:bg-darkmode-card text-gray-700 dark:text-cream/90 hover:bg-peach/20'
              }`}
            >
              Family Strengthening
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 rounded-xl font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'community' 
                  ? 'bg-peach text-midnight' 
                  : 'bg-white dark:bg-darkmode-card text-gray-700 dark:text-cream/90 hover:bg-peach/20'
              }`}
            >
              Community Events
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-6 py-3 rounded-xl font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'workshops' 
                  ? 'bg-peach text-midnight' 
                  : 'bg-white dark:bg-darkmode-card text-gray-700 dark:text-cream/90 hover:bg-peach/20'
              }`}
            >
              Workshops
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages
              .filter(item => 
                activeTab === 'gallery' || 
                (activeTab === 'youth' && item.category === 'Youth Success Stories') ||
                (activeTab === 'family' && item.category === 'Family Strengthening') ||
                (activeTab === 'community' && item.category === 'Community Outreach') ||
                (activeTab === 'workshops' && item.category === 'Workshops')
              )
              .map((item, index) => (
                <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lux hover:shadow-xl transition cursor-pointer group">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28item.image%29%7D&width=500&height=400&seq=gallery-${index}&orientation=landscape`}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <div>
                      <p className="text-xs text-peach font-semibold mb-1">{item.category}</p>
                      <h3 className="text-white font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Success Stories Highlights */}
      <section id="media" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-12">
            Featured Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=successful%20Black%20youth%20graduate%20smiling%20confidently%20in%20cap%20and%20gown%20showing%20achievement%20and%20bright%20future&width=700&height=400&seq=success-1&orientation=landscape"
                  alt="Success Story"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-3">From At-Risk to University Bound</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                Marcus joined our At-Risk Youth Empowerment program at 15, struggling with school and facing challenges at home. Through intensive mentorship, academic support, and mental health counseling, he transformed his life. Today, Marcus is a high school honor student heading to university on a full scholarship.
              </p>
              <p className="text-sm text-gold dark:text-gold/90 font-semibold italic">
                "YAFOAM gave me hope when I had none. They believed in me before I believed in myself." - Marcus, 18
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=happy%20immigrant%20family%20celebrating%20new%20beginning%20in%20Canada%20showing%20hope%20integration%20and%20family%20unity&width=700&height=400&seq=success-2&orientation=landscape"
                  alt="Success Story"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-3">A New Beginning for the Hassan Family</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                The Hassan family arrived in Canada as refugees with limited English and no local connections. Through our FreshStart Integration Initiative, they received language training, employment support, and community connections. Within a year, both parents found meaningful work and their children are thriving in school.
              </p>
              <p className="text-sm text-gold dark:text-gold/90 font-semibold italic">
                "YAFOAM made Canada feel like home. They walked with us every step of the way." - Fatima Hassan
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=young%20Black%20entrepreneur%20in%20their%20small%20business%20showing%20success%20confidence%20and%20achievement&width=700&height=400&seq=success-3&orientation=landscape"
                  alt="Success Story"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-3">Youth Entrepreneur Launches Tech Startup</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                Through our Youth Entrepreneurship Program, 19-year-old Aisha developed her business idea, received mentorship from local entrepreneurs, and secured seed funding. Her tech startup now employs three other youth from the program and is growing rapidly.
              </p>
              <p className="text-sm text-gold dark:text-gold/90 font-semibold italic">
                "The program taught me that my dreams weren't too big - they were just the right size." - Aisha, 19
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=reunited%20family%20smiling%20together%20showing%20healing%20reconciliation%20and%20stronger%20bonds&width=700&height=400&seq=success-4&orientation=landscape"
                  alt="Success Story"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-3">Family Finds Healing Through Counseling</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                The Johnson family was on the brink of separation when they came to our Family Harmony Consultation Services. Through professional counseling and family therapy, they learned to communicate effectively, resolve conflicts, and rebuild trust. Today, they're stronger than ever.
              </p>
              <p className="text-sm text-gold dark:text-gold/90 font-semibold italic">
                "We learned that asking for help isn't weakness - it's strength." - The Johnson Family
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Guides &amp; Forms
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Download helpful resources for families, youth, and community members
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Program Registration Form', type: 'PDF', icon: 'ri-file-text-line', category: 'Forms' },
              { title: 'Volunteer Application', type: 'PDF', icon: 'ri-file-text-line', category: 'Forms' },
              { title: 'Youth Intake Form', type: 'PDF', icon: 'ri-file-text-line', category: 'Forms' },
              { title: 'Mental Health Resources Guide', type: 'PDF', icon: 'ri-book-line', category: 'Guides' },
              { title: 'Newcomer Settlement Handbook', type: 'PDF', icon: 'ri-book-line', category: 'Guides' },
              { title: 'Parenting Tips &amp; Strategies', type: 'PDF', icon: 'ri-book-line', category: 'Guides' },
              { title: 'Youth Leadership Toolkit', type: 'PDF', icon: 'ri-book-line', category: 'Guides' },
              { title: 'Healthy Eating Guide', type: 'PDF', icon: 'ri-book-line', category: 'Guides' },
              { title: 'Crisis Support Resources', type: 'PDF', icon: 'ri-book-line', category: 'Guides' },
              { title: 'Community Resources Directory', type: 'PDF', icon: 'ri-folder-line', category: 'Directories' },
              { title: 'Emergency Contact List', type: 'PDF', icon: 'ri-phone-line', category: 'Important Info' },
              { title: 'Program Calendar 2024', type: 'PDF', icon: 'ri-calendar-line', category: 'Important Info' }
            ].map((resource, index) => (
              <div key={index} className="bg-white dark:bg-darkmode-card p-6 rounded-xl shadow-lux hover:shadow-xl transition cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${resource.icon} text-2xl text-midnight dark:text-peach`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gold dark:text-gold/90 font-semibold mb-1">{resource.category}</div>
                    <h3 className="font-bold text-midnight dark:text-peach mb-2">{resource.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-peach/20 px-2 py-1 rounded">{resource.type}</span>
                      <button className="text-sm text-midnight dark:text-peach hover:underline">
                        <i className="ri-download-line mr-1"></i>Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Find answers to common questions about our programs and services
          </p>

          <div className="space-y-6">
            {[
              { q: 'How do I register for programs?', a: 'You can register online through our website, visit our office in person, or call us at -----. Registration forms are also available in the Resources section above.' },
              { q: 'Are your services free?', a: 'Most of our programs are free or offered on a sliding scale based on family income. We believe financial barriers should never prevent access to our services.' },
              { q: 'What age groups do you serve?', a: 'We serve youth ages 6-24 and their families. Some programs are age-specific while others are open to all ages within this range.' },
              { q: 'Do you provide services in multiple languages?', a: 'Yes! We offer services in over 15 languages and have interpretation services available for families who need them.' },
              { q: 'How can I become a volunteer?', a: 'Fill out our volunteer application form, attend an orientation session, and complete any required training. We welcome volunteers of all backgrounds and skill levels.' },
              { q: 'Do you offer transportation assistance?', a: 'Yes, we provide transportation support for families who need help getting to our programs. Contact us to learn more about this service.' },
              { q: 'What mental health services do you provide?', a: 'We offer individual counseling, peer support groups, family therapy, crisis intervention, and referrals to specialized mental health services.' },
              { q: 'How can my organization partner with YAFOAM?', a: 'We welcome partnerships! Contact us through our website or call our office to discuss collaboration opportunities that align with our mission.' }
            ].map((faq, index) => (
              <div key={index} className="bg-cream dark:bg-darkmode-bg p-6 rounded-xl shadow-lux">
                <h3 className="text-lg font-bold text-midnight dark:text-peach mb-3 flex items-start gap-3">
                  <i className="ri-question-line text-2xl text-peach flex-shrink-0"></i>
                  {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-cream/90 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Page */}
      <section id="privacy" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-12">
            Policies & Legal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Privacy Policy</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                We are committed to protecting your privacy and personal information. Our privacy policy outlines how we collect, use, and safeguard your data in compliance with Canadian privacy laws including PIPEDA.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-cream/90 mb-4">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-peach mt-1"></i>
                  <span>We collect only necessary information for program delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-peach mt-1"></i>
                  <span>Your data is stored securely and never sold to third parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-peach mt-1"></i>
                  <span>You have the right to access and correct your information</span>
                </li>
              </ul>
              <button className="text-midnight dark:text-peach hover:underline font-semibold">
                Read Full Privacy Policy <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            <div id="terms" className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Terms &amp; Conditions</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                By using our services and participating in our programs, you agree to our terms and conditions. These terms ensure a safe and respectful environment for all community members.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-cream/90 mb-4">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-peach mt-1"></i>
                  <span>Respectful behavior is required from all participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-peach mt-1"></i>
                  <span>Program attendance and participation expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-peach mt-1"></i>
                  <span>Liability waivers and consent requirements</span>
                </li>
              </ul>
              <button className="text-midnight dark:text-peach hover:underline font-semibold">
                Read Terms &amp; Conditions <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-user-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Child &amp; Youth Protection Policy</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                The safety and well-being of children and youth in our programs is our highest priority. Our comprehensive protection policy includes background checks, training, and strict protocols.
              </p>
              <button className="text-midnight dark:text-peach hover:underline font-semibold">
                Read Protection Policy <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-wheelchair-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Accessibility Statement</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                YAFOAM is committed to ensuring accessibility for all community members. Our facilities, programs, and services are designed to be inclusive and accessible to people of all abilities.
              </p>
              <button className="text-midnight dark:text-peach hover:underline font-semibold">
                Read Accessibility Statement <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
            <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Governance &amp; Accountability</h3>
            <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
              YAFOAM is a registered Canadian charity (Registration #123456789RR0001) governed by a dedicated Board of Directors. We maintain the highest standards of transparency, accountability, and ethical conduct in all our operations.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-cream dark:bg-darkmode-bg rounded-xl">
                <div className="text-2xl font-bold text-peach mb-1">100%</div>
                <div className="text-sm text-gray-700 dark:text-cream/90">Transparent Operations</div>
              </div>
              <div className="text-center p-4 bg-cream dark:bg-darkmode-bg rounded-xl">
                <div className="text-2xl font-bold text-peach mb-1">Annual</div>
                <div className="text-sm text-gray-700 dark:text-cream/90">Financial Audits</div>
              </div>
              <div className="text-center p-4 bg-cream dark:bg-darkmode-bg rounded-xl">
                <div className="text-2xl font-bold text-peach mb-1">CRA</div>
                <div className="text-sm text-gray-700 dark:text-cream/90">Registered Charity</div>
              </div>
              <div className="text-center p-4 bg-cream dark:bg-darkmode-bg rounded-xl">
                <div className="text-2xl font-bold text-peach mb-1">Board</div>
                <div className="text-sm text-gray-700 dark:text-cream/90">Governed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-20 bg-midnight dark:bg-darkmode-bg text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Need More Information?</h2>
          <p className="text-xl mb-8 opacity-90">
            Can't find what you're looking for? Our team is here to help
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
