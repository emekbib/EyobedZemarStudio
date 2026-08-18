import { ArrowDown, ArrowRight, Music, Video } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cream"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[80px] animate-fade-in" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-light-orange/20 rounded-full blur-[100px] animate-fade-in delay-200" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-dark/5 border border-dark/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-manrope text-xs font-medium text-dark/60 tracking-wide">
                Music Production & Guitar Instruction
              </span>
            </div>

            <h1 className="font-manrope font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-dark text-balance">
              Where <span className="text-primary">sound</span> meets
              <br />
              <span className="relative inline-block">
                craft
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="#f49957"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="font-manrope text-lg text-dark/60 mt-8 max-w-xl leading-relaxed">
              Zemar Studio is a creative music production and guitar education
              studio helping artists turn ideas into finished music. From
              production and arrangement to recording and mixing, we bring your
              musical vision to life — while helping guitarists develop their
              sound and musicianship.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#contact"
                className="group bg-dark text-cream font-manrope font-bold px-7 py-4 rounded-full flex items-center gap-2 hover:bg-primary hover:text-dark transition-all"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Start Your Project
              </a>
              <a
                href="#lessons"
                className="group font-manrope font-bold text-dark px-7 py-4 rounded-full border-2 border-dark/15 hover:border-primary hover:text-primary transition-all flex items-center gap-2"
              >
                <Music className="w-4 h-4" />
                Book Guitar Lessons
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-dark/10">
              <div>
                <p className="font-manrope font-bold text-3xl text-dark">15+</p>
                <p className="font-manrope text-sm text-dark/50 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-manrope font-bold text-3xl text-dark">50+</p>
                <p className="font-manrope text-sm text-dark/50 mt-1">Music Projects</p>
              </div>
              <div>
                <p className="font-manrope font-bold text-3xl text-dark">20+</p>
                <p className="font-manrope text-sm text-dark/50 mt-1">Students Taught</p>
              </div>
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="lg:col-span-5 relative animate-fade-up delay-300">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <img
                  src="/assets/images/5492C193-3B61-4CD6-8A69-363C7B95FEA0.jpg"
                  alt="Zemar Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                {/* Floating tag */}
                <div className="absolute bottom-4 left-4 bg-cream/90 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  <span className="font-manrope text-xs font-medium text-dark">
                    Studio Session
                  </span>
                </div>
              </div>

              {/* Small images */}
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="/assets/images/6D45961A-9DC3-458A-B3FD-7219E0621814.PNG"
                  alt="Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="/assets/images/85819A81-B831-49AB-810C-DFADFAD5E0C2.PNG"
                  alt="Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-dark rounded-2xl px-5 py-3 shadow-xl rotate-3 animate-fade-in delay-500">
              <p className="font-manrope font-bold text-sm">Est. 2014</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark/40 hover:text-primary transition-colors animate-fade-in delay-700"
      >
        <span className="font-manrope text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
