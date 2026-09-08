/**
 * DERMIIZ — INDIVIDUAL DOCTOR PROFILE PAGE SCRIPTS
 * Features:
 * - Skill progress bar scroll-triggered animation
 * - Contact & Consultation form submission handling
 * - Clean, accessible interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // 1. SKILL PROGRESS BAR ANIMATION (IntersectionObserver)
    // ============================================================
    const skillsCard = document.querySelector('.dp-skills-card');
    const skillFills = document.querySelectorAll('.dp-skill-fill');

    if (skillsCard && skillFills.length) {
        if ('IntersectionObserver' in window) {
            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillFills.forEach(fill => {
                            const targetWidth = fill.getAttribute('data-width') || '90';
                            fill.style.width = targetWidth + '%';
                        });
                        skillsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.25 });

            skillsObserver.observe(skillsCard);
        } else {
            // Fallback for older browsers
            skillFills.forEach(fill => {
                const targetWidth = fill.getAttribute('data-width') || '90';
                fill.style.width = targetWidth + '%';
            });
        }
    }

    // ============================================================
    // 2. CONTACT / APPOINTMENT FORM SUBMISSION
    // ============================================================
    const doctorForm = document.getElementById('doctorContactForm');
    const formAlert = document.getElementById('dpFormSuccess');

    if (doctorForm) {
        doctorForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = doctorForm.querySelector('.dp-btn-submit');
            const originalText = submitBtn ? submitBtn.textContent : 'Submit Message';

            if (submitBtn) {
                submitBtn.textContent = 'Sending Message...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.75';
            }

            // Simulate smooth asynchronous dispatch
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }

                if (formAlert) {
                    formAlert.style.display = 'block';
                    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                doctorForm.reset();

                // Hide alert after 8 seconds
                setTimeout(() => {
                    if (formAlert) {
                        formAlert.style.display = 'none';
                    }
                }, 8000);
            }, 800);
        });
    }

});
