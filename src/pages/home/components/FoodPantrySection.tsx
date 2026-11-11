import pantry from '../../../content/food-pantry.json';

const EMAIL = 'youthandfamilyonamission@gmail.com';
const cld = (url: string, w: number, h: number) => url.replace('/image/upload/', `/image/upload/f_auto,q_auto,c_fill,g_auto,w_${w},h_${h}/`);

const steps = [
  { icon: 'ri-truck-line', t: 'Collect', d: 'Food arrives through community donations, food-rescue partners and purchasing, with fresh produce and culturally familiar staples first.' },
  { icon: 'ri-hand-heart-line', t: 'Sort & pack', d: 'Youth and adult volunteers sort, check and pack hampers side by side, building skills and leadership while they serve.' },
  { icon: 'ri-home-heart-line', t: 'Serve families', d: 'Families are welcomed warmly and leave with groceries for the week, with no judgement and no paperwork wall.' },
  { icon: 'ri-links-line', t: 'Open doors', d: 'Every pantry visit connects families to mentorship, mental-health support, newcomer services and youth programs.' },
];

const fund = [
  { t: 'Fresh food for growing families', d: 'Produce, protein, dairy and staples purchased to fill the gaps donations cannot.' },
  { t: 'Youth leadership through service', d: 'Training and coordination so young volunteers gain real skills, references and confidence.' },
  { t: 'Space, storage & transport', d: 'Shelving, cold storage and transport that let us accept more food and reach more homes.' },
  { t: 'Nutrition & wellbeing', d: 'Nutrition education and referrals that turn a food visit into lasting family health.' },
];

const receive = [
  'Regular updates on families served and food distributed',
  'Photos, video and stories from the pantry floor',
  'Financial reporting and receipts on request',
  'Recognition at events and on our channels',
];

export default function FoodPantrySection() {
  const [lead, ...rest] = pantry.photos;
  return (
    <section id="food-pantry" className="py-20 scroll-mt-24" aria-labelledby="pantry-title">
      <div className="relative overflow-hidden rounded-[2rem] bg-midnight text-cream px-6 py-14 md:px-14 md:py-20">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-peach/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <i className="ri-restaurant-2-line" aria-hidden="true" /> Community Food Pantry · For funders &amp; partners
            </span>
            <h2 id="pantry-title" className="mt-6 font-display text-4xl md:text-5xl font-bold leading-tight">
              Full plates. Strong families. <span className="text-peach italic">Brighter futures.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              Hunger makes everything harder: school, work, health and hope. Our community food pantry puts fresh, nourishing groceries in the hands of families across Mississauga and Peel, and it is powered by the very young people we serve. Every hamper feeds a household; every shift builds a young leader.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#donate" className="rounded-full bg-gold px-6 py-3 font-semibold text-midnight hover:bg-peach transition-colors whitespace-nowrap">Fund the pantry</a>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('Food pantry funding package request')}`} className="rounded-full border border-cream/40 px-6 py-3 font-semibold hover:bg-cream/10 transition-colors whitespace-nowrap">Request our funding package</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img src={cld(lead, 900, 900)} alt="Families and volunteers at the YAFOAM community food pantry" loading="lazy" decoding="async" className="col-span-2 row-span-2 w-full h-full aspect-square object-cover rounded-2xl" />
            {rest.slice(0, 5).map((p) => (
              <img key={p} src={cld(p, 400, 400)} alt="Food pantry distribution day" loading="lazy" decoding="async" className="w-full aspect-square object-cover rounded-2xl" />
            ))}
          </div>
        </div>

        <ol className="relative mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl bg-cream/5 border border-cream/15 p-6">
              <div className="flex items-center justify-between">
                <i className={`${s.icon} text-2xl text-gold`} aria-hidden="true" />
                <span className="text-xs font-semibold tracking-widest text-cream/50">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-[2rem] bg-white dark:bg-white/5 shadow-lux p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold">What your grant makes possible</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {fund.map((f) => (
              <div key={f.t} className="border-l-4 border-gold pl-4">
                <h4 className="font-bold">{f.t}</h4>
                <p className="mt-1 text-sm opacity-80 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 rounded-[2rem] bg-peach/40 dark:bg-peach/10 p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold">What funders receive</h3>
          <ul className="mt-6 space-y-3 list-none p-0">
            {receive.map((r) => (
              <li key={r} className="flex gap-3"><i className="ri-checkbox-circle-fill text-gold text-xl shrink-0" aria-hidden="true" />{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" aria-label="More photos from the food pantry">
        {rest.slice(5).map((p) => (
          <img key={p} src={cld(p, 520, 390)} alt="Volunteers and families at the food pantry" loading="lazy" decoding="async" className="snap-start shrink-0 w-64 md:w-72 aspect-[4/3] object-cover rounded-2xl" />
        ))}
      </div>
    </section>
  );
}
