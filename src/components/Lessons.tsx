import { Music, Star, ArrowRight } from 'lucide-react';

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
    text: "Eyobed is very knowledgeable and reliable, he's doing an amazing job teaching me how to play guitar, his dedication and patience has been outstanding.",
    rating: 5,
  },
];

const SKILL_LEVELS = [
  {
    num: '01',
    level: 'Beginner',
    tags: ['Chords', 'Rhythm', 'Technique', 'Songs', 'Fundamentals'],
  },
  {
    num: '02',
    level: 'Intermediate',
    tags: ['Fretboard', 'Theory', 'Improvisation', 'Timing', 'Lead Guitar'],
  },
  {
    num: '03',
    level: 'Advanced',
    tags: ['Harmony', 'Improvisation', 'Tone', 'Phrasing', 'Professional Musicianship'],
  },
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
            Personalized guitar lessons designed to help you become a confident,
            musical player — not just memorize chords and exercises.
          </p>
          <p className="font-manrope text-dark/50 max-w-xl mx-auto mt-4 leading-relaxed">
            Whether you're picking up the guitar for the first time or looking
            to improve your technique, theory, improvisation, rhythm or lead
            playing, lessons are built around your goals and the music you want
            to play.
          </p>
        </div>

        {/* Skill Level Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SKILL_LEVELS.map((skill, i) => (
            <div
              key={skill.level}
              className="group bg-white border border-dark/5 rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                  <span className="font-manrope font-bold text-sm text-primary group-hover:text-dark transition-colors">
                    {skill.num}
                  </span>
                </div>
                <h3 className="font-manrope font-bold text-2xl text-dark">
                  {skill.level}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
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

        {/* In-Person & Online + CTA */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <span className="font-manrope font-bold text-primary text-sm">
              In-Person & Online Lessons Available
            </span>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex bg-dark text-cream font-manrope font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-dark transition-all items-center gap-2 group"
            >
              Book a Guitar Lesson
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
