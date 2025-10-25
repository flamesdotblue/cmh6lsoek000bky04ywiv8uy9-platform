import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const inPageLinks = [
  { href: '#about', label: 'About' },
  { href: '#reports', label: 'Research Reports' },
  { href: '#services', label: 'Advisory Services' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const scrollToId = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-sm bg-gradient-to-tr from-slate-900 to-teal-600" />
            <span className="font-semibold tracking-wide text-slate-900">
              Vishal <span className="text-slate-500">Analytica</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) => `text-sm ${isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'} transition-colors`}
            >
              Home
            </NavLink>
            <NavLink
              to="/insights"
              className={({ isActive }) => `text-sm ${isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'} transition-colors`}
            >
              Insights
            </NavLink>
            {pathname === '/' && inPageLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollToId(l.href)}
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/insights"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Explore Insights
            </Link>
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
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block text-sm text-slate-700 hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              to="/insights"
              onClick={() => setOpen(false)}
              className="block text-sm text-slate-700 hover:text-slate-900"
            >
              Insights
            </Link>
            {pathname === '/' && inPageLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => { scrollToId(l.href); setOpen(false); }}
                className="block text-left w-full text-sm text-slate-700 hover:text-slate-900"
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/insights"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Explore Insights
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
