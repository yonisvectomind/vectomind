import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Share2, ArrowRight } from 'lucide-react';

// Deterministic scoring algorithm based on name characteristics
function generateAuraScore(name: string) {
  if (!name || name.trim().length === 0) {
    return null;
  }

  const cleanName = name.trim().toLowerCase();
  const length = cleanName.length;
  const vowels = (cleanName.match(/[aeiou]/g) || []).length;
  const consonants = length - vowels;
  const uniqueChars = new Set(cleanName).size;
  
  // Character code sum for additional entropy
  const charSum = cleanName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Deterministic seed from name
  const seed = (charSum * 7 + length * 13 + vowels * 17 + consonants * 19 + uniqueChars * 23) % 1000;
  
  // Generate scores (0-100 scale)
  const magnitude = ((seed * 31) % 80) + 20; // 20-100
  const gravitas = ((seed * 37) % 80) + 20;
  const lethality = ((seed * 41) % 80) + 20;
  const grit = ((seed * 43) % 80) + 20;
  
  // Overall score (weighted average, scaled to 1-10)
  const overall = (magnitude * 0.35 + gravitas * 0.25 + lethality * 0.20 + grit * 0.20) / 10;
  
  // Determine archetype based on overall score
  let archetype: 'apex' | 'ghost' | 'dilettante';
  if (overall >= 7.5) archetype = 'apex';
  else if (overall >= 5.0) archetype = 'ghost';
  else archetype = 'dilettante';
  
  return {
    overall: parseFloat(overall.toFixed(1)),
    magnitude: Math.round(magnitude),
    gravitas: Math.round(gravitas),
    lethality: Math.round(lethality),
    grit: Math.round(grit),
    archetype
  };
}

// Archetype data
const archetypes = {
  apex: {
    title: 'THE APEX OPERATOR',
    subtitle: 'HIGH-MAGNITUDE ENTITY',
    verdict: `You move with the quiet violence of a C-suite predator. Your focus is a laser, but your ego is a liability. You're currently redlining, and without a Focus Hygiene protocol, you'll burn out before the IPO.

Your Magnitude is in the 90th percentile, but you're operating without a safety protocol. You're one "Hard Stop" away from total cognitive collapse. You need surgical precision, not another productivity app.`,
    ctaText: 'ENHANCE YOUR MAGNITUDE',
    statusColor: '#00ff41',
    status: 'VOLATILE'
  },
  ghost: {
    title: 'THE HIGH-FREQUENCY GHOST',
    subtitle: 'PRESENTABLE BUT HOLLOW',
    verdict: `You are a terrifyingly efficient machine for producing nothing of value. You move like a digital specter—27 tabs open, heart rate at 140bpm, your "Strategic Vision" is just desperate wind-prediction.

You have the vision, but your execution is leaking. You're context-switching too much. You're a "Presentable Presenter," but never the Architect. You aren't a Strategic General; you're a High-Frequency Ghost with synthetic confidence masking a shattered focus core.

You're the reason Yale is at 40%. Fix yourself before you're replaced by a script.`,
    ctaText: 'RECOVER YOUR AURA',
    statusColor: '#c5a059',
    status: 'DEGRADED'
  },
  dilettante: {
    title: 'THE DISTRACTED DILETTANTE',
    subtitle: 'CRITICAL SYSTEM FAILURE',
    verdict: `Brutal. Your Aura is practically invisible. You're a passenger in your own career. Your focus is shattered by TikTok-level dopamine loops. You couldn't kill a mosquito without a committee meeting.

Your Neural Resilience shows [CRITICAL FAILURE]. You're bleeding focus at a rate that would make a goldfish look like a Zen monk. You don't need another internship; you need a cage.

You need the Vectomind Magnitude Engine to force your brain back into its skull before you evaporate entirely. Emergency intervention required.`,
    ctaText: 'EMERGENCY INTERVENTION',
    statusColor: '#ff0033',
    status: 'CRITICAL'
  }
};

