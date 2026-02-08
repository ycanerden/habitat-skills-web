import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  phase: string;
}

export default function SkillCard({ title, description, icon: Icon, phase }: SkillCardProps) {
  return (
    <div className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={48} />
      </div>
      
      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded bg-habitat-green/10 text-habitat-green">
            <Icon size={20} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{phase}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-habitat-green transition-colors">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
      
      {/* Decorative border bottom on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-habitat-green transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}
