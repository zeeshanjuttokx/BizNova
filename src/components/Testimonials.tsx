import React from 'react';
import { Sparkles, MessageSquare, Handshake, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

interface TestimonialsProps {
  onPartnerClick: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onPartnerClick }) => {
  return (
    <section id="testimonials" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Feedback & Relations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-sm text-slate-400">
            Honest partnerships built on transparent communication, verified milestones, and technical integrity.
          </p>
        </div>

        {/* Tasteful message strictly respecting requirement: No fake reviews */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl mx-auto space-y-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mx-auto text-sky-400">
              <Handshake className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              We&apos;re building our client success stories.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At {COMPANY_CONFIG.name}, we believe in authentic relationships. Rather than displaying fabricated testimonials or unverified claims, we let our engineering, structured process, and dedicated execution speak for itself.
            </p>

            {/* Quality Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-left">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Time Delivery</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Full Code Ownership</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="testimonial-partner-cta"
                onClick={onPartnerClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-sky-500/20 active:scale-95 transition-all"
              >
                <span>Partner With BizNova Today</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
