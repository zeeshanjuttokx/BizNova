import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, Shield, Layers, Workflow, Server } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Mission & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About {COMPANY_CONFIG.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We Turn Business Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-400">
                Digital Solutions
              </span>
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                {COMPANY_CONFIG.name} is a digital solutions company focused on helping businesses establish, manage, and grow their online presence.
              </p>
              <p>
                We combine modern technology, creative design, and practical business thinking to build digital experiences that are useful, professional, and built for growth.
              </p>
            </div>

            {/* Mission and Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  To make professional digital solutions accessible to businesses of all sizes.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  To become a trusted digital partner for businesses looking to build and grow in the digital world.
                </p>
              </div>
            </div>

            {/* Target Audience Tags */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Serving Diverse Business Needs:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Small Businesses',
                  'Startups',
                  'Restaurants',
                  'Shops & Retail',
                  'Local Businesses',
                  'Online Businesses',
                  'Entrepreneurs',
                  'Professional Services',
                  'International Clients',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Technology Architecture Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200">
                    BizNova Solution Stack
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-800/60">
                  PRODUCTION READY
                </span>
              </div>

              {/* Stack visual blocks */}
              <div className="pt-5 space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Client Interface Tier</div>
                      <div className="text-[11px] text-slate-400">Mobile-First, SEO-Ready & Ultra Fast</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">100% Responsive</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Business Logic & Flow</div>
                      <div className="text-[11px] text-slate-400">Automation, Lead Funnels & Management</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-sky-400 font-mono">Streamlined</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Infrastructure & Security</div>
                      <div className="text-[11px] text-slate-400">Cloud Hosting, SSL, Backups & Monitoring</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-indigo-300 font-mono">Secure SLA</span>
                </div>
              </div>

              {/* Company Credo Banner */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-sky-950/60 to-indigo-950/60 border border-sky-800/40 flex items-start gap-3">
                <Shield className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Built for longevity:</strong> Every platform is structured for easy updates, client ownership, and effortless future scaling.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
