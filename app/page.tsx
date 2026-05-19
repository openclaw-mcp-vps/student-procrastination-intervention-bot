export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          AI-Powered Study Coach
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Procrastination<br />Before It Starts
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          StudyGuard monitors your study patterns and sends personalized AI interventions the moment it detects a procrastination spiral forming — so you stay on track, every time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works for students &amp; parents.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Pattern Tracking</h3>
            <p className="text-sm text-[#8b949e]">Logs study sessions and detects early warning signs of avoidance behavior.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Interventions</h3>
            <p className="text-sm text-[#8b949e]">Personalized nudges via email or SMS before procrastination takes hold.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Calendar Sync</h3>
            <p className="text-sm text-[#8b949e]">Integrates with your schedule to predict high-risk procrastination windows.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited study session tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI-generated intervention messages</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Calendar integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Parent dashboard access</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does StudyGuard detect procrastination?</h3>
            <p className="text-sm text-[#8b949e]">Our AI analyzes your study session logs, calendar deadlines, and historical patterns to calculate a real-time procrastination risk score. When the score crosses a threshold, it triggers a personalized intervention.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can parents monitor their child's progress?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Every Pro plan includes a parent dashboard where guardians can view study trends, risk alerts, and intervention history — with the student's consent.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What if I want to cancel?</h3>
            <p className="text-sm text-[#8b949e]">You can cancel anytime from your billing portal. No contracts, no hidden fees. Your data is retained for 30 days after cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} StudyGuard. All rights reserved.
      </footer>
    </main>
  )
}
