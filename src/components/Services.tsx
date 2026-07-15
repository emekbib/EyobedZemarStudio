import { ArrowUpRight, Music, Mic, Sliders, Guitar, GraduationCap } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'Guitar Lessons',
    icon: GraduationCap,
    desc: 'Eyobed Thomas teaches guitar lessons for interested musicians at any stage or age. Beginning, intermediate, or advanced lessons available — in-person or virtually.',
    tags: ['All Ages & Levels', 'In-Person or Virtual', 'Personalized Instruction'],
  },
  {
    num: '02',
    title: 'Music Production',
    icon: Music,
    desc: 'From initial concept to polished final track. Full production including arrangement, beat-making, recording, and creative direction across genres.',
    tags: ['Arrangement', 'Recording', 'Creative Direction'],
  },
  {
    num: '03',
    title: 'Mixing and Mastering',
    icon: Sliders,
    desc: 'Professional mixing and mastering to give your tracks clarity, depth, and radio-ready polish.',
    tags: ['Mixing', 'Mastering', 'Final Polish'],
  },
  {
    num: '04',
    title: 'Vocal Recording',
    icon: Mic,
    desc: 'Studio-grade vocal recording sessions in a comfortable, professional environment.',
    tags: ['Studio Recording', 'Vocal Production'],
  },
  {
    num: '05',
    title: 'Live Guitar Recording',
    icon: Guitar,
    desc: 'Live guitar recording for artists — acoustic or electric, solo or layered. Professional capture of your performance.',
    tags: ['Acoustic & Electric', 'Live Performance'],
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
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-dark transition-colors" />
                  </div>
                  <span className="font-manrope font-bold text-sm text-primary/40">
                    {service.num}
                  </span>
                </div>
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
