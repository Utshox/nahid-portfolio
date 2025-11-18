"""
HTML Rendering and Analysis Tool
Renders HTML to image and analyzes structure against Figma design
"""

import os
import sys
from pathlib import Path

# Try to use selenium/playwright for rendering
try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    print("✓ Selenium available")
    SELENIUM_AVAILABLE = True
except ImportError:
    print("✗ Selenium not available")
    SELENIUM_AVAILABLE = False

try:
    from playwright.sync_api import sync_playwright
    print("✓ Playwright available")
    PLAYWRIGHT_AVAILABLE = True
except ImportError:
    print("✗ Playwright not available")
    PLAYWRIGHT_AVAILABLE = False

try:
    from bs4 import BeautifulSoup
    print("✓ BeautifulSoup available")
    BS_AVAILABLE = True
except ImportError:
    print("✗ BeautifulSoup not available")
    BS_AVAILABLE = False

try:
    from PIL import Image, ImageDraw, ImageFont
    print("✓ Pillow available")
    PILLOW_AVAILABLE = True
except ImportError:
    print("✗ Pillow not available")
    PILLOW_AVAILABLE = False

try:
    import requests
    print("✓ Requests available")
    REQUESTS_AVAILABLE = True
except ImportError:
    print("✗ Requests not available")
    REQUESTS_AVAILABLE = False


def analyze_html_structure(html_file):
    """Parse and analyze HTML structure"""
    if not BS_AVAILABLE:
        print("BeautifulSoup not available")
        return None
    
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Find all sections
    sections = {
        'nav': soup.find('header', {'id': 'nav'}),
        'hero': soup.find('section', {'id': 'hero'}),
        'case-studies-heading': soup.find('section', {'id': 'case-studies-heading'}),
        'case-rows': soup.find_all('section', {'class': 'case-row'}),
        'projects': soup.find('section', {'id': 'projects'}),
        'philosophy': soup.find('section', {'id': 'philosophy'}),
        'about': soup.find('section', {'id': 'about'}),
        'footer': soup.find('footer', {'id': 'footer'}),
    }
    
    analysis = {}
    
    print("\n" + "="*70)
    print("HTML STRUCTURE ANALYSIS")
    print("="*70)
    
    # Navigation
    if sections['nav']:
        nav_links = sections['nav'].find_all('a', {'class': 'nav-link'})
        analysis['nav'] = {
            'found': True,
            'link_count': len(nav_links),
            'links': [link.text for link in nav_links]
        }
        print(f"\n✓ Navigation Bar")
        print(f"  - Links found: {len(nav_links)}")
        print(f"  - Links: {analysis['nav']['links']}")
    
    # Hero Section
    if sections['hero']:
        hero_title = sections['hero'].find('h1', {'id': 'hero-title'})
        analysis['hero'] = {
            'found': True,
            'title': hero_title.text if hero_title else None,
            'has_designation': bool(sections['hero'].find('div', {'class': 'designation'})),
            'has_subtitle': bool(sections['hero'].find('div', {'class': 'hero-sub'}))
        }
        print(f"\n✓ Hero Section")
        print(f"  - Title: {analysis['hero']['title']}")
        print(f"  - Has designation: {analysis['hero']['has_designation']}")
        print(f"  - Has subtitle: {analysis['hero']['has_subtitle']}")
    
    # Case Studies
    if sections['case-studies-heading']:
        print(f"\n✓ Case Studies Heading Section")
        print(f"  - Found")
    
    if sections['case-rows']:
        analysis['case-rows'] = len(sections['case-rows'])
        case_cards_count = sum(len(row.find_all('figure', {'class': 'case-card'})) + len(row.find_all('a', {'class': 'case-card-link'})) 
                              for row in sections['case-rows'])
        print(f"\n✓ Case Study Rows: {len(sections['case-rows'])}")
        print(f"  - Total rows: {len(sections['case-rows'])}")
        print(f"  - Expected cards per row: 2")
        print(f"  - Row 1 cards: {len(sections['case-rows'][0].find_all(['figure', 'a'], {'class': ['case-card', 'case-card-link']}))} ")
        if len(sections['case-rows']) > 1:
            print(f"  - Row 2 cards: {len(sections['case-rows'][1].find_all(['figure', 'a'], {'class': ['case-card', 'case-card-link']}))} ")
        if len(sections['case-rows']) > 2:
            print(f"  - Row 3 cards: {len(sections['case-rows'][2].find_all(['figure', 'a'], {'class': ['case-card', 'case-card-link']}))} ")
    
    # Projects
    if sections['projects']:
        grid_items = sections['projects'].find_all('div', {'class': 'grid-item'})
        analysis['projects'] = {
            'found': True,
            'grid_items': len(grid_items)
        }
        print(f"\n✓ Projects Carousel Section")
        print(f"  - Grid items: {len(grid_items)}")
    
    # Philosophy
    if sections['philosophy']:
        print(f"\n✓ Philosophy Section (Dark Band)")
        print(f"  - Found with black background")
    
    # About
    if sections['about']:
        about_text = sections['about'].find('p', {'class': 'body'})
        social_links = sections['about'].find_all('a', {'class': None})
        print(f"\n✓ About Section")
        print(f"  - Has about text: {bool(about_text)}")
        print(f"  - Social links: {len(social_links)}")
    
    # Footer
    if sections['footer']:
        print(f"\n✓ Footer Section")
        print(f"  - Found with dark background")
    
    print("\n" + "="*70)
    return analysis


