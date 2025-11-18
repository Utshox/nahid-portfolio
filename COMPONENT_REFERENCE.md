# 📚 Component Reference Guide

## Quick Component Lookup

### 🏠 Layout Components

#### **Header**
Navigation component for your site.
```jsx
import { Header } from './components';

<Header />
```
**Props:** None (uses React Router)
**Used in:** Every page
**Output:** Navigation bar with logo and links

---

#### **Footer**
Contact footer section.
```jsx
import { Footer } from './components';

<Footer />
```
**Props:** None
**Used in:** Every page
**Output:** Footer with contact info and marquee

---

### 📄 Section Components

#### **SectionBlock**
Generic wrapper for any section.
```jsx
<SectionBlock 
  title="Section Title"
  subtitle="Optional subtitle text"
  className="optional-class"
>
  {/* Children components */}
</SectionBlock>
```
**Props:**
- `title` (string or JSX) - Section title
- `subtitle` (string) - Optional subtitle
- `children` (JSX) - Section content
- `className` (string) - Additional CSS classes

**Used for:** Any major section (challenges, research, results, etc.)

---

#### **TwoColumnLayout**
Two-column grid layout.
```jsx
<TwoColumnLayout
  left={<h2>Left Content</h2>}
  right={<p>Right Content</p>}
/>
```
**Props:**
- `left` (JSX) - Left column content
- `right` (JSX) - Right column content

**Used for:** Title + description layouts

---

### 🎯 Hero & Intro Components

#### **HeroSection**
Page hero with metadata.
```jsx
<HeroSection
  title="Case Study: SELP MIS Web App"
  backLink={{ href: '/', text: 'Back to Home' }}
  metaInfo={[
    { label: 'My Role', value: 'UX/UI Design' },
    { label: 'Team', value: 'Product Manager' },
    { label: 'Duration', value: 'Aug 2024 - Jan 2025' }
  ]}
  heroImage={{
    src: 'assets/image.png',
    alt: 'Image description'
  }}
/>
```
**Props:**
- `title` (string) - Page title
- `backLink` (object) - {href, text}
- `metaInfo` (array) - [{label, value}, ...]
- `heroImage` (object) - {src, alt}

**Used for:** Case study introductions

---

#### **IntroSection**
Introduction paragraph section.
```jsx
<IntroSection 
  text="A comprehensive case study on designing..." 
/>
```
**Props:**
- `text` (string) - Introduction text

**Used for:** Intro paragraphs after hero

---

#### **SectionImage**
Single image component.
```jsx
<SectionImage
  src="assets/image.png"
  alt="Image description"
/>
```
**Props:**
- `src` (string) - Image path
- `alt` (string) - Alt text

**Used for:** Single images in sections

---

### 📋 List Components

#### **ListItems**
Container for list items.
```jsx
const items = [
  { title: 'Item 1', description: 'Description 1' },
  { title: 'Item 2', description: 'Description 2' }
];

<ListItems items={items} />
```
**Props:**
- `items` (array) - Array of {title, description} objects

**Used for:** Any list (challenges, results, research insights, features)

---

#### **ListItem**
Single list item (usually used inside ListItems).
```jsx
<ListItem 
  title="Challenge Title"
  description="Challenge description text"
/>
```
**Props:**
- `title` (string) - Item title
- `description` (string) - Item description

---

### 🃏 Card Components

#### **CardGrid**
Grid of card components.
```jsx
const cards = [
  {
    icon: 'assets/icon1.svg',
    title: 'Card Title 1',
    text: 'Card description'
  },
  {
    icon: 'assets/icon2.svg',
    title: 'Card Title 2',
    text: 'Card description'
  }
];

<CardGrid cards={cards} columns={2} />
```
**Props:**
- `cards` (array) - Array of {icon, title, text}
- `columns` (number) - Number of columns (default: 2)

**Used for:** Vision cards, features, benefits

---

#### **Card**
Single card component (usually inside CardGrid).
```jsx
<Card
  icon="assets/icon.svg"
  title="Card Title"
  text="Card text description"
/>
```
**Props:**
- `icon` (string) - Icon image path
- `title` (string) - Card title
- `text` (string) - Card description

---

### 🎨 Solution Components

#### **SolutionsGrid**
Grid of solutions with images.
```jsx
const solutions = [
  {
    title: 'Solution 1',
    description: 'Description of solution 1',
    image: {
      src: 'assets/solution1.png',
      alt: 'Solution 1 image'
    }
  },
  {
    title: 'Solution 2',
    description: 'Description of solution 2',
    image: {
      src: 'assets/solution2.png',
      alt: 'Solution 2 image'
    }
  }
];

<SolutionsGrid solutions={solutions} />
```
**Props:**
- `solutions` (array) - Array of {title, description, image}

**Used for:** Key features/solutions section

---

#### **SolutionRow**
Single solution row (usually inside SolutionsGrid).
```jsx
<SolutionRow
  title="Solution Title"
  description="Detailed description..."
  image={{
    src: 'assets/solution.png',
    alt: 'Solution image'
  }}
/>
```
**Props:**
- `title` (string) - Solution title
- `description` (string) - Solution description
- `image` (object) - {src, alt}

---

### 🚀 CTA Components

