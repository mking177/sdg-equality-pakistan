import React from 'react';
import { ShieldAlert, ExternalLink, X, BookOpen, Scale } from 'lucide-react';

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sources = [
    {
      org: 'UN Women Global Data Hub',
      usage: 'SDG 5 child marriage rates, violence reporting, and unpaid care statistics (2026 Tracking).',
      url: 'https://data.unwomen.org'
    },
    {
      org: 'World Bank Poverty and Inequality Platform',
      usage: 'SDG 10 $3.00/day poverty headcount, multidimensional poverty, and Gini index (2026 Monitoring).',
      url: 'https://pip.worldbank.org'
    },
    {
      org: 'Pakistan Bureau of Statistics (PBS)',
      usage: 'Pakistan Labour Force Survey 2025–2026 female vs male workforce participation.',
      url: 'https://www.pbs.gov.pk'
    },
    {
      org: 'UNICEF Pakistan Demographic Survey',
      usage: 'Connected Target SDG 8.7 child labor prevalence and educational intersection (2026 Report).',
      url: 'https://www.unicef.org/pakistan'
    },
    {
      org: 'Inter-Parliamentary Union (IPU)',
      usage: 'Share of parliamentary seats held by women in Pakistan (2026 National Assembly Assessment).',
      url: 'https://www.ipu.org'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-notice-title"
    >
      <div className="bg-neutral-900 border border-neutral-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 id="legal-notice-title" className="font-display text-xl font-bold text-white">
                Legal & Educational Notice
              </h3>
              <span className="text-xs font-mono text-neutral-400">Institutional Notice & Data Attribution</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Statement */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
          <p className="font-semibold text-white mb-1.5 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            Non-Legal Advice Disclaimer:
          </p>
          "This website provides educational information, not legal advice. Laws, reporting procedures, and dispute resolution mechanisms may vary by jurisdiction and may change over time."
          <p className="mt-2 text-neutral-400 text-xs">
            The guidance presented across the 6-step protocol and workplace spectrum is designed solely to build conceptual awareness. If you are experiencing discrimination, retaliation, or harassment, please consult a certified legal practitioner or contact statutory labor ombudspersons.
          </p>
        </div>

        {/* Authoritative Sources */}
        <div>
          <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
            Authoritative Statistical Sources:
          </h4>

          <div className="space-y-2.5 mb-6">
            {sources.map((src, i) => (
              <div key={i} className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800/80 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-xs text-neutral-200">{src.org}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{src.usage}</div>
                </div>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-sky-400 shrink-0 p-1"
                  title="Open source website"
                  aria-label={`Visit ${src.org}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end pt-4 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            I Understand & Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
};
