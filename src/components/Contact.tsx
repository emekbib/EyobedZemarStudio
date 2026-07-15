import { useState } from 'react';
import { Music, Headphones, Send, Check } from 'lucide-react';

type FormType = 'production' | 'lessons';

export default function Contact() {
  const [formType, setFormType] = useState<FormType>('production');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark text-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-light-orange/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-manrope text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-tight tracking-tight text-balance">
            Let's create
            <br />
            <span className="text-primary">something.</span>
          </h2>
          <p className="font-manrope text-cream/50 max-w-xl mx-auto mt-6 leading-relaxed">
            Whether you want to book a studio session or start guitar lessons,
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Toggle + info */}
          <div className="lg:col-span-2 animate-fade-up">
            <p className="font-manrope text-sm text-cream/40 mb-4 uppercase tracking-wide">
              Inquiry Type
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setFormType('production')}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                  formType === 'production'
                    ? 'bg-primary/15 border-primary/40'
                    : 'bg-cream/5 border-cream/10 hover:border-cream/20'
                }`}
              >
                <Headphones className={`w-5 h-5 ${formType === 'production' ? 'text-primary' : 'text-cream/50'}`} />
                <div>
                  <p className="font-manrope font-bold text-sm">Music Production</p>
                  <p className="font-manrope text-xs text-cream/40">Recording, mixing, production</p>
                </div>
              </button>
              <button
                onClick={() => setFormType('lessons')}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                  formType === 'lessons'
                    ? 'bg-primary/15 border-primary/40'
                    : 'bg-cream/5 border-cream/10 hover:border-cream/20'
                }`}
              >
                <Music className={`w-5 h-5 ${formType === 'lessons' ? 'text-primary' : 'text-cream/50'}`} />
                <div>
                  <p className="font-manrope font-bold text-sm">Guitar Lessons</p>
                  <p className="font-manrope text-xs text-cream/40">1-on-1 instruction</p>
                </div>
              </button>
            </div>

            {/* Contact details */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-cream/60">
                <span className="font-manrope text-sm">eyobedtho@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-cream/60">
                <span className="font-manrope text-sm">Eyobed Thomas</span>
              </div>
              <div className="flex items-center gap-3 text-cream/60">
                <span className="font-manrope text-sm">Mon–Sat, 10am–8pm</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-fade-up delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-3xl p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-dark" />
                  </div>
                  <h3 className="font-manrope font-bold text-xl text-cream mb-2">
                    Message sent!
                  </h3>
                  <p className="font-manrope text-cream/50 text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-manrope text-sm text-cream/60 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-dark/40 border border-cream/10 rounded-xl px-4 py-3 font-manrope text-cream placeholder-cream/30 outline-none focus:border-primary/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-manrope text-sm text-cream/60 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-dark/40 border border-cream/10 rounded-xl px-4 py-3 font-manrope text-cream placeholder-cream/30 outline-none focus:border-primary/50 transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block font-manrope text-sm text-cream/60 mb-2">
                      {formType === 'production' ? 'Project Details' : 'What do you want to learn?'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark/40 border border-cream/10 rounded-xl px-4 py-3 font-manrope text-cream placeholder-cream/30 outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder={formType === 'production'
                        ? 'Tell us about your project, genre, timeline...'
                        : 'Tell us your skill level, goals, preferred genres...'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-dark font-manrope font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:gap-3 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
