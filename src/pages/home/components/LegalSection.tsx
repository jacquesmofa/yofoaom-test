export default function LegalSection() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Legal & Governance Policies
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Commitment to ethical governance, financial transparency, and client privacy.
      </p>

      <div className="space-y-8">
        <details className="glass-card p-6 fade-in-up cursor-pointer">
          <summary className="font-bold text-2xl text-midnight dark:text-peach cursor-pointer">
            Privacy Policy
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p className="font-semibold mb-2">Effective Date: October 1, 2024</p>
            <p>
              YAFOAM is committed to protecting your privacy. This policy outlines how we collect, use, disclose, and protect the personal information you provide. We only collect information necessary for program enrollment, service delivery, and legal reporting requirements. All client data is kept strictly confidential and is secured using industry-standard encryption protocols. We do not share personal client data with third parties without explicit written consent, except where required by law.
            </p>
          </div>
        </details>

        <details className="glass-card p-6 fade-in-up cursor-pointer">
          <summary className="font-bold text-2xl text-midnight dark:text-peach cursor-pointer">
            Terms & Conditions of Use
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p className="font-semibold mb-2">Last Updated: September 15, 2024</p>
            <p>
              By using this website and engaging with YAFOAM's online resources, you agree to these terms. All content is for informational purposes only. The YAFOAM logo and all digital assets are the intellectual property of Youth & Families on a Mission. Unauthorized use is prohibited. Service terms for programs are provided separately upon intake.
            </p>
          </div>
        </details>

        <details className="glass-card p-6 fade-in-up cursor-pointer">
          <summary className="font-bold text-2xl text-midnight dark:text-peach cursor-pointer">
            Board Governance & Bylaws
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p className="font-semibold mb-2">Governance Framework</p>
            <p>
              YAFOAM operates under a Policy Governance model. Our Board of Directors is responsible for setting the organization's mission and monitoring performance against Executive Limitations. Board meeting minutes and financial statements are available upon formal request, in compliance with our commitment to public accountability.
            </p>
          </div>
        </details>

        <details className="glass-card p-6 fade-in-up cursor-pointer">
          <summary className="font-bold text-2xl text-midnight dark:text-peach cursor-pointer">
            Financial Transparency
          </summary>
          <div className="mt-3 opacity-80 border-t pt-3">
            <p className="font-semibold mb-2">Annual Reports & Audits</p>
            <p>
              As a registered Canadian charity (Registration #123456789RR0001), YAFOAM is committed to full financial transparency. Our annual reports, audited financial statements, and impact evaluations are available for public review. We maintain a diversified funding model: 50% government grants, 30% corporate partnerships, and 20% individual donors.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
