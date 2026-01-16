import CompactUserCard from './CompactUserCard';

export default function FourUserQuadrant() {
  const users = [
    {
      school: 'University of Connecticut',
      domain: '@uconn.edu',
      focusImmunity: 90,
      status: 'IMMUNE' as const,
      minutes: 28,
      distractions: 1,
      dailyTotal: 224,
      focusSessions: 8,
      avgImmunity: 88,
      completed: 32,
    },
    {
      school: 'Yale University',
      domain: '@yale.edu',
      focusImmunity: 40,
      status: 'DISTRACTED' as const,
      minutes: 15,
      distractions: 8,
      dailyTotal: 41,
      focusSessions: 1,
      avgImmunity: 42,
      completed: 4,
    },
    {
      school: 'Vassar College',
      domain: '@vassar.edu',
      focusImmunity: 81,
      status: 'BUILDING' as const,
      minutes: 25,
      distractions: 4,
      dailyTotal: 150,
      focusSessions: 6,
      avgImmunity: 79,
      completed: 28,
    },
    {
      school: 'Cornell University',
      domain: '@cornell.edu',
      focusImmunity: 61,
      status: 'REFOCUS' as const,
      minutes: 18,
      distractions: 6,
      dailyTotal: 52,
      focusSessions: 2,
      avgImmunity: 58,
      completed: 7,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {users.map((user, idx) => (
          <div key={idx} className="border border-zinc-800 bg-[#0f1219] overflow-hidden">
            <CompactUserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}