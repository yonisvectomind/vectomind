import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface ApplyFormProps {
  onBack: () => void;
}

export function ApplyForm({ onBack }: ApplyFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate .edu email
    if (!email.endsWith(".edu")) {
      setError("Priority access requires a .edu email address. Other emails will be queued.");
      // You can still allow submission, just show the warning
    }

    // Web3Forms integration
    const formData = new FormData();
    formData.append("access_key", "9418efe4-198e-46de-be41-9be9667dd58a");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("school", school);
    formData.append("subject", "Vectomind Alpha Application");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A1628] text-white flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Application Received
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            {email.endsWith(".edu")
              ? "Priority queue confirmed. .edu applications are reviewed first."
              : "Application queued. .edu emails receive priority access."}
          </p>
          <p className="text-zinc-500 mb-8">
            You'll hear from us within 48 hours if accepted. 75 alpha slots remain.
          </p>
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to landing page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Apply for Alpha Access
          </h1>
          <p className="text-lg text-zinc-400">
            Priority queueing for .edu emails. Not everyone qualifies.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-zinc-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#0F1F33] border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-[#00D9A3] transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-zinc-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0F1F33] border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-[#00D9A3] transition-colors"
              placeholder="your.email@university.edu"
            />
            {email && !email.endsWith(".edu") && (
              <p className="text-[#FFB800] text-sm mt-2">
                ⚠ Priority access requires .edu email
              </p>
            )}
            {email && email.endsWith(".edu") && (
              <p className="text-[#00D9A3] text-sm mt-2">
                ✓ Priority queue eligibility confirmed
              </p>
            )}
          </div>

          <div>
            <label htmlFor="school" className="block text-zinc-300 mb-2">
              School / University
            </label>
            <input
              type="text"
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
              className="w-full bg-[#0F1F33] border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-[#00D9A3] transition-colors"
              placeholder="e.g., MIT, Columbia, Georgia Tech"
            />
          </div>

          {error && (
            <div className="p-4 bg-[#2A1414] border border-[#FF3B30] text-[#FF3B30]">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF5722] text-white px-8 py-4 text-lg font-semibold hover:bg-[#FF6B35] transition-colors"
          >
            SUBMIT APPLICATION
          </button>

          <p className="text-sm text-zinc-500 text-center">
            Applications are reviewed manually. Alpha cohort limited to 200 users.
          </p>
        </form>
      </div>
    </div>
  );
}