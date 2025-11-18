# Case Studies Quick Reference

## All 4 Case Studies Now Live! 🚀

### Access Your Portfolio

**Home (Gallery of All Projects)**
- URL: `http://localhost:3000/`
- Shows grid of all 4 case studies
- Each card is clickable to view full case study

### Individual Case Studies

| Case Study | URL | File | Role |
|-----------|-----|------|------|
| SELP MIS Web App | `/mis-selp` | `SelpCaseStudy.jsx` | Flow Analysis, UX/UI, Testing |
| Leady App | `/leady-app` | `LeadyApp.jsx` | UX & UI Design, Prototyping |
| MF Web Portal | `/mf-web-portal` | `MfWebPortal.jsx` | UX & UI Design, Prototyping |
| ONE LMS | `/course-lms` | `CourseManagementLms.jsx` | User Flow, IA, Wireframing |

---

## Site Structure

```
Portfolio Website
├── Home Page (/)
│   ├── Project 1: SELP MIS
│   ├── Project 2: Leady App
│   ├── Project 3: MF Web Portal
│   └── Project 4: ONE LMS
│
└── Individual Projects
    ├── /mis-selp → Full SELP case study
    ├── /leady-app → Full Leady case study
    ├── /mf-web-portal → Full MF Web Portal case study
    └── /course-lms → Full ONE LMS case study
```

---

## Component Breakdown

### 5 Page Components (in `src/pages/`)

**Home.jsx** (142 lines)
- Gallery of all 4 case studies
- Clickable cards with project previews
- Contact section with CTA

**SelpCaseStudy.jsx** (230 lines)
- Complete case study with full details
- Challenges, vision, solutions
- Multi-section layout

**LeadyApp.jsx** (100 lines)
- Mobile app case study
- Key challenges section
- Next project navigation

**MfWebPortal.jsx** (100 lines)
- Financial platform case study
- Operational challenges
- Next project navigation

**CourseManagementLms.jsx** (100 lines)
- Learning management system
- Course creation challenges
- View all projects navigation

---

## Navigation Architecture

### From Home Page
```
Home (/) 
├─→ [Click SELP Card] → /mis-selp
├─→ [Click Leady Card] → /leady-app
├─→ [Click MF Card] → /mf-web-portal
└─→ [Click LMS Card] → /course-lms
```

### From Case Studies
```
/mis-selp [Back to home] ←→ /leady-app
/leady-app [Next] → /mf-web-portal
/mf-web-portal [Next] → /course-lms
/course-lms [View All] → /mis-selp
```

---

## How to Edit Case Studies

### 1. Change Project Title
**File:** `src/pages/[CaseName].jsx`

Find:
```jsx
<h1 className="text-5xl font-medium mb-8 text-[#101113]">
  Current Title Here
</h1>
```

Replace with your new title.

### 2. Update Project Metadata
Find the metadata section:
```jsx
<div className="grid grid-cols-3 gap-12 border-b border-[#cecede] pb-8 mb-16">
  <div>
    <p className="text-sm text-[#454953] mb-2">My Role</p>
    <p className="text-lg text-[#101113]">Your Role Here</p>
  </div>
```

Change the role, team, and timeframe values.

### 3. Add/Edit Challenge Sections
Find:
```jsx
<div className="bg-[#e5e8ef] p-8 rounded mb-6">
  <h3 className="font-medium text-lg mb-2 text-[#101113]">Challenge Title</h3>
  <p className="text-[#454953]">Challenge description here</p>
</div>
```

Copy this block to add more challenges, or edit existing ones.

### 4. Update Home Page Gallery
**File:** `src/pages/Home.jsx`

Find the `caseStudies` array:
```jsx
const caseStudies = [
  {
    id: 'mis-selp',
    title: 'SELP MIS Web App',
    subtitle: 'Simplifying Justice...',
    description: 'A comprehensive case...',
    role: 'Flow Analysis...',
    duration: 'Aug 2024 - Jan 2025'
  },
  // ... more projects
];
```

Edit any field to update the gallery card.

---

## Adding Images

### To Add Case Study Images

Replace the placeholder:
```jsx
<div className="bg-gray-300 h-64 rounded mb-8">
  <p className="text-center pt-24 text-gray-600">[Mobile App Mockup - Placeholder]</p>
</div>
```

With your image:
```jsx
<img 
  src="/images/your-image.jpg" 
  alt="Project screenshot" 
  className="w-full rounded mb-8"
/>
```

**Image locations:**
- Place images in `public/images/` folder
- Reference as `/images/filename.jpg`

---

## Color Reference

Used throughout design:

```
Primary:   #101113 (Dark Black)
Secondary: #454953 (Gray)
Light:     #f4f6fa (Off-white)
Border:    #cecede (Light gray)
Highlight: #e5e8ef (Pale blue)
```

---

## Quick Navigation Commands

### In Browser Developer Console
```javascript
// Go to home
window.location.hash = 'home'

// Go to SELP case study
window.location.hash = 'mis-selp'

// Go to Leady
window.location.hash = 'leady-app'

// Go to MF Portal
window.location.hash = 'mf-web-portal'

// Go to LMS
window.location.hash = 'course-lms'
```

---

## Deployment Checklist

- [ ] All case studies display correctly
- [ ] Navigation works between all pages
- [ ] Back buttons return to home
- [ ] Images load properly
- [ ] Responsive design works on mobile
- [ ] Contact links work
- [ ] No console errors
- [ ] Ready to `npm run build` for production

---

## Common Tasks

### Task: Add a 5th Case Study

1. Create new file: `src/pages/NewProject.jsx` (copy template from existing)
2. Update `src/App.jsx` - add import and route
3. Update `src/pages/Home.jsx` - add to `caseStudies` array
4. Update last case study's navigation button

### Task: Change Home Page Text

Edit `src/pages/Home.jsx` - find and modify:
```jsx
<h1 className="text-6xl font-medium mb-4 text-[#101113]">
  Design Case Studies  {/* Change this */}
</h1>
<p className="text-xl text-[#454953] max-w-2xl">
  Explore my design work...  {/* And this */}
</p>
```

### Task: Update Contact Email

In `src/pages/Home.jsx`:
```jsx
<a href="mailto:your-email@example.com">
```

---

## Performance Notes

- All pages load instantly (no API calls)
- CSS fully optimized (1,156 lines from main.css)
- React components are lightweight and reusable
- Dev server on http://localhost:3000/ with hot reload

---

## Support

**Issue? Check:**
1. Browser console (F12) for error messages
2. File paths are correct in imports
3. Component names match file names exactly
4. Routes in App.jsx match navigation links

**Next level:**
- Create `/ui-exploration` page
- Create `/articles` page
- Create `/photographs` page
- These would link from Header navigation

---

**Status:** ✅ All 4 case studies integrated, routed, and ready to customize!
