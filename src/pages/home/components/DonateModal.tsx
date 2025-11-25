import { useState } from 'react';

export default function DonateModal() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');

  const closeModal = () => {
    const modal = document.getElementById('donate-modal');
    if (modal) modal.classList.remove('active');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${amount}! This is a demo. In production, this would integrate with Stripe/PayPal/CanadaHelps.`);
    closeModal();
    setAmount('');
    setEmail('');
  };

  return (
    <div id="donate-modal" className="modal">
      <div className="modal-card p-6 w-11/12 max-w-lg">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-2xl text-midnight dark:text-peach">Secure Donation (Demo)</h3>
          <button
            onClick={closeModal}
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-midnight/20 dark:border-white/20 hover:bg-peach/50 transition cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="mt-3">
          <p className="text-gray-700 dark:text-cream/90 mb-4">
            This is a demo. In a real application, this modal would securely integrate with Stripe/PayPal/CanadaHelps.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              id="donation-amount"
              type="number"
              placeholder="Enter Amount (CAD)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-3 rounded-lg border border-peach/50 w-full bg-cream/70 dark:bg-darkmode-bg/50"
              min="5"
              required
            />
            <input
              type="email"
              placeholder="Email for receipt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg border border-peach/50 w-full bg-cream/70 dark:bg-darkmode-bg/50"
              required
            />
            <button className="px-6 py-3 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition w-full whitespace-nowrap cursor-pointer">
              Complete Donation (Demo)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