#### **CTASection**
Call-to-action section.
```jsx
<CTASection
  title={<>Design Philosophy: <span className="accent">Empowerment Over Efficiency</span></>}
  description="The SELP MIS platform demonstrates..."
  buttonText="Get in Touch"
/>
```
**Props:**
- `title` (string or JSX) - Section title
- `description` (string) - Description text
- `buttonText` (string) - Button label (default: 'Get in Touch')

**Used for:** Final CTA section before footer

---

## 🎯 Common Usage Patterns

### Pattern 1: Simple Section
```jsx
<SectionBlock title="Section Title">
  <p>Some content</p>
</SectionBlock>
```

### Pattern 2: Section with List
```jsx
<SectionBlock title="My List">
  <ListItems items={items} />
</SectionBlock>
```

### Pattern 3: Section with Two Columns and List
```jsx
<SectionBlock>
  <TwoColumnLayout
    left={<h2>Title</h2>}
    right={<p>Subtitle</p>}
  />
  <ListItems items={items} />
</SectionBlock>
```

### Pattern 4: Section with Cards
```jsx
<SectionBlock title="Vision">
  <CardGrid cards={visionCards} columns={2} />
</SectionBlock>
```

### Pattern 5: Section with Solutions
```jsx
<SectionBlock title="Key Solutions">
  <SolutionsGrid solutions={solutions} />
</SectionBlock>
```

---

## 📦 Full Page Example

```jsx
import {
  HeroSection,
  IntroSection,
  SectionBlock,
  TwoColumnLayout,
  ListItems,
  CardGrid,
  SectionImage,
  SolutionsGrid,
  CTASection
} from '../components';

const MyPage = () => {
  // Define data
  const heroData = { /* ... */ };
  const challenges = [/* ... */];
  const cards = [/* ... */];
  
  return (
    <main>
      {/* Hero */}
      <HeroSection {...heroData} />
      
      {/* Intro */}
      <IntroSection text="Introduction text..." />
      
      {/* First section */}
      <SectionBlock title="Section One">
        <p>Some content</p>
      </SectionBlock>
      
      {/* Section with layout */}
      <SectionBlock>
        <TwoColumnLayout
          left={<h2>Title</h2>}
          right={<p>Subtitle</p>}
        />
        <ListItems items={challenges} />
      </SectionBlock>
      
      {/* Cards section */}
      <SectionBlock title="Vision">
        <CardGrid cards={cards} columns={2} />
      </SectionBlock>
      
      {/* CTA */}
      <CTASection
        title="Final Message"
        description="Description..."
      />
    </main>
  );
};

export default MyPage;
```

---

## 🎓 Component Data Structures

### ListItem Structure
```javascript
{
  title: string,           // Item title
  description: string      // Item description
}
```

### Card Structure
```javascript
{
  icon: string,            // Icon image path
  title: string,           // Card title
  text: string             // Card description
}
```

### Solution Structure
```javascript
{
  title: string,           // Solution title
  description: string,     // Solution description
  image: {
    src: string,           // Image path
    alt: string            // Alt text
  }
}
```

### MetaInfo Structure
```javascript
{
  label: string,           // Label text
  value: string            // Value text
}
```

### HeroImage Structure
```javascript
{
  src: string,             // Image path
  alt: string              // Alt text
}
```

### BackLink Structure
```javascript
{
  href: string,            // Link URL
  text: string             // Link text
}
```

---

## 🔄 Component Cheat Sheet

| Need | Use This |
|------|----------|
| Navigation | `<Header />` |
| Page footer | `<Footer />` |
| Page hero with meta | `<HeroSection />` |
| Intro paragraph | `<IntroSection />` |
| Generic section | `<SectionBlock />` |
| Side-by-side layout | `<TwoColumnLayout />` |
| List of items | `<ListItems />` |
| Grid of cards | `<CardGrid />` |
| Solutions with images | `<SolutionsGrid />` |
| Final CTA | `<CTASection />` |
| Single image | `<SectionImage />` |

---

## 💡 Pro Tips

### Tip 1: Reuse Components
Use the same components across different pages. They're generic by design!

### Tip 2: Data-First Approach
Define your data first, then wrap it in components.

### Tip 3: Compose Components
Nest components to create complex layouts:
```jsx
<SectionBlock>
  <TwoColumnLayout
    left={<h2>Title</h2>}
    right={<ListItems items={items} />}
  />
</SectionBlock>
```

### Tip 4: JSX in Props
Many props accept JSX, not just strings:
```jsx
<SectionBlock 
  title={<>Title <span className="accent">Accent</span></>}
/>
```

### Tip 5: CSS Classes
All components preserve class names for CSS. Your styles still work!

---

## 🐛 Troubleshooting

### Issue: Styles not applying
**Solution:** Check that `main.css` is imported in `App.jsx`

### Issue: Images not loading
**Solution:** Verify image paths are correct relative to `public/` folder

### Issue: Component not rendering
**Solution:** 
1. Check all required props are provided
2. Verify data structure matches examples
3. Check browser console for errors

### Issue: Routing not working
**Solution:** Ensure React Router is set up in `App.jsx`

---

## 📖 More Information

- **QUICK_START_REACT.md** - Getting started
- **ARCHITECTURE.md** - Component structure
- **CONVERSION_ANALYSIS.md** - Before/after comparison
- **REACT_SETUP.md** - Detailed setup guide

---

**That's it! You now have all the components you need to build your entire portfolio.** 🎉

Use this reference whenever you need to remember component props or data structures.
