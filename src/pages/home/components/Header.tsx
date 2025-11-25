import { useState } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (hash: string) => {
    window.location.hash = hash;
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/95 dark:bg-darkmode-bg/95 backdrop-blur-md border-b border-midnight/10 dark:border-white/10">
      <div className="site-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-midnight dark:bg-peach rounded-full flex items-center justify-center text-cream dark:text-midnight font-bold text-lg">
              YF
            </div>
            <div>
              <a href="#home" onClick={() => handleNavClick('home')} className="text-xl font-display font-bold text-midnight dark:text-cream cursor-pointer">
                YAFOAM
              </a>
              <div className="text-xs opacity-80">Youth & Families on a Mission</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#programs" onClick={() => handleNavClick('programs')} className="px-4 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap">
              Programs
            </a>
            <a href="#mission" onClick={() => handleNavClick('mission')} className="px-4 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap">
              Mission
            </a>
            <a href="#resources" onClick={() => handleNavClick('resources')} className="px-4 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap">
              Resources
            </a>
            <a href="#contact" onClick={() => handleNavClick('contact')} className="px-4 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap">
              Contact
            </a>
            <a href="#donate" onClick={() => handleNavClick('donate')} className="px-4 py-2 rounded-xl bg-peach text-midnight font-semibold hover:bg-gold transition cursor-pointer whitespace-nowrap">
              Donate
            </a>
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-midnight/20 dark:border-white/20 hover:bg-peach/50 transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <i className={`ri-${isDarkMode ? 'sun' : 'moon'}-line text-xl`}></i>
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-peach/50 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream/95 dark:bg-darkmode-bg/95 p-4 border-t border-midnight/10 dark:border-white/10">
            <a href="#home" onClick={() => handleNavClick('home')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Home
            </a>
            <a href="#programs" onClick={() => handleNavClick('programs')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Programs
            </a>
            <a href="#youth-empowerment" onClick={() => handleNavClick('youth-empowerment')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Youth Empowerment
            </a>
            <a href="#family-services" onClick={() => handleNavClick('family-services')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Family Services
            </a>
            <a href="#community-engagement" onClick={() => handleNavClick('community-engagement')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Community Engagement
            </a>
            <a href="#support" onClick={() => handleNavClick('support')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Get Support
            </a>
            <a href="#donate" onClick={() => handleNavClick('donate')} className="block py-3 px-2 rounded-lg bg-peach/70 font-bold text-midnight transition cursor-pointer">
              Donate
            </a>
            <a href="#contact" onClick={() => handleNavClick('contact')} className="block py-3 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
