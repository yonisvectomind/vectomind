export default function ComparisonTable() {
  const users = [
    { school: 'UConn', immunity: 90, status: 'IMMUNE', daily: 62, color: '#00ff9d' },
    { school: 'Vassar', immunity: 81, status: 'BUILDING', daily: 58, color: '#00ff9d' },
    { school: 'Cornell', immunity: 61, status: 'REFOCUS', daily: 52, color: '#ff4444' },
    { school: 'Yale', immunity: 40, status: 'DISTRACTED', daily: 41, color: '#ff4444' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mb-10">
      <div className="border border-zinc-800 bg-[#0F1F33] overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-zinc-800 bg-[#0A1628]">
          <div className="text-xs uppercase tracking-wider text-zinc-500">School</div>
          <div className="text-xs uppercase tracking-wider text-zinc-500 text-center">Immunity</div>
          <div className="text-xs uppercase tracking-wider text-zinc-500 text-center">Status</div>
          <div className="text-xs uppercase tracking-wider text-zinc-500 text-center">Daily</div>
        </div>
        
        {/* Rows */}
        {users.map((user, idx) => (
          <div 
            key={idx} 
            className="grid grid-cols-4 gap-4 p-4 border-b border-zinc-800 last:border-b-0 hover:bg-[#0A1628]/50 transition-colors"
          >
            <div className="text-white font-medium">{user.school}</div>
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{user.immunity}%</span>
            </div>
            <div className="text-center">
              <span 
                className="text-xs uppercase tracking-wider font-medium"
                style={{ color: user.color }}
              >
                {user.status}
              </span>
            </div>
            <div className="text-center text-zinc-400">
              {user.daily}m
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
