"""
Pixel-level Layout Analysis
Examines the rendered image to find structural problems
"""

from PIL import Image
import numpy as np
from pathlib import Path

def analyze_layout():
    """Analyze layout using pixel data"""
    
    img_path = Path("e:/Sites/site data/nahid/homepage_render.png")
    
    if not img_path.exists():
        print("Image not found!")
        return
    
    img = Image.open(img_path)
    pixels = np.array(img)
    
    width = img.width
    height = img.height
    
    print("\n" + "="*70)
    print("PIXEL-LEVEL LAYOUT ANALYSIS")
    print("="*70)
    
    print(f"\nImage dimensions: {width}px × {height}px")
    
    # Find horizontal sections by looking for color changes
    print("\nScanning for section boundaries...")
    
    # Sample every 100px vertically
    boundaries = []
    for y in range(0, height, 100):
        # Get a row of pixels
        row = pixels[y, :, :]
        
        # Calculate average color
        avg_color = np.mean(row, axis=0)
        
        if y % 500 == 0:
            print(f"  Y={y:4d}px | RGB: ({avg_color[0]:.0f}, {avg_color[1]:.0f}, {avg_color[2]:.0f})")
    
    # Look for white/near-white backgrounds (case cards)
    print("\n\nAnalyzing case card regions...")
    
    # Case cards should be in the 1000-2800px range
    for y in range(1000, 2800, 526):  # Each card is 526px tall
        row = pixels[y:y+526, 58:710, :]  # First card area
        avg = np.mean(row, axis=(0, 1))
        print(f"  Y={y:4d}px (Row {(y-1000)//566 + 1}): RGB avg = ({avg[0]:.0f}, {avg[1]:.0f}, {avg[2]:.0f})")
    
    # Analyze card widths
    print("\n\nAnalyzing card widths in first row...")
    case_row_start = 1000
    
    # Look at horizontal line through middle of first card
    y_mid = case_row_start + 263  # Middle of 526px tall card
    
    # Find where cards start and end by looking for white space
    row_pixels = pixels[y_mid, 58:1382, :]  # The content area
    
    # Convert to grayscale to find edges
    gray = np.mean(row_pixels, axis=1)
    
    # Find significant changes in brightness (edges)
    print(f"  Scanning horizontal line at Y={y_mid}")
    
    in_card = False
    card_start = None
    cards = []
    threshold = 220  # Light background threshold
    
    for x in range(len(gray)):
        is_light = gray[x] > threshold
        
        if is_light and not in_card:
            card_start = x
            in_card = True
        elif not is_light and in_card:
            if card_start is not None:
                width = x - card_start
                cards.append((card_start, x, width))
                print(f"    Card found: X={card_start+58:4d}-{x+58:4d}px (width: {width}px)")
            in_card = False
    
    if in_card and card_start is not None:
        width = len(gray) - card_start
        cards.append((card_start, len(gray), width))
        print(f"    Card found: X={card_start+58:4d}-{len(gray)+58:4d}px (width: {width}px)")
    
    print(f"\n  Total cards detected in row: {len(cards)}")
    if len(cards) >= 2:
        gap = cards[1][0] - cards[0][1]
        print(f"  Gap between cards: {gap}px")
        print(f"  Expected: 20px")
        if gap == 20:
            print(f"  ✓ Gap is CORRECT")
        else:
            print(f"  ✗ Gap is WRONG")
    
    print("\n" + "="*70)
    print("SUMMARY")
    print("="*70)
    
    if len(cards) == 2:
        card1_w = cards[0][2]
        card2_w = cards[1][2]
        print(f"\n✓ Two cards detected in row")
        print(f"  Card 1 width: {card1_w}px (expected: 652px) - {'✓' if card1_w == 652 else '✗'}")
        print(f"  Card 2 width: {card2_w}px (expected: 652px) - {'✓' if card2_w == 652 else '✗'}")
    else:
        print(f"\n✗ Expected 2 cards, found {len(cards)}")
        if len(cards) == 1:
            print("  Cards may be stacking vertically instead of side-by-side")
        elif len(cards) > 2:
            print("  Cards may be breaking into more than 2")
    
    print("\n" + "="*70)


if __name__ == "__main__":
    analyze_layout()
