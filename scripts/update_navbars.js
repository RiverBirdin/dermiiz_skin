/**
 * update_navbars_and_images.js
 * Updates all site pages to have consistent navbar + correct service-top-image paths
 */

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

// ---- NAV TEMPLATE FOR ROOT PAGES ----
function rootNav(active) {
  const cls = (name) => active === name ? " active" : "";
  return `<nav class="nav-links" aria-label="Main Navigation">
                        <a href="index.html" class="nav-link-item${cls("home")}">Home</a>
                        <a href="about.html" class="nav-link-item${cls("about")}">About Us</a>
                        <!-- SKIN DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="skin">
                            <a href="skin.html" class="nav-link-item has-dropdown${cls("skin")}" id="navSkinBtn" aria-haspopup="true" aria-expanded="false">
                                Skin
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor"><path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-skin" aria-labelledby="navSkinBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Clinical Dermatology</span>
                                            <span class="dropdown-count-badge">18 Specialized Treatments</span>
                                        </div>
                                        <a href="skin.html" class="dropdown-view-all">View All Skin Care &#8594;</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-skin">
                                        <a href="services/acne-treatment.html" class="dropdown-item"><span class="item-dot"></span>Acne Treatment</a>
                                        <a href="services/acne-scars-treatment.html" class="dropdown-item"><span class="item-dot"></span>Acne Scars Treatment</a>
                                        <a href="services/pigmentation-treatment.html" class="dropdown-item"><span class="item-dot"></span>Pigmentation / Melasma</a>
                                        <a href="services/anti-aging-treatment.html" class="dropdown-item"><span class="item-dot"></span>Anti-Aging &amp; Wrinkle</a>
                                        <a href="services/chemical-peels.html" class="dropdown-item"><span class="item-dot"></span>Chemical Peels</a>
                                        <a href="services/laser-toning.html" class="dropdown-item"><span class="item-dot"></span>Laser Toning</a>
                                        <a href="services/medi-facial.html" class="dropdown-item"><span class="item-dot"></span>Medi-Facial</a>
                                        <a href="services/skin-brightening.html" class="dropdown-item"><span class="item-dot"></span>Skin Brightening</a>
                                        <a href="services/psoriasis-treatment.html" class="dropdown-item"><span class="item-dot"></span>Psoriasis Treatment</a>
                                        <a href="services/fungal-skin-infection.html" class="dropdown-item"><span class="item-dot"></span>Fungal Skin Infection</a>
                                        <a href="services/skin-allergy.html" class="dropdown-item"><span class="item-dot"></span>Skin Allergy</a>
                                        <a href="services/dark-circles.html" class="dropdown-item"><span class="item-dot"></span>Dark Circles</a>
                                        <a href="services/warts-moles.html" class="dropdown-item"><span class="item-dot"></span>Warts / Moles</a>
                                        <a href="services/vitiligo-treatment.html" class="dropdown-item"><span class="item-dot"></span>Vitiligo</a>
                                        <a href="services/tattoo-removal.html" class="dropdown-item"><span class="item-dot"></span>Tattoo Removal</a>
                                        <a href="services/laser-hair-removal.html" class="dropdown-item"><span class="item-dot"></span>Laser Hair Removal</a>
                                        <a href="services/botox-fillers.html" class="dropdown-item"><span class="item-dot"></span>Botox / Fillers / Boosters</a>
                                        <a href="services/glutathione-antioxidants.html" class="dropdown-item"><span class="item-dot"></span>Glutathione &amp; Antioxidants</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- HAIR DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="hair">
                            <a href="hair.html" class="nav-link-item has-dropdown${cls("hair")}" id="navHairBtn" aria-haspopup="true" aria-expanded="false">
                                Hair
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor"><path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-hair" aria-labelledby="navHairBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Trichology &amp; Restoration</span>
                                            <span class="dropdown-count-badge">10 Advanced Therapies</span>
                                        </div>
                                        <a href="hair.html" class="dropdown-view-all">View All Hair Care &#8594;</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-hair">
                                        <a href="services/hair-fall-treatment.html" class="dropdown-item"><span class="item-dot"></span>Hair Fall Treatment</a>
                                        <a href="services/prp-hair-treatment.html" class="dropdown-item"><span class="item-dot"></span>PRP Hair Treatment</a>
                                        <a href="services/gfc-hair-therapy.html" class="dropdown-item"><span class="item-dot"></span>GFC Hair Therapy</a>
                                        <a href="services/hair-transplant.html" class="dropdown-item"><span class="item-dot"></span>Hair Transplant</a>
                                        <a href="services/dandruff-scalp-treatment.html" class="dropdown-item"><span class="item-dot"></span>Dandruff &amp; Scalp Treatment</a>
                                        <a href="services/alopecia-treatment.html" class="dropdown-item"><span class="item-dot"></span>Alopecia / Hair Loss</a>
                                        <a href="services/mesotherapy-hair.html" class="dropdown-item"><span class="item-dot"></span>Mesotherapy for Hair</a>
                                        <a href="services/hair-thinning-treatment.html" class="dropdown-item"><span class="item-dot"></span>Hair Thinning / Density</a>
                                        <a href="services/stem-cells-hair.html" class="dropdown-item"><span class="item-dot"></span>Stem Cells Treatment</a>
                                        <a href="services/laser-therapy-hair.html" class="dropdown-item"><span class="item-dot"></span>Laser Therapy for Hair</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- NAIL DROPDOWN MENU -->
                        <div class="nav-item-dropdown" data-dropdown="nail">
                            <a href="nail.html" class="nav-link-item has-dropdown${cls("nail")}" id="navNailBtn" aria-haspopup="true" aria-expanded="false">
                                Nail
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor"><path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-nail" aria-labelledby="navNailBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Podiatry &amp; Aesthetics</span>
                                            <span class="dropdown-count-badge">3 Specialized Treatments</span>
                                        </div>
                                        <a href="nail.html" class="dropdown-view-all">View All Nail Care &#8594;</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-nail">
                                        <a href="services/nail-fungus-treatment.html" class="dropdown-item"><span class="item-dot"></span>Nail Fungus Treatment</a>
                                        <a href="services/ingrown-nail-treatment.html" class="dropdown-item"><span class="item-dot"></span>Ingrown Nail Treatment</a>
                                        <a href="services/nail-disorders-check.html" class="dropdown-item"><span class="item-dot"></span>Nail Disorders &amp; Nail Health Check</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="gallery.html" class="nav-link-item${cls("gallery")}">Gallery</a>
                        <a href="blog.html" class="nav-link-item${cls("blog")}">Blog</a>
                        <a href="contact.html" class="nav-link-item${cls("contact")}">Contact Us</a>
                    </nav>`;
}

