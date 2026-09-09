import React from 'react';
import {
  Mail,
  Phone,
  ArrowUp,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Globe,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-blue-700 flex items-center justify-center text-white font-mono font-black text-base shadow-sm">
                BN
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {COMPANY_CONFIG.name}
                </span>
                <span className="block text-[10px] uppercase font-mono text-sky-400 tracking-wider">
                  {COMPANY_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Digital solutions for businesses ready to build, grow, and manage their online presence.
            </p>

            {/* Social Media Link Placeholders */}
            <div className="pt-2 flex items-center gap-2">
              {COMPANY_CONFIG.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  E-Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="block text-[11px] text-slate-400">Email:</span>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="text-white hover:text-sky-400 transition-colors font-mono"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="block text-[11px] text-slate-400">WhatsApp:</span>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                >
                  {COMPANY_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                  Remote & Global Services
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            &copy; {COMPANY_CONFIG.year} {COMPANY_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
