import React from 'react';
import { Sparkles, Smartphone, Target, ShieldCheck } from 'lucide-react';
import { TRUST_STATS } from '../data/biznovaData';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="trust-bar" className="relative z-20 py-8 bg-slate-900/90 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              id={`trust-stat-${idx}`}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0">
                {getIcon(stat.icon)}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white tracking-tight">{stat.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
