
import { Link } from 'react-router-dom';

export default function DonateSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 shadow-lux">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-midnight dark:text-peach font-playfair">
            Your Support Changes Lives
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Every contribution helps us provide essential programs, mentorship, and resources to youth and families in need. Together, we can create lasting change.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/get-involved"
              className="btn-primary whitespace-nowrap cursor-pointer"
            >
              Donate Now <i className="ri-heart-fill ml-2"></i>
            </Link>
            <Link
              to="/get-involved"
              className="btn-secondary whitespace-nowrap cursor-pointer"
            >
              Become a Volunteer <i className="ri-team-line ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
