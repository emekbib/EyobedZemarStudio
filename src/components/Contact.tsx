import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const SERVICES = [
  'Music Production',
  'Recording',
  'Mixing',
  'Guitar Lessons',
  'Session Guitar',
  'Other',
];

const inputClass =
  'w-full bg-dark/40 border border-cream/10 rounded-xl px-4 py-3 font-manrope text-cream placeholder-cream/30 outline-none focus:border-primary/50 transition-colors';
const labelClass = 'block font-manrope text-sm text-cream/60 mb-2';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const { error: insertError } = await supabase.from('inquiries').insert({
        inquiry_type: 'general',
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      });
      if (insertError) throw insertError;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', service: '', message: '' });
      }, 4000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark text-cream relative overflow-hidden">
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
            <span className="text-primary">something together.</span>
          </h2>
          <p className="font-manrope text-cream/50 max-w-xl mx-auto mt-6 leading-relaxed">
            Whether you're ready to produce your next song, book a recording
            session, improve an existing project, or start guitar lessons,
            I'd love to hear what you're working on.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto animate-fade-up">
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
                  Thanks for reaching out!
                </h3>
                <p className="font-manrope text-cream/50 text-sm">
                  Eyobed will get back to you soon.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-4">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="font-manrope text-sm text-red-300">
                      Something went wrong. Please try again or email eyobedtho@gmail.com
                    </p>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                {/* Service selection */}
                <div className="mb-4">
                  <label className={labelClass}>Service</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((service) => {
                      const selected = form.service === service;
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => setForm({ ...form, service })}
                          className={`font-manrope text-sm font-medium rounded-full px-4 py-2.5 border transition-all ${
                            selected
                              ? 'bg-primary/15 border-primary/40 text-cream'
                              : 'bg-dark/40 border-cream/10 text-cream/50 hover:border-cream/20'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="hidden"
                    required
                    value={form.service}
                    onChange={() => {}}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className={labelClass}>Tell me about your project</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Share your goals, timeline, and what you're looking to accomplish…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !form.service}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-dark font-manrope font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:gap-3 group"
                >
                  {submitting ? 'Submitting…' : 'Start Your Project'}
                  {!submitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>

                {/* Note */}
                <p className="font-manrope text-sm text-cream/40 text-center mt-5">
                  Have music ready? You can include a demo or reference track when you contact us.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
