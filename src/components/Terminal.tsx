"use client";

import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/ycanerden/habitat-skills.git .claude/skills/habitat";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg border border-white/10 bg-[#0A0A0A] terminal-glow">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-white/40 font-mono">
          <TerminalIcon size={12} />
          <span>habitat — bash</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start">
            <span className="text-habitat-green mr-2">$</span>
            <span className="text-white/90 break-all">{command}</span>
          </div>
          
          <motion.button
            onClick={copyToClipboard}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center self-start space-x-2 mt-4 px-3 py-1.5 rounded bg-habitat-green/10 text-habitat-green border border-habitat-green/20 hover:bg-habitat-green/20 transition-colors"
          >
            {copied ? (
              <>
                <Check size={14} />
                <span className="text-xs uppercase tracking-wider font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span className="text-xs uppercase tracking-wider font-bold">Copy Command</span>
              </>
            )}
          </motion.button>
        </div>
        
        <div className="mt-6 text-white/40 italic">
          # Initializing Habitat Skills OS...
          <br />
          # 12 skills loaded successfully.
          <br />
          # Ready for sprint.
        </div>
      </div>
    </div>
  );
}
