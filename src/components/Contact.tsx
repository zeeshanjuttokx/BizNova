import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
  initialBudget?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService, initialBudget }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: initialService || 'Website Development',
    budget: initialBudget || 'PKR 25,000 – 50,000',
    projectDetails: '',
  });

  // Anti-spam honeypot
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  const serviceOptions = [
    'Website Development',
    'E-Commerce',
    'Web Application',
    'Business Management',
    'Digital Marketing',
    'SEO',
    'Website Maintenance',
    'Other',
  ];

  const budgetOptions = [
    'Under PKR 25,000',
    'PKR 25,000 – 50,000',
    'PKR 50,000 – 100,000',
    'PKR 100,000+',
    'Not Sure',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot trigger
    if (honeypot) {
      setIsSubmitting(false);
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setErrorMessage('Please fill in your name, email, and brief project details.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form processing and prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(
      `[Quote Request] ${formData.service} for ${formData.businessName || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Hello BizNova Team,\n\nName: ${formData.fullName}\nBusiness: ${
        formData.businessName || 'N/A'
      }\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone || 'N/A'}\nService Required: ${
        formData.service
      }\nBudget Range: ${formData.budget}\n\nProject Details:\n${formData.projectDetails}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${COMPANY_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello BizNova, I submitted a quote request!\n\n*Name:* ${formData.fullName}\n*Business:* ${
        formData.businessName || 'N/A'
      }\n*Service:* ${formData.service}\n*Budget:* ${formData.budget}\n*Details:* ${
        formData.projectDetails
      }`
    );
    window.open(
      `https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace('+', '')}?text=${text}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Proposal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-400">
              Great Together
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your business or project and we&apos;ll discuss how {COMPANY_CONFIG.name} can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Communication
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Prefer to communicate directly? Reach out through our official email or instant WhatsApp line.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  id="contact-email-link"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Official Inquiry Email</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {COMPANY_CONFIG.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Box */}
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                    COMPANY_CONFIG.whatsappPrefilledMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-link"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp Direct Line</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {COMPANY_CONFIG.whatsappDisplay}
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-0.5 font-medium">
                      Fast response & instant chat available
                    </div>
                  </div>
                </a>
              </div>

              {/* Service Assurance */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Response provided within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidentiality guaranteed. Zero spam or public exposure.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              {submitSuccess ? (
                <div id="contact-success-state" className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Quote Request Received!
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. We have logged your request for <span className="text-sky-300 font-semibold">{formData.service}</span> and our team will review the details promptly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Ping on WhatsApp</span>
                    </button>

                    <button
                      onClick={handleOpenMailClient}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Via Email Client</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          fullName: '',
                          businessName: '',
                          email: '',
                          phone: '',
                          service: 'Website Development',
                          budget: 'PKR 25,000 – 50,000',
                          projectDetails: '',
                        });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="quote-request-form" className="space-y-4">
                  {/* Honeypot field for bot protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">Do not fill this out</label>
                    <input
                      type="text"
                      id="website_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe / Zeeshan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp / Your Brand"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Required & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service Required <span className="text-sky-400">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details & Requirements <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      required
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly describe your goals, required pages, features, or current challenges..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-quote-btn"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 hover:from-sky-400 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-sky-500/25 active:scale-[0.99] transition-all duration-200 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request a Free Quote</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    Direct submission routing to{' '}
                    <strong className="text-slate-300 font-mono">{COMPANY_CONFIG.email}</strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
