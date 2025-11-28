import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const LOGO_URL = 'https://i.imgur.com/sOJk3J7.png'; // 🟢 Your YAFOAM Logo

  return (
    <footer className="bg-midnight dark:bg-darkmode-bg text-cream border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8"> {/* Adjusted grid for slightly cleaner layout on MD screens */}
          {/* About YAFOAM */}
          <div>
            <h4 className="font-bold text-base mb-3 text-peach">About YAFOAM</h4>
            <p className="text-xs opacity-80 mb-3">
              We empower youth and support families through localized programs, mentorship and holistic supports. We are a registered Canadian Charity.
            </p>
            <Link to="/about" className="text-xs hover:underline block mb-2 cursor-pointer">Our Story &amp; History</Link>
            <Link to="/about#values" className="text-xs hover:underline block mb-2 cursor-pointer">Mission &amp; Values</Link>
            <Link to="/about#leadership" className="text-xs hover:underline block mb-2 cursor-pointer">Leadership &amp; Board</Link>
            <button
              onClick={() => {
                const modal = document.getElementById('volunteer-modal');
                if (modal) modal.classList.add('active');
              }}
              className="mt-3 px-3 py-1 border border-peach text-peach rounded-xl font-semibold hover:bg-peach/10 transition w-full text-left cursor-pointer whitespace-nowrap text-xs"
            >
              Volunteer Today
            </button>
          </div>

          {/* Core Programs */}
          <div>
            <h4 className="font-bold text-base mb-3 text-peach">Core Programs</h4>
            <Link to="/programs" className="text-xs hover:underline block mb-2 cursor-pointer">Summer Horizons (Flagship)</Link>
            <Link to="/programs" className="text-xs hover:underline block mb-2 cursor-pointer">Leadership Labs</Link>
            <Link to="/programs" className="text-xs hover:underline block mb-2 cursor-pointer">Creative &amp; Digital Media</Link>
            <Link to="/programs" className="text-xs hover:underline block mb-2 cursor-pointer">Employment Pathways</Link>
            <Link to="/programs" className="text-xs hover:underline block mb-2 cursor-pointer">Full Catalog</Link>
          </div>

          {/* Youth Initiatives */}
          <div>
            <h4 className="font-bold text-base mb-3 text-peach">Youth Initiatives</h4>
            <Link to="/youth-services" className="text-xs hover:underline block mb-2 cursor-pointer">Youth Mentorship</Link>
            <Link to="/youth-services#mental-health" className="text-xs hover:underline block mb-2 cursor-pointer">Mental Health Hub</Link>
            <Link to="/youth-services#at-risk" className="text-xs hover:underline block mb-2 cursor-pointer">At-Risk Support</Link>
            <Link to="/youth-services#wellness" className="text-xs hover:underline block mb-2 cursor-pointer">Wellness Circles</Link>
            <Link to="/community#events" className="text-xs hover:underline block mb-2 cursor-pointer">Youth Events</Link>
          </div>

          {/* Family & Community */}
          <div>
            <h4 className="font-bold text-base mb-3 text-peach">Family &amp; Community</h4>
            <Link to="/family-services" className="text-xs hover:underline block mb-2 cursor-pointer">FreshStart Newcomer Services</Link>
            <Link to="/family-services#harmony" className="text-xs hover:underline block mb-2 cursor-pointer">Family Harmony Consultations</Link>
            <Link to="/family-services#parenting" className="text-xs hover:underline block mb-2 cursor-pointer">Parenting Groups</Link>
            <Link to="/community" className="text-xs hover:underline block mb-2 cursor-pointer">Community Partners</Link>
            <Link to="/family-services#nutrition" className="text-xs hover:underline block mb-2 cursor-pointer">Food Pantry &amp; Nutrition</Link>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="font-bold text-base mb-3 text-peach">Resources &amp; Legal</h4>
            <Link to="/resources" className="text-xs hover:underline block mb-2 cursor-pointer">Guides &amp; Forms</Link>
            <Link to="/resources#media" className="text-xs hover:underline block mb-2 cursor-pointer">Media &amp; Press Kit</Link>
            <Link to="/resources#privacy" className="text-xs hover:underline block mb-2 cursor-pointer">Privacy Policy</Link>
            <Link to="/resources#terms" className="text-xs hover:underline block mb-2 cursor-pointer">Terms &amp; Conditions</Link>
            <Link to="/resources#faq" className="text-xs hover:underline block mb-2 cursor-pointer">FAQ &amp; Help Center</Link>
          </div>

          {/* Contact & Connect */}
          <div>
            <h4 className="font-bold text-base mb-3 text-peach">Contact &amp; Connect</h4>
            <div className="text-xs opacity-80 mb-3">
              6850 Millcreek Drive<br />
              Mississauga, ON<br />
              Email: <a href="mailto:youthandfamilyonamission@gmail.com" className="underline text-peach cursor-pointer">youthandfamilyonamission@gmail.com</a><br />
              -----: <a href="-----" className="underline text-peach cursor-pointer">-----</a>
            </div>

            <div className="flex gap-3 mb-4"> {/* Increased gap for cleaner social icons */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-peach/20 hover:bg-peach text-cream hover:text-midnight rounded-full transition cursor-pointer shadow-md" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-base"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-peach/20 hover:bg-peach text-cream hover:text-midnight rounded-full transition cursor-pointer shadow-md" aria-label="Instagram">
                <i className="ri-instagram-fill text-base"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-peach/20 hover:bg-peach text-cream hover:text-midnight rounded-full transition cursor-pointer shadow-md" aria-label="Facebook">
                <i className="ri-facebook-fill text-base"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-peach/20 hover:bg-peach text-cream hover:text-midnight rounded-full transition cursor-pointer shadow-md" aria-label="Twitter/X">
                <i className="ri-twitter-x-fill text-base"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-peach/20 hover:bg-peach text-cream hover:text-midnight rounded-full transition cursor-pointer shadow-md" aria-label="YouTube">
                <i className="ri-youtube-fill text-base"></i>
              </a>
            </div>

            <div>
              <h5 className="text-xs font-semibold mb-2 text-peach">Newsletter Signup</h5>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed! Thank you.'); }}>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="p-2 rounded-lg w-full mb-2 text-midnight text-xs focus:ring-2 focus:ring-peach focus:border-peach" // Added focus styles
                />
                <button className="px-3 py-1.5 rounded-lg bg-peach text-midnight font-semibold w-full hover:bg-gold transition whitespace-nowrap cursor-pointer text-xs shadow-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom - MODIFIED FOR FULL CENTERING */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center gap-4"> {/* Removed md:flex-row and justify-between, added items-center */}
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            {/* Logo Block */}
            <Link to="/#home" className="w-14 h-14 bg-cream rounded-full flex items-center justify-center shadow-lg cursor-pointer p-1">
              {/* Using your actual logo image */}
              <img 
                src={LOGO_URL} 
                alt="YAFOAM Logo Icon" 
                className="w-full h-full object-contain rounded-full"
              />
            </Link>
            
            {/* Accreditation Text */}
            <div className="text-xs opacity-80 mt-2 sm:mt-0">
              <Link to="/#home" className="hover:underline cursor-pointer">
                <strong>Youth &amp; Families on a Mission</strong>
              </Link>
              <div className="mt-1">Accredited by Trust Council</div>
            </div>
          </div>

          {/* Copyright & Legal Block */}
          <div className="text-xs opacity-80 text-center mt-4"> {/* Added margin-top for separation */}
            <div className="mb-2">© {currentYear} Youth &amp; Families on a Mission</div>
            <div className="flex gap-3 justify-center"> {/* Removed md:justify-end, forcing center on all screens */}
              <Link to="/resources#privacy" className="hover:underline cursor-pointer">Privacy</Link>
              <span>•</span>
              <Link to="/resources#terms" className="hover:underline cursor-pointer">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}