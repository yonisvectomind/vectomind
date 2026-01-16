import { useState } from "react";
import { PulsatingTimer } from "@/app/components/PulsatingTimer";
import FourUserQuadrant from "@/app/components/FourUserQuadrant";

export function VectomindLanding() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate .edu email
    if (!email.endsWith(".edu")) {
      alert("Only .edu emails are accepted for alpha access.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("access_key", "9418efe4-198e-46de-be41-9be9667dd58a");
      formData.append("email", email);
      formData.append("subject", "Vectomind Alpha Access Request");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        
        {/* 1. HERO */}
        <div className="mb-20 md:mb-32 text-center">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
            VECTOMIND
          </h1>
          <p className="text-2xl md:text-4xl text-zinc-300 mb-4">
            Lock your focus. One tab at a time.
          </p>
          <p className="text-lg md:text-xl text-zinc-400 mb-8">
            Alpha cohort: 15 users. Limited slots.
          </p>
          <a
            href="#apply"
            className="inline-block bg-[#FF5722] text-white px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl font-semibold hover:bg-[#FF6B35] transition-colors"
          >
            GET YOUR .EDU ACCESS
          </a>
        </div>

        {/* 2. COST OF DRIFT */}
        <div className="mb-20 md:mb-32 max-w-3xl mx-auto">
          <div className="border border-zinc-800 p-8 md:p-12 bg-[#0F1F33]">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#FF3B30]">
              The Cost of Drift
            </h2>
            <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed mb-4">
              Every tab switch costs ~20 minutes of reload time.
            </p>
            <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed mb-4">
              5 switches an hour = you never reach 100%.
            </p>
            <p className="text-base md:text-lg text-zinc-500">
              Reddit. Slack. YouTube. Discord. Each context switch fragments your attention. The engine enforces single-tab isolation.
            </p>
          </div>
        </div>

        {/* 3. HOW IT WORKS */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-4xl font-semibold mb-10 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-zinc-800 p-6 md:p-8 bg-[#0F1F33]">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#00D9A3]">One-tab lock</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Work in a single tab. All external requests intercepted. Clinical isolation enforced.
              </p>
            </div>
            <div className="border border-zinc-800 p-6 md:p-8 bg-[#0F1F33]">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#00D9A3]">100ms distraction detection</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Pre-conscious intervention. The engine sees your drift before you rationalize it.
              </p>
            </div>
            <div className="border border-zinc-800 p-6 md:p-8 bg-[#0F1F33]">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#00D9A3]">Focus Immunity Score</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Real-time metric. 90%+ = locked in. Below 60% = you're being out‑focused.
              </p>
            </div>
          </div>
        </div>

        {/* 4. FOMO QUADRANTS */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-10 text-center">
            Alpha Cohort – Live Focus Metrics
          </h2>
          <FourUserQuadrant />
        </div>

        {/* FOMO CTA */}
        <div className="mb-20 md:mb-32 text-center">
          <p className="text-lg md:text-2xl text-zinc-300 mb-6">
            Same engine. Different discipline. Where does your .edu rank?
          </p>
          <a
            href="#apply"
            className="inline-block bg-[#FF5722] text-white px-12 py-3 md:px-14 md:py-4 text-base md:text-lg font-semibold hover:bg-[#FF6B35] transition-colors"
          >
            Join the alpha
          </a>
        </div>

        {/* 5. PAVLOVIAN TIMER */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">
              Pavlovian Precision
            </h2>
            <p className="text-base md:text-lg text-zinc-400">
              The engine snaps when you drift. 10 distractions reset the timer.
            </p>
          </div>
          <PulsatingTimer />
        </div>

        {/* 6. FINAL APPLY SECTION - SCARCITY ONLY */}
        <div id="apply" className="mb-12 md:mb-16 scroll-mt-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-white font-bold mb-8 text-xl md:text-2xl tracking-wide">
              75 slots remain. Manual review.
            </p>
            
            {submitStatus === "success" ? (
              <div className="border border-[#00D9A3] bg-[#00D9A3]/10 p-8 text-center">
                <p className="text-lg text-[#00D9A3] mb-2">
                  ✓ Application received
                </p>
                <p className="text-zinc-400">
                  You'll hear from us within 48 hours if accepted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-zinc-800 bg-[#0F1F33] p-8 md:p-12">
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm text-zinc-400 mb-2 uppercase tracking-wider">
                    Your .edu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="operator@university.edu"
                    required
                    className="w-full bg-black border border-zinc-700 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF5722] text-white px-8 py-4 text-lg font-semibold hover:bg-[#FF6B35] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SUBMITTING..." : "APPLY"}
                </button>

                {submitStatus === "error" && (
                  <p className="text-center text-sm text-[#FF3B30] mt-4">
                    Submission failed. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* 7. FOOTER */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-xs md:text-sm text-zinc-600">
            © 2026 <span className="text-white font-bold">Vectomind</span> Inc. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}