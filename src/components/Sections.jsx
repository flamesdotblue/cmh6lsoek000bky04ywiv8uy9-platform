import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Briefcase, FileText, Mail, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const insights = [
  {
    title: 'India Midcap Outlook 2025',
    desc: 'Earnings resilience and capital flows across key sectors; implications for allocation.',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    tag: 'Equity Research',
  },
  {
    title: 'Valuation Playbook: Rates to Risk Premia',
    desc: 'A practical framework to translate macro drivers into DCF assumptions.',
    img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop',
    tag: 'Valuation',
  },
  {
    title: 'Fintech Cost Curves and Unit Economics',
    desc: 'Pathways to profitability across lending, payments, and wealth tech.',
    img: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop',
    tag: 'Strategy',
  },
  {
    title: 'Energy Transition: Capital Cycles 2025–2030',
    desc: 'Where capital is flowing and how to position for structural change.',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    tag: 'Macro Research',
  },
];

function Sections() {
  return (
    <div className="relative -mt-12 bg-white">
      {/* About */}
      <section id="about" className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">About Us</h2>
              <p className="mt-4 text-slate-600">
                We are a finance and strategy research firm helping organizations make confident decisions. Our work combines deep sector expertise with data-driven analysis to deliver clarity on value creation, capital allocation, and market positioning.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
                  <BarChart2 className="text-teal-600" />
                  <h3 className="mt-3 font-medium">Equity Research</h3>
                  <p className="mt-1 text-sm text-slate-600">Sector deep-dives, thematic insights, and model-backed views.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
                  <Briefcase className="text-teal-600" />
                  <h3 className="mt-3 font-medium">Valuation Advisory</h3>
                  <p className="mt-1 text-sm text-slate-600">Independent valuations for transactions, fairness opinions, and reporting.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
                  <FileText className="text-teal-600" />
                  <h3 className="mt-3 font-medium">Strategy Research</h3>
                  <p className="mt-1 text-sm text-slate-600">Market sizing, competitive intelligence, and capital cycle analysis.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Reports */}
      <section id="reports" className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Research Reports</h2>
            <p className="mt-3 text-slate-600">
              High-conviction, practitioner-grade research delivered with methodological transparency.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0,3).map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wide text-teal-700 bg-teal-50 rounded-full px-2 py-1">{item.tag}</span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  <button className="mt-4 inline-flex items-center text-sm font-medium text-slate-900 hover:text-teal-700">
                    Read summary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Advisory Services</h2>
            <p className="mt-3 text-slate-600">
              We work alongside investors and leadership teams to navigate complex decisions with precision and speed.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Transaction & Valuation Advisory</h3>
              <ul className="mt-4 text-slate-600 space-y-2 list-disc list-inside">
                <li>Fairness opinions and independent valuations</li>
                <li>Buy-side and sell-side diligence analytics</li>
                <li>Purchase price allocation and impairment testing</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Equity & Strategy Research</h3>
              <ul className="mt-4 text-slate-600 space-y-2 list-disc list-inside">
                <li>Thematic deep-dives and tactical updates</li>
                <li>Market structure and competitive analysis</li>
                <li>Capital cycle and cost of capital frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Publications */}
      <section id="insights" className="py-20 sm:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Featured Topics</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Insights & Publications</h2>
            <p className="mt-3 text-slate-300">
              Explore our latest thinking across markets, sectors, and strategies.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-800 to-slate-900"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wide text-teal-300/90 bg-teal-500/10 border border-teal-500/20 rounded-full px-2 py-1">{item.tag}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                  <button className="mt-4 inline-flex items-center text-sm font-medium text-teal-300 hover:text-white">
                    View insight
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-3 text-slate-600">We’d love to hear about your mandate or research needs.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-teal-600" /> contact@vishalanalytica.com</p>
                <p className="text-slate-500 text-sm">Mon–Fri, 9:00–18:00 IST</p>
              </div>
            </div>
            <form className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">First name</label>
                  <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Last name</label>
                  <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" placeholder="Doe" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" placeholder="you@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" placeholder="How can we help?" />
                </div>
              </div>
              <button type="button" className="mt-5 inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition">
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
