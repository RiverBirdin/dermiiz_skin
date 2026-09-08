/**
 * DERMIIZ — SCROLL ANIMATIONS, COUNTERS, & FAQ ACCORDION
 */
document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Hide Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function () {
            setTimeout(function () {
                preloader.classList.add('hidden');
            }, 300);
        });
        // Fallback in case load already fired
        if (document.readyState === 'complete') {
            preloader.classList.add('hidden');
        }
    }

    // 2. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .reveal-card');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealElements.forEach(function (el) {
            el.classList.add('revealed');
        });
    }

    // 3. Number Counter Animation
    const counterElements = document.querySelectorAll('[data-counter]');

    function animateCounter(el) {
        const target = parseFloat(el.getAttribute('data-counter'));
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
        const duration = 1600;
        const startTime = performance.now();

        function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = (target * easeProgress).toFixed(decimals);

            el.textContent = currentVal + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                el.textContent = target.toFixed(decimals) + suffix;
            }
        }

        requestAnimationFrame(updateCount);
    }

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        counterElements.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-accordion-item');

    // Initialize icons on load
    faqItems.forEach(function (item) {
        const icon = item.querySelector('.faq-accordion-icon');
        if (icon) icon.textContent = item.classList.contains('active') ? '\u2212' : '+';
    });

    faqItems.forEach(function (item) {
        const trigger = item.querySelector('.faq-accordion-trigger');
        const content = item.querySelector('.faq-accordion-content');

        if (!trigger || !content) return;

        // Open the default active item on load
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 30 + 'px';
            trigger.setAttribute('aria-expanded', 'true');
        }

        trigger.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(function (otherItem) {
                otherItem.classList.remove('active');
                const otherTrigger = otherItem.querySelector('.faq-accordion-trigger');
                const otherContent = otherItem.querySelector('.faq-accordion-content');
                const otherIcon = otherItem.querySelector('.faq-accordion-icon');
                if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                if (otherContent) otherContent.style.maxHeight = null;
                if (otherIcon) otherIcon.textContent = '+';
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 30 + 'px';
                const icon = item.querySelector('.faq-accordion-icon');
                if (icon) icon.textContent = '\u2212';
            }
        });
    });

    // 5. Trusted Results Accordion Dropdown
    const trustedAccordionItems = document.querySelectorAll('.trusted-accordion-item');

    trustedAccordionItems.forEach(function (item) {
        const btn = item.querySelector('.trusted-accordion-btn');
        const body = item.querySelector('.trusted-accordion-body');

        if (!btn || !body) return;

        // Initialize active item height on load
        if (item.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + 20 + 'px';
            btn.setAttribute('aria-expanded', 'true');
        }

        btn.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all
            trustedAccordionItems.forEach(function (otherItem) {
                otherItem.classList.remove('active');
                const otherBtn = otherItem.querySelector('.trusted-accordion-btn');
                const otherBody = otherItem.querySelector('.trusted-accordion-body');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                if (otherBody) otherBody.style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
                body.style.maxHeight = body.scrollHeight + 20 + 'px';
            }
        });
    });

    // 6. About Page FAQ Accordion
    const aboutFaqItems = document.querySelectorAll('.about-faq-item');
    aboutFaqItems.forEach(function (item) {
        const trigger = item.querySelector('.about-faq-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            aboutFaqItems.forEach(function (otherItem) {
                otherItem.classList.remove('active');
                const otherTrigger = otherItem.querySelector('.about-faq-trigger');
                if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 7. About Page Tailored Tabs
    const tailoredTabs = document.querySelectorAll('.tailored-tab-btn');
    const tailoredSubImg = document.getElementById('tailoredSubImg');
    const tailoredSubDesc = document.getElementById('tailoredSubDesc');
    const tailoredChecklist = document.getElementById('tailoredChecklist');

    const tailoredData = {
        mission: {
            img: 'assets/images/about_skin_treatment_mission.png',
            desc: 'We combine expertise, advanced technology, and individualized treatment plans to help every patient achieve healthier results and greater confidence.',
            checks: [
                'Personalized care for every individual',
                'Safe & advanced treatment approaches',
                'Focus on healthy, natural-looking results'
            ]
        },
        vision: {
            img: 'assets/images/doctor-patient_skin_analyze.png',
            desc: 'Our vision is to become the most trusted dermatology and aesthetic clinic where every patient feels heard, valued, and confident in their skin journey.',
            checks: [
                'Building trust through transparent care',
                'Expanding access to advanced dermatology',
                'Empowering patients with knowledge & confidence'
            ]
        },
        values: {
            img: 'assets/images/doctor_patient_face_analyze.png',
            desc: 'Our values guide every interaction — from the first consultation to the final result. We uphold integrity, empathy, and excellence in everything we do.',
            checks: [
                'Integrity & honesty in every treatment',
                'Compassionate patient-first approach',
                'Commitment to clinical excellence & safety'
            ]
        }
    };

    if (tailoredTabs.length && tailoredSubImg && tailoredSubDesc && tailoredChecklist) {
        tailoredTabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                const targetTab = tab.getAttribute('data-tab');
                if (!tailoredData[targetTab]) return;

                tailoredTabs.forEach(function (t) {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');

                const data = tailoredData[targetTab];
                tailoredSubImg.src = data.img;
                tailoredSubDesc.textContent = data.desc;

                tailoredChecklist.innerHTML = data.checks.map(function (text) {
                    return '<div class="tailored-check-item">' +
                        '<span class="tailored-check-icon">' +
                            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
                        '</span>' +
                        '<span class="check-text">' + text + '</span>' +
                    '</div>';
                }).join('');
            });
        });
    }

});

