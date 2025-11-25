export default function LeadershipSection() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Our Leadership & Dedicated Team
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Meet the individuals driving the YAFOAM mission forward with passion, integrity, and deep community experience.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="glass-card p-5 text-center fade-in-up">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            alt="Founder photo"
            className="rounded-full w-32 h-32 object-cover mx-auto shadow-md border-4 border-peach mb-4"
          />
          <h4 className="font-bold text-xl">Rev. Dr. Irine Ashu</h4>
          <p className="text-sm font-semibold text-peach">Founder & Executive Director</p>
          <p className="text-sm opacity-80 mt-2">
            Visionary leader with a background in community development and a lifelong commitment to youth advocacy.
          </p>
        </div>

        <div className="glass-card p-5 text-center fade-in-up">
          <img
            src="https://images.pexels.com/photos/3771087/pexels-photo-3771087.jpeg"
            alt="Program lead"
            className="rounded-full w-32 h-32 object-cover mx-auto shadow-md border-4 border-peach mb-4"
          />
          <h4 className="font-bold text-xl">Kwame Adjei</h4>
          <p className="text-sm font-semibold text-peach">Programs Director</p>
          <p className="text-sm opacity-80 mt-2">
            Leads programming, partnerships, and evaluation. Ensures evidence-based practice across all initiatives.
          </p>
        </div>

        <div className="glass-card p-5 text-center fade-in-up">
          <img
            src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg"
            alt="Family support"
            className="rounded-full w-32 h-32 object-cover mx-auto shadow-md border-4 border-peach mb-4"
          />
          <h4 className="font-bold text-xl">Sarah Chen</h4>
          <p className="text-sm font-semibold text-peach">Family Support Coordinator</p>
          <p className="text-sm opacity-80 mt-2">
            Coordinates intake, referrals, and counseling partnerships, specializing in newcomer and crisis support.
          </p>
        </div>

        <div className="glass-card p-5 text-center fade-in-up">
          <img
            src="https://images.pexels.com/photos/3760855/pexels-photo-3760855.jpeg"
            alt="Board Chair"
            className="rounded-full w-32 h-32 object-cover mx-auto shadow-md border-4 border-peach mb-4"
          />
          <h4 className="font-bold text-xl">David O'Malley</h4>
          <p className="text-sm font-semibold text-peach">Board Chair</p>
          <p className="text-sm opacity-80 mt-2">
            Provides essential strategic governance and financial oversight. Dedicated volunteer leader.
          </p>
        </div>
      </div>
    </div>
  );
}
