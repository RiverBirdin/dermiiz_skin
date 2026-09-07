/**
 * DERMIIZ — BEFORE & AFTER COMPARISON SLIDERS
 * Supports multiple side-by-side interactive comparison sliders
 * Handles mouse drag, touch drag, and direct clicks
 */
document.addEventListener('DOMContentLoaded', function () {
    const comparisonCards = document.querySelectorAll('.comparison-card');

    comparisonCards.forEach(function (card) {
        const clippedImg = card.querySelector('.comparison-clipped-image');
        const handle = card.querySelector('.comparison-handle');

        if (!clippedImg || !handle) return;

        let isDown = false;

        function updatePosition(clientX) {
            const rect = card.getBoundingClientRect();
            let offsetX = clientX - rect.left;
            let percentage = (offsetX / rect.width) * 100;

            // Clamp between 5% and 95%
            if (percentage < 5) percentage = 5;
            if (percentage > 95) percentage = 95;

            clippedImg.style.width = percentage + '%';
            handle.style.left = percentage + '%';
        }

        // Mouse Events
        card.addEventListener('mousedown', function (e) {
            isDown = true;
            updatePosition(e.clientX);
        });

        window.addEventListener('mouseup', function () {
            isDown = false;
        });

        window.addEventListener('mousemove', function (e) {
            if (!isDown) return;
            updatePosition(e.clientX);
        });

        // Touch Events
        card.addEventListener('touchstart', function (e) {
            isDown = true;
            if (e.touches && e.touches[0]) {
                updatePosition(e.touches[0].clientX);
            }
        }, { passive: true });

        window.addEventListener('touchend', function () {
            isDown = false;
        });

        window.addEventListener('touchmove', function (e) {
            if (!isDown) return;
            if (e.touches && e.touches[0]) {
                updatePosition(e.touches[0].clientX);
            }
        }, { passive: true });
    });
});
