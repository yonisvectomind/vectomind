interface CompactUserCardProps {
  school: string;
  domain: string;
  focusImmunity: number;
  status: 'IMMUNE' | 'BUILDING' | 'REFOCUS' | 'DISTRACTED';
  minutes: number;
  distractions: number;
  dailyTotal: number;
  focusSessions: number;
  avgImmunity: number;
  completed: number;
}

export default function CompactUserCard({
  school,
  domain,
  focusImmunity,
  status,
  minutes,
  distractions,
  dailyTotal,
  focusSessions,
  avgImmunity,
  completed,
}: CompactUserCardProps) {
  const getArcColor = () => {
    if (focusImmunity >= 80) return '#00ff9d';
    if (focusImmunity >= 60) return '#ff8c00';
    return '#ff4444';
  };

  const getStatusColor = () => {
    // 80% threshold logic: above = green, below = red
    if (focusImmunity >= 80) return '#00ff9d'; // IMMUNE or BUILDING above threshold
    return '#ff4444'; // REFOCUS or DISTRACTED below threshold
  };

  // Calculate arc dash array for circle progress
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const dashArray = `${(focusImmunity / 100) * circumference} ${circumference}`;

  return (
    <div className="w-full max-w-[480px] h-auto min-h-[540px] bg-[#0f1219] p-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-400 transition-colors text-xs">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Matrix
        </button>
        <div className="text-[#ff4444] font-medium tracking-[0.15em] text-[8px] sm:text-[10px] whitespace-nowrap">
          ⚠ CONFIDENTIAL PROTOTYPE
        </div>
      </div>

      {/* User Identity */}
      <div className="mb-6">
        <div className="text-gray-600 text-[9px] uppercase tracking-wider mb-1.5">Alpha User</div>
        <div className="text-white font-mono text-xs mb-0.5">
          ▓▓▓▓▓▓<span className="text-gray-500">{domain}</span>
        </div>
        <div className="text-[#00ff9d] text-[10px]">{school}</div>
      </div>

      {/* Focus Immunity Gauge */}
      <div className="mb-8">
        <div className="text-gray-600 text-[9px] uppercase tracking-wider mb-4">FOCUS IMMUNITY</div>
        <div className="flex flex-col items-center">
          {/* Circular Gauge */}
          <div className="relative w-[120px] h-[120px] mb-3">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="45"
                stroke="#1a1d2e"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress arc */}
              <circle
                cx="60"
                cy="60"
                r="45"
                stroke={getArcColor()}
                strokeWidth="8"
                fill="none"
                strokeDasharray={dashArray}
                strokeLinecap="round"
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-0.5">{focusImmunity}</div>
              <div className="text-[9px] uppercase tracking-wider font-medium" style={{ color: getStatusColor() }}>
                {status}
              </div>
            </div>
          </div>
          {/* Duration */}
          <div className="text-white text-xl font-medium">{minutes}m</div>
          <div className="text-gray-600 text-[9px] uppercase tracking-wider">Duration</div>
        </div>
      </div>

      {/* Session Report */}
      <div className="mb-6">
        <div className="text-gray-600 text-[9px] uppercase tracking-wider mb-3">SESSION REPORT</div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold text-white mb-0.5">{minutes}</div>
            <div className="text-gray-600 text-[10px]">Minutes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-0.5">{distractions}</div>
            <div className="text-gray-600 text-[10px]">Distractions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-0.5">{dailyTotal}</div>
            <div className="text-gray-600 text-[10px]">Daily total</div>
          </div>
        </div>
      </div>

      {/* Weekly Insights */}
      <div>
        <div className="text-gray-600 text-[9px] uppercase tracking-wider mb-3">WEEKLY INSIGHTS</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-xl font-bold text-white mb-0.5">{focusSessions}</div>
              <div className="text-gray-600 text-[10px]">Focus Sessions</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-xl font-bold text-white mb-0.5">{avgImmunity}%</div>
              <div className="text-gray-600 text-[10px]">Avg Immunity</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-xl font-bold text-white mb-0.5">{completed}</div>
              <div className="text-gray-600 text-[10px]">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}