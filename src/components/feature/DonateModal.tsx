import { useState } from 'react';

interface DonateModalProps {
  onClose: () => void;
}

export default function DonateModal({ onClose }: DonateModalProps) {
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [showSuccess, setShowSuccess] = useState(false);

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  const selectedAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-darkmode-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-darkmode-card border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <h2 className="text-3xl font-display font-bold text-midnight dark:text-peach">Make a Donation</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition cursor-pointer"
            aria-label="Close modal"
          >
            <i className="ri-close-line text-2xl text-midnight dark:text-cream"></i>
          </button>
        </div>

        {showSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-4xl text-green-600 dark:text-green-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-2">Thank You!</h3>
            <p className="text-gray-700 dark:text-cream/90">Your donation has been processed successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            {/* Frequency Selection */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-midnight dark:text-peach mb-3">Donation Frequency</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition cursor-pointer whitespace-nowrap ${
                    frequency === 'one-time'
                      ? 'bg-peach text-midnight'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-cream/70 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition cursor-pointer whitespace-nowrap ${
                    frequency === 'monthly'
                      ? 'bg-peach text-midnight'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-cream/70 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-midnight dark:text-peach mb-3">Select Amount</label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setAmount(preset);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-xl font-bold transition cursor-pointer whitespace-nowrap ${
                      amount === preset
                        ? 'bg-peach text-midnight'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-cream/70 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setAmount('custom')}
                  className={`py-3 px-4 rounded-xl font-bold transition cursor-pointer whitespace-nowrap ${
                    amount === 'custom'
                      ? 'bg-peach text-midnight'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-cream/70 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Custom
                </button>
              </div>

              {amount === 'custom' && (
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-cream/50 font-bold">$</span>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                    required
                  />
                </div>
              )}
            </div>

            {/* Impact Message */}
            <div className="mb-6 p-4 bg-peach/10 dark:bg-peach/5 rounded-xl">
              <p className="text-sm text-gray-700 dark:text-cream/90">
                <strong className="text-midnight dark:text-peach">Your ${selectedAmount} {frequency === 'monthly' ? 'monthly ' : ''}donation will:</strong>
                <br />
                {parseInt(selectedAmount || '0') >= 500 && '• Provide mental health counseling for 10 youth'}
                {parseInt(selectedAmount || '0') >= 250 && parseInt(selectedAmount || '0') < 500 && '• Support a family through our newcomer services'}
                {parseInt(selectedAmount || '0') >= 100 && parseInt(selectedAmount || '0') < 250 && '• Fund a week of summer camp for one youth'}
                {parseInt(selectedAmount || '0') >= 50 && parseInt(selectedAmount || '0') < 100 && '• Provide school supplies for 5 students'}
                {parseInt(selectedAmount || '0') < 50 && '• Help support our community programs'}
              </p>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-peach text-midnight rounded-xl font-bold hover:bg-gold transition cursor-pointer whitespace-nowrap text-lg"
            >
              Complete Donation - ${selectedAmount}
            </button>

            <p className="text-xs text-gray-500 dark:text-cream/50 text-center mt-4">
              Your donation is secure and tax-deductible. You will receive a receipt via email.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
