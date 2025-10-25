import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-sm bg-gradient-to-tr from-slate-900 to-teal-600" />
              <span className="font-semibold tracking-wide text-slate-900">Vishal <span className="text-slate-500">Analytica</span></span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">
              Independent finance and strategy research. We help leaders turn complexity into clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="/#about" className="hover:text-slate-900">About</a></li>
                <li><a href="/#services" className="hover:text-slate-900">Services</a></li>
                <li><a href="/insights" className="hover:text-slate-900">Insights</a></li>
                <li><a href="/#contact" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">LinkedIn</a></li>
                <li><a href="#" className="hover:text-slate-900">Twitter</a></li>
                <li><a href="#" className="hover:text-slate-900">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Newsletter</h4>
            <p className="mt-3 text-sm text-slate-600">Get our latest research and strategic perspectives.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              <button type="button" className="rounded-md bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-500">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Vishal Analytica. All rights reserved.</p>
          <div className="text-xs text-slate-500 space-x-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
