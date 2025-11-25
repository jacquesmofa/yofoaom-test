import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get in Touch</h2>
          <p className="text-lg opacity-80 mb-6">
            Have questions or ready to get involved? We're here to help connect you with the right resources and programs.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-fill text-midnight dark:text-peach"></i>
              </div>
              <div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm opacity-80">6850 Millcreek Drive<br />Mississauga, Ontario</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-phone-fill text-midnight dark:text-peach"></i>
              </div>
              <div>
                <div className="font-semibold">Call Us</div>
                <a href="tel:+14168575901" className="text-sm opacity-80 hover:underline cursor-pointer">+1 (416) 857-5901</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-mail-fill text-midnight dark:text-peach"></i>
              </div>
              <div>
                <div className="font-semibold">Email Us</div>
                <a href="mailto:hello@yafoam.org" className="text-sm opacity-80 hover:underline cursor-pointer">hello@yafoam.org</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-chat-smile-3-fill text-midnight dark:text-peach"></i>
              </div>
              <div>
                <div className="font-semibold">24/7 AI Assistant</div>
                <div className="text-sm opacity-80">Click the chat button for instant answers</div>
              </div>
            </div>
          </div>

          <Link to="/contact" className="btn-primary">
            Visit Full Contact Page <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20community%20center%20building%20exterior%20in%20Mississauga%20Ontario%2C%20welcoming%20entrance%20with%20accessible%20design%2C%20professional%20architecture%2C%20daytime%20photography%2C%20high%20quality&width=800&height=600&seq=yafoam-building&orientation=landscape"
            alt="YAFOAM Community Center"
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold mb-3">Office Hours</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="opacity-80">Monday - Friday</span>
              <span className="font-semibold">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Saturday</span>
              <span className="font-semibold">10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-80">Sunday</span>
              <span className="font-semibold">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
