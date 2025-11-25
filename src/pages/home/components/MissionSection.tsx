import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Mission</h2>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Empowering youth and strengthening families through culturally responsive, trauma-aware programs that create lasting change.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <div className="w-14 h-14 bg-peach/20 rounded-full flex items-center justify-center mb-4">
            <i className="ri-heart-3-fill text-2xl text-midnight dark:text-peach"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Breaking Barriers</h3>
          <p className="opacity-80 mb-4">
            We dismantle racial barriers by prioritizing inclusivity and celebrating diversity. Our programs are tailored to address the specific challenges faced by Black and marginalized communities, providing mentorship, education, and vocational training to bridge opportunity gaps.
          </p>
          <Link to="/about" className="text-sm font-semibold text-midnight dark:text-peach hover:underline cursor-pointer">
            Learn About Our Values <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="w-14 h-14 bg-peach/20 rounded-full flex items-center justify-center mb-4">
            <i className="ri-community-fill text-2xl text-midnight dark:text-peach"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Community-Driven Solutions</h3>
          <p className="opacity-80 mb-4">
            Through strategic partnerships with local businesses and educational institutions, we offer specialized vocational training and culturally competent services. We collaborate with Black community leaders to co-design initiatives that amplify voices and address systemic inequalities.
          </p>
          <Link to="/about#history" className="text-sm font-semibold text-midnight dark:text-peach hover:underline cursor-pointer">
            Read Our Story <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center p-6 glass-card rounded-xl">
          <div className="w-12 h-12 bg-midnight dark:bg-peach rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="ri-lightbulb-flash-fill text-xl text-cream dark:text-midnight"></i>
          </div>
          <h4 className="font-bold mb-2">Empowerment</h4>
          <p className="text-sm opacity-80">Unlocking potential through mentorship and education</p>
        </div>

        <div className="text-center p-6 glass-card rounded-xl">
          <div className="w-12 h-12 bg-midnight dark:bg-peach rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="ri-group-fill text-xl text-cream dark:text-midnight"></i>
          </div>
          <h4 className="font-bold mb-2">Inclusivity</h4>
          <p className="text-sm opacity-80">Celebrating diversity and creating belonging</p>
        </div>

        <div className="text-center p-6 glass-card rounded-xl">
          <div className="w-12 h-12 bg-midnight dark:bg-peach rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="ri-hand-heart-fill text-xl text-cream dark:text-midnight"></i>
          </div>
          <h4 className="font-bold mb-2">Community</h4>
          <p className="text-sm opacity-80">Building collaborative networks for change</p>
        </div>

        <div className="text-center p-6 glass-card rounded-xl">
          <div className="w-12 h-12 bg-midnight dark:bg-peach rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="ri-shield-check-fill text-xl text-cream dark:text-midnight"></i>
          </div>
          <h4 className="font-bold mb-2">Holistic Support</h4>
          <p className="text-sm opacity-80">Comprehensive care for long-term success</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/about" className="btn-primary">
          Get to Know More About Us <i className="ri-arrow-right-line ml-2"></i>
        </Link>
      </div>
    </section>
  );
}
