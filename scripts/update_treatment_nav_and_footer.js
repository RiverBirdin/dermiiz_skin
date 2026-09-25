const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const servDir = path.join(ROOT, 'services');

// 1. Desktop Nav for Root Treatment Pages (skin.html, hair.html, nail.html)
function getRootNav(active) {
  const cls = (name) => active === name ? " active" : "";
  return `<nav class="nav-links" aria-label="Main Navigation">
                        <a href="index.html" class="nav-link-item">Home</a>
                        <a href="about.html" class="nav-link-item">About Us</a>
                        <!-- SKIN DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="skin">
                            <a href="skin.html" class="nav-link-item has-dropdown${cls("skin")}" id="navSkinBtn" aria-haspopup="true"
                                aria-expanded="false">
                                Skin
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-skin" aria-labelledby="navSkinBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">

                                            <span class="dropdown-count-badge">18 Specialized Treatments</span>
                                        </div>

                                    </div>
                                    <div class="dropdown-grid dropdown-grid-skin">
                                        <a href="services/acne-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Acne Treatment</a>
                                        <a href="services/acne-scars-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Acne Scars Treatment</a>
                                        <a href="services/pigmentation-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Pigmentation / Melasma</a>
                                        <a href="services/anti-aging-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Anti-Aging &amp; Wrinkle</a>
                                        <a href="services/chemical-peels.html" class="dropdown-item"><span
                                                class="item-dot"></span>Chemical Peels</a>
                                        <a href="services/laser-toning.html" class="dropdown-item"><span
                                                class="item-dot"></span>Laser Toning</a>
                                        <a href="services/medi-facial.html" class="dropdown-item"><span
                                                class="item-dot"></span>Medi-Facial</a>
                                        <a href="services/skin-brightening.html" class="dropdown-item"><span
                                                class="item-dot"></span>Skin Brightening</a>
                                        <a href="services/psoriasis-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Psoriasis Treatment</a>
                                        <a href="services/fungal-skin-infection.html" class="dropdown-item"><span
                                                class="item-dot"></span>Fungal Skin Infection</a>
                                        <a href="services/skin-allergy.html" class="dropdown-item"><span
                                                class="item-dot"></span>Skin Allergy</a>
                                        <a href="services/dark-circles.html" class="dropdown-item"><span
                                                class="item-dot"></span>Dark Circles</a>
                                        <a href="services/warts-moles.html" class="dropdown-item"><span
                                                class="item-dot"></span>Warts / Moles</a>
                                        <a href="services/vitiligo-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Vitiligo</a>
                                        <a href="services/tattoo-removal.html" class="dropdown-item"><span
                                                class="item-dot"></span>Tattoo Removal</a>
                                        <a href="services/laser-hair-removal.html" class="dropdown-item"><span
                                                class="item-dot"></span>Laser Hair Removal</a>
                                        <a href="services/botox-fillers.html" class="dropdown-item"><span
                                                class="item-dot"></span>Botox / Fillers / Boosters</a>
                                        <a href="services/glutathione-antioxidants.html" class="dropdown-item"><span
                                                class="item-dot"></span>Glutathione &amp; Antioxidants</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- HAIR DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="hair">
                            <a href="hair.html" class="nav-link-item has-dropdown${cls("hair")}" id="navHairBtn" aria-haspopup="true"
                                aria-expanded="false">
                                Hair
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-hair" aria-labelledby="navHairBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">

                                            <span class="dropdown-count-badge">10 Advanced Therapies</span>
                                        </div>

                                    </div>
                                    <div class="dropdown-grid dropdown-grid-hair">
                                        <a href="services/hair-fall-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Hair Fall Treatment</a>
                                        <a href="services/prp-hair-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>PRP Hair Treatment</a>
                                        <a href="services/gfc-hair-therapy.html" class="dropdown-item"><span
                                                class="item-dot"></span>GFC Hair Therapy</a>
                                        <a href="services/hair-transplant.html" class="dropdown-item"><span
                                                class="item-dot"></span>Hair Transplant</a>
                                        <a href="services/dandruff-scalp-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Dandruff &amp; Scalp Treatment</a>
                                        <a href="services/alopecia-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Alopecia / Hair Loss</a>
                                        <a href="services/mesotherapy-hair.html" class="dropdown-item"><span
                                                class="item-dot"></span>Mesotherapy for Hair</a>
                                        <a href="services/hair-thinning-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Hair Thinning / Density</a>
                                        <a href="services/stem-cells-hair.html" class="dropdown-item"><span
                                                class="item-dot"></span>Stem Cells Treatment</a>
                                        <a href="services/laser-therapy-hair.html" class="dropdown-item"><span
                                                class="item-dot"></span>Laser Therapy for Hair</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- NAIL DROPDOWN MENU -->
                        <div class="nav-item-dropdown" data-dropdown="nail">
                            <a href="nail.html" class="nav-link-item has-dropdown${cls("nail")}" id="navNailBtn" aria-haspopup="true"
                                aria-expanded="false">
                                Nail
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-nail" aria-labelledby="navNailBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">

                                            <span class="dropdown-count-badge">3 Specialized Treatments</span>
                                        </div>

                                    </div>
                                    <div class="dropdown-grid dropdown-grid-nail">
                                        <a href="services/nail-fungus-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Nail Fungus Treatment</a>
                                        <a href="services/ingrown-nail-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Ingrown Nail Treatment</a>
                                        <a href="services/nail-disorders-check.html" class="dropdown-item"><span
                                                class="item-dot"></span>Nail Disorders &amp; Nail Health Check</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="gallery.html" class="nav-link-item">Gallery</a>
                        <a href="blog.html" class="nav-link-item">Blog</a>
                        <a href="contact.html" class="nav-link-item">Contact Us</a>
                    </nav>`;
}

