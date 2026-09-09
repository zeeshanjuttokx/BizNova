import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappPrefilledMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5">
      {/* Optional helper hint / tooltip on first load */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-2 rounded-xl shadow-xl animate-fade-in">
          <span>Need quick project answers? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BizNova on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full p-3.5 sm:px-5 sm:py-3 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400/40 animate-ping pointer-events-none opacity-40 group-hover:opacity-0" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 shrink-0 fill-white/20 stroke-[2.2]" />

        {/* Text for desktop, hidden on mobile */}
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          Chat with us
        </span>
      </a>
    </div>
  );
};
