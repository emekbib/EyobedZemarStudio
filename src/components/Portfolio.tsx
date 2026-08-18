import { useState } from 'react';
import { Play, ExternalLink, Youtube, Instagram, Music2 } from 'lucide-react';

type Category = 'production' | 'recording' | 'guitar';

interface Project {
  artist: string;
  title: string;
  id: string;
  categories: Category[];
  tags: string[];
  album?: boolean;
}

const YOHANNES_ALBUM = [
  { title: 'Geremegn Madani (Live)', id: 'WnSLlCEep5o' },
  { title: 'Semh (Live)', id: 'eDHi46GJwBk' },
  { title: 'Ayalehu (Live)', id: 'iVEozldSZOQ' },
  { title: "Wa'a (Live)", id: 'hRBaMmeMfas' },
  { title: 'Lekebr Yemehon Eka (Live)', id: 'XZbQIFwnvsE' },
  { title: 'Lezelalem Lamesginih (Live)', id: 'tUmzJKTOKYE' },
  { title: 'Badis Zimare (Live)', id: '3cy1vyocAxo' },
];

const PROJECTS: Project[] = [
  { artist: 'Yohannes Girma', title: 'Geremegn Madani — Live Album', id: 'WnSLlCEep5o', categories: ['production'], tags: ['Production', 'Arrangement', 'Guitar'], album: true },
  { artist: 'Kenean Abiy', title: 'Addis Misgana', id: 'd6jeQlMtXLE', categories: ['production', 'recording'], tags: ['Music Production', 'Guitar', 'Recording'] },
  { artist: 'Hasset Zel', title: 'You Care', id: 'd8TPvLBqyMg', categories: ['production', 'recording'], tags: ['Music Production', 'Guitar', 'Recording'] },
  { artist: 'Natnael Woldab', title: 'Eyayehu', id: 'KDilWGEupE4', categories: ['production'], tags: ['Music Production', 'Guitar'] },
  { artist: 'Samuel Negussie', title: 'Tewedengaleh', id: 'MBXndB-9rUo', categories: ['production'], tags: ['Music Production', 'Guitar'] },
  { artist: 'Guitar Performance', title: 'Yehagere Lij', id: 'a4pSdsYNSAE', categories: ['guitar'], tags: ['Guitar Performance'] },
  { artist: 'Guitar Performance', title: 'Marken', id: 'HLNKyPkIFS8', categories: ['guitar'], tags: ['Guitar Performance'] },
  { artist: 'Guitar Performance', title: 'Etsenalew', id: 'hIt7WdqYmSc', categories: ['guitar'], tags: ['Guitar Performance'] },
  { artist: 'Guitar Performance', title: 'Milew Misgana New', id: '3tVYn8a_l9U', categories: ['guitar'], tags: ['Guitar Performance'] },
  { artist: 'Guitar Performance', title: 'Demun Lene', id: 'DrR-Nk9I550', categories: ['guitar'], tags: ['Guitar Performance'] },
  { artist: 'Guitar Performance', title: 'Yihe New', id: '3SUf8_y0MBE', categories: ['guitar'], tags: ['Guitar Performance'] },
];

const SOCIAL_LINKS = [
  { label: 'Zemar Guitar — YouTube', url: 'https://www.youtube.com/@zemarguitaroffficial', icon: Youtube },
  { label: 'Eyobed Thomas — Instagram', url: 'https://www.instagram.com/obedtho/', icon: Instagram },
  { label: 'Eyobed Thomas \u2014 TikTok', url: 'https://www.tiktok.com/@obedtho?is_from_webapp=1&sender_device=pc', icon: Music2 },
];

const CATEGORY_LABELS: Record<Category, string> = {
  production: 'Music Production',
  recording: 'Recording',
  guitar: 'Guitar Performance',
};

