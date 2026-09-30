import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onSelectTab: (tab: 'sdg5' | 'sdg10' | 'outcome') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTab }) => {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      
      {/* 1. HERO: STRICTLY HEADING ONLY (RAW, EDITORIAL, HUMAN) */}
      <section className="min-h-[92vh] flex flex-col justify-between px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto pt-16 pb-12 border-b border-neutral-900">
        
        {/* Top metadata ticker */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
          <span>ISSUE NO. 01 — WORKPLACE JUSTICE</span>
          <span className="hidden sm:inline">SDG 5 × SDG 10</span>
        </div>

        {/* Main Heading: Raw, crisp, human-set typography without generic rainbow gradient fills */}
        <div className="my-auto py-12">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-white">
            KNOW<br />
            YOUR<br />
            RIGHTS<span className="text-rose-500">.</span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-neutral-400 font-normal max-w-xl leading-relaxed">
            Understand your rights. Recognize inequality. Know where to seek support.
          </p>
        </div>

        {/* Bottom editorial index footer */}
        <div className="flex items-end justify-between text-xs text-neutral-500 font-mono pt-6 border-t border-neutral-900">
          <div>
            <span>[ SCROLL TO READ THE BRIEFING ]</span>
          </div>
          <div className="text-right">
            <span>01 / 03 SECTIONS</span>
          </div>
        </div>

      </section>

      {/* 2. WHILE SCROLLING: EDITORIAL BREAKDOWN OF SDG 5 & SDG 10 */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-neutral-900">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context note */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">
              01 // THE CORE ISSUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Why these two goals matter together.
            </h2>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Workplace discrimination doesn't happen in a vacuum. A person's safety and mobility are shaped by gender (SDG 5) and compounding social barriers like class, disability, and background (SDG 10).
            </p>
          </div>

          {/* Right Column: Grounded explanations */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* SDG 5 Breakdown */}
            <div className="p-8 sm:p-10 border border-neutral-800 bg-[#070707] rounded-none">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-neutral-900">
                <span className="text-rose-400 font-semibold uppercase">SDG 5 — GENDER EQUALITY</span>
                <span>TARGET FOCUS: WOMEN & GIRLS</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Gender disparity in the daily workplace.
              </h3>
              
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                SDG 5 is about ending discriminatory laws and practices that treat women as secondary participants. In Pakistan, the data is stark: women spend 19.9% of their daily hours on unpaid domestic care compared to just 1.8% for men, while formal female workforce participation stands at only 22.7% versus 68.7% for men.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-400 pt-4 border-t border-neutral-900">
                <div>
                  <span className="block text-white font-bold text-base">18.3%</span>
                  <span>Early marriage under 18</span>
                </div>
                <div>
                  <span className="block text-white font-bold text-base">20.5%</span>
                  <span>Parliamentary seats</span>
                </div>
              </div>
            </div>

            {/* SDG 10 Breakdown */}
            <div className="p-8 sm:p-10 border border-neutral-800 bg-[#070707] rounded-none">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-neutral-900">
                <span className="text-sky-400 font-semibold uppercase">SDG 10 — REDUCED INEQUALITIES</span>
                <span>TARGET FOCUS: BROADER SOCIETY</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                The wider barriers: class, disability, and access.
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                SDG 10 looks at systemic exclusion beyond gender. It addresses the 22.96% living beneath the lower-middle poverty line ($3.00/day), the 27.13% experiencing multidimensional poverty, and the widespread lack of wheelchair ramps and accessible infrastructure that locks qualified people out of opportunities.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-400 pt-4 border-t border-neutral-900">
                <div>
                  <span className="block text-white font-bold text-base">22.96%</span>
                  <span>Below $3.00/day line</span>
                </div>
                <div>
                  <span className="block text-white font-bold text-base">&gt;60%</span>
                  <span>Public accessibility gap</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 3. DIRECT ACTION BUTTONS: CLEAN, HUMAN, EDITORIAL DIRECTORY */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-neutral-900 gap-4">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
              02 // DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Open a section to begin.
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            Click any row to enter that tab
          </span>
        </div>

        {/* Human-designed editorial list layout */}
        <div className="divide-y divide-neutral-900 border-y border-neutral-900">
          
          {/* Row 1 -> Tab 1 */}
          <button
            onClick={() => onSelectTab('sdg5')}
            className="group w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#070707] px-4 transition-colors cursor-pointer"
          >
            <div className="flex items-start md:items-center gap-6">
              <span className="font-mono text-sm text-neutral-500 group-hover:text-rose-400 transition-colors">
                TAB / 01
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  SDG 5 — Gender Equality
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                  UN pillars, verified Pakistan demographic data timeline, care work disparities, and everyday citizen action.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-white shrink-0">
              <span>EXPLORE TAB 1</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          {/* Row 2 -> Tab 2 */}
          <button
            onClick={() => onSelectTab('sdg10')}
            className="group w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#070707] px-4 transition-colors cursor-pointer"
          >
            <div className="flex items-start md:items-center gap-6">
              <span className="font-mono text-sm text-neutral-500 group-hover:text-sky-400 transition-colors">
                TAB / 02
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  SDG 10 — Reduced Inequalities
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                  Multidimensional poverty data, Gini index, child labor context, and interactive barrier-removal pathways.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-white shrink-0">
              <span>EXPLORE TAB 2</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          {/* Row 3 -> Tab 3 */}
          <button
            onClick={() => onSelectTab('outcome')}
            className="group w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#070707] px-4 transition-colors cursor-pointer"
          >
            <div className="flex items-start md:items-center gap-6">
              <span className="font-mono text-sm text-neutral-500 group-hover:text-purple-400 transition-colors">
                TAB / 03
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Outcomes & Where to Report
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                  Connecting both goals, recognizing misconduct on scene, 6-step reporting guide, and official Pakistan emergency helplines.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-white shrink-0">
              <span>EXPLORE TAB 3</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>

      </section>

    </div>
  );
};
