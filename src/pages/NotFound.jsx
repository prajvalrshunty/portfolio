import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 pt-28 pb-16 bg-grain">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase font-semibold">
          // Error 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase font-editorial tracking-tight text-zinc-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
          The requested route or blueprint does not exist in Prajval R Shunty&apos;s digital portfolio.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
