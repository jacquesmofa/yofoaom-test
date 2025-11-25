export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight dark:bg-darkmode-bg text-cream border-t border-white/10 py-12">
      <div className="site-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* About YAFOAM */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-peach">About YAFOAM</h4>
            <p className="text-sm opacity-80 mb-4">
              We empower youth and support families through localized programs, mentorship and holistic supports. We are a registered Canadian Charity.
            </p>
            <a href="#mission" className="text-sm hover:underline block mb-2 cursor-pointer">Our Story & History</a>
            <a href="#mission" className="text-sm hover:underline block mb-2 cursor-pointer">Mission & Values</a>
            <a href="#leadership" className="text-sm hover:underline block mb-2 cursor-pointer">Leadership & Board</a>
            <button
              onClick={() => {
                const modal = document.getElementById('volunteer-modal');
                if (modal) modal.classList.add('active');
              }}
              className="mt-4 px-3 py-1 border border-peach text-peach rounded-xl font-semibold hover:bg-peach/10 transition w-full text-left cursor-pointer whitespace-nowrap"
            >
              Volunteer Today
            </button>
          </div>

          {/* Core Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-peach">Core Programs</h4>
            <a href="#programs" className="text-sm hover:underline block mb-2 cursor-pointer">Summer Horizons (Flagship)</a>
            <a href="#programs" className="text-sm hover:underline block mb-2 cursor-pointer">Leadership Labs</a>
            <a href="#programs" className="text-sm hover:underline block mb-2 cursor-pointer">Creative & Digital Media</a>
            <a href="#programs" className="text-sm hover:underline block mb-2 cursor-pointer">Employment Pathways</a>
            <a href="#programs" className="text-sm hover:underline block mb-2 cursor-pointer">Full Catalog</a>
          </div>

          {/* Youth Initiatives */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-peach">Youth Initiatives</h4>
            <a href="#youth-empowerment" className="text-sm hover:underline block mb-2 cursor-pointer">Youth Mentorship</a>
            <a href="#youth-empowerment" className="text-sm hover:underline block mb-2 cursor-pointer">Mental Health Hub</a>
            <a href="#youth-empowerment" className="text-sm hover:underline block mb-2 cursor-pointer">At-Risk Support</a>
            <a href="#youth-empowerment" className="text-sm hover:underline block mb-2 cursor-pointer">Wellness Circles</a>
            <a href="#events" className="text-sm hover:underline block mb-2 cursor-pointer">Youth Events</a>
          </div>

          {/* Family & Community */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-peach">Family & Community</h4>
            <a href="#family-services" className="text-sm hover:underline block mb-2 cursor-pointer">FreshStart Newcomer Services</a>
            <a href="#family-services" className="text-sm hover:underline block mb-2 cursor-pointer">Family Harmony Consultations</a>
            <a href="#family-services" className="text-sm hover:underline block mb-2 cursor-pointer">Parenting Groups</a>
            <a href="#community-engagement" className="text-sm hover:underline block mb-2 cursor-pointer">Community Partners</a>
            <a href="#family-services" className="text-sm hover:underline block mb-2 cursor-pointer">Food Pantry & Nutrition</a>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-peach">Resources & Legal</h4>
            <a href="#resources" className="text-sm hover:underline block mb-2 cursor-pointer">Guides & Forms</a>
            <a href="#resources" className="text-sm hover:underline block mb-2 cursor-pointer">Media & Press Kit</a>
            <a href="#legal" className="text-sm hover:underline block mb-2 cursor-pointer">Privacy Policy</a>
            <a href="#legal" className="text-sm hover:underline block mb-2 cursor-pointer">Terms & Conditions</a>
            <a href="#resources" className="text-sm hover:underline block mb-2 cursor-pointer">FAQ & Help Center</a>
          </div>

          {/* Contact & Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-peach">Contact & Connect</h4>
            <div className="text-sm opacity-80 mb-4">
              101 West Drive, Unit 2<br />
              Brampton, ON L6T 2J6<br />
              Email: <a href="mailto:hello@youthandfamilyonamission.com" className="underline text-peach cursor-pointer">hello@yafoam.org</a><br />
              Phone: (555) 555-5555
            </div>

            <div className="flex gap-3 mb-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-peach/20 hover:bg-peach rounded-full transition cursor-pointer" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-peach/20 hover:bg-peach rounded-full transition cursor-pointer" aria-label="Instagram">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-peach/20 hover:bg-peach rounded-full transition cursor-pointer" aria-label="Facebook">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-peach/20 hover:bg-peach rounded-full transition cursor-pointer" aria-label="Twitter/X">
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-peach/20 hover:bg-peach rounded-full transition cursor-pointer" aria-label="YouTube">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-2 text-peach">Newsletter Signup</h5>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed! Thank you.'); }}>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="p-2 rounded-lg w-full mb-2 text-midnight text-sm"
                />
                <button className="px-3 py-2 rounded-lg bg-peach text-midnight font-semibold w-full hover:bg-gold transition whitespace-nowrap cursor-pointer text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center shadow-lg">
              <span className="text-midnight font-bold text-xl">YF</span>
            </div>
            <div className="text-sm opacity-80">
              <strong>NGO Grade Professional Layout</strong> • Accredited by Trust Council • Charity registration <strong>123456789RR0001</strong>
            </div>
          </div>

          <div className="text-sm opacity-80 text-center md:text-right">
            <div className="mb-2">© {currentYear} Youth & Families on a Mission</div>
            <div className="flex gap-3 justify-center md:justify-end">
              <a href="#legal" className="hover:underline cursor-pointer">Privacy</a>
              <span>•</span>
              <a href="#legal" className="hover:underline cursor-pointer">Terms</a>
              <span>•</span>
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Powered by Readdy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
