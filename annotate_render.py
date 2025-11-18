"""
Create visual indicators on rendered image to debug layout
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

def annotate_render():
    """Add annotations to show layout structure"""
    
    img_path = Path("e:/Sites/site data/nahid/homepage_render.png")
    
    if not img_path.exists():
        print("Image not found!")
        return
    
    img = Image.open(img_path)
    draw = ImageDraw.Draw(img)
    
    # Define expected sections
    sections = [
        ("Nav", 0, 80, (255, 0, 0)),
        ("Hero", 80, 780, (0, 255, 0)),
        ("Case Studies Heading", 780, 1060, (0, 0, 255)),
        ("Case Row 1", 1060, 1620, (255, 255, 0)),
        ("Case Row 2", 1620, 2180, (255, 0, 255)),
        ("Case Row 3", 2180, 2740, (0, 255, 255)),
        ("Projects", 2740, 3740, (255, 128, 0)),
        ("Philosophy", 3740, 4200, (128, 0, 255)),
        ("About", 4200, 5100, (0, 128, 255)),
        ("Footer", 5100, 7494, (128, 255, 0)),
    ]
    
    # Draw section markers
    for name, y_start, y_end, color in sections:
        # Draw horizontal line at start
        draw.rectangle([(0, y_start), (10, y_start)], fill=color, width=3)
        
        # Draw text label
        try:
            draw.text((15, y_start + 5), f"{name} ({y_start}-{y_end})", fill=color)
        except:
            pass
    
    # Draw case card boundaries (expected at 652x526 each)
    # Case row 1 should be at Y=1060-1620
    y_row1 = 1060 + 20  # Top padding of case-row is 20px
    x_card1_start = 58
    x_card1_end = 58 + 652
    x_gap = x_card1_end + 20
    x_card2_start = x_gap
    x_card2_end = x_card2_start + 652
    
    # Draw expected card outlines
    draw.rectangle(
        [(x_card1_start, y_row1), (x_card1_end, y_row1 + 526)],
        outline=(255, 0, 0), width=2
    )
    draw.text((x_card1_start + 10, y_row1 + 10), "Card 1", fill=(255, 0, 0))
    
    draw.rectangle(
        [(x_card2_start, y_row1), (x_card2_end, y_row1 + 526)],
        outline=(0, 255, 0), width=2
    )
    draw.text((x_card2_start + 10, y_row1 + 10), "Card 2", fill=(0, 255, 0))
    
    # Save annotated version
    output_path = Path("e:/Sites/site data/nahid/homepage_render_annotated.png")
    img.save(output_path)
    
    print(f"\n✓ Annotated image saved to: {output_path}")
    print("\nLayout guide:")
    print("  Red lines = Expected card 1 boundaries")
    print("  Green lines = Expected card 2 boundaries")
    print("  Different colored horizontal marks = Section boundaries")
    print("\nIf cards don't align with the outlines, there's a layout issue!")


if __name__ == "__main__":
    annotate_render()
