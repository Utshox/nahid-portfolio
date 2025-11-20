#!/bin/bash
# Script to push the gh-pages branch to GitHub

echo "================================================"
echo "GitHub Pages Deployment Script"
echo "================================================"
echo ""
echo "This script will push the gh-pages branch to GitHub."
echo ""

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "✓ gh-pages branch found"
    
    # Show the current commit
    echo ""
    echo "Current gh-pages branch is at:"
    git log gh-pages --oneline -1
    echo ""
    
    # Ask for confirmation
    read -p "Push gh-pages branch to origin? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Pushing gh-pages branch to origin..."
        git push -u origin gh-pages
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "================================================"
            echo "✓ Successfully pushed gh-pages branch!"
            echo "================================================"
            echo ""
            echo "Next steps:"
            echo "1. Go to: https://github.com/Utshox/nahid-portfolio/settings/pages"
            echo "2. Under 'Source', select 'gh-pages' branch"
            echo "3. Select '/ (root)' as the folder"
            echo "4. Click 'Save'"
            echo ""
            echo "Your site will be available at:"
            echo "https://utshox.github.io/nahid-portfolio/"
            echo ""
        else
            echo ""
            echo "✗ Failed to push gh-pages branch"
            echo "Please check your GitHub credentials and try again"
        fi
    else
        echo "Push cancelled"
    fi
else
    echo "✗ gh-pages branch not found"
    echo "Please run this script from the repository root"
    exit 1
fi
