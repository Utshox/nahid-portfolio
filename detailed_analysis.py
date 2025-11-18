"""
Detailed Visual Comparison Tool
Analyzes rendered HTML vs Figma design
"""

from PIL import Image
import os

def analyze_rendered_output():
    """Analyze the rendered homepage in detail"""
    
    render_path = "e:/Sites/site data/nahid/homepage_render.png"
    
    if not os.path.exists(render_path):
        print("Render file not found!")
        return
    
    img = Image.open(render_path)
    width, height = img.size
    
    print("\n" + "="*70)
    print("LIVE SERVER RENDER ANALYSIS")
    print("="*70)
    
    print(f"\nImage Dimensions: {width}px × {height}px")
    print(f"Artboard Width Match: {'✓ YES' if width == 1440 else '✗ NO'}")
    
    # Analyze different sections by pixel height
    print("\n" + "="*70)
    print("SECTION-BY-SECTION BREAKDOWN")
    print("="*70)
    
    sections_by_height = {
        "Nav Bar": (0, 100, "Should be 80px height with backdrop blur"),
        "Hero Section": (100, 700, "Should contain 'HI, I'M NAHID' title"),
        "Case Studies Heading": (700, 1000, "Should have 'Click & See' heading"),
        "Case Study Cards (Row 1)": (1000, 1600, "2 cards of 652×526px each"),
        "Case Study Cards (Row 2)": (1600, 2200, "2 cards of 652×526px each"),
        "Case Study Cards (Row 3)": (2200, 2800, "2 cards of 652×526px each"),
        "Projects Section": (2800, 3800, "Carousel with 3 project images"),
        "Philosophy Band": (3800, 4300, "Black background with 'every dots'"),
        "About Section": (4300, 5200, "2-column layout with portrait"),
        "Footer": (5200, height, "Black footer with marquee"),
    }
    
    print("\nExpected sections in rendered output:")
    for i, (name, (start, end, notes)) in enumerate(sections_by_height.items(), 1):
        actual_height = end - start
        print(f"\n{i}. {name}")
        print(f"   Expected range: {start}px - {end}px (height: {actual_height}px)")
        print(f"   Details: {notes}")
    
    print("\n" + "="*70)
    print("POTENTIAL ISSUES DETECTED")
    print("="*70)
    
    issues = [
        {
            "issue": "Case Study Card Dimensions",
            "expected": "652px wide × 526px high per card",
            "check": "Are cards displaying at full width with 20px gaps?",
            "impact": "Layout breaks if cards are too narrow"
        },
        {
            "issue": "Case Study Card Containers",
            "expected": "1440px total width with padding",
            "check": "58px + 652px + 20px + 652px + 58px = 1440px",
            "impact": "Cards may overflow or not align properly"
        },
        {
            "issue": "Hero Subtitle Positioning",
            "expected": "560px left padding on subtitle",
            "check": "Is subtitle starting at 560px from left?",
            "impact": "Text may appear misaligned"
        },
        {
            "issue": "Projects Carousel",
            "expected": "Horizontal scrolling with 3 items",
            "check": "Are carousel buttons visible? Can you scroll?",
            "impact": "Projects not visible if carousel not working"
        },
        {
            "issue": "Image Loading",
            "expected": "All images from assets/ and design elements/ loading",
            "check": "Are placeholder images showing or actual images?",
            "impact": "Missing images break the visual design"
        },
        {
            "issue": "Philosophy Section",
            "expected": "Black background (#050506) with dot pattern",
            "check": "Is the background truly black? Is pattern visible?",
            "impact": "Section may look plain without pattern"
        },
        {
            "issue": "Footer Marquee",
            "expected": "'DESIGNED BY NEAMUL MORSHED NAHID' scrolling",
            "check": "Is marquee text animating?",
            "impact": "Animation may not be working"
        },
        {
            "issue": "Typography",
            "expected": "Helvetica Neue with proper font weights",
            "check": "Does text look like the Figma design?",
            "impact": "Font fallbacks may be used if not loading"
        },
        {
            "issue": "Spacing Consistency",
            "expected": "58px horizontal padding throughout",
            "check": "Is there consistent spacing on all sides?",
            "impact": "Layout may look cramped or loose"
        },
        {
            "issue": "Hover States",
            "expected": "Case cards show overlay on hover",
            "check": "Do overlays appear when hovering over cards?",
            "impact": "Interactive feedback may be missing"
        }
    ]
    
    print("\nIssues to investigate:\n")
    for i, issue in enumerate(issues, 1):
        print(f"{i}. {issue['issue']}")
        print(f"   Expected: {issue['expected']}")
        print(f"   Check: {issue['check']}")
        print(f"   Impact: ⚠️  {issue['impact']}")
        print()
    
    print("="*70)
    print("RECOMMENDATIONS")
    print("="*70)
    
    recommendations = """
1. CHECK IMAGE PATHS
   - Open browser DevTools (F12)
   - Go to Network tab
   - Check if images from 'design elements/' and 'assets/' are loading
   - Fix any 404 errors with image paths

2. VERIFY LAYOUT WIDTHS
   - Measure case study cards in browser
   - Should be 652px wide
   - Gap between cards should be 20px
   - Total: 1440px

3. TEST INTERACTIVE ELEMENTS
   - Hover over case study cards
   - Check if overlay and caption appear
   - Click carousel buttons
   - Verify they work

4. CHECK FONTS
   - Open DevTools → Elements/Inspector
   - Select text elements
   - Verify 'Helvetica Neue' is loading from font/ folder
   - Check if fallback fonts are being used

5. VERIFY COLORS
   - Background should be #F4F6FA (light)
   - Text should be #101113 (black)
   - Philosophy section should be #050506 (very dark)
   - Use color picker in DevTools

6. INSPECT CSS
   - Check if CSS rules are being applied
   - Look for any browser errors in Console tab
   - Verify media queries aren't breaking layout
   - Check z-index layering for overlays
    """
    
    print(recommendations)
    
    print("="*70)
    print("QUICK FIXES TO TRY")
    print("="*70)
    
    fixes = """
1. If cards are not side-by-side:
   - Check: .case-row { display: flex; gap: 20px; }
   - Check: .case-card { width: 652px; height: 526px; }

2. If subtitle is misaligned:
   - Check: .hero-sub { padding-left: 560px; }

3. If images aren't showing:
   - Check file paths in HTML
   - Run: python -m http.server 8000 (from nahid folder)
   - Access: http://localhost:8000

4. If fonts look wrong:
   - Check: @font-face rules load from font/ folder
   - Verify path is correct

5. If carousel not working:
   - Check: scripts/main.js is loaded
   - Open DevTools Console for errors
   - Check: .projects-grid { overflow-x: auto; }

6. If philosophy section looks plain:
   - Check: background image path for dots-pattern.svg
   - Verify opacity is correct
    """
    
    print(fixes)
    print("="*70)


if __name__ == "__main__":
    analyze_rendered_output()
