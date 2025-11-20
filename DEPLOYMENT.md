# GitHub Pages Deployment Setup

## Overview
This repository has been configured for GitHub Pages deployment. A dedicated `gh-pages` branch has been created to serve the static portfolio website.

## Branch Information

### gh-pages Branch
- **Source Commit**: `0b40267` - "after fixed navbar and footer"
- **Purpose**: GitHub Pages deployment branch
- **Configuration**: Includes `.nojekyll` file to disable Jekyll processing

## Deployment Instructions

The `gh-pages` branch has been created locally and is ready to be pushed to GitHub. To complete the deployment:

1. **Push the gh-pages branch to GitHub**:
   ```bash
   git push -u origin gh-pages
   ```

2. **Configure GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Under "Source", select the `gh-pages` branch
   - Select `/ (root)` as the folder
   - Click "Save"

3. **Access your site**:
   - After a few minutes, your site will be available at:
   - `https://utshox.github.io/nahid-portfolio/`

## What's Included

The gh-pages branch contains:
- All portfolio HTML files (index.html, case studies, etc.)
- Assets directory (images, fonts, styles, scripts)
- Components (navbar, footer)
- `.nojekyll` file (prevents Jekyll processing)

## Technical Details

- **Commit**: 0b40267 (after fixed navbar and footer)
- **Branch**: gh-pages
- **Type**: Static HTML portfolio
- **No build process required**: The site is ready to serve as-is

## Notes

- The `.nojekyll` file is important for this static site as it tells GitHub Pages not to process files with Jekyll, which ensures all files (including those starting with underscores) are served correctly.
- The site will automatically update when you push new commits to the gh-pages branch.
