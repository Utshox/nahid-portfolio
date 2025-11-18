# Nahid Portfolio (Static Build)

A pixel-accurate static HTML/CSS/JS implementation of the selected Figma frame, with GSAP text animation and an overlay tool to check alignment.

## How to run

- Option 1: Double-click `index.html` to open in your browser.
- Option 2 (recommended): Serve the folder with a static server so images with relative paths and overlay align perfectly.

PowerShell (if Python 3 is installed):

```powershell
# From the folder: e:\Sites\site data\nahid
python -m http.server 5500
# Then open http://localhost:5500/
```

## Overlay controls (pixel-perfect check)

- Toggle overlay: press `O`
- Decrease opacity: press `[` (left bracket)
- Increase opacity: press `]` (right bracket)

Overlay uses `design elements/Landing Page.png` aligned to 1440px width.

## GSAP text animation

Hero title animates on load with a staggered rise/fade. Edit timing in `scripts/main.js`:

- `stagger.each` controls per-character delay
- `duration` and `ease` control motion feel

## Notes

- Fonts: Local Helvetica Neue variants are wired via `@font-face` in `styles/main.css`.
- Colors follow the Figma tokens: `#101113`, `#454953`, `#F4F6FA`, `#212225`.
- Artboard is fixed at 1440px for pixel-perfect fidelity. Responsiveness can be added later.
- Case study and grid images currently reference Figma export server URLs. Replace with local exports when ready.