export function AuraCheck() {
  const [name, setName] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof generateAuraScore>>(null);
  const [showResult, setShowResult] = useState(false);

  const handleScan = () => {
    if (!name.trim()) return;
    
    setIsScanning(true);
    setShowResult(false);
    
    // Scanning animation duration
    setTimeout(() => {
      const score = generateAuraScore(name);
      setResult(score);
      setIsScanning(false);
      setShowResult(true);
    }, 3000);
  };

  const handleShare = () => {
    if (!result) return;
    
    const archetype = archetypes[result.archetype];
    const text = `My Executive Aura is ${result.overall}/10. I'm ${archetype.title === 'THE APEX OPERATOR' ? 'an Apex Operator' : archetype.title === 'THE HIGH-FREQUENCY GHOST' ? 'a High-Frequency Ghost' : 'a Distracted Dilettante'}. Check your status at aura.vectomind.vercel.app (Powered by @Vectomind)`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(text);
    
    // Open Twitter/X share
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleUpgrade = () => {
    window.location.href = '/?ref=aura_check';
  };

  const radarData = result ? [
    { metric: 'MAGNITUDE', value: result.magnitude, fullMark: 100 },
    { metric: 'GRAVITAS', value: result.gravitas, fullMark: 100 },
    { metric: 'LETHALITY', value: result.lethality, fullMark: 100 },
    { metric: 'GRIT', value: result.grit, fullMark: 100 },
  ] : [];

  const archetype = result ? archetypes[result.archetype] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 md:p-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="text-[#00ff41] text-xs md:text-sm tracking-[0.3em] mb-2 md:mb-3">
          CLASSIFIED DIAGNOSTIC PROTOCOL
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-3">
          EXECUTIVE AURA-CHECK
        </h1>
        <div className="text-gray-500 text-xs md:text-sm tracking-wider">
          NEURAL MAGNITUDE ASSESSMENT SYSTEM
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isScanning && !showResult && (
          <motion.div
            key="input"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-2xl"
          >
            <div className="border border-[#00ff41]/30 bg-black/50 p-8 md:p-12 backdrop-blur-sm">
              <div className="mb-6 md:mb-8">
                <label className="block text-[#00ff41] text-xs md:text-sm tracking-[0.2em] mb-4">
                  [IDENTIFY AGENT: INPUT NAME]
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                  className="w-full bg-transparent border-b-2 border-[#00ff41] text-2xl md:text-3xl lg:text-4xl py-3 md:py-4 focus:outline-none text-white placeholder-gray-700 tracking-tight"
                  placeholder="ENTER_IDENTITY"
                  autoFocus
                />
              </div>
              
              <button
                onClick={handleScan}
                disabled={!name.trim()}
                className="w-full bg-[#00ff41] text-black py-4 md:py-5 text-sm md:text-base tracking-[0.2em] font-bold hover:bg-[#00ff41]/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 md:gap-3"
              >
                INITIATE SCAN
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            
            <div className="text-center mt-6 md:mt-8 text-gray-600 text-xs md:text-sm">
              Vectomind Inc. assumes no responsibility for ego-death or career-pivot resulting from this audit.
            </div>
          </motion.div>
        )}

        {isScanning && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-2xl"
          >
            <div className="border border-[#00ff41] bg-black/50 p-12 md:p-16 backdrop-blur-sm">
              {/* Scanning Animation */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
                <div className="absolute inset-0 border-2 border-[#00ff41]/20 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-[#00ff41]/30 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-[#00ff41]/40 rounded-full"></div>
                
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent absolute top-1/2 left-0"></div>
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-2">
                      {name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-500 tracking-wider">SCANNING</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#00ff41]"
                >
                  → ANALYZING DIGITAL FOOTPRINT...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-[#00ff41]"
                >
                  → CALCULATING NEURAL MAGNITUDE...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="text-[#00ff41]"
                >
                  → MAPPING EXECUTIVE PRESENCE...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="text-[#00ff41]"
                >
                  → PROCESSING SOMATIC DATA...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                  className="text-[#00ff41]"
                >
                  → GENERATING VERDICT...
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {showResult && result && archetype && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl"
          >
            {/* Header Card */}
            <div className="border-2 border-[#00ff41] bg-black p-6 md:p-8 mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-4">
                <div>
                  <div className="text-gray-500 text-xs tracking-[0.2em] mb-1">
                    PSYCHOLOGICAL AUDIT – IDENTITY FLAGGED
                  </div>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">
                    NAME: {name.toUpperCase()}
                  </div>
                </div>
                <div className="flex items-baseline gap-2 md:gap-3">
                  <div className="text-5xl md:text-6xl font-bold" style={{ color: archetype.statusColor }}>
                    {result.overall}
                  </div>
                  <div className="text-xl md:text-2xl text-gray-500">/10</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm">
                <div className="text-gray-500 tracking-wider">AURA SCORE:</div>
                <div className="font-bold tracking-wider" style={{ color: archetype.statusColor }}>
                  [{archetype.status}]
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column - Radar Chart */}
              <div className="border border-[#00ff41]/30 bg-black/80 p-6 md:p-8">
                <div className="text-[#00ff41] text-xs tracking-[0.2em] mb-6">
                  MAGNITUDE BREAKDOWN
                </div>
                
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#00ff41" strokeOpacity={0.2} />
                    <PolarAngleAxis 
                      dataKey="metric" 
                      tick={{ fill: '#00ff41', fontSize: 11 }}
                      stroke="#00ff41"
                      strokeOpacity={0.3}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fill: '#666', fontSize: 10 }}
                      stroke="#333"
                    />
                    <Radar 
                      name="Aura" 
                      dataKey="value" 
                      stroke={archetype.statusColor}
                      fill={archetype.statusColor}
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                
                <div className="mt-6 space-y-3 text-xs md:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Focus Intensity:</span>
                    <span className="font-bold text-white">{result.magnitude}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Executive Presence:</span>
                    <span className="font-bold text-white">{result.gravitas}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Strategic Lethality:</span>
                    <span className="font-bold text-white">{result.lethality}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Neural Resilience:</span>
                    <span className="font-bold text-white">{result.grit}%</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Verdict */}
              <div className="border border-[#00ff41]/30 bg-black/80 p-6 md:p-8 flex flex-col">
                <div className="mb-4">
                  <div className="text-xs tracking-[0.2em] mb-2" style={{ color: archetype.statusColor }}>
                    ARCHETYPE CLASSIFICATION
                  </div>
                  <div className="text-xl md:text-2xl font-bold mb-1">
                    {archetype.title}
                  </div>
                  <div className="text-xs text-gray-500 tracking-wider">
                    {archetype.subtitle}
                  </div>
                </div>
                
                <div className="text-sm md:text-base leading-relaxed text-gray-300 mb-6 md:mb-8 whitespace-pre-line flex-grow">
                  {archetype.verdict}
                </div>
                
                <div className="text-xs tracking-[0.2em] text-[#00ff41] mb-4">
                  THE STALLION INTERVENTION:
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <button
                    onClick={handleUpgrade}
                    className="w-full py-4 md:py-5 text-sm md:text-base tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 md:gap-3"
                    style={{ 
                      backgroundColor: archetype.statusColor,
                      color: '#000'
                    }}
                  >
                    {archetype.ctaText}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="w-full border-2 border-[#00ff41]/50 text-[#00ff41] py-3 md:py-4 text-xs md:text-sm tracking-[0.2em] font-bold hover:bg-[#00ff41]/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    SHARE RESULTS
                  </button>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="mt-8 md:mt-12 text-center">
              <button
                onClick={() => {
                  setName('');
                  setShowResult(false);
                  setResult(null);
                }}
                className="text-gray-600 hover:text-[#00ff41] text-xs md:text-sm tracking-wider transition-colors"
              >
                ← SCAN ANOTHER AGENT
              </button>
            </div>
            
            <div className="mt-6 md:mt-8 text-center text-gray-700 text-xs">
              Powered by <span className="text-[#00ff41]">VECTOMIND</span> Magnitude Engine
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}