function serviceNav(active) {
  const cls = (name) => active === name ? " active" : "";
  return `<nav class="nav-links" aria-label="Main Navigation">
                        <a href="../index.html" class="nav-link-item">Home</a>
                        <a href="../about.html" class="nav-link-item">About Us</a>
                        <!-- SKIN DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="skin">
                            <a href="../skin.html" class="nav-link-item has-dropdown${cls("skin")}" id="navSkinBtn" aria-haspopup="true" aria-expanded="false">
                                Skin
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor"><path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-skin" aria-labelledby="navSkinBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Clinical Dermatology</span>
                                            <span class="dropdown-count-badge">18 Specialized Treatments</span>
                                        </div>
                                        <a href="../skin.html" class="dropdown-view-all">View All Skin Care &#8594;</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-skin">
                                        <a href="acne-treatment.html" class="dropdown-item"><span class="item-dot"></span>Acne Treatment</a>
                                        <a href="acne-scars-treatment.html" class="dropdown-item"><span class="item-dot"></span>Acne Scars Treatment</a>
                                        <a href="pigmentation-treatment.html" class="dropdown-item"><span class="item-dot"></span>Pigmentation / Melasma</a>
                                        <a href="anti-aging-treatment.html" class="dropdown-item"><span class="item-dot"></span>Anti-Aging &amp; Wrinkle</a>
                                        <a href="chemical-peels.html" class="dropdown-item"><span class="item-dot"></span>Chemical Peels</a>
                                        <a href="laser-toning.html" class="dropdown-item"><span class="item-dot"></span>Laser Toning</a>
                                        <a href="medi-facial.html" class="dropdown-item"><span class="item-dot"></span>Medi-Facial</a>
                                        <a href="skin-brightening.html" class="dropdown-item"><span class="item-dot"></span>Skin Brightening</a>
                                        <a href="psoriasis-treatment.html" class="dropdown-item"><span class="item-dot"></span>Psoriasis Treatment</a>
                                        <a href="fungal-skin-infection.html" class="dropdown-item"><span class="item-dot"></span>Fungal Skin Infection</a>
                                        <a href="skin-allergy.html" class="dropdown-item"><span class="item-dot"></span>Skin Allergy</a>
                                        <a href="dark-circles.html" class="dropdown-item"><span class="item-dot"></span>Dark Circles</a>
                                        <a href="warts-moles.html" class="dropdown-item"><span class="item-dot"></span>Warts / Moles</a>
                                        <a href="vitiligo-treatment.html" class="dropdown-item"><span class="item-dot"></span>Vitiligo</a>
                                        <a href="tattoo-removal.html" class="dropdown-item"><span class="item-dot"></span>Tattoo Removal</a>
                                        <a href="laser-hair-removal.html" class="dropdown-item"><span class="item-dot"></span>Laser Hair Removal</a>
                                        <a href="botox-fillers.html" class="dropdown-item"><span class="item-dot"></span>Botox / Fillers / Boosters</a>
                                        <a href="glutathione-antioxidants.html" class="dropdown-item"><span class="item-dot"></span>Glutathione &amp; Antioxidants</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- HAIR DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="hair">
                            <a href="../hair.html" class="nav-link-item has-dropdown${cls("hair")}" id="navHairBtn" aria-haspopup="true" aria-expanded="false">
                                Hair
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor"><path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-hair" aria-labelledby="navHairBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Trichology &amp; Restoration</span>
                                            <span class="dropdown-count-badge">10 Advanced Therapies</span>
                                        </div>
                                        <a href="../hair.html" class="dropdown-view-all">View All Hair Care &#8594;</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-hair">
                                        <a href="hair-fall-treatment.html" class="dropdown-item"><span class="item-dot"></span>Hair Fall Treatment</a>
                                        <a href="prp-hair-treatment.html" class="dropdown-item"><span class="item-dot"></span>PRP Hair Treatment</a>
                                        <a href="gfc-hair-therapy.html" class="dropdown-item"><span class="item-dot"></span>GFC Hair Therapy</a>
                                        <a href="hair-transplant.html" class="dropdown-item"><span class="item-dot"></span>Hair Transplant</a>
                                        <a href="dandruff-scalp-treatment.html" class="dropdown-item"><span class="item-dot"></span>Dandruff &amp; Scalp Treatment</a>
                                        <a href="alopecia-treatment.html" class="dropdown-item"><span class="item-dot"></span>Alopecia / Hair Loss</a>
                                        <a href="mesotherapy-hair.html" class="dropdown-item"><span class="item-dot"></span>Mesotherapy for Hair</a>
                                        <a href="hair-thinning-treatment.html" class="dropdown-item"><span class="item-dot"></span>Hair Thinning / Density</a>
                                        <a href="stem-cells-hair.html" class="dropdown-item"><span class="item-dot"></span>Stem Cells Treatment</a>
                                        <a href="laser-therapy-hair.html" class="dropdown-item"><span class="item-dot"></span>Laser Therapy for Hair</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- NAIL DROPDOWN MENU -->
                        <div class="nav-item-dropdown" data-dropdown="nail">
                            <a href="../nail.html" class="nav-link-item has-dropdown${cls("nail")}" id="navNailBtn" aria-haspopup="true" aria-expanded="false">
                                Nail
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor"><path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-nail" aria-labelledby="navNailBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Podiatry &amp; Aesthetics</span>
                                            <span class="dropdown-count-badge">3 Specialized Treatments</span>
                                        </div>
                                        <a href="../nail.html" class="dropdown-view-all">View All Nail Care &#8594;</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-nail">
                                        <a href="nail-fungus-treatment.html" class="dropdown-item"><span class="item-dot"></span>Nail Fungus Treatment</a>
                                        <a href="ingrown-nail-treatment.html" class="dropdown-item"><span class="item-dot"></span>Ingrown Nail Treatment</a>
                                        <a href="nail-disorders-check.html" class="dropdown-item"><span class="item-dot"></span>Nail Disorders &amp; Nail Health Check</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="../gallery.html" class="nav-link-item">Gallery</a>
                        <a href="../blog.html" class="nav-link-item">Blog</a>
                        <a href="../contact.html" class="nav-link-item">Contact Us</a>
                    </nav>`;
}

