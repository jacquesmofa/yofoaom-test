import { useState } from 'react';
import Layout from '../../components/base/Layout';

export default function GetSupportPage() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [familySupportForm, setFamilySupportForm] = useState({
    familyName: '',
    email: '',
    phone: '',
    numberOfChildren: '',
    supportNeeded: '',
    urgency: '',
    details: ''
  });

  const [youthIntakeForm, setYouthIntakeForm] = useState({
    youthName: '',
    age: '',
    guardianName: '',
    guardianEmail: '',
    guardianPhone: '',
    programInterest: '',
    schoolName: '',
    additionalInfo: ''
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Compassionate%20support%20worker%20helping%20Black%20family%2C%20professional%20counseling%20session%2C%20warm%20welcoming%20environment%2C%20diverse%20community%20members%20receiving%20assistance%2C%20modern%20bright%20office%20with%20natural%20light%2C%20hope%20and%20empowerment%2C%20caring%20professional%20guidance&width=1920&height=1080&seq=support-hero-yafoam&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-6 py-20">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-midnight dark:text-white drop-shadow-lg">
              Get Support
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              We're here to help you and your family access the support you need
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Hotline Section */}
      <section className="py-12 bg-red-50 dark:bg-red-900/20 border-y-4 border-red-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-alarm-warning-line text-4xl text-white"></i>
            </div>
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">Emergency Support</h2>
            <p className="text-lg text-gray-700 dark:text-cream/90 mb-6 max-w-2xl mx-auto">
              If you or someone you know is in immediate danger or crisis, please contact emergency services or use one of these crisis hotlines:
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-darkmode-card p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-midnight dark:text-peach">Emergency Services</h3>
                <a href="tel:911" className="text-2xl font-bold text-red-600 hover:underline cursor-pointer">911</a>
              </div>
              <div className="bg-white dark:bg-darkmode-card p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-midnight dark:text-peach">Crisis Text Line</h3>
                <p className="text-sm text-gray-600 dark:text-cream/80 mb-2">Text "CONNECT" to</p>
                <a href="sms:686868" className="text-2xl font-bold text-red-600 hover:underline cursor-pointer">686868</a>
              </div>
              <div className="bg-white dark:bg-darkmode-card p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-midnight dark:text-peach">Kids Help Phone</h3>
                <a href="tel:18006686868" className="text-xl font-bold text-red-600 hover:underline cursor-pointer">1-800-668-6868</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book an Appointment */}
      <section id="appointment" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-calendar-check-line text-3xl text-midnight dark:text-peach"></i>
            </div>
            <h2 className="text-4xl font-bold text-midnight dark:text-peach mb-4">Book an Appointment</h2>
            <p className="text-lg text-gray-700 dark:text-cream/90">
              Schedule a consultation with our team to discuss your needs and how we can help
            </p>
          </div>

          <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="+1 (416) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Service Type *</label>
                  <select
                    required
                    className="w-full p-3 pr-8 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="youth-mentorship">Youth Mentorship</option>
                    <option value="family-counseling">Family Counseling</option>
                    <option value="mental-health">Mental Health Support</option>
                    <option value="newcomer-services">Newcomer Services</option>
                    <option value="program-enrollment">Program Enrollment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Preferred Time *</label>
                  <select
                    required
                    className="w-full p-3 pr-8 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="evening">Evening (3 PM - 5 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Additional Information</label>
                <textarea
                  rows={4}
                  maxLength={500}
                  className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm resize-none"
                  placeholder="Tell us more about what you need... (max 500 characters)"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary whitespace-nowrap">
                Book Appointment <i className="ri-calendar-check-line ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Request Family Support */}
      <section id="family-support" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-parent-line text-3xl text-midnight dark:text-peach"></i>
            </div>
            <h2 className="text-4xl font-bold text-midnight dark:text-peach mb-4">Request Family Support</h2>
            <p className="text-lg text-gray-700 dark:text-cream/90">
              Let us know how we can support your family's unique needs
            </p>
          </div>

          <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Family Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm"
                    placeholder="Family surname"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Number of Children</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm"
                    placeholder="+1 (416) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Type of Support Needed *</label>
                  <select
                    required
                    className="w-full p-3 pr-8 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm"
                  >
                    <option value="">Select support type</option>
                    <option value="counseling">Family Counseling</option>
                    <option value="crisis">Crisis Support</option>
                    <option value="newcomer">Newcomer Settlement</option>
                    <option value="parenting">Parenting Support</option>
                    <option value="food">Food Assistance</option>
                    <option value="housing">Housing Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Urgency Level *</label>
                  <select
                    required
                    className="w-full p-3 pr-8 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm"
                  >
                    <option value="">Select urgency</option>
                    <option value="immediate">Immediate (within 24 hours)</option>
                    <option value="urgent">Urgent (within 1 week)</option>
                    <option value="normal">Normal (within 2 weeks)</option>
                    <option value="flexible">Flexible timing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Details *</label>
                <textarea
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-white dark:bg-darkmode-card text-sm resize-none"
                  placeholder="Please describe your situation and how we can help... (max 500 characters)"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary whitespace-nowrap">
                Submit Request <i className="ri-send-plane-fill ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Youth Intake Form */}
      <section id="youth-intake" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-star-line text-3xl text-midnight dark:text-peach"></i>
            </div>
            <h2 className="text-4xl font-bold text-midnight dark:text-peach mb-4">Youth Intake Form</h2>
            <p className="text-lg text-gray-700 dark:text-cream/90">
              Register a young person for our programs and services
            </p>
          </div>

          <div className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Youth's Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="Youth's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Age *</label>
                  <input
                    type="number"
                    required
                    min="6"
                    max="24"
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="Age (6-24)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Parent/Guardian Name *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                  placeholder="Parent or guardian's full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Guardian Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="guardian@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Guardian Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="+1 (416) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Program Interest *</label>
                  <select
                    required
                    className="w-full p-3 pr-8 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                  >
                    <option value="">Select a program</option>
                    <option value="summer-horizons">Summer Horizons</option>
                    <option value="leadership-labs">Leadership Labs</option>
                    <option value="mentorship">Youth Mentorship</option>
                    <option value="mental-health">Mental Health Support</option>
                    <option value="creative-media">Creative & Digital Media</option>
                    <option value="employment">Employment Pathways</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">School Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="Current school"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">Additional Information</label>
                <textarea
                  rows={4}
                  maxLength={500}
                  className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm resize-none"
                  placeholder="Any additional information about the youth's interests, needs, or goals... (max 500 characters)"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary whitespace-nowrap">
                Submit Youth Intake <i className="ri-user-add-line ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-midnight dark:text-peach mb-12">Additional Support Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux text-center">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Call Us</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 text-sm">
                Speak directly with our support team
              </p>
              <a href="tel:+14168575901" className="text-peach hover:underline font-semibold">
                +1 (416) 857-5901
              </a>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux text-center">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-chat-3-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Live Chat</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 text-sm">
                Chat with our AI assistant 24/7
              </p>
              <button 
                onClick={() => {
                  const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
                  if (widget) widget.click();
                }}
                className="text-peach hover:underline font-semibold cursor-pointer"
              >
                Start Chat
              </button>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux text-center">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Email Us</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 text-sm">
                Send us a detailed message
              </p>
              <a href="mailto:youthandfamilyonamission@gmail.com" className="text-peach hover:underline font-semibold">
                youthandfamilyonamission@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
