const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const servDir = path.join(ROOT, 'services');

console.log('--- VERIFYING SERVICE PAGES ---');
const serviceFiles = fs.readdirSync(servDir).filter(f => f.endsWith('.html'));

let serviceErrors = 0;
for (const file of serviceFiles) {
  const content = fs.readFileSync(path.join(servDir, file), 'utf8');

  // Check nav-links exists
  if (!content.includes('<nav class="nav-links"')) {
    console.error(`[ERROR] ${file}: Missing <nav class="nav-links"`);
    serviceErrors++;
  }

  // Check dropdown badges exists
  if (!content.includes('dropdown-pill-badge') || !content.includes('dropdown-count-badge') || !content.includes('dropdown-view-all')) {
    console.error(`[ERROR] ${file}: Missing dropdown pill or badge or view-all in nav`);
    serviceErrors++;
  }

  // Check service-top-image
  const imgRegex = /<img[^>]*class=["'][^"']*service-top-image[^"']*["'][^>]*>|<img[^>]*src=["'][^"']+["'][^>]*class=["'][^"']*service-top-image[^"']*["'][^>]*>/i;
  const match = content.match(imgRegex);

  if (!match) {
    console.error(`[ERROR] ${file}: Could not find <img ... class="service-top-image">`);
    serviceErrors++;
  } else {
    const srcMatch = match[0].match(/src=["']([^"']+)["']/i);
    if (!srcMatch) {
      console.error(`[ERROR] ${file}: No src attribute in service-top-image tag: ${match[0]}`);
      serviceErrors++;
    } else {
      const src = srcMatch[1];
      const absPath = path.resolve(servDir, src);
      if (!fs.existsSync(absPath)) {
        console.error(`[ERROR] ${file}: Image does not exist: ${src} -> ${absPath}`);
        serviceErrors++;
      } else {
        // console.log(`[OK] ${file} -> ${src}`);
      }
    }
  }
}

console.log(`Verified ${serviceFiles.length} service pages. Total errors: ${serviceErrors}`);

console.log('\n--- VERIFYING ROOT PAGES ---');
const rootFiles = ['index.html', 'about.html', 'skin.html', 'hair.html', 'nail.html', 'gallery.html', 'blog.html', 'contact.html'];
let rootErrors = 0;

for (const file of rootFiles) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Root file not found: ${file}`);
    rootErrors++;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('<nav class="nav-links"')) {
    console.error(`[ERROR] ${file}: Missing <nav class="nav-links"`);
    rootErrors++;
  }

  if (!content.includes('dropdown-pill-badge') || !content.includes('dropdown-count-badge') || !content.includes('dropdown-view-all')) {
    console.error(`[ERROR] ${file}: Missing dropdown pill or badge or view-all in nav`);
    rootErrors++;
  }

  // Check that links in root nav point correctly to services/
  if (!content.includes('href="services/acne-treatment.html"')) {
    console.error(`[ERROR] ${file}: Root page navbar links should point to services/acne-treatment.html`);
    rootErrors++;
  }
}

console.log(`Verified ${rootFiles.length} root pages. Total errors: ${rootErrors}`);
