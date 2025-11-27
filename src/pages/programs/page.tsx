import { useEffect } from 'react';
import Layout from '../../components/base/Layout';
import { Link } from 'react-router-dom';

export default function ProgramsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const youthPrograms = [
    {
      title: 'Leadership Labs',
      description: 'Intensive leadership development program equipping youth with critical thinking, public speaking, and project management skills.',
      icon: 'ri-lightbulb-flash-line',
      image: 'Black youth in leadership workshop, confident young people presenting ideas, collaborative learning environment'
    },
    {
      title: 'Skills Training & Creativity Club',
      description: 'Hands-on workshops in digital media, arts, music production, coding, and creative expression.',
      icon: 'ri-palette-line',
      image: 'diverse youth in creative digital media lab, learning technology skills, artistic expression'
    },
    {
      title: 'Youth Wellness Sessions',
      description: 'Mental health support, mindfulness practices, and wellness circles providing safe spaces for emotional growth.',
      icon: 'ri-heart-pulse-line',
      image: 'Black youth in supportive mental health group session, wellness and mindfulness activities'
    }
  ];

  const familyPrograms = [
    {
      title: 'Parent Support Group',
      description: 'Regular meetings providing parenting strategies, peer support, and resources for family challenges.',
      icon: 'ri-parent-line',
      image: 'diverse parents in supportive group discussion, family counseling session'
    },
    {
      title: 'Family Counseling & Crisis Support',
      description: 'Professional counseling services for families facing challenges, conflicts, or crisis situations.',
      icon: 'ri-heart-line',
      image: 'family counseling session with professional therapist, supportive environment'
    },
    {
      title: 'Newcomer Family Settlement Support',
      description: 'Comprehensive support for immigrant families including language assistance, housing, employment, and cultural integration.',
      icon: 'ri-global-line',
      image: 'immigrant families receiving settlement support, welcoming integration services'
    }
  ];

  const communityPrograms = [
    {
      title: 'Volunteer Programs',
      description: 'Diverse volunteer opportunities including mentorship, tutoring, event support, and community outreach.',
      icon: 'ri-hand-heart-line',
      image: 'volunteers working with youth in community center, mentorship and support'
    },
    {
      title: 'Cultural & Community Events',
      description: 'Celebrations, workshops, and gatherings that honor diversity and strengthen community bonds.',
      icon: 'ri-calendar-event-line',
      image: 'diverse community celebration event, cultural festival with families'
    },
    {
      title: 'Faith & Mentorship Platform',
      description: 'Connecting youth with mentors through faith-based and secular mentorship programs.',
      icon: 'ri-user-heart-line',
      image: 'mentor and youth in meaningful conversation, guidance and support'
    }
  ];

  const specializedPrograms = [
    {
      id: 'fill-in-blank',
      title: 'Fill-in-the-Blank Empowerment Initiative',
      description: 'Fostering wisdom, creativity, capacity, and knowledge to build resilience in youth.',
      fullDescription: 'Through innovative programs and mentorship, we empower youth to cultivate wisdom, embracing critical thinking and informed decision-making. Our commitment to nurturing creativity allows young minds to explore and express themselves freely, fostering innovation and self-discovery.',
      image: 'Empowered Black youth engaged in creative learning activities, developing wisdom and knowledge, bright educational setting',
      icon: 'ri-lightbulb-flash-line',
    },
    {
      id: 'mental-health',
      title: 'Youth Mental Health Empowerment Initiative',
      subtitle: 'Nurturing Minds, Breaking Stigmas',
      description: 'Creating compassionate spaces for young individuals, fostering mental well-being and resilience.',
      fullDescription: 'Through awareness campaigns, educational programs, and stigma-breaking initiatives, we empower young minds to prioritize their mental health. We offer accessible and inclusive mental health services, including counseling, support groups, and innovative interventions.',
      image: 'Black youth in supportive mental health counseling session, compassionate therapist listening, safe welcoming space',
      icon: 'ri-heart-pulse-line',
    },
    {
      id: 'hygiene-wellness',
      title: 'Youth Hygiene and Wellness Initiative',
      subtitle: 'Cultivating Healthy Habits for Life',
      description: 'Empowering young individuals with knowledge and practices for maintaining optimal personal hygiene.',
      fullDescription: 'Through educational programs, workshops, and community outreach, we raise awareness about the importance of personal hygiene among youth. We provide practical guidance on daily hygiene routines, emphasizing cleanliness in preventing illnesses.',
      image: 'Black youth learning about personal hygiene and wellness, educational workshop setting, healthy habits',
      icon: 'ri-hand-sanitizer-line',
    },
    {
      id: 'gun-gang-prevention',
      title: 'Community Resilience Against Gun and Gang Violence',
      subtitle: 'Breaking the Cycle, Building a Safer Future',
      description: 'Addressing root causes of gun and gang violence while fostering community resilience.',
      fullDescription: 'Through targeted educational programs, mentorship initiatives, and community outreach, we interrupt the cycle of violence by equipping youth with essential life skills, conflict resolution techniques, and opportunities for personal growth.',
      image: 'Black youth engaged in positive community activities, conflict resolution workshop, mentorship program',
      icon: 'ri-shield-check-line',
    },
    {
      id: 'freshstart',
      title: 'FreshStart Integration Initiative',
      subtitle: 'Empowering Newcomers, Fostering Inclusive Communities',
      description: 'Supporting newcomers in their journey towards successful settlement and integration.',
      fullDescription: 'Through culturally sensitive programs, language assistance, and community engagement, we create an inclusive environment that welcomes newcomers. We facilitate practical guidance on essential services, housing, education, and employment.',
      image: 'Black immigrant families settling into new community, welcoming integration program, multicultural support',
      icon: 'ri-global-line',
    },
    {
      id: 'mindful-nutrition',
      title: 'Mindful Nutrition Initiative',
      subtitle: 'Nourishing Minds for Optimal Brain Health',
      description: 'Promoting healthy food choices that support optimal brain health and cognitive function.',
      fullDescription: 'Through educational campaigns, workshops, and community partnerships, we raise awareness about nutrition\'s impact on brain function. Our food pantry is open to support you and your family with nutritious food options.',
      image: 'Black families learning about healthy nutrition, food pantry with fresh produce, wellness education',
      icon: 'ri-restaurant-line',
    },
    {
      title: 'At-Risk Youth Empowerment Initiative',
      subtitle: 'Fostering Resilience, Inspiring Futures',
      description: 'Intensive support including case management, life skills training, educational support, and pathway planning.',
      icon: 'ri-user-heart-line',
      image: 'Black mentor working one-on-one with at-risk youth, supportive environment, guidance and hope'
    },
    {
      title: 'Summer Horizons Youth Program',
      subtitle: 'Empowering Through Camp and Job Experiences',
      description: 'Flagship summer program combining recreational activities, skill development, employment opportunities, and leadership training.',
      icon: 'ri-sun-line',
      image: 'energetic diverse Black youth in summer camp activities outdoors, joy and teamwork'
    },
    {
      title: 'Family Harmony Consultation Services',
      subtitle: 'Nurturing Stronger Bonds, Resolving Challenges',
      description: 'Professional family counseling, conflict resolution, parenting support, and relationship strengthening.',
      icon: 'ri-parent-line',
      image: 'Black family counseling session with professional therapist, communication and healing'
    },
    {
      title: 'Guiding Stars Mentorship Program',
      subtitle: 'Illuminating Paths through Sibling Tutoring',
      description: 'Big brother/sister mentorship connecting youth with positive role models for academic and personal growth.',
      icon: 'ri-star-line',
      image: 'older Black youth mentor tutoring younger student, patience and academic support'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Diverse%20Black%20youth%20participating%20in%20empowerment%20programs%2C%20community%20activities%20and%20workshops%2C%20vibrant%20inclusive%20learning%20environment%2C%20young%20people%20developing%20skills%20and%20building%20resilience%2C%20modern%20community%20center%20with%20natural%20lighting&width=1920&height=1080&seq=programs-hero-yafoam&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-midnight/5 to-midnight/10 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-6 py-20">
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-midnight dark:text-white drop-shadow-lg">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
              Comprehensive, culturally responsive initiatives designed to empower youth, strengthen families, and build resilient communities.
            </p>
          </div>
        </div>
      </section>

      {/* Program Tracks Overview */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-12">
            Three Core Program Tracks
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link to="/youth-services" className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux hover:shadow-xl transition cursor-pointer group">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <i className="ri-user-star-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Youth Empowerment Track</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4">
                Leadership development, skills training, mental health support, and creative expression programs.
              </p>
              <span className="text-peach font-semibold group-hover:underline">Explore Youth Programs →</span>
            </Link>

            <Link to="/family-services" className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux hover:shadow-xl transition cursor-pointer group">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <i className="ri-parent-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Family Strengthening Track</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4">
                Parent support, family counseling, crisis intervention, and newcomer settlement services.
              </p>
              <span className="text-peach font-semibold group-hover:underline">Explore Family Programs →</span>
            </Link>

            <Link to="/community" className="bg-white dark:bg-darkmode-card p-8 rounded-2xl shadow-lux hover:shadow-xl transition cursor-pointer group">
              <div className="w-16 h-16 bg-peach/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <i className="ri-community-line text-3xl text-midnight dark:text-peach"></i>
              </div>
              <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-4">Community Engagement Track</h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4">
                Volunteer opportunities, cultural events, mentorship platforms, and community building.
              </p>
              <span className="text-peach font-semibold group-hover:underline">Explore Community Programs →</span>
            </Link>
          </div>

          {/* Youth Empowerment Programs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-midnight dark:text-peach mb-8">Youth Empowerment Track</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {youthPrograms.map((program, index) => (
                <div key={index} className="bg-white dark:bg-darkmode-card rounded-2xl shadow-lux overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28program.image%29%7D&width=600&height=400&seq=youth-prog-${index}&orientation=landscape`}
                      alt={program.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center mb-4">
                      <i className={`${program.icon} text-2xl text-midnight dark:text-peach`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-midnight dark:text-peach mb-3">{program.title}</h4>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Strengthening Programs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-midnight dark:text-peach mb-8">Family Strengthening Track</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {familyPrograms.map((program, index) => (
                <div key={index} className="bg-white dark:bg-darkmode-card rounded-2xl shadow-lux overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28program.image%29%7D&width=600&height=400&seq=family-prog-${index}&orientation=landscape`}
                      alt={program.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center mb-4">
                      <i className={`${program.icon} text-2xl text-midnight dark:text-peach`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-midnight dark:text-peach mb-3">{program.title}</h4>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Engagement Programs */}
          <div>
            <h3 className="text-3xl font-bold text-midnight dark:text-peach mb-8">Community Engagement Track</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {communityPrograms.map((program, index) => (
                <div key={index} className="bg-white dark:bg-darkmode-card rounded-2xl shadow-lux overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28program.image%29%7D&width=600&height=400&seq=community-prog-${index}&orientation=landscape`}
                      alt={program.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center mb-4">
                      <i className={`${program.icon} text-2xl text-midnight dark:text-peach`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-midnight dark:text-peach mb-3">{program.title}</h4>
                    <p className="text-gray-700 dark:text-cream/90 text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-20 bg-white dark:bg-darkmode-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-midnight dark:text-peach mb-4">
            Specialized Initiatives
          </h2>
          <p className="text-center text-gray-600 dark:text-cream/80 mb-12 max-w-3xl mx-auto">
            Targeted programs addressing specific community needs and challenges
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedPrograms.map((program, index) => (
              <div key={index} className="bg-cream dark:bg-darkmode-bg rounded-2xl shadow-lux overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28program.image%29%7D&width=600&height=400&seq=special-prog-${index}&orientation=landscape`}
                    alt={program.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-peach/20 rounded-full flex items-center justify-center mb-4">
                    <i className={`${program.icon} text-2xl text-midnight dark:text-peach`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-midnight dark:text-peach mb-2">
                    {program.title}
                  </h3>
                  {program.subtitle && (
                    <p className="text-sm text-gold dark:text-gold/90 font-semibold mb-3">
                      {program.subtitle}
                    </p>
                  )}
                  <p className="text-gray-700 dark:text-cream/90 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-midnight dark:bg-darkmode-bg text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-peach mb-2">5,000+</div>
              <div className="text-lg opacity-90">Youths Served Annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-peach mb-2">800+</div>
              <div className="text-lg opacity-90">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-peach mb-2">90%+</div>
              <div className="text-lg opacity-90">Program Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-peach mb-2">200+</div>
              <div className="text-lg opacity-90">Active Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-midnight dark:text-peach mb-6">
            Get Involved Today
          </h2>
          <p className="text-lg text-gray-700 dark:text-cream/90 mb-8">
            Whether you want to volunteer, donate, or participate in our programs, there are many ways to make a difference
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/get-involved"
              className="px-8 py-4 bg-midnight text-cream rounded-xl font-bold hover:bg-midnight/90 transition cursor-pointer whitespace-nowrap"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/get-involved#donate"
              className="px-8 py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
            >
              Support Our Programs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
