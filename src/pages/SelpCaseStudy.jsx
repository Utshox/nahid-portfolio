import React from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from '../data/svg-659t5ak9qp.js';

// ============= SVG ICONS =============
function KeypointIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
      <g id="Keypoint Icon">
        <path d={svgPaths.p2e47fa00} id="Ellipse 71" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p3eb0f680} id="Ellipse 69" stroke="var(--stroke-0, #454953)" strokeWidth="2" />
        <path d="M26 13V17.3333" id="Vector 110" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p37b4e700} id="Vector 110_2" stroke="var(--stroke-0, #454953)" strokeLinecap="round" />
        <path d={svgPaths.p17f0fc00} id="Vector 110_3" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p9d7480} id="Vector 110_4" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p2a166ef0} id="Vector 110_5" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

function KeypointIcon1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
      <g id="Keypoint Icon">
        <path d={svgPaths.p32c4a180} id="Vector 4" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.pd894300} id="Line 1" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

function KeypointIcon2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
      <g id="Keypoint Icon">
        <circle cx="37" cy="15" id="Ellipse 148" r="11" stroke="var(--stroke-0, #454953)" strokeWidth="2" />
        <circle cx="25" cy="40" id="Ellipse 149" r="8" stroke="var(--stroke-0, #454953)" strokeWidth="2" />
        <circle cx="10" cy="19" id="Ellipse 150" r="6" stroke="var(--stroke-0, #454953)" strokeWidth="2" />
      </g>
    </svg>
  );
}

function KeypointIcon3() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
      <g id="Keypoint Icon">
        <circle cx="26" cy="26" id="Ellipse 87" r="20.5" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p34ee6520} id="Ellipse 90" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="2" />
        <rect fill="var(--fill-0, #454953)" height="4.58333" id="Rectangle 3973" rx="2.29167" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="0.25" width="6.75" x="15.0417" y="17.209" />
        <rect fill="var(--fill-0, #454953)" height="4.58333" id="Rectangle 3974" rx="2.29167" stroke="var(--stroke-0, #454953)" strokeLinecap="round" strokeWidth="0.25" width="6.75" x="30.2083" y="17.209" />
      </g>
    </svg>
  );
}

// ============= BACK BUTTON =============
function Back({ navigate }) {
  return (
    <button 
      onClick={() => navigate('/')} 
      className="content-stretch flex gap-[4px] items-center cursor-pointer hover:opacity-70 transition"
    >
      <svg className="relative shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Back Icon">
          <path d={svgPaths.p22227c80} fill="var(--stroke-0, #454953)" id="Vector 9" />
        </g>
      </svg>
      <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#454953] text-[14px] text-nowrap">Back</p>
    </button>
  );
}

