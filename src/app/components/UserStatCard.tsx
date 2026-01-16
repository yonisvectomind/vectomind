interface UserStatCardProps {
  school: string;
  domain: string;
  focusImmunity: number;
  status: 'IMMUNE' | 'BUILDING' | 'VULNERABLE' | 'CRITICAL';
  sessionMinutes: number;
  distractions: number;
  dailyTotal: number;
  focusSessions: number;
  avgImmunity: number;
  completed: number;
}

export default function UserStatCard({
  school,
  domain,
  focusImmunity,
  status,
  sessionMinutes,
  distractions,
  dailyTotal,
  focusSessions,
  avgImmunity,
  completed,
}: UserStatCardProps) {
  // Calculate arc position based on immunity (0-100)
  const getArcColor = () => {
    if (focusImmunity >= 80) return '#00ff9d';
    if (focusImmunity >= 60) return '#ff8c00';
    if (focusImmunity >= 40) return '#ff6b00';
    return '#ff4444';
  };

  const getStatusColor = () => {
    if (status === 'IMMUNE') return '#00ff9d';
    if (status === 'BUILDING') return '#ff8c00';
    if (status === 'VULNERABLE') return '#ff6b00';
    return '#ff4444';
  };

  return (
    <div className="w-[1000px] h-[620px] bg-[#0a0e1a] p-8 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Back to Matrix</span>
        </button>
        <div className="text-[#ff4444] font-medium tracking-[0.2em] text-xs">
          ⚠ CONFIDENTIAL PROTOTYPE
        </div>
      </div>

      {/* User Identity */}
      <div className="mb-8">
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Alpha User</div>
        <div className="text-white font-mono text-lg">
          ▓▓▓▓▓▓<span className="text-gray-400">{domain}</span>
        </div>
        <div className="text-[#00ff9d] text-sm mt-1">{school}</div>
      </div>

      {/* Focus Immunity Gauge */}
      <div className="mb-12">
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-6">FOCUS IMMUNITY</div>
        <div className="flex flex-col items-center">
          {/* Circular Gauge */}
          <div className="relative w-64 h-64 mb-4">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="128"
                cy="128"
                r="100"
                stroke="#1a1d2e"
                strokeWidth="20"
                fill="none"
              />
              {/* Progress arc */}
              <circle
                cx="128"
                cy="128"
                r="100"
                stroke={getArcColor()}
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${(focusImmunity / 100) * 628} 628`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-6xl font-bold text-white mb-2">{focusImmunity}</div>
              <div className="text-sm uppercase tracking-wider" style={{ color: getStatusColor() }}>
                {status}
              </div>
            </div>
          </div>
          {/* Duration */}
          <div className="text-white text-2xl font-medium">{sessionMinutes}m</div>
          <div className="text-gray-500 text-xs uppercase tracking-wider">Duration</div>
        </div>
      </div>

      {/* Session Report */}
      <div className="mb-8">
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-4">SESSION REPORT</div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold text-white mb-1">{sessionMinutes}</div>
            <div className="text-gray-500 text-sm">Minutes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">{distractions}</div>
            <div className="text-gray-500 text-sm">Distractions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">{dailyTotal}</div>
            <div className="text-gray-500 text-sm">Daily Total</div>
          </div>
        </div>
      </div>

      {/* Weekly Insights */}
      <div>
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-4">WEEKLY INSIGHTS</div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">{focusSessions}</div>
              <div className="text-gray-500 text-sm">Focus Sessions</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">{avgImmunity}%</div>
              <div className="text-gray-500 text-sm">Average Immunity</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">{completed}</div>
              <div className="text-gray-500 text-sm">Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="text-gray-600 text-xs">
          High execution capacity isn't about doing more. It's about doing what matters, when it matters.
        </div>
      </div>
    </div>
  );
}
