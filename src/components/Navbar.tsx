import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-habitat-green flex items-center justify-center">
              <span className="text-black font-bold text-xl">H</span>
            </div>
            <span className="text-white font-bold tracking-tight">HABITAT <span className="text-habitat-green">SKILLS</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
            <Link href="#skills" className="hover:text-habitat-green transition-colors">Skills</Link>
            <Link href="#sprint" className="hover:text-habitat-green transition-colors">Sprint</Link>
            <Link href="https://joinhabitat.eu" target="_blank" className="hover:text-habitat-green transition-colors">Habitat Events</Link>
          </div>

          <div className="flex items-center">
            <Link 
              href="https://github.com/ycanerden/habitat-skills" 
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 hover:border-habitat-green transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">Star on GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
