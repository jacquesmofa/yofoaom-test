import { useState } from 'react';

export default function StrategySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-16 mb-20">
      <article className="glass-card p-8 fade-in-up">
        <h2 className="text-3xl font-display font-bold mb-4 text-midnight dark:text-peach">
          Our Core Strategy: The YAFOAM Model
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Our mission is not just a statement; it's a framework for action. We operate under a <strong>Wraparound Service Model</strong> that respects family complexity and addresses systemic barriers holistically.
        </p>

        <div className={expanded ? '' : 'max-h-96 overflow-hidden relative'}>
          <p className="mb-4">
            <strong>Mission:</strong> To empower young people and strengthen families through tailored programs, mentorship, practical supports, and partnerships. We center cultural competence, trauma-informed methods, and long-term relationships that generate sustainable outcomes in education, employment, mental health, and belonging.
          </p>
          <p className="mb-4">
            <strong>Vision:</strong> A community where every young person and family feels connected, valued, and equipped to reach their full potential.
          </p>

          <h4 className="text-xl font-semibold mt-4 mb-2">Pillars of Our Approach</h4>
          <ul className="list-disc ml-6 space-y-2 opacity-80">
            <li><strong>Cultural Responsiveness:</strong> Programs are designed with deep respect for the diverse cultural backgrounds of our clients, ensuring relevance and trust.</li>
            <li><strong>Trauma-Informed Practice:</strong> All staff and volunteers are trained to recognize and respond to the impact of trauma, fostering a safe and supportive environment.</li>
            <li><strong>Long-Term Mentorship:</strong> We focus on developing sustained, trusting relationships rather than short-term interventions.</li>
            <li><strong>Multi-Layered Programming:</strong> We address multiple needs simultaneously, from crisis response to employment readiness and family stabilization.</li>
            <li><strong>Community Mobilization:</strong> We believe in partnership, working with 25+ community organizations and funders to maximize resources and reach.</li>
          </ul>

          {expanded && (
            <>
              <h4 className="text-xl font-semibold mt-6 mb-2">Extended Strategy Detail</h4>
              <p className="mt-2">
                Our strategic roadmap for the next three years involves scaling our <strong>Summer Horizons</strong> flagship program by 40% and launching two new <strong>Youth Mental Health Empowerment Hubs</strong>. This requires a concerted effort in fund development and capacity building within our volunteer base.
              </p>
              <p className="mt-2">
                Key to this expansion is developing a digital literacy curriculum integrated into all youth programs, ensuring they are competitive in the modern workforce. We also plan to formalize a peer-to-peer family support network, leveraging the success stories of established newcomer families to guide recent arrivals.
              </p>
              <p className="mt-2">
                The financial strategy focuses on diversifying revenue streams: 50% from government grants, 30% from corporate partnerships, and 20% from individual donors. This financial stability will allow us to offer all core services free of charge to eligible participants, upholding our commitment to accessibility and equity.
              </p>
            </>
          )}

          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 dark:from-midnight/90 to-transparent"></div>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-midnight dark:text-peach font-semibold hover:underline cursor-pointer"
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>
      </article>
    </div>
  );
}
