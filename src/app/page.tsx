"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Terminal as TerminalIcon, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Terminal from '@/components/Terminal';
import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-habitat-green selection:text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-habitat-green/10 border border-habitat-green/20 text-habitat-green text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              <span>Version 1.0.0 Now Live</span>
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              The Operating System for <br />
              <span className="gradient-text italic">AI-Native Founders</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12">
              Turn your AI agent into a Strategic Co-Founder and Marketing Director. 
              Built on the Habitat 5-hour sprint methodology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-habitat-green/10 flex items-center justify-center text-habitat-green">
                <TerminalIcon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Founder as Director</h3>
              <p className="text-white/50 leading-relaxed">
                Stop getting lost in the code. Use agentic skills to manage your startup like a director oversees a film crew.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-habitat-green/10 flex items-center justify-center text-habitat-green">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Proven Frameworks</h3>
              <p className="text-white/50 leading-relaxed">
                Every skill is baked with PAS, AIDA, and The Mom Test. No more generic AI hallucinations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-habitat-green/10 flex items-center justify-center text-habitat-green">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Agent-Ready</h3>
              <p className="text-white/50 leading-relaxed">
                Specifically formatted for Claude Code and agentic workflows. Native integration into your dev environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The Skill Registry</h2>
            <p className="text-white/50">Specialized knowledge modules for every stage of your journey.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint Section */}
      <section id="sprint" className="py-24 px-4 bg-habitat-green/[0.02]">
        <div className="max-w-4xl mx-auto rounded-3xl border border-habitat-green/20 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap size={200} className="text-habitat-green" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">The 5-Hour Prototype Sprint</h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            Can't make it to a live Habitat evening? Use the <code className="text-habitat-green">sprint-coach</code> skill 
            to experience the high-octane methodology in your own terminal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="https://joinhabitat.eu" 
              target="_blank"
              className="px-8 py-4 rounded-xl bg-habitat-green text-black font-bold flex items-center space-x-2 hover:bg-habitat-green/90 transition-all"
            >
              <span>Join a Live Evening</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="https://github.com/ycanerden/habitat-skills" 
              className="px-8 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
            >
              Explore the Code
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-sm">
        <p>&copy; 2026 Habitat. Built with Habitat Skills.</p>
      </footer>
    </main>
  );
}