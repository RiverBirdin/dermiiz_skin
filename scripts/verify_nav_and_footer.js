const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const servDir = path.join(ROOT, 'services');

let totalErrors = 0;

function checkPage(filePath, isService) {
  const relName = path.relative(ROOT, filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Check Navbar Dropdown Header Design
  if (!content.includes('dropdown-menu-skin')) {
    console.error(`[ERROR] ${relName}: Missing dropdown-menu-skin`);
    totalErrors++;
  }

  if (content.includes('dropdown-pill-badge')) {
    console.error(`[ERROR] ${relName}: Contains dropdown-pill-badge which was requested to be removed!`);
    totalErrors++;
  }

  if (content.includes('dropdown-view-all')) {
    console.error(`[ERROR] ${relName}: Contains dropdown-view-all which was requested to be removed!`);
    totalErrors++;
  }

  if (!content.includes('18 Specialized Treatments') || !content.includes('10 Advanced Therapies') || !content.includes('3 Specialized Treatments')) {
    console.error(`[ERROR] ${relName}: Missing treatment count badges`);
    totalErrors++;
  }

  // 2. Check Footer
  if (!content.includes('<footer class="dermiiz-footer-section"')) {
    console.error(`[ERROR] ${relName}: Missing footer`);
    totalErrors++;
  }

  if (content.includes('Refund Policy')) {
    console.error(`[ERROR] ${relName}: Footer still contains 'Refund Policy'!`);
    totalErrors++;
  }

  if (!content.includes('Terms and Conditions') || !content.includes('Privacy Policy')) {
    console.error(`[ERROR] ${relName}: Missing Terms & Conditions or Privacy Policy in footer`);
    totalErrors++;
  }

  if (!content.includes('RiverBird Digital')) {
    console.error(`[ERROR] ${relName}: Missing RiverBird attribution in footer`);
    totalErrors++;
  }

  // 3. Check Relative Paths
  if (isService) {
    if (!content.includes('href="../terms.html"') || !content.includes('href="../privacy-policy.html"')) {
      console.error(`[ERROR] ${relName}: Service page footer links should point to ../terms.html and ../privacy-policy.html`);
      totalErrors++;
    }
    if (!content.includes('href="../index.html"') || !content.includes('href="../about.html"')) {
      console.error(`[ERROR] ${relName}: Service page footer/nav links should point to ../index.html`);
      totalErrors++;
    }
  } else {
    // Root pages
    if (content.includes('href="../terms.html"') || content.includes('href="../privacy-policy.html"')) {
      console.error(`[ERROR] ${relName}: Root page has erroneous ../ link`);
      totalErrors++;
    }
  }
}

console.log('--- CHECKING ROOT PAGES ---');
const rootFiles = ['index.html', 'about.html', 'skin.html', 'hair.html', 'nail.html', 'gallery.html', 'blog.html', 'contact.html', 'terms.html', 'privacy-policy.html'];
for (const rf of rootFiles) {
  checkPage(path.join(ROOT, rf), false);
}

console.log('--- CHECKING SERVICE PAGES (31) ---');
const serviceFiles = fs.readdirSync(servDir).filter(f => f.endsWith('.html'));
for (const sf of serviceFiles) {
  checkPage(path.join(servDir, sf), true);
}

console.log(`\nVerification finished. Checked ${rootFiles.length} root pages + ${serviceFiles.length} service pages. Total errors: ${totalErrors}`);
if (totalErrors === 0) {
  console.log('ALL TESTS PASSED PERFECTLY!');
}
