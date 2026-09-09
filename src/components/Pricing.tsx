import React from 'react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { PRICING_PLANS } from '../data/biznovaData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900/50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Engagement Models</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Choose the Right Solution for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              Your Business
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored digital tiers crafted for every stage of your company’s growth.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 italic">
            Every business has different requirements. Contact BizNova for a customized quotation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                id={`pricing-plan-${plan.id}`}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-slate-900 border-2 border-sky-500/80 shadow-2xl shadow-sky-500/10 lg:-translate-y-2'
                    : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      BizNova Tier
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 min-h-[36px]">
                    {plan.target}
                  </p>

                  {/* Price Banner - Transparent, non-fake */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                    <span className="text-xs font-medium text-slate-400 block mb-1 uppercase tracking-wider">
                      Pricing Structure
                    </span>
                    <div className="text-lg font-bold text-sky-400">
                      {plan.priceNote}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-sky-500/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-sky-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <div className="pt-8 mt-6 border-t border-slate-800">
                  <button
                    id={`pricing-btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isPopular
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 active:scale-[0.98]'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-white active:scale-[0.98]'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory footnote */}
        <div className="mt-12 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center max-w-2xl mx-auto flex items-center justify-center gap-3">
          <Shield className="w-4 h-4 text-sky-400 shrink-0" />
          <p className="text-xs text-slate-400">
            All engagements include strict milestone tracking, clear scope agreements, and zero surprise invoices.
          </p>
        </div>
      </div>
    </section>
  );
};
