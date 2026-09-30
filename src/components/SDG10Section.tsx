import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SDG10_STATISTICS } from '../data/exhibitionData';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SDG10Section: React.FC = () => {
  const [selectedStatId, setSelectedStatId] = useState<string>('sdg10-extreme-poverty');

  const containerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const solutionItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP ScrollTrigger for Paragraph Explanation
      if (narrativeRef.current) {
        gsap.fromTo(
          narrativeRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: narrativeRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }

      // 2. GSAP ScrollTrigger for Timeline Statistics Cards
      timelineItemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 12%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });

      // 3. GSAP ScrollTrigger for Citizen Action Cards
      solutionItemRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (index % 3) * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'bottom 10%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="sdg10" className="relative py-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto z-10 text-white">
      
      {/* Category Tag */}
      <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-4 tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
        <span>SDG 10 // FAIR OPPORTUNITY FOR EVERYONE</span>
      </div>

      {/* Main Header */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          SDG 10 — Reduced Inequalities
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-normal">
          Making sure nobody is left behind because they are poor, live in a small village, or have a disability. Everyone deserves a fair chance to learn, work, and earn an honest living.
        </p>
      </div>

      {/* 1. SIMPLE PARAGRAPH EXPLANATION (GSAP SCROLLTRIGGER ANIMATION) */}
      <div
        ref={narrativeRef}
        data-type="narrative"
        className="mb-28 will-change-transform"
      >
        <div className="border-l-2 border-sky-500 pl-6 sm:pl-10 space-y-6 max-w-4xl">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
            01 // WHAT THIS MEANS IN SIMPLE WORDS
          </span>

          <p className="text-xl sm:text-2xl font-light text-neutral-200 leading-relaxed">
            SDG 10 is about removing unfair road blocks in life. No matter if someone is born rich or poor, what religion they follow, or what part of the country they come from, they should have the same rights and opportunities.
          </p>

          <p className="text-base text-neutral-400 leading-relaxed">
            In workplaces and cities, this means building wheelchair ramps so people with disabilities can enter offices and schools, paying fair wages so cleaners, drivers, and factory workers can feed their families, and stopping managers from hiring only their friends or family instead of the most skilled person.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-neutral-400 border-t border-neutral-900">
            <div>
              <span className="text-sky-400 block mb-1">RAMPS & LIFTS</span>
              <span>Offices and buses must be easy for wheelchair users to enter</span>
            </div>
            <div>
              <span className="text-sky-400 block mb-1">LIVING WAGES</span>
              <span>Fair pay for cleaners, guards, drivers, and daily workers</span>
            </div>
            <div>
              <span className="text-sky-400 block mb-1">NO FAVORITISM</span>
              <span>Hiring people based on real talent, not family connections</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PAKISTAN REALITY TIMELINE: SIMPLE 2026 FACTS (GSAP SCROLLTRIGGER ANIMATION) */}
      <div className="mb-28">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
            02 // REAL FACTS IN PAKISTAN (2026)
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Pakistan Numbers: Where the Gaps Are
          </h2>
          <p className="mt-3 text-neutral-400 leading-relaxed text-sm sm:text-base">
            Scroll down to see the real numbers in simple terms. Each card smoothly animates into view via GSAP ScrollTrigger as you scroll down, and recedes when you scroll back up.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l border-neutral-900 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-20">
          {SDG10_STATISTICS.map((stat, idx) => {
            const isSelected = stat.id === selectedStatId;

            return (
              <div
                key={stat.id}
                ref={(el) => {
                  timelineItemRefs.current[idx] = el;
                }}
                data-type="timeline"
                data-index={idx}
                onClick={() => setSelectedStatId(stat.id)}
                className="relative cursor-pointer will-change-transform"
              >
                {/* Number node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-sky-500 border-white ring-4 ring-sky-500/20 scale-125'
                      : 'bg-black border-neutral-700 hover:border-sky-400'
                  }`}
                />

                {/* Card */}
                <div className="p-6 sm:p-8 bg-[#070707] border border-neutral-900 hover:border-neutral-700 transition-colors">
                  
                  {stat.category === 'connected' && (
                    <div className="inline-block mb-3 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono text-[11px] font-medium">
                      RELATED ISSUE — CHILD LABOR
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {stat.metric}
                      </span>
                      {stat.unit && (
                        <span className="text-xs font-mono text-neutral-500 uppercase">
                          ({stat.unit})
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      GOAL: Equal Chance for All
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">{stat.description}</p>

                  <div className="p-4 bg-black border border-neutral-900 text-xs text-neutral-400 mb-4">
                    <span className="text-sky-400 font-mono block mb-1">Why this matters:</span>
                    <span>{stat.details}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-3 border-t border-neutral-900">
                    <span>Year: {stat.year}</span>
                    <span>Source: {stat.source}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. HOW WE CAN HELP AS REGULAR CITIZENS (GSAP SCROLLTRIGGER ANIMATED) */}
      <div className="mb-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
            03 // WHAT YOU AND I CAN DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How Can We Help Stop Inequality Around Us?
          </h2>
          <p className="mt-3 text-neutral-400 leading-relaxed text-sm sm:text-base">
            Simple, real steps you and your team can take to treat everyone fairly:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Ask for Wheelchair Ramps',
              desc: 'Check if your office, school, or shops have simple ramps so people in wheelchairs or with crutches can enter easily.'
            },
            {
              title: 'Make Documents Easy to Read',
              desc: 'Use clear, large fonts and make sure blind or visually impaired coworkers have screen-friendly files.'
            },
            {
              title: 'Pay Fair Living Wages',
              desc: 'Make sure office cleaners, tea helpers, drivers, and guards are paid enough on time to comfortably support their families.'
            },
            {
              title: 'Hire Based on Skills, Not Names',
              desc: 'Look at test scores and work experience instead of judging someone by their family name, religion, or background.'
            },
            {
              title: 'Help Young People from Small Towns',
              desc: 'Offer internships and remote work so students outside big cities have a fair shot at high-paying jobs.'
            },
            {
              title: 'Report Unfair Treatment',
              desc: 'If someone is mocked, denied a job, or mistreated because of where they are from or their background, report it to leadership.'
            }
          ].map((act, i) => (
            <div
              key={i}
              ref={(el) => {
                solutionItemRefs.current[i] = el;
              }}
              data-type="solution"
              data-index={i}
              className="p-6 bg-[#070707] border border-neutral-900 hover:border-sky-500/40 transition-colors will-change-transform"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>STEP {i + 1}</span>
              </div>
              <h3 className="font-bold text-white text-base mb-2">{act.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
