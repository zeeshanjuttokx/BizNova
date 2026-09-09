import React from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Zap,
  Activity,
  Layers,
  BarChart3,
  ShieldAlert,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onServicesClick }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-sky-500/10 via-indigo-600/15 to-purple-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Trust Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>DIGITAL SOLUTIONS FOR MODERN BUSINESSES</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Build. Grow. Manage.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-400">
                Your Business Digitally.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {COMPANY_CONFIG.subheadline}
            </p>

            {/* Trust Checkmarks */}
            <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Modern Web Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Responsive & Mobile-First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Client-Focused Partnership</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 hover:from-sky-400 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-all duration-200"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Quick Contact Line */}
            <p className="text-xs text-slate-400 pt-2">
              Have questions right away? Direct WhatsApp support available at{' '}
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappPrefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline font-medium"
              >
                {COMPANY_CONFIG.whatsappDisplay}
              </a>
            </p>
          </div>

          {/* Right Column: Abstract Modern Tech / Growth Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/30 to-indigo-600/30 rounded-2xl blur-xl opacity-70"></div>

              {/* Main Simulated SaaS Dashboard Window */}
              <div className="relative rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl p-5 backdrop-blur-sm text-slate-200">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400">biznova-core/platform.prod</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>SYSTEM HEALTH: 100%</span>
                  </div>
                </div>

                {/* Dashboard Inner Body */}
                <div className="pt-4 space-y-4">
                  {/* Top Stats Trio */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Performance</span>
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="mt-1 font-bold text-lg text-white font-mono">99.8%</div>
                      <div className="text-[10px] text-emerald-400">Optimized</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Online Reach</span>
                        <Globe2 className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <div className="mt-1 font-bold text-lg text-white font-mono">Multi-device</div>
                      <div className="text-[10px] text-sky-400">Responsive</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Digital ROI</span>
                        <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <div className="mt-1 font-bold text-lg text-white font-mono">Growth</div>
                      <div className="text-[10px] text-indigo-300">Conversion</div>
                    </div>
                  </div>

                  {/* Growth / Analytics Vector Graph */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-semibold text-white">Business Visibility & Traffic Index</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        Realtime Metric
                      </span>
                    </div>

                    {/* Vector Curve */}
                    <div className="h-28 w-full relative flex items-end">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="growthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M 0 75 Q 40 70, 80 55 T 160 40 T 220 25 T 300 8 L 300 90 L 0 90 Z"
                          fill="url(#growthGrad)"
                        />
                        {/* Line path */}
                        <path
                          d="M 0 75 Q 40 70, 80 55 T 160 40 T 220 25 T 300 8"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Node Dots */}
                        <circle cx="80" cy="55" r="3" fill="#38bdf8" />
                        <circle cx="160" cy="40" r="3" fill="#6366f1" />
                        <circle cx="220" cy="25" r="3" fill="#818cf8" />
                        <circle cx="300" cy="8" r="4" fill="#38bdf8" className="animate-ping" />
                      </svg>
                    </div>

                    <div className="mt-2 flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>DISCOVER</span>
                      <span>DESIGN</span>
                      <span>DEVELOP</span>
                      <span className="text-sky-400 font-semibold">LAUNCH & SCALE</span>
                    </div>
                  </div>

                  {/* Architecture & Digital Tools Stack bar */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200 text-[11px]">Modern Frontend</div>
                        <div className="text-[10px] text-slate-400 font-mono">React / Tailwind / Responsive</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200 text-[11px]">Business Automation</div>
                        <div className="text-[10px] text-slate-400 font-mono">Workflows & Integrations</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-white">Conversion-Focused</div>
                    <div className="text-[10px] text-slate-400">Engineered for real business results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
