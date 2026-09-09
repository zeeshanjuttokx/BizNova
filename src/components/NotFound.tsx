import React from 'react';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/biznovaData';

interface NotFoundProps {
  onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mx-auto text-sky-400">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400">
            ERROR 404
          </span>
          <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-400">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </div>

        <p className="text-xs text-slate-500 font-mono">
          {COMPANY_CONFIG.name} Digital Solutions
        </p>
      </div>
    </div>
  );
};
