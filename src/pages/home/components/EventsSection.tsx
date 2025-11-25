export default function EventsSection() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Upcoming Events & Activities
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Find out what's happening this month! From Youth Leadership Summits to Family Fun Days and Community Advocacy Workshops.
      </p>

      <div className="space-y-4">
        <details className="glass-card p-5 fade-in-up cursor-pointer">
          <summary className="font-bold text-xl text-midnight dark:text-peach flex justify-between items-center">
            <span>Youth Leadership Summit 2025</span>
            <span className="text-sm font-normal text-gray-500">January 20, 2025</span>
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p>
              An all-day event for 150+ youth focused on civic engagement, networking with local politicians, and developing community action plans. Keynote speaker to be announced.
            </p>
            <a href="#contact" className="text-sm font-semibold text-midnight dark:text-peach hover:underline mt-2 inline-block cursor-pointer">
              Register Here
            </a>
          </div>
        </details>

        <details className="glass-card p-5 fade-in-up cursor-pointer">
          <summary className="font-bold text-xl text-midnight dark:text-peach flex justify-between items-center">
            <span>Family Harmony Day</span>
            <span className="text-sm font-normal text-gray-500">February 15, 2025</span>
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p>
              A free, open-to-the-public community event with food, games, live music, and booths from settlement service partners. All ages welcome.
            </p>
          </div>
        </details>

        <details className="glass-card p-5 fade-in-up cursor-pointer">
          <summary className="font-bold text-xl text-midnight dark:text-peach flex justify-between items-center">
            <span>Digital Media Portfolio Review</span>
            <span className="text-sm font-normal text-gray-500">Monthly</span>
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p>
              A private session for Creative & Digital Lab students to receive professional critique from industry veterans. Essential for job readiness.
            </p>
          </div>
        </details>

        <details className="glass-card p-5 fade-in-up cursor-pointer">
          <summary className="font-bold text-xl text-midnight dark:text-peach flex justify-between items-center">
            <span>Community Food Pantry Open Hours</span>
            <span className="text-sm font-normal text-gray-500">Weekly</span>
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p>
              Every Thursday 2-6 PM. Free food hampers, fresh produce, and nutrition education. No appointment necessary. All community members welcome.
            </p>
          </div>
        </details>

        <details className="glass-card p-5 fade-in-up cursor-pointer">
          <summary className="font-bold text-xl text-midnight dark:text-peach flex justify-between items-center">
            <span>Parenting Workshop Series</span>
            <span className="text-sm font-normal text-gray-500">Bi-weekly</span>
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p>
              Every other Tuesday evening. Topics include digital parenting, financial literacy, and navigating the education system. Childcare provided.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
