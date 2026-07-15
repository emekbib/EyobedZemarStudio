import { useState } from 'react';
import { Music, Headphones, Send, Check, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormType = 'guitar_lesson' | 'general';

type LessonFormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  level: '' | 'Beginner' | 'Intermediate' | 'Advanced';
  lessonType: '' | 'In-person' | 'Virtual' | 'Both';
};

type GeneralFormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  services: string[];
  message: string;
};

const GENERAL_SERVICES = [
  'Music Production',
  'Mixing and Mastering',
  'Vocal Recording',
  'Live Guitar Recording',
];

const inputClass =
  'w-full bg-dark/40 border border-cream/10 rounded-xl px-4 py-3 font-manrope text-cream placeholder-cream/30 outline-none focus:border-primary/50 transition-colors';
const labelClass = 'block font-manrope text-sm text-cream/60 mb-2';

export default function Contact() {
  const [formType, setFormType] = useState<FormType>('guitar_lesson');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [lessonForm, setLessonForm] = useState<LessonFormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    level: '',
    lessonType: '',
  });

  const [generalForm, setGeneralForm] = useState<GeneralFormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    services: [],
    message: '',
  });

  const toggleService = (service: string) => {
    setGeneralForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      if (formType === 'guitar_lesson') {
        const { error: insertError } = await supabase.from('inquiries').insert({
          inquiry_type: 'guitar_lesson',
          name: lessonForm.name,
          email: lessonForm.email,
          phone: lessonForm.phone,
          location: lessonForm.location,
          level: lessonForm.level || null,
          lesson_type: lessonForm.lessonType || null,
        });
        if (insertError) throw insertError;
      } else {
        const { error: insertError } = await supabase.from('inquiries').insert({
          inquiry_type: 'general',
          name: generalForm.name,
          email: generalForm.email,
          phone: generalForm.phone,
          location: generalForm.location,
          requested_services: generalForm.services.length ? generalForm.services : null,
          message: generalForm.message || null,
        });
        if (insertError) throw insertError;
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setLessonForm({ name: '', email: '', phone: '', location: '', level: '', lessonType: '' });
        setGeneralForm({ name: '', email: '', phone: '', location: '', services: [], message: '' });
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
            <span className="text-primary">something.</span>
          </h2>
          <p className="font-manrope text-cream/50 max-w-xl mx-auto mt-6 leading-relaxed">
            Submit an inquiry and Eyobed will personally reach out to you.
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
                onClick={() => setFormType('guitar_lesson')}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                  formType === 'guitar_lesson'
                    ? 'bg-primary/15 border-primary/40'
                    : 'bg-cream/5 border-cream/10 hover:border-cream/20'
                }`}
              >
                <Music className={`w-5 h-5 ${formType === 'guitar_lesson' ? 'text-primary' : 'text-cream/50'}`} />
                <div>
                  <p className="font-manrope font-bold text-sm">Guitar Lessons</p>
                  <p className="font-manrope text-xs text-cream/40">All ages & levels</p>
                </div>
              </button>
              <button
                onClick={() => setFormType('general')}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                  formType === 'general'
                    ? 'bg-primary/15 border-primary/40'
                    : 'bg-cream/5 border-cream/10 hover:border-cream/20'
                }`}
              >
                <Headphones className={`w-5 h-5 ${formType === 'general' ? 'text-primary' : 'text-cream/50'}`} />
                <div>
                  <p className="font-manrope font-bold text-sm">General Inquiry</p>
                  <p className="font-manrope text-xs text-cream/40">Production, mixing, recording</p>
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
            </div>

            <div className="mt-8 bg-cream/5 border border-cream/10 rounded-2xl p-5">
              <p className="font-manrope text-xs text-cream/50 leading-relaxed">
                {formType === 'guitar_lesson'
                  ? 'Eyobed will reach out before sending a link to schedule lessons.'
                  : 'Eyobed will follow up with you for more information and pricing/package deals.'}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-fade-up">
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
                    Inquiry submitted!
                  </h3>
                  <p className="font-manrope text-cream/50 text-sm">
                    Eyobed will reach out to you soon.
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
                      <label className={labelClass}>First and Last Name</label>
                      <input
                        type="text"
                        required
                        value={formType === 'guitar_lesson' ? lessonForm.name : generalForm.name}
                        onChange={(e) =>
                          formType === 'guitar_lesson'
                            ? setLessonForm({ ...lessonForm, name: e.target.value })
                            : setGeneralForm({ ...generalForm, name: e.target.value })
                        }
                        className={inputClass}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={formType === 'guitar_lesson' ? lessonForm.email : generalForm.email}
                        onChange={(e) =>
                          formType === 'guitar_lesson'
                            ? setLessonForm({ ...lessonForm, email: e.target.value })
                            : setGeneralForm({ ...generalForm, email: e.target.value })
                        }
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Location */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formType === 'guitar_lesson' ? lessonForm.phone : generalForm.phone}
                        onChange={(e) =>
                          formType === 'guitar_lesson'
                            ? setLessonForm({ ...lessonForm, phone: e.target.value })
                            : setGeneralForm({ ...generalForm, phone: e.target.value })
                        }
                        className={inputClass}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Location (City, State)</label>
                      <input
                        type="text"
                        required
                        value={formType === 'guitar_lesson' ? lessonForm.location : generalForm.location}
                        onChange={(e) =>
                          formType === 'guitar_lesson'
                            ? setLessonForm({ ...lessonForm, location: e.target.value })
                            : setGeneralForm({ ...generalForm, location: e.target.value })
                        }
                        className={inputClass}
                        placeholder="Atlanta, GA"
                      />
                    </div>
                  </div>

                  {/* Guitar Lesson: Level + Lesson Type */}
                  {formType === 'guitar_lesson' && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className={labelClass}>Level</label>
                        <select
                          required
                          value={lessonForm.level}
                          onChange={(e) => setLessonForm({ ...lessonForm, level: e.target.value as LessonFormData['level'] })}
                          className={inputClass}
                        >
                          <option value="" disabled>Select level</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Preferred Lesson Type</label>
                        <select
                          required
                          value={lessonForm.lessonType}
                          onChange={(e) => setLessonForm({ ...lessonForm, lessonType: e.target.value as LessonFormData['lessonType'] })}
                          className={inputClass}
                        >
                          <option value="" disabled>Select type</option>
                          <option value="In-person">In-person</option>
                          <option value="Virtual">Virtual</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* General: Service multi-select + message */}
                  {formType === 'general' && (
                    <>
                      <div className="mb-6">
                        <label className={labelClass}>
                          Requested Service <span className="text-cream/30">(select all that apply)</span>
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {GENERAL_SERVICES.map((service) => {
                            const selected = generalForm.services.includes(service);
                            return (
                              <button
                                type="button"
                                key={service}
                                onClick={() => toggleService(service)}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 font-manrope text-sm border transition-all text-left ${
                                  selected
                                    ? 'bg-primary/15 border-primary/40 text-cream'
                                    : 'bg-dark/40 border-cream/10 text-cream/50 hover:border-cream/20'
                                }`}
                              >
                                <div
                                  className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                                    selected ? 'bg-primary border-primary' : 'border-cream/20'
                                  }`}
                                >
                                  {selected && <Check className="w-3.5 h-3.5 text-dark" />}
                                </div>
                                {service}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className={labelClass}>
                          Additional Details <span className="text-cream/30">(optional)</span>
                        </label>
                        <textarea
                          rows={4}
                          value={generalForm.message}
                          onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                          className={`${inputClass} resize-none`}
                          placeholder="Tell us about your project, timeline, goals..."
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-dark font-manrope font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:gap-3 group"
                  >
                    {submitting ? 'Submitting...' : 'Submit Inquiry'}
                    {!submitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
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
