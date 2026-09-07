/**
 * DERMIIZ — Service Detail Page Interactive Behaviors
 * Handles FAQ accordion interactions (accessible), scroll reveals, and sidebar tracking
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- FAQ Accordion Interactions ---
    const faqItems = document.querySelectorAll('.faq-card-item');

    faqItems.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content-panel');
        const icon = item.querySelector('.faq-toggle-icon');

        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            // Close all other items in accordion (single-open behavior matching reference)
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherTrigger = otherItem.querySelector('.faq-trigger');
                    const otherIcon = otherItem.querySelector('.faq-toggle-icon');
                    if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });

            // Toggle current item
            if (isCurrentlyActive) {
                item.classList.remove('active');
                trigger.setAttribute('aria-expanded', 'false');
                if (icon) icon.textContent = '+';
            } else {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
                if (icon) icon.textContent = '−';
            }
        });
    });

    // --- Scroll Animations (IntersectionObserver) ---
    const animatedElements = document.querySelectorAll('.fade-up-element');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedElements.forEach((el) => observer.observe(el));
    } else {
        // Fallback for older browsers
        animatedElements.forEach((el) => el.classList.add('in-view'));
    }
});
