import React, { useEffect, useRef, useState } from 'react';
import { WORKPLACE_SPECTRUM } from '../data/exhibitionData';
import { 
  PhoneCall, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Eye, 
  Shield, 
  Users, 
  Send, 
  Scale,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface OutcomeSectionProps {
  solvedSectors?: string[];
  onSolveSector?: (id: string) => void;
  onResetGame?: () => void;
}

export const OutcomeSection: React.FC<OutcomeSectionProps> = () => {
  const [activeSpectrumLevel, setActiveSpectrumLevel] = useState<number>(1);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  // References for scroll-based animation
  const headerRef = useRef<HTMLDivElement>(null);
  const connectionRef = useRef<HTMLDivElement>(null);
  const witnessingRef = useRef<HTMLDivElement>(null);
  const reportingGuideRef = useRef<HTMLDivElement>(null);
  const helplinesRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  const [visibleSections, setVisibleSections] = useState({
    header: false,
    connection: false,
    witnessing: false,
    reportingGuide: false,
    helplines: false,
    final: false,
  });

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = (entry.target as HTMLElement).dataset.sectionId as keyof typeof visibleSections;
        if (id) {
          setVisibleSections((prev) => ({
            ...prev,
            [id]: entry.isIntersecting,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    const elements = [
      headerRef.current,
      connectionRef.current,
      witnessingRef.current,
      reportingGuideRef.current,
      helplinesRef.current,
      finalRef.current,
    ];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentSpectrum = WORKPLACE_SPECTRUM.find((s) => s.level === activeSpectrumLevel) || WORKPLACE_SPECTRUM[0];

  // Refined 6 steps with clean, clear human explanations
  const reportingSteps = [
    {
      step: '01',
      title: 'Recognize What Is Happening',
      subtitle: 'Identify subtle vs repeated misconduct early',
      icon: Eye,
      summary: 'Spot the difference between ordinary workplace stress and real discrimination, harassment, or bullying.',
      action: 'Check your company handbook or basic Pakistani labor laws. If someone is repeatedly singled out, mocked, or made uncomfortable, that is not normal banter—it is unlawful misconduct.',
      caution: 'Trust your gut. Never dismiss warning signs by saying "that is just how the manager is" when someone is being demeaned or intimidated.',
      checklist: [
        'Notice if the conduct happens repeatedly or in patterns',
        'Verify if coworkers express similar discomfort',
        'Check if it targets gender, social background, or disability'
      ]
    },
    {
      step: '02',
      title: 'Write Down Proof Privately',
      subtitle: 'Build a factual, confidential incident log',
      icon: FileText,
      summary: 'Keep a quiet, factual diary of what happened with exact dates, times, statements, and witnesses.',
      action: 'Right after an incident occurs, record: the exact date and time, who said or did what, where it took place, and the names of anyone who witnessed it.',
      caution: 'Store these notes on your personal phone or a private paper journal—never keep them on a company laptop or workspace account that can be revoked or erased.',
      checklist: [
        'Take screenshots of WhatsApp messages, emails, or call logs',
        'Log timestamps, meeting rooms, or specific desk areas',
        'List names and contact info of coworkers who were present'
      ]
    },
    {
      step: '03',
      title: 'Check Your Office Rules',
      subtitle: 'Verify internal complaint policies & committees',
      icon: Shield,
      summary: 'Find out who in your company is officially responsible for receiving and investigating complaints.',
      action: 'Under Pakistani law (Protection Against Harassment Act), every organization is legally required to establish a standing 3-member Inquiry Committee with at least one woman member.',
      caution: 'Confirm that your organization has clear anti-retaliation protections in place so you cannot be demoted, dismissed, or penalized for coming forward.',
      checklist: [
        'Identify the current members of the internal Inquiry Committee',
        'Confirm the committee includes designated female representation',
        'Review the formal deadlines for filing internal grievances'
      ]
    },
    {
      step: '04',
      title: 'Talk to Someone You Trust',
      subtitle: 'Seek safe guidance without spreading office rumors',
      icon: Users,
      summary: 'Confide in a trusted colleague, senior mentor, or family member to validate your situation.',
      action: 'Talking to a discreet, trusted mentor helps relieve emotional stress, provides an objective perspective on your notes, and helps you plan your next step calmly.',
      caution: 'Keep discussions strictly confidential and focused on facts. Avoid casual gossip that could prejudice a future formal investigation.',
      checklist: [
        'Select a dependable mentor who will maintain confidentiality',
        'Focus on verifiable facts rather than personal assumptions',
        'Check whether others have reported similar unfair patterns'
      ]
    },
    {
      step: '05',
      title: 'Submit Your Official Report',
      subtitle: 'File a formal, receipt-stamped complaint letter',
      icon: Send,
      summary: 'Hand in your clear written complaint through official corporate or institutional channels.',
      action: 'Submit a typed letter or official email including your chronology of events, copies of documentary evidence, and list of witnesses. Request a formal internal inquiry.',
      caution: 'Always insist on a written acknowledgment, diary reference number, or stamped copy confirming the exact date and time your complaint was received.',
      checklist: [
        'Attach all timestamped records, screenshots, and witness lists',
        'Retain an exact identical copy of the letter for your personal file',
        'Obtain a formal signed receipt or delivery confirmation from HR'
      ]
    },
    {
      step: '06',
      title: 'Reach Out to Official Ombudsmen',
      subtitle: 'Escalate to legally binding state authorities',
      icon: Scale,
      summary: 'If your organization fails to act, delays the process, or retaliates against you, escalate to statutory authorities.',
      action: 'In Pakistan, you have the right to appeal directly to FOSPAH (Federal Ombudsman for Workplace Harassment) or the National Commission for Human Rights. Their rulings carry the full force of law.',
      caution: 'Do not allow anyone to intimidate you into withdrawing your complaint. The law explicitly penalizes employers who retaliate against complainants.',
      checklist: [
        'Contact FOSPAH via helpline 0800-00300 or submit online',
        'Access free legal counsel through the Ministry of Human Rights (1099)',
        'Consult a certified labor advocate if threats or coercion occur'
      ]
    }
  ];

  const emergencyHelplines = [
    {
      title: 'Federal Ombudsman for Workplace Harassment (FOSPAH)',
      desc: 'Official government ombudsman body in Pakistan handling private and public workplace sexual harassment and discrimination complaints.',
      number: '051-9262942 / 051-9262943',
      tollFree: 'Toll-free helpline: 0800-00300',
      badge: 'Official Statutory Body',
      contactType: 'phone'
    },
    {
      title: 'National Police Emergency Helpline',
      desc: 'Immediate emergency rescue, physical protection, and local station dispatch across Pakistan.',
      number: '15',
      tollFree: 'Dial 15 from any mobile or landline',
      badge: 'Immediate Danger',
      contactType: 'emergency'
    },
    {
      title: 'National Commission for Human Rights (NCHR)',
      desc: 'Investigates human rights violations, minority rights, class discrimination, and wrongful workplace detention.',
      number: '051-9216601',
      tollFree: 'Helpline: 1413',
      badge: 'Human Rights',
      contactType: 'phone'
    },
    {
      title: 'Ministry of Human Rights Helpline (MoHR)',
      desc: 'Free legal counseling, psychological guidance, and grievance redressal for women, children, and minorities.',
      number: '1099',
      tollFree: 'Toll-free 24/7 helpline: 1099',
      badge: 'Free Legal Advice',
      contactType: 'phone'
    },
    {
      title: 'Edhi Foundation Emergency & Ambulance Services',
      desc: 'Round-the-clock medical dispatch, crisis shelters, and emergency support throughout Pakistan.',
      number: '115',
      tollFree: 'Nationwide emergency dispatch: 115',
      badge: 'Crisis Support',
      contactType: 'emergency'
    },
    {
      title: 'Rozan Mental Health & Gender Violence Helpline',
      desc: 'Confidential emotional counseling, trauma support, and legal referrals for workplace and domestic survivors.',
      number: '0800-22444 / 0303-4442288',
      tollFree: 'Free calling support',
      badge: 'Confidential Counseling',
      contactType: 'phone'
    }
  ];

  return (
    <section id="outcome" className="relative py-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto z-10 text-white selection:bg-white selection:text-black">
      
      {/* Visual Identity Marker */}
      <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-4 tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
        <span>TAB 03 // OUTCOMES & WHERE TO REPORT</span>
      </div>

      {/* Main Header (Clean, Editorial, No 'Simulator') */}
      <div
        ref={headerRef}
        data-section-id="header"
        className={`max-w-4xl mb-24 transition-all duration-700 ease-out transform ${
          visibleSections.header ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-xs'
        }`}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          From Awareness to Action
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-normal">
          Knowing your rights is where dignity starts. When you spot unfair treatment, know the steps to take, keep clear proof, and reach out to the right helplines.
        </p>
      </div>

      {/* 1. HOW BOTH SDGS CONNECT (PARAGRAPH FORM IN SIMPLE WORDS) */}
      <div
        ref={connectionRef}
        data-section-id="connection"
        className={`mb-28 transition-all duration-700 ease-out transform ${
          visibleSections.connection ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-xs'
        }`}
      >
        <div className="border-l-2 border-purple-500 pl-6 sm:pl-10 space-y-6 max-w-4xl">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
            HOW SDG 5 AND SDG 10 CONNECT IN DAILY LIFE
          </span>

          <p className="text-xl sm:text-2xl font-light text-neutral-200 leading-relaxed">
            Gender equality (SDG 5) and reduced inequalities (SDG 10) are two sides of the same coin. When a woman is also poor, belongs to a minority group, or uses a wheelchair, her struggles multiply.
          </p>

          <p className="text-base text-neutral-400 leading-relaxed">
            You cannot fix gender fairness if buildings have no ramps for disabled women, or if domestic cleaners and tea helpers are paid pennies with no healthcare. True fairness only happens when both goals work together: every woman has the right to earn and be safe, and every worker—regardless of family name, money, or disability—is treated with full respect.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-neutral-400 border-t border-neutral-900">
            <div>
              <span className="text-rose-400 block mb-1">SDG 5 (GENDER)</span>
              <span>Protects women from harassment, unequal pay, and heavy domestic burdens</span>
            </div>
            <div>
              <span className="text-sky-400 block mb-1">SDG 10 (INCLUSION)</span>
              <span>Removes poverty barriers, class bias, and physical stair obstacles</span>
            </div>
            <div>
              <span className="text-purple-400 block mb-1">UNITED IMPACT</span>
              <span>A workplace where talent and human dignity are the only things that count</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WITNESSING A SCENE & HOW TO REPORT IT SAFELY */}
      <div
        ref={witnessingRef}
        data-section-id="witnessing"
        className={`mb-28 transition-all duration-700 ease-out transform ${
          visibleSections.witnessing ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-xs'
        }`}
      >
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
            WITNESSING MISCONDUCT & TAKING ACTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What to Do If You Witness Misconduct
          </h2>
          <p className="mt-3 text-neutral-400 leading-relaxed text-sm sm:text-base">
            Bad behavior rarely happens out of nowhere. It usually starts small with quiet comments or favoritism and grows into serious harassment if nobody says anything. Here is how to recognize each level and what you should do:
          </p>
        </div>

        {/* 4 Levels: Clean cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {WORKPLACE_SPECTRUM.map((spec) => {
            const isSelected = spec.level === activeSpectrumLevel;
            return (
              <button
                key={spec.level}
                onClick={() => setActiveSpectrumLevel(spec.level)}
                className={`p-6 border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-purple-400 bg-[#0d0d0d]'
                    : 'border-neutral-900 bg-[#060606] hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                  <span>LEVEL {spec.level}</span>
                  <span className={`uppercase font-semibold ${spec.severity === 'critical' ? 'text-rose-400' : 'text-neutral-400'}`}>
                    {spec.severity === 'critical' ? 'Severe' : spec.severity}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base leading-snug mb-1">{spec.label}</h3>
              </button>
            );
          })}
        </div>

        {/* Selected Spectrum Details */}
        <div className="p-8 border border-neutral-900 bg-[#070707]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
                What this looks like in real life:
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{currentSpectrum.label}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">{currentSpectrum.indicator}</p>
              
              <div className="p-4 bg-black border border-neutral-900 text-xs sm:text-sm text-neutral-300">
                <span className="font-mono text-neutral-400 block mb-1">Real Workplace Scenario:</span>
                "{currentSpectrum.example}"
              </div>
            </div>

            <div className="md:col-span-5 p-6 bg-black border border-neutral-900">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
                What you should do:
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {currentSpectrum.appropriateAction}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          ENHANCED CLEAN STEP-BY-STEP REPORTING GUIDE
          Distinct, legible, beautifully spaced layout
          ======================================================== */}
      <div
        ref={reportingGuideRef}
        data-section-id="reportingGuide"
        className={`mb-28 transition-all duration-700 ease-out transform ${
          visibleSections.reportingGuide ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-xs'
        }`}
      >
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/30 bg-purple-950/20 text-xs font-mono text-purple-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>PRACTICAL ACTION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The 6 Steps to Safely Report a Scene
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Follow this step-by-step roadmap to protect yourself, gather indisputable proof, navigate internal procedures, and escalate legally if necessary.
          </p>
        </div>

        {/* Step-by-Step Flow List with Distinct Visual Cards */}
        <div className="space-y-6">
          {reportingSteps.map((stepItem, index) => {
            const StepIcon = stepItem.icon;
            const isExpanded = expandedStep === index;

            return (
              <div
                key={stepItem.step}
                className={`border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-purple-500/70 bg-[#0b0b0f] shadow-xl shadow-purple-950/20 ring-1 ring-purple-500/20'
                    : 'border-neutral-800/90 bg-[#070707] hover:border-neutral-700'
                }`}
              >
                {/* Step Card Header / Banner */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : index)}
                  className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Big Numeric Badge */}
                    <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center font-mono text-base font-bold transition-colors ${
                      isExpanded
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:border-purple-500/40 group-hover:text-purple-300'
                    }`}>
                      {stepItem.step}
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <StepIcon className={`w-4 h-4 ${isExpanded ? 'text-purple-400' : 'text-neutral-500'}`} />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                          STEP {stepItem.step} // {stepItem.subtitle}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {stepItem.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right side interaction hint */}
                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <span className="text-xs font-mono text-neutral-400 group-hover:text-purple-300 transition-colors">
                      {isExpanded ? 'Collapse Details' : 'View Full Guide'}
                    </span>
                    <div className={`w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 bg-purple-950 border-purple-500 text-purple-300' : 'text-neutral-400 group-hover:text-white'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Workspace */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 border-t border-neutral-900/80">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
                      
                      {/* Left: Summary, Action Plan & Caution */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1.5">
                            Overview & Intent
                          </span>
                          <p className="text-base text-neutral-200 leading-relaxed font-light">
                            {stepItem.summary}
                          </p>
                        </div>

                        {/* Concrete Action Card */}
                        <div className="p-5 bg-black border border-neutral-800/90 rounded-none">
                          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                            Concrete Action Plan:
                          </span>
                          <p className="text-sm text-neutral-200 leading-relaxed">
                            {stepItem.action}
                          </p>
                        </div>

                        {/* Caution Callout */}
                        <div className="p-4 bg-amber-950/25 border-l-2 border-amber-500 flex items-start gap-3.5 text-xs sm:text-sm text-neutral-300">
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-amber-300 font-semibold block mb-0.5">Critical Caution:</strong>
                            <span className="leading-relaxed">{stepItem.caution}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Verification Checklist */}
                      <div className="lg:col-span-5 p-6 bg-black border border-neutral-800/90 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-900">
                            <CheckCircle2 className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest font-semibold">
                              Step {stepItem.step} Verification Checklist
                            </span>
                          </div>

                          <ul className="space-y-3.5 mb-6">
                            {stepItem.checklist.map((checkItem, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                                <span className="leading-relaxed">{checkItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Next Step Trigger */}
                        <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-neutral-500">
                            Roadmap Phase {index + 1} of 6
                          </span>

                          {index < reportingSteps.length - 1 ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedStep(index + 1);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/40 text-xs font-mono text-purple-200 transition-colors cursor-pointer"
                            >
                              <span>Next: Step 0{index + 2}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Ready for Official Helplines</span>
                            </span>
                          )}
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. EMERGENCY NUMBERS & CONTACTS TO REPORT MISCONDUCT */}
      <div
        ref={helplinesRef}
        data-section-id="helplines"
        className={`mb-28 transition-all duration-700 ease-out transform ${
          visibleSections.helplines ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-xs'
        }`}
      >
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
            OFFICIAL HELPLINES & LEGAL ASSISTANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Emergency Contacts & Where to Report
          </h2>
          <p className="mt-3 text-neutral-400 leading-relaxed text-sm sm:text-base">
            If you or a coworker are facing harassment, discrimination, or physical danger in Pakistan, contact these official helplines and ombudsman offices:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyHelplines.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border border-neutral-900 bg-[#070707] hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono uppercase px-2 py-0.5 border ${
                    item.contactType === 'emergency' 
                      ? 'border-rose-500/40 text-rose-300 bg-rose-950/30' 
                      : 'border-purple-500/40 text-purple-300 bg-purple-950/30'
                  }`}>
                    {item.badge}
                  </span>
                  <PhoneCall className="w-4 h-4 text-neutral-500" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <span className="text-[11px] font-mono text-neutral-500 block mb-1">
                  DIRECT CONTACT:
                </span>
                <span className="text-lg font-mono font-bold text-white tracking-wide block">
                  {item.number}
                </span>
                <span className="text-xs font-mono text-neutral-400 mt-1 block">
                  {item.tollFree}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FINAL CLOSING REVEAL: CLEAN & EDITORIAL */}
      <div
        ref={finalRef}
        data-section-id="final"
        className={`pt-12 pb-16 text-center max-w-3xl mx-auto border-t border-neutral-900 transition-all duration-700 ease-out transform ${
          visibleSections.final ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-xs'
        }`}
      >
        <span className="inline-block text-xs font-mono text-purple-400 uppercase tracking-widest mb-6">
          THE PATH FORWARD
        </span>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          KNOWLEDGE IS THE FIRST STEP.
        </h2>

        <div className="space-y-2 text-xl sm:text-2xl text-neutral-300 font-light mb-8">
          <p>Understand your rights.</p>
          <p>Recognize inequality.</p>
          <p>Know where to seek support.</p>
        </div>

        <div className="inline-flex items-center gap-3 px-4 py-2 border border-neutral-800 text-xs font-mono text-neutral-400">
          <span className="text-rose-400">SDG 5 (Gender Equality)</span>
          <span>×</span>
          <span className="text-sky-400">SDG 10 (Reduced Inequalities)</span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-500 italic mt-6">
          "Awareness can be the beginning of change."
        </p>
      </div>

    </section>
  );
};
