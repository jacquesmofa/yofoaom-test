import { useState } from 'react';
import Layout from '../../components/base/Layout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section with very transparent background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Diverse%20community%20members%20connecting%20and%20communicating%2C%20Black%20families%20and%20youth%20engaging%20in%20meaningful%20conversation%2C%20warm%20welcoming%20atmosphere%2C%20professional%20office%20setting%20with%20natural%20light%2C%20modern%20inclusive%20environment%2C%20people%20helping%20people%2C%20community%20support%20center&width=1920&height=1080&seq=contact-hero-yafoam&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-6 py-20">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-midnight dark:text-white drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              We're here to answer your questions, connect you with resources, and help you get involved. Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-midnight/30 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-peach/20 rounded-full flex items-center justify-center">
                <i className="ri-phone-line text-3xl text-peach"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-midnight dark:text-white">Phone</h3>
              <a href="tel:+14168575901" className="text-midnight/70 dark:text-white/70 hover:text-peach cursor-pointer">
                +1 (416) 857-5901
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-midnight/30 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-peach/20 rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-3xl text-peach"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-midnight dark:text-white">Email</h3>
              <a href="mailto:youthandfamilyonamission@gmail.com" className="text-midnight/70 dark:text-white/70 hover:text-peach cursor-pointer">
                youthandfamilyonamission@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-midnight/30 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-peach/20 rounded-full flex items-center justify-center">
                <i className="ri-whatsapp-line text-3xl text-peach"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-midnight dark:text-white">WhatsApp</h3>
              <a 
                href="https://wa.me/14168575901" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-midnight/70 dark:text-white/70 hover:text-peach cursor-pointer"
              >
                Chat with us
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="text-center mb-16 p-8 rounded-2xl bg-white dark:bg-midnight/30 shadow-lg max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-peach/20 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-line text-3xl text-peach"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-midnight dark:text-white">Visit Our Office</h3>
            <p className="text-midnight/70 dark:text-white/70">
              6850 Millcreek Drive<br />
              Mississauga, Ontario, Canada
            </p>
          </div>

          {/* AI Assistant Notice */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-peach/10 to-midnight/10 dark:from-peach/5 dark:to-midnight/20 border border-peach/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-customer-service-2-line text-2xl text-peach"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-midnight dark:text-white">24/7 AI Assistant Available</h3>
                <p className="text-midnight/70 dark:text-white/70 mb-4">
                  Need immediate answers? Our AI chat assistant is available around the clock to help you with information about our programs, services, and how to get involved. Click the chat button in the bottom-right corner to start a conversation anytime!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-midnight/30 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-midnight dark:text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                    placeholder="+1 (416) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pr-8 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donate">Donation Inquiry</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Request Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-midnight dark:text-white">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full p-3 rounded-xl border border-midnight/20 dark:border-white/20 bg-cream dark:bg-darkmode-bg text-sm resize-none"
                    placeholder="Tell us more about your inquiry... (max 500 characters)"
                  ></textarea>
                  <div className="text-xs opacity-60 mt-1 text-right">{formData.message.length}/500</div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <i className="ri-send-plane-fill ml-2"></i>
                </button>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl text-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-midnight/30 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-midnight dark:text-white">Visit Us</h2>
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-midnight dark:text-white">Office Hours</h3>
                <p className="text-midnight/70 dark:text-white/70 text-sm">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              <div className="rounded-xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.123456789!2d-79.6234567!3d43.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM0JzA0LjQiTiA3OcKwMzcnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YAFOAM Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
