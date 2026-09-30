import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SDG5_STATISTICS } from '../data/exhibitionData';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SDG5Section: React.FC = () => {
  const [selectedStatId, setSelectedStatId] = useState<string>('sdg5-child-marriage');

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
    <section ref={containerRef} id="sdg5" className="relative py-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto z-10 text-white">
      
      {/* Category Tag */}
      <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-4 tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
        <span>SDG 05 // GENDER EQUALITY MADE SIMPLE</span>
      </div>

      {/* Main Header */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          SDG 5 — Gender Equality
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-normal">
          Fair treatment for everyone, regardless of gender. Men and women should have the same chance to learn, work, earn fair pay, and feel completely safe every day.
        </p>
      </div>

      {/* 1. SIMPLE PARAGRAPH EXPLANATION (GSAP SCROLLTRIGGER ANIMATION) */}
      <div
        ref={narrativeRef}
        data-type="narrative"
        className="mb-28 will-change-transform"
      >
        <div className="border-l-2 border-rose-500 pl-6 sm:pl-10 space-y-6 max-w-4xl">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
            01 // WHAT THIS MEANS IN SIMPLE WORDS
          </span>

          <p className="text-xl sm:text-2xl font-light text-neutral-200 leading-relaxed">
            SDG 5 says that women and girls must have the exact same rights as men. At work and in daily life, no one should be held back, paid less, or treated disrespectfully simply because of their gender.
          </p>

          <p className="text-base text-neutral-400 leading-relaxed">
            In everyday jobs, this means equal pay for the exact same work, fair promotions based on skill, safe offices free from harassment or bullying, and sharing family chores and care work so women have time to build their careers too. When women succeed, families and businesses do better.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-neutral-400 border-t border-neutral-900">
            <div>
              <span className="text-rose-400 block mb-1">EQUAL PAY</span>
              <span>Same pay for the same effort, no discounts for women</span>
            </div>
            <div>
              <span className="text-rose-400 block mb-1">SAFE WORKPLACES</span>
              <span>Zero bullying, zero bad jokes, zero harassment</span>
            </div>
            <div>
              <span className="text-rose-400 block mb-1">SHARED HOUSEWORK</span>
              <span>Men and women sharing cooking, cleaning, and child care</span>
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
            Pakistan Numbers: What Daily Life Shows
          </h2>
          <p className="mt-3 text-neutral-400 leading-relaxed text-sm sm:text-base">
            Scroll down to see the real numbers. Each fact smoothly animates into view via GSAP ScrollTrigger as you scroll down, and recedes when you scroll back up.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-neutral-900 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-20">
          {SDG5_STATISTICS.map((stat, idx) => {
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
                {/* Number circle node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-rose-500 border-white ring-4 ring-rose-500/20 scale-125'
                      : 'bg-black border-neutral-700 hover:border-rose-400'
                  }`}
                />

                {/* Card */}
                <div className="p-6 sm:p-8 bg-[#070707] border border-neutral-900 hover:border-neutral-700 transition-colors">
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
                      GOAL: 0% Barrier
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">{stat.description}</p>

                  <div className="p-4 bg-black border border-neutral-900 text-xs text-neutral-400 mb-4">
                    <span className="text-rose-400 font-mono block mb-1">Why this matters:</span>
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
            How Can We Help Stop Inequality in Everyday Life?
          </h2>
          <p className="mt-3 text-neutral-400 leading-relaxed text-sm sm:text-base">
            You do not need to be a lawyer or politician to make things better. Here are simple, real steps you can take at work and at home:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Learn Basic Workplace Rules',
              desc: 'Know your office handbook and basic labor laws so you know what is allowed and what is illegal.'
            },
            {
              title: 'Do Not Laugh at Mean Jokes',
              desc: 'Never support or laugh at jokes that put women down or treat them like they are less capable.'
            },
            {
              title: 'Support Fair Hiring & Promotions',
              desc: 'Judge people purely on the quality of their work and talent, never on whether they are a man or woman.'
            },
            {
              title: 'Speak Up Against Bad Behavior Early',
              desc: 'If someone makes an inappropriate comment or bullies a coworker, call it out calmly before it gets worse.'
            },
            {
              title: 'Share House Chores at Home',
              desc: 'Share the cooking, cleaning, and child care at home so women have the time and energy to pursue jobs.'
            },
            {
              title: 'Know Where to Ask for Help',
              desc: 'Find out who your HR manager or official safety officer is, or look up free legal helplines in Pakistan.'
            },
            {
              title: 'Save Notes and Proof',
              desc: 'If something unfair or abusive happens, write down the date, time, and keep copies of emails or messages.'
            },
            {
              title: 'Follow Official Reporting Steps',
              desc: 'Use official complaint forms and tell trusted leaders so things are handled properly and privately.'
            },
            {
              title: 'Talk to a Legal Expert',
              desc: 'If an issue is serious or dangerous, get advice from a real lawyer or legal aid clinic to protect your rights.'
            }
          ].map((act, i) => (
            <div
              key={i}
              ref={(el) => {
                solutionItemRefs.current[i] = el;
              }}
              data-type="solution"
              data-index={i}
              className="p-6 bg-[#070707] border border-neutral-900 hover:border-rose-500/40 transition-colors will-change-transform"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-3">
                <CheckCircle2 className="w-4 h-4 text-rose-400" />
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
