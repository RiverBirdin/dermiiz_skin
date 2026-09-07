/**
 * DERMIIZ — NAVIGATION & MOBILE MENU SCRIPT
 */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNavPanel = document.getElementById('mobileNavPanel');

    // Sticky Navbar on Scroll
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // Desktop Dropdown Click Toggle
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

    dropdownItems.forEach(function (dropdown) {
        const toggleBtn = dropdown.querySelector('.has-dropdown');
        if (!toggleBtn) return;

        toggleBtn.addEventListener('click', function (e) {
            // Check viewport width: on desktop click, toggle menu
            if (window.innerWidth >= 1024) {
                // If it was already open, let the link navigate
                if (dropdown.classList.contains('is-open')) {
                    return;
                }
                e.preventDefault();
                // Close other dropdowns
                dropdownItems.forEach(function (other) {
                    if (other !== dropdown) {
                        other.classList.remove('is-open');
                        const otherBtn = other.querySelector('.has-dropdown');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });
                dropdown.classList.add('is-open');
                toggleBtn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Close desktop dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-item-dropdown')) {
            dropdownItems.forEach(function (dropdown) {
                dropdown.classList.remove('is-open');
                const btn = dropdown.querySelector('.has-dropdown');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close dropdowns on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            dropdownItems.forEach(function (dropdown) {
                dropdown.classList.remove('is-open');
                const btn = dropdown.querySelector('.has-dropdown');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Mobile Submenu Accordion Toggles
    const mobileDropdowns = document.querySelectorAll('.mobile-nav-item-dropdown');

    mobileDropdowns.forEach(function (mDropdown) {
        const toggleBtn = mDropdown.querySelector('.mobile-submenu-toggle');
        if (!toggleBtn) return;

        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const isActive = mDropdown.classList.contains('active');

            // Toggle active state
            mDropdown.classList.toggle('active', !isActive);
        });
    });

    // Mobile Navigation Drawer Toggle
    if (hamburgerBtn && mobileNavPanel) {
        hamburgerBtn.addEventListener('click', function () {
            const isOpen = mobileNavPanel.classList.toggle('open');
            hamburgerBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open', isOpen);
        });

        // Close when clicking normal link (not submenu toggle)
        mobileNavPanel.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNavPanel.classList.remove('open');
                hamburgerBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
});
