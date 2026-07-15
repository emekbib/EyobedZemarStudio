import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'Music Production',
    desc: 'From initial concept to polished final track. We handle arrangement, beat-making, recording, and creative direction across genres.',
    tags: ['Arrangement', 'Beat Making', 'Creative Direction'],
  },
  {
    num: '02',
    title: 'Recording & Mixing',
    desc: 'Studio-grade recording sessions with professional mixing and mastering. Your tracks get the clarity and depth they deserve.',
    tags: ['Recording', 'Mixing', 'Mastering'],
  },
  {
    num: '03',
    title: 'Guitar Lessons',
    desc: 'Personalized one-on-one guitar instruction for all skill levels. Learn technique, theory, and the songs you love.',
    tags: ['Beginner to Advanced', 'Acoustic & Electric', 'Music Theory'],
  },
  {
    num: '04',
    title: 'Songwriting Support',
    desc: 'Collaborative songwriting sessions to help you find your voice. Structure, lyrics, melody — we work through it together.',
    tags: ['Lyrics', 'Melody', 'Song Structure'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-up">
          <div>
            <p className="font-manrope text-sm font-medium text-primary tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-tight tracking-tight text-dark text-balance">
              Services built around
              <br />
              your sound.
            </h2>
          </div>
          <p className="font-manrope text-dark/50 max-w-sm leading-relaxed">
            Every project is unique. We tailor our approach to your goals,
            your genre, and your creative vision.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-dark/5 rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-manrope font-bold text-sm text-primary/40">
                  {service.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center group-hover:bg-primary transition-all">
                  <ArrowUpRight className="w-5 h-5 text-dark/40 group-hover:text-dark group-hover:rotate-45 transition-all" />
                </div>
              </div>
              <h3 className="font-manrope font-bold text-2xl text-dark mb-3">
                {service.title}
              </h3>
              <p className="font-manrope text-dark/60 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-manrope text-xs font-medium text-dark/50 bg-warm-gray/50 rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
