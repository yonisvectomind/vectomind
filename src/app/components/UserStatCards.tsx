import UserStatCard from './UserStatCard';

export default function UserStatCards() {
  const users = [
    {
      school: 'University of Connecticut',
      domain: '@uconn.edu',
      focusImmunity: 93,
      status: 'IMMUNE' as const,
      sessionMinutes: 52,
      distractions: 0,
      dailyTotal: 158,
      focusSessions: 11,
      avgImmunity: 91,
      completed: 47,
    },
    {
      school: 'Vassar College',
      domain: '@vassar.edu',
      focusImmunity: 88,
      status: 'IMMUNE' as const,
      sessionMinutes: 45,
      distractions: 1,
      dailyTotal: 142,
      focusSessions: 9,
      avgImmunity: 86,
      completed: 41,
    },
    {
      school: 'Yale University',
      domain: '@yale.edu',
      focusImmunity: 37,
      status: 'BUILDING' as const,
      sessionMinutes: 15,
      distractions: 8,
      dailyTotal: 41,
      focusSessions: 4,
      avgImmunity: 42,
      completed: 18,
    },
    {
      school: 'Cornell University',
      domain: '@cornell.edu',
      focusImmunity: 89,
      status: 'IMMUNE' as const,
      sessionMinutes: 48,
      distractions: 0,
      dailyTotal: 151,
      focusSessions: 10,
      avgImmunity: 87,
      completed: 44,
    },
    {
      school: 'Arizona State University',
      domain: '@asu.edu',
      focusImmunity: 86,
      status: 'IMMUNE' as const,
      sessionMinutes: 50,
      distractions: 1,
      dailyTotal: 147,
      focusSessions: 10,
      avgImmunity: 84,
      completed: 43,
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] p-12">
      <div className="mb-8 text-center">
        <h1 className="text-white text-3xl font-bold mb-2">Individual User Stats</h1>
        <p className="text-gray-500 text-sm">
          Screenshot each card individually for social media FOMO marketing
        </p>
      </div>
      <div className="space-y-12 flex flex-col items-center">
        {users.map((user, idx) => (
          <div key={idx} className="border-2 border-[#00ff9d]/20 rounded">
            <UserStatCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
