import React, { useState } from 'react';
import {
  Globe,
  ShoppingBag,
  Cpu,
  TrendingUp,
  Search,
  Wrench,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/biznovaData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-sky-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-teal-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-400" />;
      default:
        return <Globe className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Spectrum Digital Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything Your Business Needs to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-400">
              Grow Online
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From your first website to advanced digital systems, BizNova provides practical technology solutions for modern businesses.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 p-7 hover:border-sky-500/50 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-sky-500/5"
            >
              <div>
                {/* Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 group-hover:border-sky-500/40 transition-all duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-full border border-slate-800">
                    BizNova Core
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-sky-400/90 font-medium mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope Feature List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables:
                  </div>
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-sky-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium truncate max-w-[170px]">
                  {service.recommendedFor}
                </span>
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA within Services */}
        <div className="mt-14 text-center">
          <button
            id="services-view-all-cta"
            onClick={() => onSelectServiceForQuote('Custom Digital Solutions')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-800 hover:border-slate-600 transition-all shadow-md"
          >
            <span>Have a Custom or Multi-Service Project? Inquire With Us</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
