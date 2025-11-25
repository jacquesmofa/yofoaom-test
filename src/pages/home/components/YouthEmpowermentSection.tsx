export default function YouthEmpowermentSection() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Youth Empowerment: Wisdom, Capacity, and Resilience
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        We are dedicated to fostering a generation of empowered youth who develop wisdom, creativity, capacity, and knowledge to draw strength and build resilience in the face of systemic challenges.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="glass-card p-8 fade-in-up">
          <img
            src="https://images.pexels.com/photos/1769352/pexels-photo-1769352.jpeg"
            alt="Youth Mental Health"
            className="w-full h-56 object-cover rounded-xl mb-4 shadow-md"
          />
          <h2 className="text-3xl font-semibold mb-3 text-midnight dark:text-peach">
            Youth Mental Health Empowerment Hub
          </h2>
          <p className="text-lg opacity-90 mb-4">
            We create a compassionate and supportive space for young people, fostering mental well-being and resilience through awareness, counseling, and powerful, stigma-breaking initiatives. Our services are completely confidential and culturally appropriate.
          </p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <i className="ri-checkbox-circle-line text-peach text-xl mr-2 mt-1"></i>
              <div><strong>Wellness Circles:</strong> Group therapy and peer support sessions facilitated by licensed professionals.</div>
            </div>
            <div className="flex items-start">
              <i className="ri-checkbox-circle-line text-peach text-xl mr-2 mt-1"></i>
              <div><strong>Individual Crisis Counseling:</strong> Short-term, immediate support and long-term referral services.</div>
            </div>
            <div className="flex items-start">
              <i className="ri-checkbox-circle-line text-peach text-xl mr-2 mt-1"></i>
              <div><strong>Mindfulness & Trauma-Aware Workshops:</strong> Skills-based training in emotional regulation.</div>
            </div>
            <div className="flex items-start">
              <i className="ri-checkbox-circle-line text-peach text-xl mr-2 mt-1"></i>
              <div><strong>Art Therapy:</strong> Utilizing creative expression as a pathway to healing and self-discovery.</div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 fade-in-up">
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
            alt="At-Risk Youth Support"
            className="w-full h-56 object-cover rounded-xl mb-4 shadow-md"
          />
          <h2 className="text-3xl font-semibold mb-3 text-midnight dark:text-peach">
            At-Risk Intervention & Re-Engagement
          </h2>
          <p className="text-lg opacity-90 mb-4">
            Targeted support for youth facing academic disengagement, justice system involvement, or chronic homelessness. We focus on re-establishing stability, education, and positive mentorship connections.
          </p>
          
          <div className="bg-midnight/10 dark:bg-midnight/40 p-4 rounded-xl mt-6">
            <p className="font-semibold text-midnight dark:text-peach">Need Immediate Help?</p>
            <p className="text-sm opacity-80 mt-1">
              Contact our dedicated Re-Engagement Coordinator for confidential intake and assessment. <strong>(555) 555-5555 Ext. 102</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 glass-card fade-in-up">
        <blockquote className="text-2xl italic font-display text-center text-midnight dark:text-cream/90">
          "Before YAFOAM, I felt invisible. The Digital Media Lab gave me a skill, and my mentor gave me a future. Now I'm a paid intern."
        </blockquote>
        <p className="text-center font-semibold mt-4">— Alex T., Creative Labs Graduate</p>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
          Youth in Action Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="gallery-item rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up">
            <img
              src="https://images.pexels.com/photos/1769352/pexels-photo-1769352.jpeg"
              alt="Leadership Workshop"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="gallery-item rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up">
            <img
              src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg"
              alt="Digital Media Training"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="gallery-item rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
              alt="Mentorship Session"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="gallery-item rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up">
            <img
              src="https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg"
              alt="Summer Horizons Field Trip"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
        <p className="text-right mt-4">
          <a href="#gallery" className="text-sm font-semibold text-midnight dark:text-peach hover:underline cursor-pointer">
            View Full Gallery & Videos →
          </a>
        </p>
      </div>
    </div>
  );
}
