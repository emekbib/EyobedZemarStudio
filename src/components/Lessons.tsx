import { Check, Music, Star } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '$30',
    period: '/lesson',
    desc: 'Perfect for beginners just starting their guitar journey.',
    features: [
      '30-minute weekly lesson',
      'Basic chords & strumming',
      'Simple song tutorials',
      'Practice materials included',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$50',
    period: '/lesson',
    desc: 'For intermediate players ready to level up their skills.',
    features: [
      '60-minute weekly lesson',
      'Technique & theory deep-dive',
      'Genre-specific training',
      'Personalized practice plan',
      'Recording session feedback',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$80',
    period: '/lesson',
    desc: 'Advanced instruction with production and performance focus.',
    features: [
      '90-minute weekly lesson',
      'Advanced technique mastery',
      'Songwriting & composition',
      'Studio recording time included',
      'Performance preparation',
      'Flexible scheduling',
    ],
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Guitar Student',
    text: 'Zemar completely transformed my playing. I went from struggling with basic chords to performing at open mics in just six months. The patience and expertise is unmatched.',
    rating: 5,
  },
  {
    name: 'James K.',
    role: 'Recording Artist',
    text: 'Recorded my first EP here and the quality blew me away. The production guidance helped me find a sound I didn\'t even know I was looking for.',
    rating: 5,
  },
  {
    name: 'Lena T.',
    role: 'Guitar Student',
    text: 'My kids love their lessons here. Fun, engaging, and actually educational. They\'ve progressed more in 3 months than a year of online tutorials.',
    rating: 5,
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
            One-on-one guitar instruction for all ages and skill levels.
            Choose the plan that fits your goals.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 transition-all duration-500 animate-fade-up ${
                plan.highlight
                  ? 'bg-dark text-cream shadow-[0_20px_60px_rgba(244,153,87,0.25)] md:-translate-y-4'
                  : 'bg-white border border-dark/5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-dark font-manrope text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`font-manrope font-bold text-xl mb-2 ${plan.highlight ? 'text-cream' : 'text-dark'}`}>
                {plan.name}
              </h3>
              <p className={`font-manrope text-sm mb-6 ${plan.highlight ? 'text-cream/60' : 'text-dark/50'}`}>
                {plan.desc}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-manrope font-bold text-4xl ${plan.highlight ? 'text-primary' : 'text-dark'}`}>
                  {plan.price}
                </span>
                <span className={`font-manrope text-sm ${plan.highlight ? 'text-cream/50' : 'text-dark/40'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className={`font-manrope text-sm ${plan.highlight ? 'text-cream/80' : 'text-dark/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-manrope font-bold py-3.5 rounded-full transition-all ${
                  plan.highlight
                    ? 'bg-primary text-dark hover:bg-primary/90'
                    : 'bg-dark text-cream hover:bg-primary hover:text-dark'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="animate-fade-up">
          <h3 className="font-manrope font-bold text-2xl md:text-3xl text-dark text-center mb-12">
            What students & clients say.
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
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
