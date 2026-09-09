import React from 'react';
import {
  Code2,
  Briefcase,
  Layout,
  Layers,
  Eye,
  Headphones,
  CheckCircle,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/biznovaData';

export const WhyUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-300" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-teal-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="why-biznova" className="py-24 bg-slate-900/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <span>Built On Reliability & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              BizNova
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate as an extension of your business, delivering technical excellence with transparent collaboration from concept through deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="group p-7 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-950/90 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {getFeatureIcon(item.iconName)}
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
