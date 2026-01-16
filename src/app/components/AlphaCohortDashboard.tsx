export default function AlphaCohortDashboard() {
  // Elite university users - blacked out for privacy/mystique
  const alphaUsers = [
    { domain: '@uconn.edu', status: 'LIVE', sessions: 58, immunity: 93, tag: 'D1 Athlete' },
    { domain: '@purdue.edu', status: 'ACTIVE', sessions: 64, immunity: 91, tag: 'Top Performer' },
    { domain: '@wisc.edu', status: 'ACTIVE', sessions: 55, immunity: 90, tag: 'Top Performer' },
    { domain: '@cornell.edu', status: 'LIVE', sessions: 51, immunity: 89 },
    { domain: '@vassar.edu', status: 'ACTIVE', sessions: 47, immunity: 88, tag: 'Liberal Arts' },
    { domain: '@utexas.edu', status: 'LIVE', sessions: 61, immunity: 88, tag: 'On Streak' },
    { domain: '@tufts.edu', status: 'ACTIVE', sessions: 52, immunity: 87 },
    { domain: '@asu.edu', status: 'LIVE', sessions: 59, immunity: 86, tag: 'D1 Athlete' },
    { domain: '@northeastern.edu', status: null, sessions: 49, immunity: 85 },
    { domain: '@ufl.edu', status: 'ACTIVE', sessions: 53, immunity: 84 },
    { domain: '@unc.edu', status: 'LIVE', sessions: 48, immunity: 83, tag: 'D1 Athlete' },
    { domain: '@berkeley.edu', status: null, sessions: 44, immunity: 82 },
    { domain: '@grinnell.edu', status: 'ACTIVE', sessions: 42, immunity: 81, tag: 'Liberal Arts' },
    { domain: '@umich.edu', status: null, sessions: 41, immunity: 79 },
    { domain: '@duke.edu', status: null, sessions: 38, immunity: 76 },
    { domain: '@upenn.edu', status: 'LIVE', sessions: 35, immunity: 74 },
    { domain: '@columbia.edu', status: null, sessions: 32, immunity: 71 },
    { domain: '@nyu.edu', status: null, sessions: 29, immunity: 70 },
    { domain: '@yale.edu', status: null, sessions: 24, immunity: 62 },
    { domain: '@brown.edu', status: null, sessions: 22, immunity: 59 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-[#ff4444] font-medium tracking-[0.2em] text-xs mb-2">
              ⚠ CONFIDENTIAL PROTOTYPE – ALPHA COHORT
            </div>
            <h1 className="text-white font-bold text-3xl tracking-tight">
              Vectomind Alpha Dashboard
            </h1>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Status</div>
            <div className="text-[#00ff9d] font-medium flex items-center gap-2 justify-end">
              <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
              SYSTEM LIVE
            </div>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {/* Total Users */}
          <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-gray-400 text-xs uppercase tracking-wider">Total Users</div>
            </div>
            <div className="text-white text-4xl font-bold">72</div>
          </div>

          {/* Sessions */}
          <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div className="text-gray-400 text-xs uppercase tracking-wider">Sessions</div>
            </div>
            <div className="text-white text-4xl font-bold">1,120</div>
          </div>

          {/* Blitz Sessions */}
          <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#ff8c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="text-gray-400 text-xs uppercase tracking-wider">Blitz Sessions</div>
            </div>
            <div className="text-white text-4xl font-bold">890</div>
          </div>

          {/* Avg Immunity */}
          <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div className="text-gray-400 text-xs uppercase tracking-wider">Avg Immunity</div>
            </div>
            <div className="text-white text-4xl font-bold">41.3</div>
          </div>

          {/* Waitlist */}
          <div className="bg-[#1a1d2e] border border-[#ff8c00]/20 rounded-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#ff8c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-gray-400 text-xs uppercase tracking-wider">Waitlist</div>
            </div>
            <div className="text-[#ff8c00] text-4xl font-bold">19</div>
            <div className="text-gray-500 text-xs mt-1">pending review</div>
          </div>
        </div>

        {/* Whitelisted Users Section */}
        <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-white font-bold text-xl">Whitelisted Users</h2>
              <span className="text-gray-500 text-sm">({alphaUsers.length} active)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-[#00ff9d] rounded-full" />
              <span>LIVE</span>
              <div className="w-2 h-2 bg-[#ff8c00] rounded-full ml-3" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Users Grid */}
          <div className="grid grid-cols-2 gap-3">
            {alphaUsers.map((user, idx) => (
              <div
                key={idx}
                className="bg-[#0a0e1a] border border-[#2a2d3e] rounded-sm p-4 hover:border-[#00ff9d]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-white font-mono text-sm">
                      ▓▓▓▓▓▓<span className="text-gray-500">{user.domain}</span>
                    </div>
                  </div>
                  {user.status && (
                    <div className={`text-xs font-medium px-2 py-1 rounded-sm ${
                      user.status === 'LIVE' 
                        ? 'bg-[#00ff9d]/10 text-[#00ff9d]' 
                        : 'bg-[#ff8c00]/10 text-[#ff8c00]'
                    }`}>
                      {user.status}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-gray-500 mb-1">Sessions</div>
                    <div className="text-white font-medium">{user.sessions}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Immunity</div>
                    <div className={`font-medium ${
                      user.immunity >= 85 ? 'text-[#00ff9d]' : 
                      user.immunity >= 75 ? 'text-[#ff8c00]' : 
                      'text-gray-400'
                    }`}>
                      {user.immunity}%
                    </div>
                  </div>
                </div>
                {user.tag && (
                  <div className="text-gray-500 text-xs mt-2">
                    <span className="text-[#ff8c00] font-medium">Tag:</span> {user.tag}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">
            Alpha Cohort Protocol
          </div>
          <div className="text-gray-500 text-sm">
            All data is anonymized for privacy. .edu verification required for access.
          </div>
        </div>
      </div>
    </div>
  );
}