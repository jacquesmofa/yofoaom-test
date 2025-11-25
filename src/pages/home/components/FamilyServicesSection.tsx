import { useState } from 'react';

export default function FamilyServicesSection() {
  const [parentingExpanded, setParentingExpanded] = useState(false);

  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Family Services: Building Resilience Together
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        We strengthen the family unit through compassionate, professional support for communication, conflict resolution, and problem-solving, creating a foundation of harmony.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="glass-card p-8 fade-in-up">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <i className="ri-parent-line text-5xl text-midnight dark:text-peach"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Family Harmony Consultation</h3>
          <p className="opacity-80">
            Compassionate, professional support focusing on communication strategies, boundary setting, and family problem-solving tools.
          </p>
          <a href="#support" className="mt-4 inline-block text-sm font-semibold text-midnight dark:text-peach hover:underline cursor-pointer">
            Request Consultation <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="glass-card p-8 fade-in-up">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <i className="ri-global-line text-5xl text-midnight dark:text-peach"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Newcomer Settlement Support</h3>
          <p className="opacity-80">
            Our FreshStart Integration Initiative provides critical settlement assistance, language access, and help navigating complex local systems.
          </p>
          <a href="#support" className="mt-4 inline-block text-sm font-semibold text-midnight dark:text-peach hover:underline cursor-pointer">
            Start Intake Process <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="glass-card p-8 fade-in-up">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <i className="ri-restaurant-line text-5xl text-midnight dark:text-peach"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Mindful Nutrition Initiative</h3>
          <p className="opacity-80">
            Addressing food security through our community pantry and education that supports brain health, mindful eating, and food access.
          </p>
          <a href="#events" className="mt-4 inline-block text-sm font-semibold text-midnight dark:text-peach hover:underline cursor-pointer">
            See Food Pantry Hours <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>

      <div className="mt-16 rounded-3xl shadow-lux fade-in-up overflow-hidden">
        <div className="relative min-h-[400px]">
          <img
            src="https://images.pexels.com/photos/1556950/pexels-photo-1556950.jpeg"
            alt="Family support"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/70"></div>
          <div className="relative z-10 p-10 max-w-4xl mx-auto text-cream">
            <h2 className="text-4xl font-display font-bold mb-4 text-peach">
              Supporting the Whole Family Unit
            </h2>
            
            <div className={parentingExpanded ? '' : 'max-h-64 overflow-hidden relative'}>
              <p className="text-lg mb-4">
                The health of the youth is inextricably linked to the stability of the family. Our <strong>Parenting Groups</strong> are designed to foster positive parenting techniques, cross-cultural communication, and parental wellness. These groups meet bi-weekly and cover topics ranging from navigating the school system to understanding adolescent mental health challenges.
              </p>

              {parentingExpanded && (
                <>
                  <h3 className="text-2xl font-semibold mt-6 mb-3">Key Workshop Themes:</h3>
                  <ul className="list-disc ml-6 space-y-2 opacity-90">
                    <li><strong>Digital Parenting:</strong> Managing screen time and online safety in a connected world.</li>
                    <li><strong>Inter-Generational Communication:</strong> Bridging the gap between newcomer parents and Canadian-born youth.</li>
                    <li><strong>Financial Literacy:</strong> Budgeting and accessing public services to improve family economic stability.</li>
                    <li><strong>Advocacy in Education:</strong> Empowering parents to effectively support their children's academic success.</li>
                  </ul>
                  <p className="mt-4">
                    We are committed to providing <strong>350+ families</strong> annually with comprehensive support, including confidential counseling and referrals to ensure all barriers, such as employment and housing, are addressed within our wraparound service model.
                  </p>
                </>
              )}

              {!parentingExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-midnight/90 to-transparent"></div>
              )}
            </div>

            <button
              onClick={() => setParentingExpanded(!parentingExpanded)}
              className="mt-4 text-peach font-semibold hover:underline cursor-pointer"
            >
              {parentingExpanded ? 'Read less ↑' : 'Read more ↓'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
