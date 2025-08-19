document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Transformation Slider
    const transformationItems = [ /* ...same array... */ ];

    const sliderContainer = document.querySelector('.transformation-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function renderSlide(index) {
        const item = transformationItems[index];
        sliderContainer.innerHTML = `
            <div class="transformation-item">
                <div class="transformation-img">
                    <img src="${item.img}" alt="Client Transformation">
                </div>
                <div class="transformation-info">
                    <h3>${item.name}</h3>
                    <div class="transformation-stats">
                        <div class="stat-item">
                            <span>${item.stats.weight}</span>
                            <small>Weight ${item.stats.weight.startsWith('+') ? 'Gain' : 'Loss'}</small>
                        </div>
                        <div class="stat-item">
                            <span>${item.stats.muscle}</span>
                            <small>Muscle Gain</small>
                        </div>
                        <div class="stat-item">
                            <span>${item.stats.duration}</span>
                            <small>Weeks</small>
                        </div>
                    </div>
                    <p>"${item.quote}"</p>
                </div>
            </div>
        `;
    }

    if (prevBtn && nextBtn && sliderContainer) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + transformationItems.length) % transformationItems.length;
            renderSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % transformationItems.length;
            renderSlide(currentSlide);
        });

        renderSlide(currentSlide); // Initial render
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


