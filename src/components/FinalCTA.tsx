import React from 'react';
import { ArrowRight, MessageCircle, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

interface FinalCTAProps {
  onQuoteClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onQuoteClick }) => {
  return (
    <section id="final-cta" className="py-20 bg-slate-900/70 relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 border border-slate-800 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
          {/* Subtle background blur rings */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Let&apos;s Start Your Project</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Take Your Business Online?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us what you need. Let&apos;s build a digital solution that works for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                id="final-cta-quote-btn"
                onClick={onQuoteClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 hover:from-sky-400 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-sky-500/25 active:scale-95 transition-all"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="final-cta-whatsapp-btn"
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                  COMPANY_CONFIG.whatsappPrefilledMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick footer direct contact line */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">WhatsApp:</span>
                <span className="text-white font-mono font-medium">{COMPANY_CONFIG.whatsappDisplay}</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Email:</span>
                <span className="text-white font-mono font-medium">{COMPANY_CONFIG.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