function VideoCard({ project }: { project: Project }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${project.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-cream rounded-2xl overflow-hidden border border-dark/5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden bg-dark">
        <img
          src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-dark/30 group-hover:bg-dark/20 transition-all">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-dark fill-dark ml-1" />
          </div>
        </div>
        {project.album && (
          <span className="absolute top-3 left-3 bg-primary text-dark rounded-full px-3 py-1.5 font-manrope text-xs font-bold">
            Live Album
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="font-manrope text-xs font-medium text-primary mb-1">{project.artist}</p>
        <h3 className="font-manrope font-bold text-base text-dark leading-snug mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-manrope text-xs font-medium text-dark/50 bg-warm-gray/50 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [category, setCategory] = useState<Category>('production');
  const [albumOpen, setAlbumOpen] = useState(false);

  const filteredProjects = PROJECTS.filter((p) => p.categories.includes(category));

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-warm-gray/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="font-manrope text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-manrope font-bold text-4xl md:text-5xl leading-tight tracking-tight text-dark text-balance">
            Recent work & sessions.
          </h2>
          <p className="font-manrope text-dark/50 max-w-xl mx-auto mt-6 leading-relaxed">
            A selection of productions, live recordings, and guitar performances.
            Click any video to watch on YouTube.
          </p>
        </div>

        {/* Featured Album */}
        <div className="mb-16 animate-fade-up">
          <div
            className="bg-dark text-cream rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => setAlbumOpen(!albumOpen)}
          >
            <div className="flex items-center justify-between p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Music2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-manrope text-xs text-primary tracking-wide uppercase mb-1">Featured Production</p>
                  <h3 className="font-manrope font-bold text-xl md:text-2xl">Yohannes Girma — "Geremegn Madani" Live Album</h3>
                </div>
              </div>
              <span className="font-manrope text-sm text-cream/50 hidden sm:block">
                {albumOpen ? 'Hide tracks' : 'View tracks'}
              </span>
            </div>

            {albumOpen && (
              <div className="border-t border-cream/10 p-6 md:p-8 animate-fade-in">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {YOHANNES_ALBUM.map((track, i) => (
                    <a
                      key={track.id}
                      href={`https://www.youtube.com/watch?v=${track.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 bg-cream/5 hover:bg-cream/10 border border-cream/10 rounded-xl p-3 transition-all"
                    >
                      <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={`https://img.youtube.com/vi/${track.id}/default.jpg`}
                          alt={track.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-dark/40 group-hover:bg-dark/20 transition-all">
                          <Play className="w-4 h-4 text-primary fill-primary" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="font-manrope text-xs text-primary mb-0.5">Track {i + 1}</p>
                        <p className="font-manrope text-sm font-medium text-cream truncate">{track.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category toggle */}
        <div className="flex justify-center gap-3 mb-10 animate-fade-up">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`font-manrope font-bold text-sm px-6 py-3 rounded-full transition-all ${
                category === cat
                  ? 'bg-dark text-cream'
                  : 'bg-white text-dark/60 border border-dark/10 hover:border-primary/30'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <VideoCard project={project} />
            </div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-16 bg-white border border-dark/5 rounded-3xl p-8 md:p-10 text-center animate-fade-up">
          <h3 className="font-manrope font-bold text-2xl text-dark mb-2">More Projects</h3>
          <p className="font-manrope text-dark/50 mb-8 max-w-md mx-auto">
            Explore more work and follow along on social platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 bg-dark/5 hover:bg-primary rounded-full px-6 py-3.5 transition-all"
              >
                <link.icon className="w-5 h-5 text-dark/60 group-hover:text-dark transition-colors" />
                <span className="font-manrope font-bold text-sm text-dark/70 group-hover:text-dark transition-colors">
                  {link.label}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-dark/40 group-hover:text-dark transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <a
            href="#contact"
            className="inline-flex bg-dark text-cream font-manrope font-bold px-7 py-4 rounded-full hover:bg-primary hover:text-dark transition-all"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
