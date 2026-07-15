import { Check, Music, Star, Clock, Users, MapPin, Video } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Misgana W.',
    role: 'Guitar Student, 2024–2025',
    text: 'Taking guitar lessons with Eyobed has been a fantastic experience. He is extremely knowledgeable and talented and his teaching style is both engaging and effective. Each lesson is well structured and he always provides helpful tips and techniques to improve my playing. He makes sure I understand each lesson thoroughly and provides personalized feedback and adjusts the lesson to fit my learning pace perfectly. I have seen significant improvement in my playing and highly recommend Eyobed to anyone serious about learning guitar.',
    rating: 5,
  },
  {
    name: 'Abelizer A.',
    role: 'Guitar Student, 2024',
    text: 'Eyobed is very knowledgeable and reliable, he\u2019s doing an amazing job teaching me how to play guitar, his dedication and patience has been outstanding.',
    rating: 5,
  },
];

const FEATURES = [
  { icon: Users, text: 'All ages & skill levels welcome' },
  { icon: Video, text: 'In-person or virtual lessons' },
  { icon: MapPin, text: 'Personalized to your pace & goals' },
];

export default function Lessons() {
  return (
    <section id="lessons" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Music className="w-4 h-4 text-primary" />
            <span className="font-manrope text-xs font-medium text-primary tracking-wide">
              Guitar Lessons
            </span>
          </div>
          <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-tight tracking-tight text-dark text-balance">
            Learn to play with
            <br />
            <span className="text-primary">purpose.</span>
          </h2>
          <p className="font-manrope text-dark/50 max-w-xl mx-auto mt-6 leading-relaxed">
            Eyobed Thomas is available to teach guitar lessons for interested
            musicians at any stage or age. Beginning, intermediate, or advanced
            lessons — in-person or virtually.
          </p>
        </div>

        {/* Pricing */}
        <div className="max-w-2xl mx-auto mb-20 animate-fade-up">
          <div className="bg-dark text-cream rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {FEATURES.map((f) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-2 bg-cream/5 border border-cream/10 rounded-full px-4 py-2"
                  >
                    <f.icon className="w-4 h-4 text-primary" />
                    <span className="font-manrope text-xs text-cream/70">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="font-manrope font-bold text-6xl text-primary">$45</span>
                <span className="font-manrope text-cream/50 text-lg">/ 50-minute lesson</span>
              </div>
              <p className="font-manrope text-cream/40 text-sm mb-8">
                Submit an inquiry for package deals and group rates.
              </p>
              <a
                href="#contact"
                className="inline-flex bg-primary hover:bg-primary/90 text-dark font-manrope font-bold px-8 py-4 rounded-full transition-all"
              >
                Submit Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-fade-up">
          <h3 className="font-manrope font-bold text-2xl md:text-3xl text-dark text-center mb-12">
            What students say.
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-dark/5 rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-manrope text-dark/70 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-manrope font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-manrope font-bold text-sm text-dark">{t.name}</p>
                    <p className="font-manrope text-xs text-dark/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