// 2. Desktop Nav for Sub-Treatment Pages (services/*.html)
const HAIR_LIST = [
  "hair-fall-treatment", "prp-hair-treatment", "gfc-hair-therapy", "hair-transplant",
  "dandruff-scalp-treatment", "alopecia-treatment", "mesotherapy-hair",
  "hair-thinning-treatment", "stem-cells-hair", "laser-therapy-hair"
];
const NAIL_LIST = [
  "nail-fungus-treatment", "ingrown-nail-treatment", "nail-disorders-check"
];

function getCategory(filename) {
  const base = filename.replace('.html', '');
  if (HAIR_LIST.includes(base)) return 'hair';
  if (NAIL_LIST.includes(base)) return 'nail';
  return 'skin';
}

function getServiceNav(category) {
  const cls = (name) => category === name ? " active" : "";
  return `<nav class="nav-links" aria-label="Main Navigation">
                        <a href="../index.html" class="nav-link-item">Home</a>
                        <a href="../about.html" class="nav-link-item">About Us</a>
                        <!-- SKIN DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="skin">
                            <a href="../skin.html" class="nav-link-item has-dropdown${cls("skin")}" id="navSkinBtn" aria-haspopup="true"
                                aria-expanded="false">
                                Skin
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-skin" aria-labelledby="navSkinBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">

                                            <span class="dropdown-count-badge">18 Specialized Treatments</span>
                                        </div>

                                    </div>
                                    <div class="dropdown-grid dropdown-grid-skin">
                                        <a href="acne-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Acne Treatment</a>
                                        <a href="acne-scars-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Acne Scars Treatment</a>
                                        <a href="pigmentation-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Pigmentation / Melasma</a>
                                        <a href="anti-aging-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Anti-Aging &amp; Wrinkle</a>
                                        <a href="chemical-peels.html" class="dropdown-item"><span
                                                class="item-dot"></span>Chemical Peels</a>
                                        <a href="laser-toning.html" class="dropdown-item"><span
                                                class="item-dot"></span>Laser Toning</a>
                                        <a href="medi-facial.html" class="dropdown-item"><span
                                                class="item-dot"></span>Medi-Facial</a>
                                        <a href="skin-brightening.html" class="dropdown-item"><span
                                                class="item-dot"></span>Skin Brightening</a>
                                        <a href="psoriasis-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Psoriasis Treatment</a>
                                        <a href="fungal-skin-infection.html" class="dropdown-item"><span
                                                class="item-dot"></span>Fungal Skin Infection</a>
                                        <a href="skin-allergy.html" class="dropdown-item"><span
                                                class="item-dot"></span>Skin Allergy</a>
                                        <a href="dark-circles.html" class="dropdown-item"><span
                                                class="item-dot"></span>Dark Circles</a>
                                        <a href="warts-moles.html" class="dropdown-item"><span
                                                class="item-dot"></span>Warts / Moles</a>
                                        <a href="vitiligo-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Vitiligo</a>
                                        <a href="tattoo-removal.html" class="dropdown-item"><span
                                                class="item-dot"></span>Tattoo Removal</a>
                                        <a href="laser-hair-removal.html" class="dropdown-item"><span
                                                class="item-dot"></span>Laser Hair Removal</a>
                                        <a href="botox-fillers.html" class="dropdown-item"><span
                                                class="item-dot"></span>Botox / Fillers / Boosters</a>
                                        <a href="glutathione-antioxidants.html" class="dropdown-item"><span
                                                class="item-dot"></span>Glutathione &amp; Antioxidants</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- HAIR DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="hair">
                            <a href="../hair.html" class="nav-link-item has-dropdown${cls("hair")}" id="navHairBtn" aria-haspopup="true"
                                aria-expanded="false">
                                Hair
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-hair" aria-labelledby="navHairBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">

                                            <span class="dropdown-count-badge">10 Advanced Therapies</span>
                                        </div>

                                    </div>
                                    <div class="dropdown-grid dropdown-grid-hair">
                                        <a href="hair-fall-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Hair Fall Treatment</a>
                                        <a href="prp-hair-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>PRP Hair Treatment</a>
                                        <a href="gfc-hair-therapy.html" class="dropdown-item"><span
                                                class="item-dot"></span>GFC Hair Therapy</a>
                                        <a href="hair-transplant.html" class="dropdown-item"><span
                                                class="item-dot"></span>Hair Transplant</a>
                                        <a href="dandruff-scalp-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Dandruff &amp; Scalp Treatment</a>
                                        <a href="alopecia-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Alopecia / Hair Loss</a>
                                        <a href="mesotherapy-hair.html" class="dropdown-item"><span
                                                class="item-dot"></span>Mesotherapy for Hair</a>
                                        <a href="hair-thinning-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Hair Thinning / Density</a>
                                        <a href="stem-cells-hair.html" class="dropdown-item"><span
                                                class="item-dot"></span>Stem Cells Treatment</a>
                                        <a href="laser-therapy-hair.html" class="dropdown-item"><span
                                                class="item-dot"></span>Laser Therapy for Hair</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- NAIL DROPDOWN MENU -->
                        <div class="nav-item-dropdown" data-dropdown="nail">
                            <a href="../nail.html" class="nav-link-item has-dropdown${cls("nail")}" id="navNailBtn" aria-haspopup="true"
                                aria-expanded="false">
                                Nail
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-nail" aria-labelledby="navNailBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">

                                            <span class="dropdown-count-badge">3 Specialized Treatments</span>
                                        </div>

                                    </div>
                                    <div class="dropdown-grid dropdown-grid-nail">
                                        <a href="nail-fungus-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Nail Fungus Treatment</a>
                                        <a href="ingrown-nail-treatment.html" class="dropdown-item"><span
                                                class="item-dot"></span>Ingrown Nail Treatment</a>
                                        <a href="nail-disorders-check.html" class="dropdown-item"><span
                                                class="item-dot"></span>Nail Disorders &amp; Nail Health Check</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="../gallery.html" class="nav-link-item">Gallery</a>
                        <a href="../blog.html" class="nav-link-item">Blog</a>
                        <a href="../contact.html" class="nav-link-item">Contact Us</a>
                    </nav>`;
}

