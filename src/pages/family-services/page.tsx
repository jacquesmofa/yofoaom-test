import { useEffect } from 'react';
import Layout from '../../components/base/Layout';

export default function FamilyServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Scroll to hash if present
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section with very transparent background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Happy%20diverse%20Black%20and%20mixed%20race%20multigenerational%20families%20together%20showing%20love%20support%20and%20unity%20in%20warm%20home%20environment%20with%20parents%20children%20and%20grandparents%20celebrating%20family%20bonds%2C%20professional%20photography%20with%20natural%20lighting&width=1920&height=600&seq=family-hero-updated&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-6 py-20">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-midnight dark:text-white drop-shadow-lg">Family Services</h1>
            <p className="text-lg text-midnight/90 dark:text-white/90 drop-shadow-md">
              Strengthening family bonds and supporting newcomers in our community
            </p>
          </div>
        </div>
      </section>

      <div className="site-max">
        {/* FreshStart Newcomer Services */}
        <section id="freshstart" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                FreshStart Integration Initiative
              </h2>
              <p className="text-lg text-gold dark:text-gold/90 font-semibold mb-4">
                Empowering Newcomers, Fostering Inclusive Communities
              </p>
              <p className="text-base opacity-80 mb-6 leading-relaxed">
                Our comprehensive settlement services help newcomers successfully integrate into Canadian society. We provide language support, cultural orientation, employment assistance, and community connections to ensure every newcomer family thrives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-translate-2 text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Language Support</h3>
                    <p className="text-sm opacity-80">ESL classes, interpretation services, and language exchange programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-briefcase-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Employment Assistance</h3>
                    <p className="text-sm opacity-80">Resume building, job search support, and credential recognition guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-community-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Community Integration</h3>
                    <p className="text-sm opacity-80">Cultural events, mentorship matching, and neighborhood connections</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=Welcoming%20diverse%20Black%20and%20immigrant%20newcomer%20families%20being%20greeted%20by%20community%20volunteers%20in%20bright%20multicultural%20community%20center%20showing%20warmth%20inclusion%20and%20cultural%20celebration%2C%20professional%20photography&width=800&height=600&seq=family-newcomer-updated&orientation=landscape"
                alt="FreshStart Newcomer Services"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Family Harmony Consultations */}
        <section id="harmony" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=Black%20family%20in%20counseling%20session%20with%20professional%20Black%20therapist%2C%20parents%20and%20children%20in%20supportive%20conversation%2C%20warm%20comfortable%20office%20showing%20communication%20healing%20and%20relationship%20strengthening%2C%20natural%20lighting&width=800&height=600&seq=family-harmony-updated&orientation=landscape"
                alt="Family Harmony Consultations"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Family Harmony Consultation Services
              </h2>
              <p className="text-lg text-gold dark:text-gold/90 font-semibold mb-4">
                Nurturing Stronger Bonds, Resolving Challenges
              </p>
              <p className="text-base opacity-80 mb-6 leading-relaxed">
                Professional family counseling services that help families navigate challenges, improve communication, and strengthen relationships. Our licensed therapists provide compassionate, culturally-sensitive support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold text-peach mb-1">500+</div>
                  <div className="text-xs opacity-80">Families Served</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold text-peach mb-1">92%</div>
                  <div className="text-xs opacity-80">Satisfaction Rate</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold text-peach mb-1">8+</div>
                  <div className="text-xs opacity-80">Languages Supported</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold text-peach mb-1">2+</div>
                  <div className="text-xs opacity-80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship Program */}
        <section id="mentorship" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Guiding Stars Mentorship Program
              </h2>
              <p className="text-lg text-gold dark:text-gold/90 font-semibold mb-4">
                Illuminating Paths through Sibling Tutoring
              </p>
              <p className="text-base opacity-80 mb-6 leading-relaxed">
                Our big brother/sister mentorship program connects youth with positive role models who provide academic tutoring, life guidance, and emotional support. These meaningful relationships help young people reach their full potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-book-open-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Academic Tutoring</h3>
                    <p className="text-sm opacity-80">One-on-one homework help and subject-specific tutoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-heart-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Life Mentorship</h3>
                    <p className="text-sm opacity-80">Guidance on personal development, goal-setting, and decision-making</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-peach/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-team-line text-xl text-midnight dark:text-peach"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Positive Role Models</h3>
                    <p className="text-sm opacity-80">Carefully matched mentors who inspire and support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=Older%20Black%20youth%20mentor%20tutoring%20younger%20Black%20student%20in%20library%20setting%20showing%20patience%20guidance%20academic%20support%20with%20books%20learning%20materials%20and%20warm%20encouraging%20atmosphere%2C%20professional%20photography&width=800&height=600&seq=family-mentor-updated&orientation=landscape"
                alt="Guiding Stars Mentorship"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Nutrition Initiative */}
        <section id="nutrition" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=Diverse%20Black%20families%20and%20youth%20learning%20healthy%20cooking%20together%20in%20modern%20community%20kitchen%20with%20fresh%20colorful%20vegetables%20nutritious%20ingredients%20and%20professional%20chef%20instructor%2C%20bright%20natural%20lighting&width=800&height=600&seq=family-nutrition-updated&orientation=landscape"
                alt="Mindful Nutrition Initiative"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Mindful Nutrition Initiative
              </h2>
              <p className="text-lg text-gold dark:text-gold/90 font-semibold mb-4">
                Nourishing Minds for Optimal Brain Health
              </p>
              <p className="text-base opacity-80 mb-6 leading-relaxed">
                Our nutrition programs help families access healthy food and learn about brain-healthy eating. We combine food security support with education about nutrition's impact on mental and physical wellness.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-xl text-peach"></i>
                  <span className="text-sm opacity-80">Community food pantry and fresh produce distribution</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-xl text-peach"></i>
                  <span className="text-sm opacity-80">Cooking and nutrition classes for all ages</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-xl text-peach"></i>
                  <span className="text-sm opacity-80">Brain-healthy meal planning workshops</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-xl text-peach"></i>
                  <span className="text-sm opacity-80">Family cooking nights and recipe sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
