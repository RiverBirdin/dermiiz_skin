/**
 * DERMIIZ — TESTIMONIALS SLIDER
 * Cycles through authentic patient stories with smooth text fade
 */
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
        {
            text: '"Dermiiz completely transformed my skin texture. The stubborn pigmentation that bothered me for years faded visibly in 4 sessions under Dr. Priya\'s care. The treatment was comfortable and gentle."',
            author: 'Rituja Sen',
            role: 'Pigmentation Therapy — Mumbai'
        },
        {
            text: '"After dealing with alarming hair thinning for over two years, the PRP hair therapy at Dermiiz restored my density and confidence. The clinical team was incredibly thorough and attentive."',
            author: 'Karan Mehra',
            role: 'PRP Hair Restoration — New Delhi'
        },
        {
            text: '"I suffered from persistent fungal nail infection that standard creams failed to heal. The laser onychology treatment at Dermiiz cleared it up within weeks. Truly exceptional medical care!"',
            author: 'Ananya Deshmukh',
            role: 'Medical Nail Care — Bangalore'
        },
        {
            text: '"The customized chemical peel and glow protocol worked wonders before my wedding. My skin felt radiant, hydrated, and youthful without any downtime or redness."',
            author: 'Sneha Kapoor',
            role: 'Hydra Glow Protocol — Pune'
        }
    ];

    let currentIndex = 0;
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteRole = document.getElementById('quoteRole');
    const btnPrev = document.getElementById('tPrev');
    const btnNext = document.getElementById('tNext');

    if (!quoteText || !quoteAuthor || !quoteRole) return;

    function renderTestimonial(index) {
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        quoteRole.style.opacity = '0';

        setTimeout(function () {
            quoteText.textContent = testimonials[index].text;
            quoteAuthor.textContent = testimonials[index].author;
            quoteRole.textContent = testimonials[index].role;

            quoteText.style.transition = 'opacity 0.4s ease';
            quoteAuthor.style.transition = 'opacity 0.4s ease';
            quoteRole.style.transition = 'opacity 0.4s ease';

            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
            quoteRole.style.opacity = '1';
        }, 200);
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            renderTestimonial(currentIndex);
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % testimonials.length;
            renderTestimonial(currentIndex);
        });
    }
});
