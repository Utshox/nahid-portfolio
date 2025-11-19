const fs = require('fs');
const path = require('path');

// HTML files to update
const htmlFiles = [
    'index.html',
    'ui-exploration.html',
    'articles.html',
    'photographs.html',
    'selp-case-study.html',
    'leady-case-study.html',
    'mf-web-portal-case-study.html',
    'course-management-lms.html'
];

// Navbar pattern to find and replace
const navbarStart = '  <!-- Fixed Navigation -->';
const navbarEnd = '  </header>';
const navbarReplacement = '  <!-- Navigation Component -->\n  <div id="navbar-placeholder"></div>';

// Footer pattern to find and replace (includes footer, back-to-top, and email modal)
const footerStart = '    <!-- Footer -->';
const footerEnd = '  </div>\n  <script>';
const footerReplacement = '  <!-- Footer Component -->\n  <div id="footer-placeholder"></div>\n  <script>';

console.log('🔧 Starting HTML component replacement...\n');

let successCount = 0;
let skipCount = 0;

htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        console.log(`⏭️  Skipping ${filename} (not found)`);
        skipCount++;
        return;
    }

    try {
        // Read file content
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Replace navbar
        const navbarStartIndex = content.indexOf(navbarStart);
        if (navbarStartIndex !== -1) {
            const navbarEndIndex = content.indexOf(navbarEnd, navbarStartIndex);
            if (navbarEndIndex !== -1) {
                const before = content.substring(0, navbarStartIndex);
                const after = content.substring(navbarEndIndex + navbarEnd.length);
                content = before + navbarReplacement + after;
                modified = true;
                console.log(`✓ ${filename}: Replaced navbar`);
            }
        }

        // Replace footer (including back-to-top and email modal)
        const footerStartIndex = content.indexOf(footerStart);
        if (footerStartIndex !== -1) {
            const footerEndIndex = content.indexOf(footerEnd, footerStartIndex);
            if (footerEndIndex !== -1) {
                const before = content.substring(0, footerStartIndex);
                const after = content.substring(footerEndIndex);
                content = before + footerReplacement + after.substring(footerEnd.length);
                modified = true;
                console.log(`✓ ${filename}: Replaced footer`);
            }
        }

        // Write back if modified
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ ${filename}: Updated successfully\n`);
            successCount++;
        } else {
            console.log(`⚠️  ${filename}: No changes needed (already updated?)\n`);
            skipCount++;
        }

    } catch (error) {
        console.error(`❌ ${filename}: Error - ${error.message}\n`);
    }
});

console.log('─'.repeat(50));
console.log(`\n📊 Summary:`);
console.log(`   ✅ Successfully updated: ${successCount} files`);
console.log(`   ⏭️  Skipped: ${skipCount} files`);
console.log(`\n🎉 Component replacement complete!`);
console.log(`\n💡 Next step: Run 'npm run dev' and test the pages`);
