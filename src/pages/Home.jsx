import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  const caseStudies = [
    {
      id: 'mis-selp',
      title: 'SELP MIS Web App',
      subtitle: 'Simplifying Justice, Strengthening Support',
      description: 'A comprehensive case management platform for legal and social support services. Designed with empathy for rural officers with low digital literacy.',
      role: 'Flow Analysis, UX/UI Design, Prototyping',
      duration: 'Aug 2024 - Jan 2025'
    },
    {
      id: 'leady-app',
      title: 'Leady App',
      subtitle: 'Lead Generation Mobile App',
      description: 'Mobile-first application for capturing and managing customer leads throughout the sales funnel. Built for salespeople working remotely and in the field.',
      role: 'UX & UI Design, Prototyping',
      duration: 'Aug 2024 - Jan 2025'
    },
    {
      id: 'mf-web-portal',
      title: 'MF Web Portal',
      subtitle: 'Streamlining Financial Operations',
      description: 'Comprehensive financial operations platform for mutual fund management and investment portfolio tracking with institutional-grade analytics.',
      role: 'UX & UI Design, Prototyping',
      duration: 'Aug 2024 - Jan 2025'
    },
    {
      id: 'course-lms',
      title: 'ONE LMS',
      subtitle: 'Course Creation Experience',
      description: 'Learning management system empowering educators to create and deliver engaging online and blended learning experiences with intuitive workflows.',
      role: 'User Flow, Information Architecture, Wireframing',
      duration: '8 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fa]">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-20">
          <h1 className="text-6xl font-medium mb-4 text-[#101113]">
            Design Case Studies
          </h1>
          <p className="text-xl text-[#454953] max-w-2xl">
            Explore my design work across diverse industries and platforms. Each project represents a unique challenge solved through user-centered design principles and iterative development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => navigate(`/${study.id}`)}
              className="bg-white p-8 rounded-lg border border-[#e0e0e0] text-left hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-[#101113] mb-2">
                {study.title}
              </h3>
              <p className="text-lg text-[#454953] italic mb-4">
                {study.subtitle}
              </p>
              <p className="text-[#454953] mb-6 line-clamp-2">
                {study.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#999] mb-1">Role</p>
                  <p className="text-[#101113] font-medium">{study.role}</p>
                </div>
                <div>
                  <p className="text-[#999] mb-1">Duration</p>
                  <p className="text-[#101113] font-medium">{study.duration}</p>
                </div>
              </div>
              <div className="mt-6 text-[#101113] font-semibold hover:gap-2 transition-all flex items-center gap-1">
                View Case Study
                <span>→</span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-[#101113] text-white p-12 rounded-lg">
          <h2 className="text-3xl font-medium mb-4">Let's Collaborate</h2>
          <p className="text-lg text-[#f4f6fa] mb-6">
            Interested in discussing design strategy, UX research, or working together on your next project?
          </p>
          <a
            href="mailto:neamul.morshed.nahid@gmail.com"
            className="inline-block border-2 border-white px-6 py-3 hover:bg-white hover:text-[#101113] transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
