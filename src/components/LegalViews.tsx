import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, CheckCircle2, Lock } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

interface LegalViewProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<LegalViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 mb-8 p-2 rounded-lg bg-slate-900 border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 space-y-8">
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparent Privacy Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Last Updated: 2026 • {COMPANY_CONFIG.name}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Overview</h2>
              <p>
                At {COMPANY_CONFIG.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we respect your privacy and are committed to protecting any personal or business information you provide while browsing our website or requesting project quotes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
              <p>
                We only collect information directly submitted by you through our contact and quote inquiry forms, which may include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Your full name</li>
                <li>Your business or company name</li>
                <li>Email address</li>
                <li>WhatsApp / telephone contact number</li>
                <li>Service requirements, estimated budget, and project details</li>
              </ul>
              <p className="text-xs text-slate-400 pt-1">
                We do not collect unnecessary personal data or track sensitive individual profiles.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. How Submitted Information Is Used</h2>
              <p>
                Information provided through our website is exclusively used to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Respond to your technical inquiries and project consultation requests</li>
                <li>Prepare customized scopes of work, estimates, and technical proposals</li>
                <li>Communicate milestone updates regarding ongoing active contracts</li>
              </ul>
              <p>
                We will never sell, rent, trade, or publicly share your contact information with third-party marketers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Data Protection & Security</h2>
              <p>
                We implement reasonable administrative and technical security measures to protect submitted inquiries against unauthorized access, loss, or misuse. Transmission occurs over encrypted HTTPS communication channels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Direct Contact</h2>
              <p>
                For questions regarding this policy or to request the update or removal of any submitted inquiry details, please contact us at:
              </p>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
                <div>Email: {COMPANY_CONFIG.email}</div>
                <div>WhatsApp: {COMPANY_CONFIG.whatsappDisplay}</div>
              </div>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button
              onClick={onBack}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700"
            >
              Return to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TermsConditions: React.FC<LegalViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 mb-8 p-2 rounded-lg bg-slate-900 border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 space-y-8">
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Standard Terms of Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Last Updated: 2026 • {COMPANY_CONFIG.name}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Website Usage</h2>
              <p>
                By accessing and using this website, you agree to comply with these terms. Content published on this website is for informational and business inquiry purposes only.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Services & Project Agreements</h2>
              <p>
                BizNova provides digital design, web development, web application engineering, automation, and ongoing maintenance. All custom client engagements are governed by formal individual milestone statements, scopes of work, and project schedules agreed upon prior to project commencement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Payments & Milestones</h2>
              <p>
                Project fees, deposit requirements, and milestone payments are specified in each customized quotation. Work commences following receipt of agreed initial milestone deposits.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Intellectual Property & Code Ownership</h2>
              <p>
                Upon complete receipt of all agreed project payments, the client retains full ownership of the custom code, designs, and content developed for their production deployment, excluding open-source libraries or underlying third-party frameworks.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Client Responsibilities</h2>
              <p>
                Clients are responsible for providing necessary brand assets, text copy, credentials, and timely feedback required to ensure project milestones remain on schedule.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Website Maintenance & SLA</h2>
              <p>
                Ongoing support, security updates, and performance monitoring are available under separate or scheduled maintenance arrangements as selected by the client.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">7. Limitation of Liability</h2>
              <p>
                BizNova strives for exceptional quality and reliability. However, we are not liable for indirect or consequential damages, downtime caused by third-party hosting or external APIs, or client-managed credential compromises.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button
              onClick={onBack}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700"
            >
              Return to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