// 3. Root Footer Template (Matching index.html)
const ROOT_FOOTER = `<footer class="dermiiz-footer-section" role="contentinfo">
        <div class="footer-container-outer">

            <!-- Main Dark Card -->
            <div class="footer-main-card">
                <div class="footer-grid-4col">

                    <!-- Col 1: Brand -->
                    <div class="footer-brand-col">
                        <img src="assets/images/dermiiz_logo_white.png" alt="DERMIIZ Skin and Hair Clinic"
                            class="footer-logo-img">
                        <p class="footer-brand-text">
                            We provide advanced, targeted therapies designed to effectively treat complex skin and hair
                        </p>
                        <div class="footer-social-icons">
                            <a href="#" class="social-circle-btn" aria-label="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="YouTube">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="X">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Col 2: Quick Links -->
                    <div class="footer-links-col">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="about.html">Doctors</a></li>
                            <li><a href="blog.html">Blog</a></li>
                        </ul>
                    </div>

                    <!-- Col 3: Treatments -->
                    <div class="footer-links-col">
                        <h4 class="footer-title">Treatments</h4>
                        <ul class="footer-menu">
                            <li><a href="skin.html">Skin Care</a></li>
                            <li><a href="hair.html">Hair Care</a></li>
                            <li><a href="nail.html">Nail Care</a></li>
                        </ul>
                    </div>

                    <!-- Col 4: Address & Newsletter -->
                    <div class="footer-address-col">
                        <h4 class="footer-title">Address</h4>
                        <p class="footer-address-text">
                            C83, 10th Cross St, West Thillai Nagar,<br>
                            Tiruchirappalli, Tamil Nadu 620018
                        </p>

                        <h4 class="footer-title" style="margin-top: 1.85rem;">News Letter</h4>
                        <div class="footer-newsletter-pill">
                            <span class="newsletter-mail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input type="email" placeholder="Enter Email Address*" aria-label="Email subscription">
                            <button type="button" class="newsletter-submit-btn">Subscribe Now</button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Bottom Sub-Footer Strip -->
            <div class="footer-bottom-strip">
                <div class="footer-bottom-item">©2026 All Rights Reserved</div>
                <div class="footer-bottom-item"><a href="terms.html">Terms and Conditions</a></div>

                <div class="footer-bottom-item"><a href="privacy-policy.html">Privacy Policy</a></div>
                <div class="footer-bottom-item"><a href="#">Sitemap</a></div>
            </div>

            <!-- Attribution -->
            <div class="footer-attribution">
                Designed and Developed By <a href="https://riverbird.in/" target="_blank">RiverBird Digital
                    Solutions</a>
            </div>

        </div>
    </footer>`;

