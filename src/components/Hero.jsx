import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="top" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-white/5" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full flex items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-teal-200/80">Finance • Valuation • Equity Research</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
              Transforming Data into Strategic Insights
            </h1>
            <p className="mt-4 text-slate-100/90 text-base md:text-lg">
              Vishal Analytica partners with leaders to unlock value through rigorous research, sharp valuation advisory, and actionable equity insights.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#insights"
                className="inline-flex items-center justify-center rounded-full bg-teal-500 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-teal-400 transition"
              >
                Explore Insights
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/20 transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
