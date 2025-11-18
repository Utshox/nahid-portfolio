export default function CourseManagementLms() {
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
          Redesigning the ONE LMS Course Creation Experience
        </h1>

        <div className="grid grid-cols-3 gap-12 border-b border-[#cecede] pb-8 mb-16">
          <div>
            <p className="text-sm text-[#454953] mb-2">My Role</p>
            <p className="text-lg text-[#101113]">User Flow, Information Architecture, Wireframe, Usability Testing</p>
          </div>
          <div>
            <p className="text-sm text-[#454953] mb-2">Teams</p>
            <p className="text-lg text-[#101113]">Product Analysts, PM, Dev</p>
          </div>
          <div>
            <p className="text-sm text-[#454953] mb-2">Timeframe</p>
            <p className="text-lg text-[#101113]">8 weeks</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-gray-300 h-64 rounded mb-8">
            <p className="text-center pt-24 text-gray-600">[LMS Interface Mockup - Placeholder]</p>
          </div>
          <p className="text-2xl leading-relaxed text-[#101113]">
            ONE LMS is a comprehensive learning management system designed to empower educators and trainers to create, manage, and deliver engaging online and blended learning experiences. The redesigned course creation workflow dramatically simplified the process for educators of all technical skill levels.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-medium mb-12">
            <span className="text-[#101113]">The Challenges </span>
            <span className="italic text-[#454953]">We Overcame</span>
          </h2>
          <div className="bg-[#e5e8ef] p-8 rounded mb-6">
            <h3 className="font-medium text-lg mb-2 text-[#101113]">Simplifying Complex Course Creation</h3>
            <p className="text-[#454953]">Breaking down multi-step course setup into intuitive, manageable workflows for non-technical educators.</p>
          </div>
          <div className="bg-[#e5e8ef] p-8 rounded mb-6">
            <h3 className="font-medium text-lg mb-2 text-[#101113]">Flexible Content Management</h3>
            <p className="text-[#454953]">Supporting diverse content types (video, documents, assessments, live sessions) without overwhelming creators.</p>
          </div>
          <div className="bg-[#e5e8ef] p-8 rounded">
            <h3 className="font-medium text-lg mb-2 text-[#101113]">Engagement and Progress Tracking</h3>
            <p className="text-[#454953]">Providing educators with actionable insights into learner progress and engagement metrics.</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl text-[#101113] max-w-xl">
            The redesigned LMS features an intuitive course canvas, streamlined enrollment management, real-time collaboration, and comprehensive analytics designed for both educators and learners.
          </p>
          <button
            onClick={() => window.location.hash = 'mis-selp'}
            className="border-2 border-[#101113] px-6 py-4 hover:bg-[#101113] hover:text-white transition"
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
}