// ============= PROJECT HERO =============
function ProjectHero({ navigate }) {
  return (
    <div className="bg-[#f4f6fa] w-full">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center pb-[40px] pt-[100px] px-[170px] relative w-full">
          <div className="content-stretch flex flex-col gap-[80px] items-start relative w-[1101px]">
            {/* Hero Text Section */}
            <div className="content-stretch flex flex-col gap-[56px] items-start w-full">
              <Back navigate={navigate} />
              <div className="content-stretch flex gap-[10px] items-center justify-center w-full">
                <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.26] text-[#101113] text-[52px]">
                  SELP MIS Web App - Simplifying Justice, Strengthening Support
                </p>
              </div>
            </div>

            {/* Responsibility Card */}
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start relative w-full border-t border-[#cecede] pt-[24px]">
              <div className="content-stretch flex items-center justify-between w-full">
                {/* My Role */}
                <div className="content-stretch flex flex-col gap-[12px] items-start w-[300px]">
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#454953] text-[16px]">My Role</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#101113] text-[18px]">Flow Analysis, Ideation & Wire-framing, Prototyping & Usability Testing</p>
                </div>

                {/* Teams */}
                <div className="content-stretch flex flex-col gap-[12px] items-start w-[300px]">
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#454953] text-[16px]">Teams</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#101113] text-[18px] text-center">Product Manager, PM, Dev</p>
                </div>

                {/* Timeframe */}
                <div className="content-stretch flex flex-col gap-[12px] items-start w-[300px]">
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#454953] text-[16px]">Timeframe</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#101113] text-[18px] text-center">Aug 2024 - Jan 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= PROJECT BANNER =============
function ProjectBanner() {
  return (
    <div className="bg-gray-200 h-[200px] overflow-clip relative w-full">
      <div className="absolute h-[716px] left-[-41px] top-[-160px] w-[1482px]">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-300 to-gray-200" />
      </div>
    </div>
  );
}

// ============= PROJECT OVERVIEW =============
function ProjectOverview() {
  return (
    <div className="bg-[#f4f6fa] w-full">
      <div className="flex flex-row items-center w-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[170px] py-[220px] w-full">
          <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.5] text-[#101113] text-[34px]">
            This case study reviews the SELP MIS Platform, a tool created to streamline legal and social support for survivors. The platform integrates case management with social empowerment modules to enhance service delivery and empower officers to work more efficiently. We will explore the key challenges, solutions, and lessons learned during its development.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============= VISION SECTION =============
function VisionSection() {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start pb-[100px] pt-[80px] px-[170px]">
          {/* Title */}
          <div className="content-stretch flex flex-col gap-[10px] items-start w-full">
            <p className="font-['Naga_Space:Regular',sans-serif] text-[#101113] text-[44px]">
              The Vision <span className="italic text-[#454953]">Behind the SELP MIS Platform</span>
            </p>
          </div>

          {/* Vision Keypoints Grid */}
          <div className="content-stretch flex flex-col gap-[20px] items-start w-full">
            {/* Row 1 */}
            <div className="content-stretch flex gap-[20px] items-start w-full">
              {/* Keypoint 1 */}
              <div className="bg-[#e5e8ef] box-border content-stretch flex flex-col gap-[34px] items-start px-[22px] py-[30px] w-[540px]">
                <div className="relative shrink-0 size-[52px]">
                  <KeypointIcon />
                </div>
                <div className="content-stretch flex flex-col gap-[9px] items-start w-full">
                  <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Improve Operational Efficiency</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[16px]">Automate and streamline case management processes for faster response times.</p>
                </div>
              </div>

              {/* Keypoint 2 */}
              <div className="bg-[#e5e8ef] box-border content-stretch flex flex-col gap-[34px] items-start px-[22px] py-[30px] w-[540px]">
                <div className="relative shrink-0 size-[52px]">
                  <KeypointIcon1 />
                </div>
                <div className="content-stretch flex flex-col gap-[9px] items-start w-full">
                  <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Enhance Service Quality and Effectiveness</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[16px]">Automate and streamline case management processes for faster response times.</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="content-stretch flex gap-[20px] items-start w-full">
              {/* Keypoint 3 */}
              <div className="bg-[#e5e8ef] box-border content-stretch flex flex-col gap-[34px] items-start px-[22px] py-[30px] w-[540px]">
                <div className="relative shrink-0 size-[52px]">
                  <KeypointIcon2 />
                </div>
                <div className="content-stretch flex flex-col gap-[9px] items-start w-full">
                  <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Strengthen Strategic Decision-Making</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[16px]">Enable leadership with data-driven insights and analytics for resource allocation</p>
                </div>
              </div>

              {/* Keypoint 4 */}
              <div className="bg-[#e5e8ef] box-border content-stretch flex flex-col gap-[34px] items-start px-[22px] py-[30px] w-[540px]">
                <div className="relative shrink-0 size-[52px]">
                  <KeypointIcon3 />
                </div>
                <div className="content-stretch flex flex-col gap-[9px] items-start w-full">
                  <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Increase User Adoption and Satisfaction</p>
                  <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[16px]">Ensure that the system is intuitive and user-friendly to increase usage among low-tech users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= CHALLENGES SECTION =============
function ChallengesSection() {
  return (
    <div className="bg-[#f4f6fa] box-border content-stretch flex flex-col gap-[40px] items-start px-[170px] py-[80px] w-full">
      <div className="content-stretch flex flex-col gap-[36px] items-end w-full">
        {/* Title */}
        <div className="content-stretch flex flex-col gap-[10px] items-start w-full">
          <p className="font-['Naga_Space:Regular',sans-serif] text-[#101113] text-[44px]">
            The Challenges <span className="italic text-[#454953]">We Overcame</span>
          </p>
          <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[20px] w-[540px]">
            The main challenges arose from both technical and emotional barriers that affected the users' ability to adapt to the new system
          </p>
        </div>

        {/* Challenges List */}
        <div className="content-stretch flex flex-col items-start w-full">
          {/* Challenge 1 */}
          <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-0 py-[22px] w-full border-t border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">User Fear and the Digital Divide</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">Officers feared that adopting a digital system would threaten their jobs due to low digital literacy and reliance on paper-based workflows.</p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-0 py-[22px] w-full border-y border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Balancing Simplicity with System Power</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">Balancing the need for a powerful case management system with simplicity for first-time users posed a design challenge.</p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-0 py-[22px] w-full border-b border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Designing for a High-Stakes Environment</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">The platform had to function in rural areas with unreliable internet and power, requiring resilience to avoid reverting to manual processes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= DESIGN APPROACH SECTION =============
function DesignApproachSection() {
  return (
    <div className="bg-[#f4f6fa] box-border content-stretch flex flex-col gap-[40px] items-start px-[170px] py-[100px] w-full">
      <div className="content-stretch flex flex-col gap-[60px] items-start w-full">
        {/* Title */}
        <div className="content-stretch flex flex-col gap-[18px] items-start w-full">
          <p className="font-['Naga_Space:Regular',sans-serif] text-[#101113] text-[44px]">
            Empathy-Driven, <span className="italic text-[#454953]">Design for SELP Officers</span>
          </p>
        </div>

        {/* Design Approach Points */}
        <div className="content-stretch flex flex-col gap-[40px] items-start w-full">
          {/* Point 1 */}
          <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[22px] w-full border-b border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">In-Depth Interviews & Field Visits</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">We conducted interviews and field visits to understand the challenges faced by SELP officers in rural areas, gathering insights from their interactions with paper-based systems and case management.</p>
            </div>
            <div className="h-[304px] w-[540px] bg-gray-200 rounded" />
          </div>

          {/* Point 2 */}
          <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[22px] w-full border-b border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Stepwise Case Progression</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">We implemented a step-by-step case progression flow that allowed officers to update cases without requiring extensive navigation through complex menus, making the process feel natural and intuitive.</p>
            </div>
            <div className="h-[304px] w-[540px] bg-gray-200 rounded" />
          </div>

          {/* Point 3 */}
          <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[22px] w-full border-b border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Guided Workspace for Day-to-Day Updates</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">We designed a dual-panel layout to separate case review and action. The left panel serves as a scannable case file, while the right panel offers a guided, conversational workflow, making tasks feel logical and step-by-step.</p>
            </div>
            <div className="h-[304px] w-[540px] bg-gray-200 rounded" />
          </div>

          {/* Point 4 */}
          <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-0 py-[22px] w-full border-b border-[#cecede]">
            <div className="content-stretch flex gap-[20px] items-start w-full">
              <p className="font-['Naga_Space:Medium',sans-serif] leading-[1.4] text-[#101113] text-[18px]">Design Goal — Empower Officers</p>
              <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[18px]">The aim was to empower officers with an approachable, intuitive design that helps them feel in control while managing cases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= PROGRESSIVE DISCLOSURE SECTION =============
function ProgressiveDisclosureSection() {
  return (
    <div className="bg-[#f4f6fa] box-border content-stretch flex flex-col gap-[20px] items-start px-[170px] py-[120px] w-full">
      <div className="content-stretch flex flex-col gap-[60px] items-start w-full">
        {/* Title */}
        <div className="content-stretch flex flex-col gap-[10px] items-start w-full">
          <p className="font-['Naga_Space:Regular',sans-serif] text-[#101113] text-[44px]">
            <span className="italic text-[#454953]">Progressive Disclosure to </span>Reduce Cognitive load
          </p>
          <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[20px] w-[540px]">
            We used progressive disclosure to reveal steps only when needed, preventing overwhelm and making the platform more approachable for officers with limited tech experience.
          </p>
        </div>
      </div>
      <div className="h-[223px] w-[1100px] bg-gray-200 rounded" />
    </div>
  );
}

// ============= PREDICTABLE EXPERIENCE SECTION =============
function PredictableExperienceSection() {
  return (
    <div className="bg-[#f4f6fa] box-border content-stretch flex flex-col gap-[10px] items-start px-[170px] py-[140px] w-full">
      <div className="content-stretch flex flex-col gap-[60px] items-start w-full">
        {/* Title */}
        <div className="content-stretch flex flex-col gap-[10px] items-start w-full">
          <p className="font-['Naga_Space:Regular',sans-serif] text-[#101113] text-[44px]">
            <span className="italic text-[#454953]">Creating a </span>Predictable<span> and </span><span>Forgiving </span>Experience
          </p>
          <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.4] text-[#454953] text-[20px]">
            We used progressive disclosure to reveal steps one at a time, helping officers focus on tasks without feeling overwhelmed and making the platform more approachable for those with limited tech experience.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============= RESULTS SECTION =============
function ResultsSection({ navigate }) {
  return (
    <div className="bg-[#f4f6fa] box-border content-stretch flex flex-col gap-[100px] items-start justify-center pb-[120px] pt-[140px] px-[170px] w-full">
      <div className="content-stretch flex flex-col h-[398px] items-start justify-between w-full">
        <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.5] text-[#101113] text-[34px]">
          Beyond the Legal Support Module, the SELP MIS platform includes additional modules for social empowerment and program management, all designed with user-centered principles for ease of use, seamless navigation, and consistency.
        </p>
        
        <button 
          onClick={() => navigate('/leady-app')} 
          className="box-border content-stretch flex gap-[10px] items-center justify-center px-[26px] py-[22px] cursor-pointer border-2 border-[#101113] hover:bg-[#101113] hover:text-white transition"
        >
          <p className="font-['Naga_Space:Semibold',sans-serif] leading-none text-[#101113] text-[18px] text-nowrap uppercase">Next design</p>
        </button>
      </div>
    </div>
  );
}

// ============= FOOTER =============
function Footer() {
  return (
    <div className="bg-black h-[596px] overflow-clip relative w-full">
      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 596">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="720" x2="720" y1="-6.29444e-05" y2="596">
            <stop stopColor="#101113" />
            <stop offset="1" stopColor="#101113" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={svgPaths.p17e68a80} fill="url(#paint0_linear)" id="Union" />
      </svg>

      {/* Content */}
      <div className="absolute content-stretch flex flex-col gap-[200px] items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1324px]">
        {/* Top Section */}
        <div className="content-stretch flex flex-col gap-[68px] items-start w-full">
          <div className="content-stretch flex items-start justify-between w-[1324px]">
            <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#a1a5ae] text-[20px] text-nowrap">PURPOSEFUL SOLUTION</p>
            <p className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#a1a5ae] text-[20px] text-nowrap">FOR YOUR BUSINESS</p>
          </div>

          <div className="content-stretch flex items-end justify-between w-[1324px]">
            <div className="content-stretch flex flex-col gap-[14px] items-start">
              <p className="font-['Naga_Space:Italic',sans-serif] leading-[1.34] text-[#a1a5ae] text-[38px] text-nowrap">
                Let's <span className="font-['Naga_Space:Regular',sans-serif]">Collaborate..</span>
              </p>
              <a href="mailto:neamul.morshed.nahid@gmail.com" className="font-['Naga_Space:Regular',sans-serif] leading-[1.34] text-[#f4f6fa] text-[26px] underline hover:opacity-70">
                neamul.morshed.nahid@gmail.com
              </a>
            </div>
            
            <button className="box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[20px] border-2 border-[#f4f6fa] hover:bg-white hover:text-black transition">
              <p className="font-['Naga_Space:Semibold',sans-serif] leading-none text-[#f4f6fa] text-[22px] text-nowrap uppercase">EMAIL me</p>
            </button>
          </div>
        </div>

        {/* Designer Credit */}
        <div className="content-stretch flex gap-[10px] items-end overflow-clip w-[1382px]">
          <p className="font-['Naga_Space:Regular',sans-serif] leading-none text-[#a1a5ae] text-[126px] text-nowrap">DESIGNED BY NEAMUL MORSHED NAHID</p>
        </div>
      </div>
    </div>
  );
}

// ============= MAIN COMPONENT =============
export default function SelpCaseStudy() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full">
      <ProjectHero navigate={navigate} />
      <ProjectBanner />
      <ProjectOverview />
      <VisionSection />
      <ChallengesSection />
      <DesignApproachSection />
      <ProgressiveDisclosureSection />
      <PredictableExperienceSection />
      <ResultsSection navigate={navigate} />
      <Footer />
    </div>
  );
}