const IMG_MAP = {
  "acne-treatment.html":"../assets/treatment/acne-treatment_banner.png",
  "acne-scars-treatment.html":"../assets/treatment/acne_scars_treatment_hero_banner.png",
  "pigmentation-treatment.html":"../assets/treatment/pigmentation_treatment_banner.png",
  "anti-aging-treatment.html":"../assets/treatment/anti-aging_banner.png",
  "chemical-peels.html":"../assets/treatment/chemical_peels_hero_banner.png",
  "laser-toning.html":"../assets/treatment/laser_toning_banner.png",
  "medi-facial.html":"../assets/treatment/Medi-Facial_hero_banner.png",
  "skin-brightening.html":"../assets/treatment/skin_brightening_hero_banner.png",
  "psoriasis-treatment.html":"../assets/treatment/psoriasis_treatment_banner.png",
  "fungal-skin-infection.html":"../assets/treatment/fungal_skin_infection_hero_banner.png",
  "skin-allergy.html":"../assets/treatment/skin_allergy_banner.png",
  "dark-circles.html":"../assets/treatment/dark_circles_banner.png",
  "warts-moles.html":"../assets/treatment/warts_moles_hero_banner.png",
  "vitiligo-treatment.html":"../assets/treatment/vitiligo_treatment_banner.png",
  "tattoo-removal.html":"../assets/treatment/tatoo_removal_banner.png",
  "laser-hair-removal.html":"../assets/treatment/laser_hair_removal_hero_banner.png",
  "botox-fillers.html":"../assets/treatment/botox_fillers_banner.png",
  "glutathione-antioxidants.html":"../assets/treatment/glutathione-antioxidants_banner.png",
  "hair-fall-treatment.html":"../assets/treatment/hair_fall_treatment_banner.png",
  "prp-hair-treatment.html":"../assets/treatment/prp-hair-treatment_banner.png",
  "gfc-hair-therapy.html":"../assets/treatment/gfc-hair-therapy_banner.png",
  "hair-transplant.html":"../assets/treatment/hair-transplant_banner.png",
  "dandruff-scalp-treatment.html":"../assets/treatment/dandruff-scalp_banner.png",
  "alopecia-treatment.html":"../assets/treatment/alopecia-treatment_banner.png",
  "mesotherapy-hair.html":"../assets/treatment/mesotherapy-hair_banner.png",
  "hair-thinning-treatment.html":"../assets/treatment/hair-thinning-treatment_banner.png",
  "stem-cells-hair.html":"../assets/treatment/stem-cells-hair_banner.png",
  "laser-therapy-hair.html":"../assets/treatment/laser-therapy-hair_banner.png",
  "nail-fungus-treatment.html":"../assets/treatment/nail-fungus-treatment_banner.png",
  "ingrown-nail-treatment.html":"../assets/treatment/ingrown-nail-treatment_banner.png",
  "nail-disorders-check.html":"../assets/treatment/nail-disorders-check_banner.png"
};

