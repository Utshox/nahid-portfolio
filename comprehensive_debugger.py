"""
Comprehensive Layout Debugger
Checks all CSS properties and provides specific fixes
"""

def check_css():
    """Parse and verify CSS for layout issues"""
    
    with open("styles/main.css", "r") as f:
        css = f.read()
    
    print("\n" + "="*70)
    print("CSS LAYOUT DEBUGGING")
    print("="*70)
    
    # Check key properties
    checks = {
        "#artboard": {
            "should_have": ["width: var(--artboard-w)", "margin: 0 auto"],
            "critical": True
        },
        ".container": {
            "should_have": ["width: 1324px", "margin: 0 auto"],
            "critical": True
        },
        ".case-row": {
            "should_have": ["display: flex", "gap: 20px", "padding: 20px 58px"],
            "critical": True
        },
        ".case-card": {
            "should_have": ["width: 652px", "height: 526px", "flex: 0 0 auto"],
            "critical": True
        },
        ".case-card-link": {
            "should_have": ["width: 652px", "height: 526px", "flex: 0 0 auto"],
            "critical": True
        },
    }
    
    print("\nCritical CSS Checks:\n")
    
    for selector, rules in checks.items():
        print(f"{selector}:")
        
        # Find selector in CSS
        if selector not in css:
            print(f"  ✗ Selector NOT FOUND in CSS!")
            continue
        
        # Check each required property
        all_good = True
        for prop in rules["should_have"]:
            # Simple check - look for the property value
            prop_name = prop.split(":")[0]
            if prop in css:
                print(f"  ✓ {prop}")
            elif prop_name in css:
                print(f"  ⚠ {prop_name} found but value might be different")
                all_good = False
            else:
                print(f"  ✗ {prop} NOT FOUND")
                all_good = False
        
        print()
    
    print("\n" + "="*70)
    print("POSSIBLE ISSUES")
    print("="*70)
    
    issues = []
    
    # Check for common mistakes
    if "align-items: center" in css and ".case-row" in css:
        # Find context
        idx = css.find(".case-row")
        context = css[idx:idx+200]
        if "align-items: center" in context:
            issues.append({
                "issue": "align-items: center on .case-row",
                "problem": "Vertically centers cards, may cause overflow",
                "fix": "Change to align-items: flex-start"
            })
    
    if "overflow: hidden" not in css:
        issues.append({
            "issue": "Missing overflow properties",
            "problem": "Content might overflow unexpectedly",
            "fix": "Check overflow-x and overflow-y properties"
        })
    
    # Check media queries
    if "@media" in css:
        print("\n⚠ Media queries found - these might override your styles on different screen sizes:")
        media_count = css.count("@media")
        print(f"  Found {media_count} media query blocks")
        print("  Make sure none of them affect .case-row or .case-card")
    
    if issues:
        print("\nIssues found:\n")
        for i, issue in enumerate(issues, 1):
            print(f"{i}. {issue['issue']}")
            print(f"   Problem: {issue['problem']}")
            print(f"   Fix: {issue['fix']}")
            print()
    else:
        print("\n✓ No obvious CSS issues detected!")
    
    print("="*70)


def check_html():
    """Verify HTML structure"""
    
    with open("index.html", "r") as f:
        html = f.read()
    
    print("\n" + "="*70)
    print("HTML STRUCTURE DEBUGGING")
    print("="*70)
    
    # Count case rows
    case_row_count = html.count('class="case-row"')
    print(f"\nCase rows found: {case_row_count} (expected: 3)")
    
    # Check case card structure
    import re
    
    # Find first case row
    match = re.search(r'<section class="case-row".*?</section>', html, re.DOTALL)
    if match:
        row_html = match.group(0)
        
        print("\nFirst case row structure:")
        
        # Count cards
        links = row_html.count('class="case-card-link"')
        figures = row_html.count('class="case-card"')
        
        print(f"  Card links (wrapped in <a>): {links}")
        print(f"  Card figures: {figures}")
        print(f"  Total cards: {links + figures} (expected: 2)")
        
        if links + figures != 2:
            print("\n  ⚠ WARNING: Not exactly 2 cards per row!")
    
    # Check img src paths
    print("\n\nImage sources:")
    imports = re.findall(r'<img src="([^"]+)"', html)
    
    print(f"  Total images: {len(imports)}")
    
    local_issues = 0
    for src in set(imports):
        if "assets/" in src or "design elements/" in src or "font/" in src:
            print(f"  ✓ {src}")
        else:
            print(f"  ✗ Unusual path: {src}")
            local_issues += 1
    
    if local_issues > 0:
        print(f"\n  ⚠ {local_issues} images with potential path issues")
    
    print("\n" + "="*70)


if __name__ == "__main__":
    import os
    os.chdir("e:\\Sites\\site data\\nahid")
    check_css()
    check_html()
