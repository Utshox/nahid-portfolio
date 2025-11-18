export default function LeadyApp() {
  return (
    <div className="min-h-screen bg-[#f4f6fa]">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <button 
          onClick={() => window.location.hash = 'home'}
          className="mb-16 flex items-center gap-2 text-[#454953] hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12L3.64645 11.6464L3.29289 12L3.64645 12.3536L4 12ZM19 12.5C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5V12V12.5ZM10 6L9.64645 5.64645L3.64645 11.6464L4 12L4.35355 12.3536L10.3536 6.35355L10 6ZM4 12L3.64645 12.3536L9.64645 18.3536L10 18L10.3536 17.6464L4.35355 11.6464L4 12ZM4 12V12.5H19V12V11.5H4V12Z" fill="currentColor"/>
          </svg>
          Back
        </button>

        <h1 className="text-5xl font-medium mb-8 text-[#101113]">
          Leady App - Lead Generation Mobile App
        </h1>

        <div className="grid grid-cols-3 gap-12 border-b border-[#cecede] pb-8 mb-16">
          <div>
            <p className="text-sm text-[#454953] mb-2">My Role</p>
            <p className="text-lg text-[#101113]">UX & UI Design, Prototyping</p>
          </div>
          <div>
            <p className="text-sm text-[#454953] mb-2">Teams</p>
            <p className="text-lg text-[#101113]">Business Analyst, PM, Dev</p>
          </div>
          <div>
            <p className="text-sm text-[#454953] mb-2">Timeframe</p>
            <p className="text-lg text-[#101113]">Aug 2024 - Jan 2025</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-gray-300 h-64 rounded mb-8">
            <p className="text-center pt-24 text-gray-600">[Mobile App Mockup - Placeholder]</p>
          </div>
          <p className="text-2xl leading-relaxed text-[#101113]">
            Leady is a mobile-first lead generation and customer management application designed to help businesses efficiently capture, track, and manage customer leads throughout the sales funnel. The app combines intuitive design with powerful features to maximize conversion rates.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-medium mb-12">
            <span className="text-[#101113]">The Challenges </span>
            <span className="italic text-[#454953]">We Overcame</span>
          </h2>
          <div className="bg-[#e5e8ef] p-8 rounded mb-6">
            <h3 className="font-medium text-lg mb-2 text-[#101113]">Mobile-First for On-the-Go Salespeople</h3>
            <p className="text-[#454953]">Creating a powerful yet lightweight mobile interface for sales teams working remotely and in the field.</p>
          </div>
          <div className="bg-[#e5e8ef] p-8 rounded mb-6">
            <h3 className="font-medium text-lg mb-2 text-[#101113]">Real-Time Synchronization</h3>
            <p className="text-[#454953]">Ensuring data consistency across devices with intermittent connectivity.</p>
          </div>
          <div className="bg-[#e5e8ef] p-8 rounded">
            <h3 className="font-medium text-lg mb-2 text-[#101113]">Conversion Optimization</h3>
            <p className="text-[#454953]">Designing workflows that guide users to capture maximum lead information without friction.</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl text-[#101113] max-w-xl">
            Beyond lead capture, Leady includes advanced segmentation, lead scoring, and integration capabilities designed with user-centered principles for seamless navigation and consistency.
          </p>
          <button
            onClick={() => window.location.hash = 'mf-web-portal'}
            className="border-2 border-[#101113] px-6 py-4 hover:bg-[#101113] hover:text-white transition"
          >
            NEXT DESIGN
          </button>
        </div>
      </div>
    </div>
  );
}
