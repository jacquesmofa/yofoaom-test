
import { Link } from 'react-router-dom';

export default function ProgramsSection() {
  const programs = [
    {
      title: 'Mental Health Support',
      description: 'Nurturing minds and breaking stigmas through compassionate care',
      icon: 'ri-mental-health-line',
      link: '/programs#mental-health'
    },
    {
      title: 'Mentorship Programs',
      description: 'Connecting youth with committed long-term mentors',
      icon: 'ri-user-heart-line',
      link: '/family-services#mentorship'
    },
    {
      title: 'Summer Horizons',
      description: 'Camp experiences and job opportunities for youth',
      icon: 'ri-sun-line',
      link: '/programs#summer'
    },
    {
      title: 'Newcomer Services',
      description: 'Empowering newcomers and fostering inclusion',
      icon: 'ri-global-line',
      link: '/programs#freshstart'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-darkmode-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight dark:text-peach mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 dark:text-cream/80 max-w-2xl mx-auto">
            Comprehensive initiatives designed to empower youth and strengthen families
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-cream dark:bg-darkmode-bg p-6 rounded-2xl shadow-lux hover:shadow-xl transition">
              <div className="w-14 h-14 bg-peach/20 rounded-full flex items-center justify-center mb-4">
                <i className={`${program.icon} text-3xl text-midnight dark:text-peach`}></i>
              </div>
              <h3 className="text-xl font-bold text-midnight dark:text-peach mb-3">
                {program.title}
              </h3>
              <p className="text-gray-700 dark:text-cream/90 mb-4 text-sm">
                {program.description}
              </p>
              <Link 
                to={program.link}
                className="text-gold hover:text-midnight dark:hover:text-peach font-semibold inline-flex items-center gap-2 cursor-pointer text-sm"
              >
                Learn More <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Mentorship Card */}
        <div className="relative bg-gradient-to-r from-midnight to-midnight/90 dark:from-darkmode-bg dark:to-darkmode-card rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://readdy.ai/api/search-image?query=Black%20mentor%20and%20youth%20working%20together%20showing%20guidance%20support%20and%20positive%20relationship%20in%20community%20setting&width=1200&height=400&seq=mentorship-feature&orientation=landscape"
              alt="Mentorship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-display font-bold text-cream mb-4">
                Mentorship for Life
              </h3>
              <p className="text-cream/90 text-lg mb-6">
                Connecting every youth with a committed, long-term mentor to navigate challenges and unlock potential.
              </p>
              <Link 
                to="/family-services#mentorship"
                className="inline-flex items-center gap-2 px-6 py-3 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap"
              >
                See Mentoring Impact <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-cream rounded-xl font-bold hover:bg-midnight/90 transition cursor-pointer whitespace-nowrap"
          >
            Explore All Programs <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
