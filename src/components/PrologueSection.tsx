import React, { useState } from 'react';
import { ArrowDown, Eye, BookOpen, Compass, Sparkles } from 'lucide-react';

interface PrologueSectionProps {
  onStartJourney: () => void;
}

export const PrologueSection: React.FC<PrologueSectionProps> = ({ onStartJourney }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const journeyPhases = [
    {
      stage: '01',
      title: 'Unawareness',
      subtitle: 'The Invisible Status Quo',
      desc: 'In many workplace environments, systemic disparities in wages, task delegation, and authority are accepted as default cultural norms rather than recognized as solvable inequality.',
      quote: 'Inequality is most persistent when it remains unnamed.'
    },
    {
      stage: '02',
      title: 'Recognition',
      subtitle: 'Seeing the Structural Faults',
      desc: 'The moment an individual notices who speaks, who is interrupted, who carries the uncompensated care load, and whose advancement is blocked by unseen institutional barriers.',
      quote: 'Recognition turns uncomfortable intuition into actionable insight.'
    },
    {
      stage: '03',
      title: 'Understanding',
      subtitle: 'Grounded in Objective Law & Data',
      desc: 'Moving beyond anecdotes into statistical frameworks, statutory protections, and fundamental human rights codified under SDG 5 and SDG 10.',
      quote: 'Rights are not theoretical privileges; they are legally enforceable standards.'
    },
    {
      stage: '04',
      title: 'Confidence',
      subtitle: 'Overcoming Intimidation & Silence',
      desc: 'Developing clarity on workplace grievance structures, contemporaneous documentation methods, and independent ombudsperson channels.',
      quote: 'Knowledge replaces apprehension with deliberate, measured action.'
    },
    {
      stage: '05',
      title: 'Action',
      subtitle: 'Engaging Safe Institutional Channels',
      desc: 'Submitting formal documentation, building collective allyship, utilizing organizational whistleblower policies, and seeking qualified counsel when required.',
      quote: 'Action begins with the courage to document and the wisdom to seek support.'
    },
    {
      stage: '06',
      title: 'Equality & Inclusion',
      subtitle: 'Transforming the Workplace Architecture',
      desc: 'Removing systemic hurdles so that talent, merit, and dignity thrive regardless of gender, disability, socioeconomic origin, or regional identity.',
      quote: 'An equitable environment empowers every participant to contribute fully.'
    }
  ];

  return (
    <section id="prologue" className="relative min-h-screen flex flex-col justify-between pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Hero Exhibition Header */}
      <div className="pt-8 sm:pt-16 max-w-4xl">
        <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mb-4 tracking-wider uppercase">
          <span>Digital Exhibition</span>
          <span aria-hidden="true">·</span>
          <span>Social Impact Architecture</span>
          <span aria-hidden="true">·</span>
          <span>United Nations SDGs</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
          KNOW YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-sky-300">RIGHTS</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl text-balance">
          Understand your rights. Recognize inequality. Know where to seek support. A scroll-driven cinematic journey exploring workplace dignity through SDG 5 and SDG 10.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onStartJourney}
            className="flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
          >
            <span>Begin the Exhibition Journey</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            href="#sdg5"
            className="px-5 py-3 rounded-lg text-sm font-medium text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            Jump to SDG 5 (Gender Equality)
          </a>
          <a
            href="#sdg10"
            className="px-5 py-3 rounded-lg text-sm font-medium text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            Jump to SDG 10 (Reduced Inequalities)
          </a>
        </div>
      </div>

      {/* The 6-Stage Narrative Transformation Progression */}
      <div className="mt-20 pt-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>Interactive Progression Framework</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Journey from Unawareness to Equality
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Click through the six developmental stages below to examine how conscious awareness dismantles workplace inequality.
          </p>
        </div>

        {/* Phase Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6" role="tablist">
          {journeyPhases.map((phase, idx) => {
            const isSelected = selectedPhase === idx;
            return (
              <button
                key={phase.stage}
                onClick={() => setSelectedPhase(idx)}
                role="tab"
                aria-selected={isSelected}
                className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-rose-500/60 shadow-md shadow-rose-950/20 text-white'
                    : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                }`}
              >
                <span className="block font-mono text-xs opacity-60 mb-1">{phase.stage}</span>
                <span className="block text-sm font-medium leading-tight">{phase.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase */}
        <div className="bg-neutral-900/70 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-2">
                <span>STAGE {journeyPhases[selectedPhase].stage}</span>
                <span>/</span>
                <span>06</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {journeyPhases[selectedPhase].title} — <span className="text-neutral-400 font-normal text-xl">{journeyPhases[selectedPhase].subtitle}</span>
              </h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base mt-3">
                {journeyPhases[selectedPhase].desc}
              </p>
            </div>
            <div className="lg:col-span-4 bg-neutral-950/80 border border-neutral-800 rounded-lg p-5">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Guiding Axiom</div>
              <blockquote className="text-sm italic text-neutral-200 leading-relaxed">
                "{journeyPhases[selectedPhase].quote}"
              </blockquote>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Cue */}
      <div className="mt-12 flex items-center justify-between text-xs text-neutral-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span>Real-time 3D Exhibition Active</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Scroll down to enter SDG 5</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>

    </section>
  );
};
