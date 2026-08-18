import { Instagram, Youtube, Mail, Phone, ArrowUp, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-dark/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center flex-shrink-0">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-manrope font-bold text-3xl text-dark tracking-tight">
                ZEMAR<span className="text-primary">.</span>STUDIO
              </h3>
            </div>
            <p className="font-manrope text-dark/50 max-w-sm leading-relaxed">
              Music production and guitar instruction. Helping artists and
              students find their sound since 2014.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-primary transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-dark/60 group-hover:text-dark transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-primary transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-dark/60 group-hover:text-dark transition-colors" />
              </a>
              <a
                href="mailto:eyobedtho@gmail.com"
                className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-primary transition-all group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-dark/60 group-hover:text-dark transition-colors" />
              </a>
              <a
                href="tel:+15551234567"
                className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-primary transition-all group"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-dark/60 group-hover:text-dark transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-manrope font-bold text-sm text-dark mb-4 uppercase tracking-wide">
              Explore
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Lessons', href: '#lessons' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-manrope text-sm text-dark/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-manrope font-bold text-sm text-dark mb-4 uppercase tracking-wide">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:eyobedtho@gmail.com" className="font-manrope text-sm text-dark/50 hover:text-primary transition-colors">
                  eyobedtho@gmail.com
                </a>
              </li>
              <li>
                <span className="font-manrope text-sm text-dark/50">
                  Eyobed Thomas
                </span>
              </li>
              <li className="font-manrope text-sm text-dark/50">
                Mon–Sat, 10am–8pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-dark/10">
          <p className="font-manrope text-xs text-dark/40">
            © {new Date().getFullYear()} Zemar Studio. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 font-manrope text-xs text-dark/40 hover:text-primary transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-full bg-dark/5 flex items-center justify-center group-hover:bg-primary transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
