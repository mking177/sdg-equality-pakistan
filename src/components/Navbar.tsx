import React from 'react';

export type TabType = 'home' | 'sdg5' | 'sdg10' | 'outcome';

interface NavbarProps {
  onSelectTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Title of the website only */}
        <button
          onClick={() => onSelectTab('home')}
          className="text-left font-display text-xl sm:text-2xl font-black tracking-tight text-white hover:text-neutral-300 transition-colors cursor-pointer"
        >
          KNOW YOUR RIGHTS
        </button>

      </div>
    </header>
  );
};
