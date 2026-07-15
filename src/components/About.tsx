import { Music, Headphones, GraduationCap, Mic } from 'lucide-react';

const MARQUEE_ITEMS = [
  'Music Production',
  'Guitar Lessons',
  'Audio Recording',
  'Mixing & Mastering',
  'Songwriting',
  'Music Theory',
  'Studio Sessions',
  'Creative Direction',
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
          {/* Left: Heading */}
          <div className="animate-fade-up">
            <p className="font-manrope text-sm font-medium text-primary tracking-widest uppercase mb-4">
              About the Studio
            </p>
            <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-tight tracking-tight text-balance">
              A space built for
              <br />
              <span className="text-primary">creative sound.</span>
            </h2>
            <p className="font-manrope text-cream/60 text-lg mt-8 leading-relaxed">
              Zemar Studio bridges two worlds: professional music production and
              personalized guitar instruction. Founded on the belief that great
              music comes from both technical skill and creative freedom, we
              provide the environment, tools, and guidance to bring your sound to life.
            </p>
            <p className="font-manrope text-cream/50 text-base mt-4 leading-relaxed">
              Whether you're an artist looking to record your next single or a student
              picking up a guitar for the first time, you'll find a home here.
            </p>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
            {[
              { icon: Music, title: 'Production', desc: 'Full-track production from concept to final mix.' },
              { icon: Headphones, title: 'Recording', desc: 'Professional studio recording with quality gear.' },
              { icon: GraduationCap, title: 'Education', desc: 'Guitar lessons for all ages and skill levels.' },
              { icon: Mic, title: 'Creative', desc: 'Songwriting support and artistic direction.' },
            ].map((card, i) => (
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
    </section>
  );
}
