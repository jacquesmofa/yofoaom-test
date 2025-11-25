import { Link } from 'react-router-dom';

export default function ImpactSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Impact</h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Real results from community-driven programs that transform lives and build stronger futures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="relative rounded-2xl overflow-hidden h-96">
          <img 
            src="https://readdy.ai/api/search-image?query=Successful%20Black%20youth%20graduates%20celebrating%20program%20completion%20with%20certificates%20and%20diplomas%2C%20diverse%20group%20of%20teenagers%20in%20achievement%20ceremony%2C%20joyful%20proud%20moment%2C%20community%20center%20setting%2C%20high%20quality%20photography&width=800&height=600&seq=yafoam-impact-graduates&orientation=landscape"
            alt="Program graduates celebrating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
            <h3 className="text-2xl font-bold mb-2">90% Program Completion Rate</h3>
            <p className="opacity-90">Our holistic support approach ensures youth stay engaged and achieve their goals.</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-96">
          <img 
            src="https://readdy.ai/api/search-image?query=Black%20families%20receiving%20community%20support%20services%2C%20diverse%20families%20with%20children%20at%20community%20resource%20center%2C%20warm%20welcoming%20environment%2C%20professional%20staff%20helping%20families%2C%20high%20quality%20photography&width=800&height=600&seq=yafoam-impact-families&orientation=landscape"
            alt="Families receiving support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
            <h3 className="text-2xl font-bold mb-2">800+ Families Supported Annually</h3>
            <p className="opacity-90">Comprehensive family services addressing housing, healthcare, and integration needs.</p>
          </div>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl mb-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-midnight dark:text-peach mb-2">25,000+</div>
            <div className="text-sm opacity-80">Youth served through our programs, mentorship, and community initiatives</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-midnight dark:text-peach mb-2">15+</div>
            <div className="text-sm opacity-80">Years of dedicated service to Mississauga and surrounding communities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-midnight dark:text-peach mb-2">50+</div>
            <div className="text-sm opacity-80">Community partners and strategic collaborations for greater impact</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/community" className="btn-secondary">
          Explore Our Community Impact <i className="ri-arrow-right-line ml-2"></i>
        </Link>
      </div>
    </section>
  );
}
