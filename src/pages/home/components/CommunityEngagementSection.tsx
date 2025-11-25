export default function CommunityEngagementSection() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Community Engagement: Partners, Events, and Advocacy
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Our impact extends beyond our doors. We actively mobilize communities, collaborate with <strong>25+ partners</strong> and funders, and advocate for systemic change to benefit youth and families.
      </p>

      <h2 className="text-3xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Our Trusted Partners
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="glass-card p-4 text-center fade-in-up">
          <div className="h-12 flex items-center justify-center mb-2">
            <i className="ri-government-line text-4xl text-gray-400"></i>
          </div>
          <p className="text-xs mt-2 opacity-70">Government Funding Body</p>
        </div>
        <div className="glass-card p-4 text-center fade-in-up">
          <div className="h-12 flex items-center justify-center mb-2">
            <i className="ri-school-line text-4xl text-gray-400"></i>
          </div>
          <p className="text-xs mt-2 opacity-70">Local School Board</p>
        </div>
        <div className="glass-card p-4 text-center fade-in-up">
          <div className="h-12 flex items-center justify-center mb-2">
            <i className="ri-building-line text-4xl text-gray-400"></i>
          </div>
          <p className="text-xs mt-2 opacity-70">Corporate Sponsor</p>
        </div>
        <div className="glass-card p-4 text-center fade-in-up">
          <div className="h-12 flex items-center justify-center mb-2">
            <i className="ri-home-4-line text-4xl text-gray-400"></i>
          </div>
          <p className="text-xs mt-2 opacity-70">Housing Organization</p>
        </div>
      </div>

      <div className="bg-peach/30 dark:bg-midnight/30 p-8 rounded-3xl fade-in-up">
        <h2 className="text-3xl font-display font-bold mb-4 text-midnight dark:text-peach">
          Join Our Mission
        </h2>
        <p className="text-lg opacity-90 mb-4">
          We are always seeking new partners who share our commitment to equitable outcomes. Whether through corporate social responsibility, volunteer mobilization, or joint program delivery, your contribution multiplies our impact.
        </p>
        <button
          onClick={() => {
            const modal = document.getElementById('volunteer-modal');
            if (modal) modal.classList.add('active');
          }}
          className="px-6 py-3 bg-midnight text-cream rounded-xl font-semibold hover:bg-midnight/90 transition cursor-pointer whitespace-nowrap"
        >
          Become a Partner
        </button>
      </div>
    </div>
  );
}
