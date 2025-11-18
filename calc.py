"""
Debug container and card layout calculations
"""

# Expected layout calculation
artboard_width = 1440
padding_left = 58
padding_right = 58
container_width = artboard_width - padding_left - padding_right
gap = 20
card_width = 652

print("\n" + "="*70)
print("LAYOUT CALCULATION")
print("="*70)

print(f"\nArtboard width: {artboard_width}px")
print(f"Left padding: {padding_left}px")
print(f"Right padding: {padding_right}px")
print(f"Container width (1440 - 58 - 58): {container_width}px")

print(f"\n\nFlex row calculation:")
print(f"Card 1 width: {card_width}px")
print(f"Gap: {gap}px")
print(f"Card 2 width: {card_width}px")
print(f"Total content: {card_width} + {gap} + {card_width} = {card_width + gap + card_width}px")

print(f"\n\nTotal row width: {padding_left} + {card_width} + {gap} + {card_width} + {padding_right}")
print(f"             = {padding_left + card_width + gap + card_width + padding_right}px")
print(f"Should equal: {artboard_width}px")
print(f"Match: {'✓ YES' if (padding_left + card_width + gap + card_width + padding_right) == artboard_width else '✗ NO'}")

# Check if there's room for wrapping
print(f"\n\nFlexbox container width (no padding): {container_width}px")
print(f"Content needed for 2 cards: {card_width + gap + card_width}px")

if (card_width + gap + card_width) <= container_width:
    print("✓ Two cards FIT in one row")
else:
    print(f"✗ Two cards DO NOT FIT")
    print(f"  Overflow: {(card_width + gap + card_width) - container_width}px")

print("\n" + "="*70)

# The actual calculation
total_needed = card_width + gap + card_width
container = artboard_width - (padding_left + padding_right)

print(f"\nThe REAL MATH:")
print(f"  Total width needed for 2 cards + gap: {total_needed}px")
print(f"  Container width available: {container}px")
print(f"  Difference: {total_needed - container}px")

if total_needed == container:
    print(f"  ✓ Perfect fit!")
elif total_needed < container:
    print(f"  ✓ Fits with {container - total_needed}px extra space")
else:
    print(f"  ✗ OVERFLOW by {total_needed - container}px")

print("\n" + "="*70)
