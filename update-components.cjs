const fs = require('fs');
const path = require('path');

// HTML files to update
const htmlFiles = [
    'index.html',
    'ui-exploration.html',
    'photographs.html',
    'selp-case-study.html',
    'leady-case-study.html',
    'mf-web-portal-case-study.html',
    'course-management-lms.html'
];

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

        // Replace navbar - look for header tag pattern
        const navStartIndex = content.indexOf('<header id="nav">');
        if (navStartIndex !== -1) {
            const navEndIndex = content.indexOf('</header>', navStartIndex);
            if (navEndIndex !== -1) {
                const before = content.substring(0, navStartIndex);
                const after = content.substring(navEndIndex + '</header>'.length);
                content = before + '<!-- Navigation Component -->\n  <div id="navbar-placeholder"></div>' + after;
                modified = true;
                console.log(`✓ ${filename}: Replaced navbar`);
            }
        }

        // Replace footer - multiple patterns
        let footerStartIndex = content.indexOf('<footer id="footer">');
        if (footerStartIndex !== -1) {
            // Look for the end of artboard div or email modal
            const emailModalStart = content.indexOf('<div id="email-modal"', footerStartIndex);
            if (emailModalStart !== -1) {
                const scriptIndex = content.indexOf('<script>', emailModalStart);
                if (scriptIndex !== -1) {
                    const before = content.substring(0, footerStartIndex);
                    const after = content.substring(scriptIndex);
                    content = before + '<!-- Footer Component -->\n  <div id="footer-placeholder"></div>\n  ' + after;
                    modified = true;
                    console.log(`✓ ${filename}: Replaced footer`);
                }
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
console.log(`\n💡 Next step: Test pages in browser`);