def check_css_structure(css_file):
    """Analyze CSS file structure"""
    print("\n" + "="*70)
    print("CSS STRUCTURE ANALYSIS")
    print("="*70)
    
    with open(css_file, 'r', encoding='utf-8') as f:
        css = f.read()
    
    # Check for key selectors
    checks = {
        '#nav': '#nav' in css,
        '#hero': '#hero' in css,
        '#artboard': '#artboard' in css,
        '.case-card': '.case-card' in css,
        '.case-row': '.case-row' in css,
        '#projects': '#projects' in css,
        '#philosophy': '#philosophy' in css,
        '#about': '#about' in css,
        '#footer': '#footer' in css,
        '@keyframes': '@keyframes' in css,
        'backdrop-filter': 'backdrop-filter' in css,
    }
    
    print("\nCSS Selectors Found:")
    for selector, found in checks.items():
        status = "✓" if found else "✗"
        print(f"  {status} {selector}")
    
    # Check for key properties
    print("\nKey CSS Properties:")
    properties = {
        '--artboard-w: 1440px': '--artboard-w: 1440px' in css,
        'Fixed width container': '1440px' in css and '1324px' in css,
        'Spacing (padding/margin)': ('padding:' in css or 'padding :' in css) and ('margin:' in css or 'margin :' in css),
        'Transitions': 'transition:' in css,
        'Animations': '@keyframes' in css,
    }
    
    for prop, found in properties.items():
        status = "✓" if found else "✗"
        print(f"  {status} {prop}")
    
    print("\n" + "="*70)


def render_with_playwright(html_file):
    """Try to render HTML using Playwright"""
    if not PLAYWRIGHT_AVAILABLE:
        print("\n✗ Playwright not installed. Install with: pip install playwright")
        return False
    
    try:
        from pathlib import Path
        html_path = Path(html_file).absolute()
        file_url = f"file:///{html_path}".replace("\\", "/")
        
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page(viewport={"width": 1440, "height": 5548})
            page.goto(file_url, wait_until="networkidle")
            
            # Take full page screenshot
            output_path = Path(html_file).parent / "homepage_render.png"
            page.screenshot(path=str(output_path), full_page=True)
            
            print(f"\n✓ Screenshot saved to: {output_path}")
            browser.close()
            return True
    except Exception as e:
        print(f"\n✗ Error rendering with Playwright: {e}")
        return False


def main():
    """Main analysis function"""
    workspace = Path("e:/Sites/site data/nahid")
    html_file = workspace / "index.html"
    css_file = workspace / "styles/main.css"
    
    print("\n" + "="*70)
    print("HOMEPAGE RENDERING & ANALYSIS")
    print("="*70)
    print(f"\nWorkspace: {workspace}")
    print(f"HTML File: {html_file}")
    print(f"CSS File: {css_file}")
    
    # Check files exist
    if not html_file.exists():
        print(f"\n✗ HTML file not found: {html_file}")
        return
    
    if not css_file.exists():
        print(f"\n✗ CSS file not found: {css_file}")
        return
    
    print("\n✓ Files found")
    
    # Analyze structure
    analyze_html_structure(html_file)
    check_css_structure(css_file)
    
    # Try to render
    print("\n" + "="*70)
    print("ATTEMPTING RENDERS")
    print("="*70)
    
    if PLAYWRIGHT_AVAILABLE:
        print("\nAttempting Playwright render...")
        render_with_playwright(html_file)
    else:
        print("\n⚠ No rendering engine available")
        print("Install with: pip install playwright pillow beautifulsoup4")
    
    print("\n" + "="*70)
    print("ANALYSIS COMPLETE")
    print("="*70)


if __name__ == "__main__":
    main()
