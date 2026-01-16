export default function XBanner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      {/* X/Twitter Banner - 1500x500px */}
      <div className="relative bg-[#0a1628] overflow-hidden" style={{ width: '1500px', height: '500px' }}>
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Corner brackets - neon green */}
        {/* Top Left */}
        <div className="absolute left-8 top-8">
          <div className="w-12 h-[2px] bg-[#00ff9d]" />
          <div className="w-[2px] h-12 bg-[#00ff9d]" />
        </div>
        
        {/* Top Right */}
        <div className="absolute right-8 top-8">
          <div className="w-12 h-[2px] bg-[#00ff9d] ml-auto" />
          <div className="w-[2px] h-12 bg-[#00ff9d] ml-auto" />
        </div>
        
        {/* Bottom Left */}
        <div className="absolute left-8 bottom-8">
          <div className="w-[2px] h-12 bg-[#00ff9d]" />
          <div className="w-12 h-[2px] bg-[#00ff9d]" />
        </div>
        
        {/* Bottom Right */}
        <div className="absolute right-8 bottom-8">
          <div className="w-[2px] h-12 bg-[#00ff9d] ml-auto" />
          <div className="w-12 h-[2px] bg-[#00ff9d] ml-auto" />
        </div>

        {/* Tactical scan lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ff9d]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ff9d]/20 to-transparent" />

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center px-20">
          {/* Top accent line */}
          <div className="w-16 h-[2px] bg-[#00ff9d] mb-8" />
          
          {/* Brand name */}
          <div className="text-center mb-6">
            <div className="text-[#00ff9d] font-bold tracking-[0.3em] mb-2" style={{ fontSize: '14px' }}>
              VECTOMIND
            </div>
            <div className="text-white font-light tracking-wide leading-tight" style={{ fontSize: '42px', maxWidth: '900px' }}>
              For those who demand more from their time, tools, and themselves
            </div>
          </div>

          {/* Bottom positioning */}
          <div className="mt-8 flex items-center gap-3">
            <div className="w-2 h-2 bg-[#00ff9d] rotate-45" />
            <div className="text-[#00ff9d] font-medium tracking-[0.25em]" style={{ fontSize: '12px' }}>
              .EDU ACCESS PRIORITY
            </div>
            <div className="w-2 h-2 bg-[#00ff9d] rotate-45" />
          </div>

          {/* Bottom accent line */}
          <div className="w-16 h-[2px] bg-[#00ff9d] mt-8" />
        </div>

        {/* Subtle corner glow effects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ff9d]/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00ff9d]/5 blur-[80px] rounded-full" />
      </div>
    </div>
  );
}
