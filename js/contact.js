/**
 * DERMIIZ — CONTACT PAGE INTERACTIONS
 * Handles FAQ accordion toggles and enhanced appointment form submission
 */
document.addEventListener('DOMContentLoaded', function () {
    // 1. FAQ Accordion Interaction
    const faqItems = document.querySelectorAll('.faq-card-item');

    faqItems.forEach(function (item) {
        const trigger = item.querySelector('.faq-trigger-btn');
        if (!trigger) return;

        trigger.addEventListener('click', function () {
            const isOpen = item.classList.contains('active');

            // Optional: Close other open accordions
            faqItems.forEach(function (other) {
                if (other !== item) {
                    other.classList.remove('active');
                    const otherBtn = other.querySelector('.faq-trigger-btn');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                }
            });

            if (isOpen) {
                item.classList.remove('active');
                trigger.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 2. Enhanced Contact / Booking Form Submission
    const bookingForm = document.getElementById('contactFormMain');
    const feedbackBanner = document.getElementById('bookingFeedback');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate required inputs
            const requiredFields = bookingForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(function (field) {
                if (!field.value || !field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#E53935';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!isValid) {
                if (feedbackBanner) {
                    feedbackBanner.className = 'booking-feedback error';
                    feedbackBanner.innerHTML = '<strong>Attention:</strong> Please fill in all required fields marked with an asterisk (*).';
                    feedbackBanner.style.display = 'flex';
                }
                return;
            }

            const submitBtn = bookingForm.querySelector('.booking-submit-btn');
            const originalText = submitBtn ? submitBtn.innerHTML : '';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending Request... <span class="spinner-inline">⏳</span>';
            }

            // Simulate quick API response
            setTimeout(function () {
                if (feedbackBanner) {
                    const patientName = document.getElementById('bName') ? document.getElementById('bName').value : 'Patient';
                    feedbackBanner.className = 'booking-feedback success';
                    feedbackBanner.innerHTML = '<strong>Request Received!</strong> Thank you, ' + patientName + '. Our clinical coordinator will call you within 2 business hours to confirm your consultation schedule.';
                    feedbackBanner.style.display = 'flex';
                }

                bookingForm.reset();

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }

                // Scroll smoothly to feedback if on mobile
                if (feedbackBanner && window.innerWidth < 768) {
                    feedbackBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 750);
        });
    }
});
