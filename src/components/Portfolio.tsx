import React, { useState } from 'react';
import { Sparkles, ExternalLink, Code2, Layers, Check, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/biznovaData';
import { PortfolioProject } from '../types';

interface PortfolioProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForQuote }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const handleOpenModal = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstrated Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              Work
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore some of the digital solutions and projects created by BizNova.
          </p>

          <p className="text-xs text-slate-400 font-mono">
            * Clearly marked as Demo / Project showcasing real-world technical architecture.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col overflow-hidden shadow-lg"
            >
              {/* Abstract Visual UI Header representing the project */}
              <div
                className={`h-48 p-5 bg-gradient-to-br ${project.imagePlaceholder.theme} border-b border-slate-800 relative flex flex-col justify-between overflow-hidden`}
              >
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Badges Top Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-700/80 text-sky-300">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                    {project.badge}
                  </span>
                </div>

                {/* Abstract UI Center Mockup */}
                <div className="relative z-10 bg-slate-950/80 border border-slate-800/80 rounded-xl p-3.5 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-200">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] font-mono text-slate-400 ml-1.5 truncate">
                      {project.id}.biznova.preview
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white truncate">
                    {project.imagePlaceholder.headline}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {project.imagePlaceholder.sub}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-800/70 border border-slate-700/50 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    id={`view-project-btn-${project.id}`}
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>View Project Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  </button>

                  <button
                    onClick={() => onSelectProjectForQuote(project.title)}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    Similar Project?
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400">
                {selectedProject.category}
              </span>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                {selectedProject.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {selectedProject.extendedDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Architectural Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Technologies Utilized:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-800">
              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Close Window
              </button>

              <button
                onClick={() => {
                  handleCloseModal();
                  onSelectProjectForQuote(selectedProject.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20"
              >
                <span>Request a Similar Solution</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
