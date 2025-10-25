import React from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#reports', label: 'Research Reports' },
  { href: '#services', label: 'Advisory Services' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-sm bg-gradient-to-tr from-slate-900 to-teal-600" />
            <span className="font-semibold tracking-wide text-slate-900">
              Vishal <span className="text-slate-500">Analytica</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#insights"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Explore Insights
            </a>
          </nav>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-slate-100"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200/60">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-slate-700 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#insights"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Explore Insights
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
