import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { SDG5Section } from './components/SDG5Section';
import { SDG10Section } from './components/SDG10Section';
import { OutcomeSection } from './components/OutcomeSection';
import { LegalDisclaimerModal } from './components/LegalDisclaimerModal';

export default function App() {
  // Tab-based architecture: 'home' | 'sdg5' | 'sdg10' | 'outcome'
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isLegalOpen, setIsLegalOpen] = useState<boolean>(false);

  // Solved sectors in the Equality Simulator
  const [solvedSectors, setSolvedSectors] = useState<string[]>([]);

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSolveSector = (id: string) => {
    if (!solvedSectors.includes(id)) {
      setSolvedSectors((prev) => [...prev, id]);
    }
  };

  const handleResetGame = () => {
    setSolvedSectors([]);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-rose-500/30 selection:text-white font-sans antialiased">
      
      {/* Navbar with website title only */}
      <Navbar onSelectTab={handleSelectTab} />

      {/* Main Tab Content Display */}
      <main className="relative">
        
        {/* HOME TAB: Heading only, slight explanation on scroll, buttons below to redirect */}
        {activeTab === 'home' && (
          <HomePage onSelectTab={handleSelectTab} />
        )}

        {/* TAB 1: SDG 5 ONLY (Gender Equality) */}
        {activeTab === 'sdg5' && (
          <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
              <button
                onClick={() => handleSelectTab('home')}
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                ← Back to Home
              </button>
            </div>
            <SDG5Section />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900">
              <button
                onClick={() => handleSelectTab('home')}
                className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800 cursor-pointer"
              >
                ← Return to Home
              </button>
              <button
                onClick={() => handleSelectTab('sdg10')}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors cursor-pointer"
              >
                Continue to Tab 2: SDG 10 →
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: SDG 10 ONLY (Reduced Inequalities) */}
        {activeTab === 'sdg10' && (
          <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
              <button
                onClick={() => handleSelectTab('home')}
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                ← Back to Home
              </button>
            </div>
            <SDG10Section />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900">
              <button
                onClick={() => handleSelectTab('sdg5')}
                className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800 cursor-pointer"
              >
                ← Back to Tab 1 (SDG 5)
              </button>
              <button
                onClick={() => handleSelectTab('outcome')}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors cursor-pointer"
              >
                Continue to Tab 3: Outcomes & Where to Report →
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: OUTCOME WITH EQUALITY SIMULATOR AT THE END */}
        {activeTab === 'outcome' && (
          <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
              <button
                onClick={() => handleSelectTab('home')}
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                ← Back to Home
              </button>
            </div>
            <OutcomeSection
              solvedSectors={solvedSectors}
              onSolveSector={handleSolveSector}
              onResetGame={handleResetGame}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900">
              <button
                onClick={() => handleSelectTab('sdg10')}
                className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800 cursor-pointer"
              >
                ← Back to Tab 2 (SDG 10)
              </button>
              <button
                onClick={() => handleSelectTab('home')}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Return to Home Screen
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Exhibition Footer */}
      <footer className="relative z-10 border-t border-neutral-900 bg-black py-10 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-display font-bold text-white text-sm">KNOW YOUR RIGHTS</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Interactive Exhibition on SDG 5 (Gender Parity) & SDG 10 (Reduced Inequalities)</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsLegalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Legal Notice & Verified Sources
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-rose-400 hover:text-rose-300 font-medium transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

      {/* Legal & Sources Modal */}
      <LegalDisclaimerModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />

    </div>
  );
}
