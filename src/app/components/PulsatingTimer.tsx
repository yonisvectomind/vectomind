import { useEffect, useState } from "react";

export function PulsatingTimer() {
  const [time, setTime] = useState({ minutes: 25, seconds: 29 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            return { minutes: 29, seconds: 59 };
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: prev.minutes, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${time.minutes.toString().padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative">
        {/* Outer pulsating ring */}
        <svg 
          className="absolute inset-0 pulsate-ring" 
          width="320" 
          height="320"
          style={{ top: '-20px', left: '-20px' }}
        >
          <circle
            cx="160"
            cy="160"
            r="155"
            fill="none"
            stroke="#00D9A3"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>

        {/* Main timer circle */}
        <div 
          className="relative flex flex-col items-center justify-center rounded-full bg-black border-2 border-[#1a3a2e]" 
          style={{ width: "280px", height: "280px" }}
        >
          {/* Timer display */}
          <div className="text-8xl font-bold text-[#00D9A3] tracking-tight mb-2" style={{ fontFamily: 'monospace' }}>
            {formattedTime}
          </div>
          
          {/* BLITZ_MODE label */}
          <div className="text-xs text-zinc-600 uppercase tracking-[0.3em] font-mono">
            BLITZ_MODE
          </div>
        </div>

        {/* Inner glow effect */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none" 
          style={{ 
            width: "280px", 
            height: "280px",
            background: "radial-gradient(circle, rgba(0,217,163,0.15) 0%, transparent 65%)"
          }}
        />
      </div>

      <style>{`
        @keyframes pulsate {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.4;
          }
        }

        .pulsate-ring {
          animation: pulsate 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
