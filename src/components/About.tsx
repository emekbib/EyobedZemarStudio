import { Music, Headphones, GraduationCap, Lightbulb } from 'lucide-react';

const MARQUEE_ITEMS = [
  'Music Production',
  'Guitar Lessons',
  'Audio Recording',
  'Mixing',
  'Songwriting',
  'Music Theory',
  'Studio Sessions',
  'Creative Direction',
];

const FEATURE_CARDS = [
  { icon: Music, title: 'Production', desc: 'Full-track production, arrangement and creative direction.' },
  { icon: Headphones, title: 'Recording', desc: 'Professional vocal and instrument recording.' },
  { icon: GraduationCap, title: 'Education', desc: 'Personalized guitar instruction for all skill levels.' },
  { icon: Lightbulb, title: 'Creative Development', desc: 'Song arrangement, musical direction and artist development.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark text-cream overflow-hidden">
      {/* Marquee strip */}
      <div className="absolute top-0 left-0 right-0 py-4 border-b border-cream/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-manrope font-bold text-lg text-cream/30 mx-8 flex items-center gap-8"
            >
              {item}
              <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading + copy + founder */}
          <div className="animate-fade-up">
            <p className="font-manrope text-sm font-medium text-primary tracking-widest uppercase mb-4">
              About the Studio
            </p>
            <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-tight tracking-tight text-balance">
              A space built for
              <br />
              <span className="text-primary">creative sound.</span>
            </h2>
            <div className="mt-8 space-y-4">
              <p className="font-manrope text-cream/60 text-lg leading-relaxed">
                Zemar Studio is a creative music production and education studio
                founded by producer, guitarist, and instructor Eyobed Thomas.
              </p>
              <p className="font-manrope text-cream/50 text-base leading-relaxed">
                We help artists develop their music from the first idea to the
                finished record through production, arrangement, recording,
                instrumentation, and mixing.
              </p>
              <p className="font-manrope text-cream/50 text-base leading-relaxed">
                We also provide personalized guitar instruction for beginner,
                intermediate, and advanced players, both in-person and online.
              </p>
              <p className="font-manrope text-cream/50 text-base leading-relaxed">
                Whether you're developing your next song or developing your skills
                as a musician, Zemar Studio provides the creative environment,
                experience, and personal attention to help you move forward.
              </p>
            </div>

            {/* Founder */}
            <div className="mt-8 pt-8 border-t border-cream/10">
              <p className="font-manrope text-sm text-primary tracking-wide uppercase mb-2">
                Founded by
              </p>
              <p className="font-manrope font-bold text-xl text-cream">Eyobed Thomas</p>
              <p className="font-manrope text-sm text-cream/50 mt-1">
                Producer &bull; Guitarist &bull; Instructor
              </p>
            </div>
          </div>

          {/* Right: Image + Feature cards */}
          <div className="animate-fade-up delay-200">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-4 group">
              <img
                src="/assets/images/Image_Aug_10,_2026,_10_00_54_AM.png"
                alt="Eyobed Thomas in the studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {FEATURE_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="bg-cream/5 border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-manrope font-bold text-lg text-cream mb-2">
                    {card.title}
                  </h3>
                  <p className="font-manrope text-sm text-cream/50 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
