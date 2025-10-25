import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, ArrowRight } from 'lucide-react';

const allInsights = [
  { id: 1, title: 'India Midcap Outlook 2025', tag: 'Equity Research', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop', desc: 'Earnings resilience and capital flows across key sectors.' },
  { id: 2, title: 'Valuation Playbook: Rates to Risk Premia', tag: 'Valuation', img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop', desc: 'Translate macro drivers into defensible DCF assumptions.' },
  { id: 3, title: 'Fintech Cost Curves and Unit Economics', tag: 'Strategy', img: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop', desc: 'Pathways to profitability across lending and payments.' },
  { id: 4, title: 'Energy Transition: Capital Cycles 2025–2030', tag: 'Macro Research', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop', desc: 'Where capital is flowing and how to position.' },
  { id: 5, title: 'India IT Services: Pricing Power and Mix', tag: 'Equity Research', img: 'https://images.unsplash.com/photo-1550537687-6e6f1b4f87b8?q=80&w=1200&auto=format&fit=crop', desc: 'Margin pathways in the next demand cycle.' },
  { id: 6, title: 'Cost of Capital Regimes: 2010–2025 Review', tag: 'Valuation', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop', desc: 'What changed and what investors should recalibrate.' },
  { id: 7, title: 'Platforms vs. Verticals: Moats Revisited', tag: 'Strategy', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', desc: 'Lifecycle playbook for defensibility and growth.' },
  { id: 8, title: 'EM FX and Equity Risk Premia Linkages', tag: 'Macro Research', img: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1200&auto=format&fit=crop', desc: 'Cross-asset signals for allocation.' },
];

const filters = ['All', 'Equity Research', 'Valuation', 'Strategy', 'Macro Research'];

function Insights() {
  const [active, setActive] = React.useState('All');
  const [query, setQuery] = React.useState('');

  const filtered = allInsights.filter((i) => {
    const matchesTag = active === 'All' || i.tag === active;
    const matchesQuery = !query || i.title.toLowerCase().includes(query.toLowerCase()) || i.desc.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="pt-24 sm:pt-28 bg-white min-h-[80vh]">
      <section className="border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal-700">Featured Topics</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">Insights & Publications</h1>
              <p className="mt-3 max-w-2xl text-slate-600">Latest equity research, valuation frameworks, and strategy perspectives crafted for decision-makers.</p>
            </div>
            <div className="w-full md:w-[420px]">
              <label className="sr-only" htmlFor="search">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  id="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search topics, sectors, themes..."
                  className="w-full rounded-md pl-9 pr-3 py-2 border-slate-300 focus:border-teal-600 focus:ring-teal-600"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center text-xs text-slate-600"><Filter className="h-4 w-4 mr-1 text-teal-700" /> Filter by</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${active === f ? 'bg-teal-600 text-white border-teal-600' : 'border-slate-300 text-slate-700 hover:border-slate-400'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-slate-600">No results. Try adjusting filters.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (idx % 6) * 0.04 }}
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
          )}
        </div>
      </section>
    </div>
  );
}

export default Insights;
