export default function LinkedInBanner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      {/* Banner Container - Exact LinkedIn dimensions */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          width: '1584px', 
          height: '396px',
          background: '#0f1729'
        }}
      >
        {/* Sharp corner brackets - cockpit style */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-4 left-4 w-16 h-[2px] bg-[#3dd68c]" />
          <div className="absolute top-4 left-4 w-[2px] h-16 bg-[#3dd68c]" />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-4 right-4 w-16 h-[2px] bg-[#3dd68c]" />
          <div className="absolute top-4 right-4 w-[2px] h-16 bg-[#3dd68c]" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-4 left-4 w-16 h-[2px] bg-[#3dd68c]" />
          <div className="absolute bottom-4 left-4 w-[2px] h-16 bg-[#3dd68c]" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-4 right-4 w-16 h-[2px] bg-[#3dd68c]" />
          <div className="absolute bottom-4 right-4 w-[2px] h-16 bg-[#3dd68c]" />
        </div>

        {/* Sharp horizontal divider lines */}
        <div className="absolute left-32 right-32 h-[1px] bg-[#2d4663]" style={{ top: '100px' }} />
        <div className="absolute left-32 right-32 h-[1px] bg-[#2d4663]" style={{ bottom: '100px' }} />

        {/* Main content area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-20">
          {/* Brand name */}
          <h1 
            className="text-[72px] font-bold tracking-wider mb-3"
            style={{
              color: '#ffffff',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.12em',
              lineHeight: '1'
            }}
          >
            VECTOMIND
          </h1>

          {/* Main tagline */}
          <p 
            className="text-[17px] mb-6 text-center max-w-[800px]"
            style={{
              color: '#9ca8bc',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: '1.4'
            }}
          >
            For those who demand more from their time, tools, and themselves.
          </p>

          {/* Access badge - sharp and prominent */}
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#3dd68c] rounded-none" />
            <span 
              className="text-[16px] font-medium"
              style={{
                color: '#3dd68c',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '0.08em'
              }}
            >
              .EDU ACCESS PRIORITY
            </span>
            <div className="w-1.5 h-1.5 bg-[#3dd68c] rounded-none" />
          </div>
        </div>

        {/* Bottom tagline */}
        <div 
          className="absolute bottom-6 left-0 right-0 text-center text-[13px]"
          style={{
            color: '#5a6b85',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            letterSpacing: '0.02em'
          }}
        >
          Hard work is your magnitude. <span style={{ color: '#9ca8bc' }}>Vectomind</span> is your direction.
        </div>

        {/* Top right status indicator */}
        <div className="absolute top-6 right-32 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#3dd68c] rounded-none animate-pulse" />
          <span 
            className="text-[10px] tracking-wider"
            style={{
              color: '#3dd68c',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}