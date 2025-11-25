export default function ResourcesSection() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Resources, Guides, and Forms
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Downloadable forms, community guides, and essential information to empower you on your journey.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card p-6 fade-in-up">
          <h2 className="text-2xl font-semibold mb-3">Downloadable Forms</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-file-pdf-line mr-2"></i>
                Youth Program Application (PDF)
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-file-pdf-line mr-2"></i>
                Volunteer Intake Form (PDF)
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-file-pdf-line mr-2"></i>
                Family Support Referral (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 fade-in-up">
          <h2 className="text-2xl font-semibold mb-3">Community Guides</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-book-open-line mr-2"></i>
                Navigating the Local School System
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-book-open-line mr-2"></i>
                Job Search & Resume Tips for Youth
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-book-open-line mr-2"></i>
                Mental Wellness Quick Reference
              </a>
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 fade-in-up">
          <h2 className="text-2xl font-semibold mb-3">FAQ & Help</h2>
          <ul className="space-y-3">
            <li>
              <a href="#legal" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-question-line mr-2"></i>
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-mail-line mr-2"></i>
                General Contact Inquiry
              </a>
            </li>
            <li>
              <a href="#legal" className="flex items-center text-midnight dark:text-peach hover:underline cursor-pointer">
                <i className="ri-shield-check-line mr-2"></i>
                Data Privacy Statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
