import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import Helmet for component-level SEO adjustments (e.g., if a page needs custom tags)
import { Helmet } from 'react-helmet-async'; 

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const LOGO_URL = 'https://i.imgur.com/sOJk3J7.png'; // 🟢 Your YAFOAM Logo

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  return (
    // We don't add Helmet here, but on the individual route components
    <header className="sticky top-0 z-50 bg-cream/95 dark:bg-darkmode-bg/95 backdrop-blur-md border-b border-midnight/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo - Enhanced with Image */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center p-0.5 shadow-md">
              {/* Using your actual logo image */}
              <img 
                src={LOGO_URL} 
                alt="YAFOAM - Youth & Families on a Mission Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="text-lg font-display font-bold text-midnight dark:text-cream">
                YAFOAM
              </div>
              <div className="text-xs opacity-80 text-midnight dark:text-cream/80">
                Youth &amp; Families on a Mission
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (No change, structure is fine) */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* ... Your existing navigation links ... */}
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap text-sm ${isActive('/') ? 'bg-peach/30' : ''}`}
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap flex items-center gap-1 text-sm ${isActive('/about') ? 'bg-peach/30' : ''}`}
              >
                About
                <i className={`ri-arrow-down-s-line transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-cream dark:bg-darkmode-bg border border-midnight/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50"> {/* Increased Z-index */}
                  <Link to="/about" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Our Mission</Link>
                  <Link to="/about#values" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Our Vision</Link>
                  <Link to="/about#history" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Our Story</Link>
                  <Link to="/about#values" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Core Values</Link>
                  <Link to="/about#leadership" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Leadership Team</Link>
                </div>
              )}
            </div>
            
            {/* Programs Dropdown */}
            {/* ... (Keep the rest of your desktop navigation structure) ... */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('programs')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap flex items-center gap-1 text-sm ${isActive('/programs') || isActive('/youth-services') || isActive('/family-services') || isActive('/community') ? 'bg-peach/30' : ''}`}
              >
                Programs
                <i className={`ri-arrow-down-s-line transition-transform ${activeDropdown === 'programs' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'programs' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-cream dark:bg-darkmode-bg border border-midnight/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50">
                  <Link to="/programs" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm font-semibold border-b border-midnight/10 dark:border-white/10">All Programs</Link>
                  <Link to="/youth-services" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Youth Empowerment Track</Link>
                  <Link to="/family-services" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Family Strengthening Track</Link>
                  <Link to="/community" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Community Engagement Track</Link>
                </div>
              )}
            </div>

            {/* Get Involved Dropdown */}
            {/* ... (Keep the rest of your desktop navigation structure) ... */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('involved')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap flex items-center gap-1 text-sm ${isActive('/get-involved') ? 'bg-peach/30' : ''}`}
              >
                Get Involved
                <i className={`ri-arrow-down-s-line transition-transform ${activeDropdown === 'involved' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'involved' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-cream dark:bg-darkmode-bg border border-midnight/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50">
                  <Link to="/get-involved" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Partner & Donate</Link>
                  <Link to="/get-involved#donate" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Ways to Give</Link>
                  <Link to="/get-involved" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Volunteer Programs</Link>
                  <Link to="/resources#faq" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Volunteer Highlights</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            {/* ... (Keep the rest of your desktop navigation structure) ... */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap flex items-center gap-1 text-sm ${isActive('/resources') ? 'bg-peach/30' : ''}`}
              >
                Resources
                <i className={`ri-arrow-down-s-line transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-cream dark:bg-darkmode-bg border border-midnight/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50">
                  <Link to="/resources" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Gallery</Link>
                  <Link to="/resources#media" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Success Stories</Link>
                  <Link to="/resources#faq" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Workshops</Link>
                  <Link to="/resources#privacy" className="block px-4 py-2.5 hover:bg-peach/50 transition cursor-pointer text-sm">Policies</Link>
                </div>
              )}
            </div>

            <Link 
              to="/get-support" 
              className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap text-sm font-semibold ${isActive('/get-support') ? 'bg-peach/30' : ''}`}
            >
              Get Support
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-xl hover:bg-peach/50 transition cursor-pointer whitespace-nowrap text-sm ${isActive('/contact') ? 'bg-peach/30' : ''}`}
            >
              Contact
            </Link>

            <Link
              to="/get-involved"
              className="btn-primary whitespace-nowrap cursor-pointer ml-2" // Added margin for spacing
            >
              Donate <i className="ri-heart-fill ml-2"></i>
            </Link>
          </nav>

          {/* Mobile Menu Button (No change, structure is fine) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-peach/50 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu (No change, structure is fine) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream/95 dark:bg-darkmode-bg/95 p-4 border-t border-midnight/10 dark:border-white/10">
            <Link to="/" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Home
            </Link>
            <Link to="/about" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              About Us
            </Link>
            <Link to="/programs" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              All Programs
            </Link>
            <Link to="/youth-services" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Youth Empowerment
            </Link>
            <Link to="/family-services" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Family Services
            </Link>
            <Link to="/community" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Community Engagement
            </Link>
            <Link to="/get-involved" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Get Involved
            </Link>
            <Link to="/resources" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Resources
            </Link>
            <Link to="/get-support" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Get Support
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg hover:bg-peach/50 font-semibold transition cursor-pointer text-sm">
              Contact Us
            </Link>
            <Link to="/get-involved#donate" onClick={toggleMobileMenu} className="block py-2.5 px-2 rounded-lg bg-peach/70 font-bold text-midnight transition cursor-pointer mt-2 text-sm">
              Donate Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}