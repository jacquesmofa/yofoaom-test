import { useState } from 'react';

// 🛑 IMPORTANT: REPLACE 'YOUR_FORMSPREE_ID' with the unique ID you get from Formspree.
// The data will be emailed to youthandfamilyonamission@gmail.com
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; 

interface DonateModalProps {
  onClose: () => void;
}

export default function DonateModal({ onClose }: DonateModalProps) {
  // Donation details state
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  
  // Donor information state (Required for Formspree submission)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [donorEmail, setDonorEmail] = useState(''); // Donor's email
  const [phone, setPhone] = useState(''); // Optional phone

  // UI/Status state
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const presetAmounts = ['25', '50', '100', '250', '500'];

  // Determine the final amount selected
  const selectedAmount = amount === 'custom' ? customAmount : amount;

  const resetForm = () => {
    setAmount('50');
    setCustomAmount('');
    setFrequency('one-time');
    setFirstName('');
    setLastName('');
    setDonorEmail('');
    setPhone('');
    setSubmissionStatus('idle');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    const finalAmount = amount === 'custom' ? customAmount : amount;

    // Collect all data to send to Formspree
    const donationData = {
      'Frequency': frequency,
      'Amount (CAD)': finalAmount,
      'First Name': firstName,
      'Last Name': lastName,
      'Donor Email': donorEmail,
      'Phone': phone || 'N/A',
      'Message': `Donor made an inquiry for a ${frequency} donation of $${finalAmount}. Please reach out to ${donorEmail} to finalize payment.`,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        
        // Close modal and reset form after a short delay so the user sees the success message
        setTimeout(() => {
            onClose();
            resetForm();
        }, 3000); 
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={submissionStatus !== 'loading' ? onClose : undefined} // Don't allow closing while loading
    >
      <div 
        className="bg-white dark:bg-darkmode-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-darkmode-card border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <h2 className="text-3xl font-display font-bold text-midnight dark:text-peach">Donation Inquiry</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition cursor-pointer"
            aria-label="Close modal"
            disabled={submissionStatus === 'loading'}
          >
            <i className="ri-close-line text-2xl text-midnight dark:text-cream"></i>
          </button>
        </div>

        {/* 1. SUCCESS STATE */}
        {submissionStatus === 'success' ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-4xl text-green-600 dark:text-green-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-midnight dark:text-peach mb-2">Thank You!</h3>
            <p className="text-gray-700 dark:text-cream/90">
                We have received your donation inquiry for **${selectedAmount} {frequency}**. 
                We will contact you shortly at **{donorEmail}** to finalize the donation process.
            </p>
          </div>
        ) : (
          /* 2. FORM STATE */
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
                  disabled={submissionStatus === 'loading'}
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
                  disabled={submissionStatus === 'loading'}
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
                    disabled={submissionStatus === 'loading'}
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
                  disabled={submissionStatus === 'loading'}
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
                    disabled={submissionStatus === 'loading'}
                  />
                </div>
              )}
            </div>

            {/* Impact Message (Generic - as requested) */}
            <div className="mb-6 p-4 bg-peach/10 dark:bg-peach/5 rounded-xl text-center">
              <p className="text-sm text-gray-700 dark:text-cream/90">
                <strong className="text-midnight dark:text-peach">
                  Your donation will support youths and families in our community and beyound.
                </strong>
                <br />
                We will follow up via email to finalize the donation process.
              </p>
            </div>

            {/* Donor Information (Now Controlled and sending data) */}
            <div className="space-y-4 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                    disabled={submissionStatus === 'loading'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                    disabled={submissionStatus === 'loading'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                  disabled={submissionStatus === 'loading'}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-midnight dark:text-peach mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-darkmode-bg text-midnight dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-peach"
                  disabled={submissionStatus === 'loading'}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submissionStatus === 'loading'}
              className={`w-full py-4 rounded-xl font-bold transition cursor-pointer whitespace-nowrap text-lg 
                ${submissionStatus === 'loading' 
                    ? 'bg-gray-400 text-midnight cursor-not-allowed' 
                    : 'bg-peach text-midnight hover:bg-gold'}`}
            >
              {submissionStatus === 'loading'
                ? 'Sending Inquiry...'
                : `Send Inquiry for $${selectedAmount} ${frequency === 'monthly' ? '/ Month' : ''}`}
            </button>
            
            {/* Error Message */}
            {submissionStatus === 'error' && (
                <p className="text-sm text-red-500 text-center mt-4">
                    There was an issue sending your inquiry. Please ensure you've filled out all required fields and try again.
                </p>
            )}

            <p className="text-xs text-gray-500 dark:text-cream/50 text-center mt-4">
              Your information is secure. We will only use this information to follow up on your donation.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}