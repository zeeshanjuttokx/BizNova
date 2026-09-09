import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/biznovaData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple Process.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              Powerful Results.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our end-to-end workflow keeps your project structured, on-schedule, and transparent at every milestone.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Desktop Connecting Line behind steps */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/40 to-sky-500/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                className="group relative rounded-2xl bg-slate-950/80 border border-slate-800/90 p-7 hover:border-sky-500/40 hover:bg-slate-950 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center text-sky-400 font-mono font-black text-base shadow-sm group-hover:border-sky-400/50 group-hover:scale-105 transition-all">
                      {step.step}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                      Phase {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-slate-800/70 space-y-1.5">
                  <div className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider mb-1">
                    Key Outcomes:
                  </div>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
