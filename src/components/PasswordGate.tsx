import { useState, useEffect } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const DEMO_PASSWORD = 'zemar2024';

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const unlocked = sessionStorage.getItem('zemar_demo_unlocked');
    if (unlocked === 'true') onUnlock();
  }, [onUnlock]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem('zemar_demo_unlocked', 'true');
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-fade-in" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-light-orange/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-md animate-fade-up">
        {/* Logo / Brand */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-manrope font-bold text-3xl text-cream tracking-tight">
            ZEMAR<span className="text-primary">.</span>STUDIO
          </h1>
          <p className="font-manrope text-sm text-cream/50 mt-3 tracking-widest uppercase">
            Demo Preview Access
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`bg-cream/5 backdrop-blur-xl border border-cream/10 rounded-2xl p-8 ${shaking ? 'animate-shake' : ''}`}
          style={shaking ? { animation: 'shake 0.5s' } : {}}
        >
          <label className="block text-sm font-manrope font-medium text-cream/70 mb-3">
            Enter Demo Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="••••••••"
            autoFocus
            className={`w-full bg-dark/40 border rounded-xl px-4 py-3.5 font-manrope text-cream placeholder-cream/30 outline-none transition-all ${
              error
                ? 'border-red-400/60 focus:border-red-400'
                : 'border-cream/10 focus:border-primary/50'
            }`}
          />
          {error && (
            <p className="text-red-400 text-sm mt-3 font-manrope">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full mt-6 bg-primary hover:bg-primary/90 text-dark font-manrope font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:gap-3 group"
          >
            Enter Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-center text-xs text-cream/40 mt-5 font-manrope">
            Hint: zemar2024
          </p>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
