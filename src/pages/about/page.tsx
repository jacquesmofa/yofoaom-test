import { useEffect } from 'react';
import Layout from '../../components/base/Layout';

export default function AboutPage() {
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20Black%20people%20and%20families%20standing%20together%20in%20unity%20with%20warm%20smiles%20showing%20hope%20and%20empowerment%20in%20a%20bright%20outdoor%20community%20setting%20with%20natural%20lighting%20and%20inclusive%20atmosphere%20representing%20multicultural%20harmony%20and%20social%20support&width=1920&height=800&seq=about-hero-1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-midnight dark:text-white drop-shadow-lg">About YAFOAM</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              Empowering youth and strengthening families through inclusive, holistic support
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 dark:text-cream/90 max-w-4xl mx-auto leading-relaxed">
              Youth and Families on a Mission (YAFOAM) is dedicated to empowering and uplifting the lives of young individuals and families in need. Our mission is to foster a positive and nurturing environment that nurtures the potential of youth and strengthens family bonds.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-midnight dark:text-peach mb-6">
                Who We Are
              </h3>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                We believe in creating a society where every young person and family is equipped with the tools, resources, and support they need to thrive and overcome challenges. By offering a diverse range of programs and services, we aim to instill resilience, foster personal growth, and promote overall well-being among the youth and families we serve.
              </p>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                Through culturally responsive programming, trauma-informed practices, and community partnerships, we create pathways to success for marginalized communities, with a special focus on Black youth and families who face systemic barriers.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=compassionate%20youth%20mentors%20working%20with%20diverse%20young%20people%20in%20a%20modern%20community%20center%20showing%20guidance%20support%20and%20empowerment%20with%20warm%20natural%20lighting%20and%20professional%20nonprofit%20atmosphere&width=800&height=600&seq=about-mission-1&orientation=landscape"
                alt="YAFOAM Mission"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section id="vision" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-700 dark:text-cream/90 max-w-4xl mx-auto leading-relaxed">
              We envision a world where all youths and families have the opportunity to thrive, fostering a brighter and more promising future for generations to come.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux text-center">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-trophy-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-4">Thriving Communities</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Communities where every individual has access to opportunities, resources, and support systems that enable them to reach their full potential.
              </p>
            </div>
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux text-center">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-scales-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-4">Racial Equity</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                A society free from systemic barriers where Black communities and all marginalized groups have equal access to opportunities and justice.
              </p>
            </div>
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux text-center">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-seedling-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-4">Generational Impact</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Creating lasting change that breaks cycles of poverty, trauma, and inequality, building resilience across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="history" className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-12">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-darkmode-card p-8 md:p-12 rounded-2xl shadow-lux mb-8">
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">The Beginning</h3>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                YAFOAM was founded with a simple yet powerful vision: to create a community where every young person and family has the support they need to thrive. What started as a small grassroots initiative has grown into a comprehensive organization serving thousands of youth and families annually.
              </p>
              <p className="text-lg text-gray-700 dark:text-cream/90 leading-relaxed">
                Our founders recognized the unique challenges faced by Black communities and other marginalized groups in accessing quality support services. They saw young people with incredible potential being held back by systemic barriers, and families struggling without adequate resources or culturally responsive support.
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 md:p-12 rounded-2xl shadow-lux mb-8">
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Our Growth</h3>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                Over the years, YAFOAM has expanded from a single program to a comprehensive suite of services addressing youth empowerment, family strengthening, and community engagement. We've built partnerships with schools, businesses, healthcare providers, and community organizations to create a robust support network.
              </p>
              <p className="text-lg text-gray-700 dark:text-cream/90 leading-relaxed">
                Today, we operate multiple programs including our flagship Summer Horizons initiative, Leadership Labs, mental health support services, newcomer settlement programs, and family counseling services. Each program is designed with cultural responsiveness and trauma-informed practices at its core.
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode-card p-8 md:p-12 rounded-2xl shadow-lux">
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Looking Forward</h3>
              <p className="text-lg text-gray-700 dark:text-cream/90 leading-relaxed">
                As we continue to grow, our commitment remains unchanged: to provide holistic, culturally responsive support that empowers youth and strengthens families. We're constantly innovating our programs, expanding our reach, and deepening our impact in the communities we serve. Together with our dedicated volunteers, donors, and partners, we're building a future where every young person can reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section id="values" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-2xl mx-auto">
            These fundamental principles guide everything we do and shape our approach to serving youth and families
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Empowerment</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                We strive to empower young minds and families with the knowledge, skills, and opportunities to unlock their full potential. Through mentorship, education, and vocational training, we enable individuals to take charge of their futures and become self-reliant contributors to their communities.
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Inclusivity</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                We embrace diversity and inclusivity as the bedrock of our organization. By celebrating the uniqueness of each individual and family, we create an open and accepting space where all can thrive, irrespective of race, ethnicity, gender, religion, or socioeconomic background.
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-community-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Community Engagement</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                Recognizing the power of community, we actively engage with local communities and stakeholders to build collaborative networks that address the specific needs of the youth and families we serve. We work hand in hand with community members to create sustainable solutions that uplift the entire neighborhood.
              </p>
            </div>

            <div className="bg-cream dark:bg-darkmode-bg p-8 rounded-2xl shadow-lux">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Holistic Support</h3>
              <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                We take a comprehensive approach to addressing the challenges faced by youth and families. Our programs focus not only on the immediate needs but also on the long-term development of each individual. We provide emotional support, counseling, and access to essential services to ensure the well-being of the whole person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Racial Equity Focus */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lux">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20Black%20youth%20and%20families%20celebrating%20together%20in%20a%20community%20gathering%20showing%20joy%20empowerment%20and%20cultural%20pride%20with%20vibrant%20colors%20and%20inclusive%20atmosphere%20representing%20racial%20equity%20and%20social%20justice&width=800&height=600&seq=about-equity-1&orientation=landscape"
                alt="Racial Equity"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
                Dismantling Racial Barriers
              </h2>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                YAFOAM's mission envisions dismantling racial barriers by prioritizing inclusivity and celebrating diversity as fundamental values. Our commitment to empowering Black communities is reflected in tailored programs addressing specific challenges they face.
              </p>
              <p className="text-lg text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                By providing mentorship, education, and vocational training, we aim to bridge racial gaps in opportunities. Community engagement initiatives involve actively collaborating with Black leaders and organizations, understanding and addressing unique needs.
              </p>
              <p className="text-lg text-gray-700 dark:text-cream/90 leading-relaxed">
                Inclusivity is embedded in our organizational culture, fostering an environment where Black youths and families feel valued. Holistic support includes counseling to navigate racial challenges, ensuring emotional well-being. We continuously assess our impact, striving for tangible, positive change in Black communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerable Populations */}
      <section className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-6">
            Supporting Vulnerable Communities
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-cream/80 mb-12 max-w-3xl mx-auto">
            Our services include targeted programs that provide holistic support to address the specific needs of Black individuals in vulnerable situations
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-heart-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Tailored Mentorship</h3>
              <p className="text-gray-700 dark:text-cream/90">
                Specialized mentorship programs designed to empower and uplift those facing compounded challenges
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-book-open-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Educational Initiatives</h3>
              <p className="text-gray-700 dark:text-cream/90">
                Comprehensive educational programs that address systemic barriers and create pathways to success
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-peach/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-briefcase-line text-4xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">Vocational Training</h3>
              <p className="text-gray-700 dark:text-cream/90">
                Skills development and job readiness programs tailored to community needs and market demands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Solutions */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-6">
            Innovative &amp; Unique Solutions
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-cream/80 mb-12 max-w-3xl mx-auto">
            YAFOAM employs innovative and unique solutions to address the multifaceted issues faced by Black communities
          </p>

          <div className="bg-white dark:bg-darkmode-card p-8 md:p-12 rounded-2xl shadow-lux">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Strategic Partnerships</h3>
                <p className="text-gray-700 dark:text-cream/90 mb-4 leading-relaxed">
                  Through strategic partnerships with local businesses and educational institutions, we offer specialized vocational training programs tailored to the needs of Black individuals.
                </p>
                <p className="text-gray-700 dark:text-cream/90 leading-relaxed">
                  These partnerships ensure that our programs are comprehensive, inclusive, and directly responsive to the intersectional vulnerabilities experienced by Black individuals, fostering resilience and well-being among all we serve.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20business%20partnership%20handshake%20between%20diverse%20community%20leaders%20and%20educators%20in%20modern%20office%20setting%20showing%20collaboration%20innovation%20and%20social%20impact%20with%20natural%20lighting&width=700&height=500&seq=about-partnership-1&orientation=landscape"
                  alt="Strategic Partnerships"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Our Leadership Team
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12">
            Dedicated professionals committed to making a difference
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Amara Johnson', role: 'Executive Director', image: 'professional Black woman executive director in business attire smiling confidently in modern office' },
              { name: 'Marcus Williams', role: 'Program Director', image: 'professional Black man program director in casual business attire with warm smile in community center' },
              { name: 'Fatima Hassan', role: 'Community Outreach Lead', image: 'professional woman of color community outreach coordinator with friendly expression in outdoor setting' },
              { name: 'James Chen', role: 'Youth Services Manager', image: 'professional Asian man youth services manager with approachable demeanor in educational environment' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lux">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=400&height=400&seq=leader-${index + 1}&orientation=squarish`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-midnight dark:text-peach mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-cream/80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-midnight dark:bg-darkmode-bg text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Our Commitment</h2>
          <p className="text-xl leading-relaxed mb-8">
            As an organization, we are committed to continuous improvement and impact assessment, ensuring that every effort we make brings about positive and lasting change in the lives of those we serve.
          </p>
          <p className="text-xl leading-relaxed">
            Together with our dedicated volunteers, donors, and partners, we envision a world where all youths and families have the opportunity to thrive, fostering a brighter and more promising future for generations to come.
          </p>
        </div>
      </section>
    </Layout>
  );
}