const HAIR = ["hair-fall-treatment","prp-hair-treatment","gfc-hair-therapy","hair-transplant","dandruff-scalp-treatment","alopecia-treatment","mesotherapy-hair","hair-thinning-treatment","stem-cells-hair","laser-therapy-hair"];
const NAIL = ["nail-fungus-treatment","ingrown-nail-treatment","nail-disorders-check"];

function getCategory(f) {
  const base = f.replace(".html","");
  if (HAIR.includes(base)) return "hair";
  if (NAIL.includes(base)) return "nail";
  return "skin";
}

function replaceNav(html, newNavHtml) {
  // Replace the full <nav class="nav-links"...>...</nav>
  const start = html.indexOf('<nav class="nav-links"');
  if (start === -1) return null;
  // Find the matching </nav>
  let depth = 0, i = start;
  while (i < html.length) {
    if (html.startsWith("<nav", i)) { depth++; i += 4; continue; }
    if (html.startsWith("</nav>", i)) { depth--; if (depth === 0) { i += 6; break; } i += 6; continue; }
    i++;
  }
  return html.slice(0, start) + newNavHtml + html.slice(i);
}

// Root pages
const rootCfg = [
  ["index.html","home"],["about.html","about"],["gallery.html","gallery"],
  ["blog.html","blog"],["contact.html","contact"],["skin.html","skin"],
  ["hair.html","hair"],["nail.html","nail"]
];
for (const [file, active] of rootCfg) {
  const fp = path.join(ROOT, file);
  if (!fs.existsSync(fp)) { console.log("SKIP (not found): "+file); continue; }
  let html = fs.readFileSync(fp, "utf8");
  const updated = replaceNav(html, rootNav(active));
  if (!updated) { console.log("SKIP (no nav): "+file); continue; }
  fs.writeFileSync(fp, updated, "utf8");
  console.log("ROOT OK: "+file);
}

// Service pages
const servDir = path.join(ROOT, "services");
for (const file of fs.readdirSync(servDir).filter(f=>f.endsWith(".html"))) {
  const fp = path.join(servDir, file);
  let html = fs.readFileSync(fp, "utf8");
  const cat = getCategory(file);
  // Update nav
  const afterNav = replaceNav(html, serviceNav(cat));
  if (afterNav) html = afterNav;
  // Update image
  const img = IMG_MAP[file];
  if (img) {
    // Match class="service-top-image" and replace src
    html = html.replace(/(<img\b[^>]*?)\bsrc="[^"]*"([^>]*?class="service-top-image")/g, `$1src="${img}"$2`);
    html = html.replace(/(class="service-top-image"[^>]*?)\bsrc="[^"]*"/g, `$1src="${img}"`);
    // More generic: find img with service-top-image class and replace src
    html = html.replace(/<img([^>]*class="service-top-image"[^>]*)src="[^"]*"/g, `<img$1src="${img}"`);
    html = html.replace(/<img([^>]*)src="[^"]*"([^>]*class="service-top-image")/g, `<img$1src="${img}"$2`);
  }
  fs.writeFileSync(fp, html, "utf8");
  console.log("SERVICE OK: "+file + (img?" [img updated]":""));
}
console.log("DONE");