// 4. Service Footer Template (Matching index.html with ../ relative paths, NO refund policy)
const SERVICE_FOOTER = `<footer class="dermiiz-footer-section" role="contentinfo">
        <div class="footer-container-outer">

            <!-- Main Dark Card -->
            <div class="footer-main-card">
                <div class="footer-grid-4col">

                    <!-- Col 1: Brand -->
                    <div class="footer-brand-col">
                        <img src="../assets/images/dermiiz_logo_white.png" alt="DERMIIZ Skin and Hair Clinic"
                            class="footer-logo-img">
                        <p class="footer-brand-text">
                            We provide advanced, targeted therapies designed to effectively treat complex skin and hair
                        </p>
                        <div class="footer-social-icons">
                            <a href="#" class="social-circle-btn" aria-label="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="YouTube">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="X">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Col 2: Quick Links -->
                    <div class="footer-links-col">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-menu">
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="../about.html">About Us</a></li>
                            <li><a href="../gallery.html">Gallery</a></li>
                            <li><a href="../about.html">Doctors</a></li>
                            <li><a href="../blog.html">Blog</a></li>
                        </ul>
                    </div>

                    <!-- Col 3: Treatments -->
                    <div class="footer-links-col">
                        <h4 class="footer-title">Treatments</h4>
                        <ul class="footer-menu">
                            <li><a href="../skin.html">Skin Care</a></li>
                            <li><a href="../hair.html">Hair Care</a></li>
                            <li><a href="../nail.html">Nail Care</a></li>
                        </ul>
                    </div>

                    <!-- Col 4: Address & Newsletter -->
                    <div class="footer-address-col">
                        <h4 class="footer-title">Address</h4>
                        <p class="footer-address-text">
                            C83, 10th Cross St, West Thillai Nagar,<br>
                            Tiruchirappalli, Tamil Nadu 620018
                        </p>

                        <h4 class="footer-title" style="margin-top: 1.85rem;">News Letter</h4>
                        <div class="footer-newsletter-pill">
                            <span class="newsletter-mail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input type="email" placeholder="Enter Email Address*" aria-label="Email subscription">
                            <button type="button" class="newsletter-submit-btn">Subscribe Now</button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Bottom Sub-Footer Strip -->
            <div class="footer-bottom-strip">
                <div class="footer-bottom-item">©2026 All Rights Reserved</div>
                <div class="footer-bottom-item"><a href="../terms.html">Terms and Conditions</a></div>
                <div class="footer-bottom-item"><a href="../privacy-policy.html">Privacy Policy</a></div>
                <div class="footer-bottom-item"><a href="#">Sitemap</a></div>
            </div>

            <!-- Attribution -->
            <div class="footer-attribution">
                Designed and Developed By <a href="https://riverbird.in/" target="_blank">RiverBird Digital
                    Solutions</a>
            </div>

        </div>
    </footer>`;

