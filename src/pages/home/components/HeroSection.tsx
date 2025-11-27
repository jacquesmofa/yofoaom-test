
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [youthsServed, setYouthsServed] = useState(0);
  const [familiesSupported, setFamiliesSupported] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const youthsIncrement = 5000 / steps;
    const familiesIncrement = 800 / steps;
    const rateIncrement = 90 / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setYouthsServed(Math.floor(youthsIncrement * currentStep));
        setFamiliesSupported(Math.floor(familiesIncrement * currentStep));
        setCompletionRate(Math.floor(rateIncrement * currentStep));
      } else {
        setYouthsServed(5000);
        setFamiliesSupported(800);
        setCompletionRate(90);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* HD Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Beautiful%20HD%20photograph%20of%20diverse%20Black%20families%20and%20mixed-race%20youth%20joyfully%20playing%20together%20in%20pristine%20natural%20outdoor%20setting%2C%20children%20running%20freely%20through%20lush%20green%20meadows%20with%20colorful%20wildflowers%2C%20parents%20laughing%20and%20embracing%20under%20golden%20sunlight%20filtering%20through%20tall%20trees%2C%20authentic%20documentary%20style%20capturing%20genuine%20moments%20of%20freedom%20and%20happiness%2C%20vibrant%20nature%20scenery%20with%20rolling%20hills%20and%20clear%20blue%20sky%20in%20background%2C%20multi-generational%20family%20bonding%20in%20peaceful%20countryside%2C%20youth%20exploring%20nature%20with%20wonder%20and%20excitement%2C%20warm%20natural%20lighting%20creating%20magical%20golden%20hour%20atmosphere%2C%20cultural%20diversity%20celebrating%20freedom%20and%20unity%20in%20nature%2C%20high-quality%20professional%20photography%20with%20sharp%20details%2C%20serene%20forest%20backdrop%20with%20sunbeams%20streaming%20through%20leaves%2C%20families%20picnicking%20and%20enjoying%20outdoor%20activities%20together%2C%20genuine%20smiles%20and%20pure%20joy%20expressions%2C%20nature%20integration%20and%20environmental%20connection%2C%20colorful%20casual%20summer%20clothing%2C%20dynamic%20family%20interactions%20showing%20love%20and%20belonging%2C%20crystal%20clear%20image%20quality%20with%20vivid%20colors%20and%20perfect%20lighting&width=1920&height=1080&seq=hero-image-yafoam-family-nature-hd-v1&orientation=landscape"
          alt="Diverse families and youth enjoying freedom in nature"
          className="w-full h-full object-cover object-top"
        />
        {/* Very minimal overlay - 15% opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Main Heading with minimal background */}
        <div className="inline-block mb-8 px-8 py-6 rounded-3xl bg-white/15 dark:bg-black/15 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair text-midnight dark:text-white drop-shadow-lg">
            Generational Change Starts Here.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-midnight/90 dark:text-white/90 drop-shadow-md">
            We deliver community-driven programming that elevates young people and stabilizes families — combining culturally responsive services, trauma-aware practice, and creative learning for sustainable outcomes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/programs"
              className="btn-primary whitespace-nowrap cursor-pointer"
            >
              Explore Programs <i className="ri-arrow-right-line ml-2"></i>
            </a>
            <a
              href="/contact"
              className="btn-secondary whitespace-nowrap cursor-pointer"
            >
              Get Support Now <i className="ri-customer-service-2-line ml-2"></i>
            </a>
          </div>
        </div>

        {/* Stats with minimal background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/15 dark:bg-black/15 backdrop-blur-sm">
            <div className="text-5xl font-bold text-peach dark:text-peach mb-2 drop-shadow-lg">
              {youthsServed.toLocaleString()}+
            </div>
            <div className="text-lg text-midnight dark:text-white drop-shadow-md">Youth Served Annually</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/15 dark:bg-black/15 backdrop-blur-sm">
            <div className="text-5xl font-bold text-peach dark:text-peach mb-2 drop-shadow-lg">
              {familiesSupported.toLocaleString()}+
            </div>
            <div className="text-lg text-midnight dark:text-white drop-shadow-md">Families Supported</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/15 dark:bg-black/15 backdrop-blur-sm">
            <div className="text-5xl font-bold text-peach dark:text-peach mb-2 drop-shadow-lg">
              {completionRate}%+
            </div>
            <div className="text-lg text-midnight dark:text-white drop-shadow-md">Program Completion Rate</div>
          </div>
        </div>

        {/* Mentorship Card with minimal background */}
        <div className="mt-16 max-w-3xl mx-auto">
          <a
            href="/family-services#mentorship"
            className="block p-8 rounded-3xl bg-white/15 dark:bg-black/15 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 cursor-pointer group"
          >
            <h3 className="text-3xl font-bold mb-4 text-midnight dark:text-white drop-shadow-lg">
              Mentorship for Life
            </h3>
            <p className="text-lg mb-6 text-midnight/90 dark:text-white/90 drop-shadow-md">
              Connecting every youth with a committed, long-term mentor to navigate challenges and unlock potential.
            </p>
            <span className="inline-flex items-center text-peach font-semibold group-hover:gap-3 transition-all drop-shadow-md">
              See Mentoring Impact <i className="ri-arrow-right-line ml-2"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
