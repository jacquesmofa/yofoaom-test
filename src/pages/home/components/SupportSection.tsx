import { useState } from 'react';

export default function SupportSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Request Type: Youth Intake (12-24)',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you for reaching out. Our team will contact you within 24-48 hours.');
    setFormData({ name: '', email: '', type: 'Request Type: Youth Intake (12-24)', message: '' });
  };

  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Get The Support You Need
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Whether you are a young person searching for direction or a family needing stabilization, YAFOAM is your safe place to land. We are here to help.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="p-8 glass-card fade-in-up">
          <h3 className="font-bold text-2xl mb-4 text-midnight dark:text-peach">
            Youth/Family Support Intake
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg border border-peach/50 bg-cream/70 dark:bg-darkmode-bg/50"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg border border-peach/50 bg-cream/70 dark:bg-darkmode-bg/50"
              required
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full p-3 pr-8 rounded-lg border border-peach/50 bg-cream/70 dark:bg-darkmode-bg/50"
            >
              <option>Request Type: Youth Intake (12-24)</option>
              <option>Family Support / Counseling</option>
              <option>Newcomer Settlement Assistance</option>
              <option>Crisis Referral</option>
              <option>General Inquiry</option>
            </select>
            <textarea
              placeholder="Tell us briefly how we can help and the nature of your need."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg border border-peach/50 bg-cream/70 dark:bg-darkmode-bg/50"
              rows={5}
              required
            />
            {status && (
              <div className="text-sm text-green-700 dark:text-green-300 font-semibold">
                {status}
              </div>
            )}
            <button className="px-6 py-3 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition w-full whitespace-nowrap cursor-pointer">
              Submit Confidential Request
            </button>
          </div>
        </form>

        <div className="p-8 glass-card fade-in-up">
          <h3 className="font-bold text-2xl mb-4 text-midnight dark:text-peach">
            Urgent & Community Resources
          </h3>
          <ul className="space-y-4 text-lg">
            <li className="p-3 bg-peach/20 dark:bg-midnight/20 rounded-lg">
              <strong>Emergency Crisis:</strong>{' '}
              <a href="tel:911" className="text-red-600 dark:text-red-400 font-bold underline cursor-pointer">
                Call 911
              </a>{' '}
              (if immediate danger).
            </li>
            <li className="p-3 bg-peach/20 dark:bg-midnight/20 rounded-lg">
              <strong>Settlement & Newcomers:</strong>{' '}
              <span className="font-semibold">FreshStart Integration Initiative.</span> Culturally specific navigation and referrals.
            </li>
            <li className="p-3 bg-peach/20 dark:bg-midnight/20 rounded-lg">
              <strong>Food Access:</strong>{' '}
              <span className="font-semibold">Mindful Nutrition Initiative.</span> Community pantry and mindful nutrition education.
            </li>
            <li className="p-3 bg-peach/20 dark:bg-midnight/20 rounded-lg">
              <strong>Mental Health Hotline:</strong> Text <strong>HOME</strong> to 686868 (National Crisis Line).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