function replaceNav(html, newNavHtml) {
  const start = html.indexOf('<nav class="nav-links"');
  if (start === -1) return null;
  let depth = 0, i = start;
  while (i < html.length) {
    if (html.startsWith("<nav", i)) { depth++; i += 4; continue; }
    if (html.startsWith("</nav>", i)) { depth--; if (depth === 0) { i += 6; break; } i += 6; continue; }
    i++;
  }
  return html.slice(0, start) + newNavHtml + html.slice(i);
}

function replaceFooter(html, newFooterHtml) {
  const start = html.indexOf('<footer class="dermiiz-footer-section"');
  if (start === -1) return null;
  const end = html.indexOf('</footer>', start);
  if (end === -1) return null;
  return html.slice(0, start) + newFooterHtml + html.slice(end + 9);
}

console.log('--- UPDATING ROOT TREATMENT PAGES (skin.html, hair.html, nail.html) ---');
const rootPages = [
  ['skin.html', 'skin'],
  ['hair.html', 'hair'],
  ['nail.html', 'nail']
];

for (const [file, active] of rootPages) {
  const fp = path.join(ROOT, file);
  if (!fs.existsSync(fp)) continue;
  let html = fs.readFileSync(fp, 'utf8');

  // Update nav
  const updatedNav = replaceNav(html, getRootNav(active));
  if (updatedNav) html = updatedNav;

  // Update footer
  const updatedFooter = replaceFooter(html, ROOT_FOOTER);
  if (updatedFooter) html = updatedFooter;

  fs.writeFileSync(fp, html, 'utf8');
  console.log('UPDATED ROOT TREATMENT PAGE:', file);
}

console.log('\n--- UPDATING 31 SUB-TREATMENT SERVICE PAGES ---');
const serviceFiles = fs.readdirSync(servDir).filter(f => f.endsWith('.html'));

for (const file of serviceFiles) {
  const fp = path.join(servDir, file);
  let html = fs.readFileSync(fp, 'utf8');
  const cat = getCategory(file);

  // Update nav
  const updatedNav = replaceNav(html, getServiceNav(cat));
  if (updatedNav) html = updatedNav;

  // Update footer (removes refund policy, adds working relative navigation links & attribution)
  const updatedFooter = replaceFooter(html, SERVICE_FOOTER);
  if (updatedFooter) html = updatedFooter;

  fs.writeFileSync(fp, html, 'utf8');
  console.log('UPDATED SERVICE PAGE:', file);
}

console.log('\n--- CHECKING TERMS AND PRIVACY POLICY FOOTERS AND NAV ---');
for (const legalFile of ['terms.html', 'privacy-policy.html']) {
  const fp = path.join(ROOT, legalFile);
  if (!fs.existsSync(fp)) continue;
  let html = fs.readFileSync(fp, 'utf8');
  const updatedNav = replaceNav(html, getRootNav(''));
  if (updatedNav) html = updatedNav;
  const updatedFooter = replaceFooter(html, ROOT_FOOTER);
  if (updatedFooter) html = updatedFooter;
  fs.writeFileSync(fp, html, 'utf8');
  console.log('UPDATED LEGAL PAGE NAV & FOOTER:', legalFile);
}

console.log('\nDONE ALL UPDATES.');
