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

    // Transformation Slider - SIMPLIFIED FIX
    const transformationItems = [
        {
            img: "https://res.cloudinary.com/dmy7kknrc/image/upload/v1755088621/WhatsApp_Image_2025-08-13_at_18.05.12_82182333_yyqkat.jpg",
            name: "Mark's 12-Week Journey",
            stats: {
                weight: "-28lbs",
                muscle: "+15%",
                duration: "12"
            },
            quote: "The trainers at Sm Fitness helped me completely transform my body and mindset."
        },
        {
            img: "https://via.placeholder.com/400x500/f5f5f5/333333?text=Transformation+2",
            name: "Sarah's Transformation",
            stats: {
                weight: "-22lbs",
                muscle: "+12%",
                duration: "10"
            },
            quote: "I never thought I could achieve these results in just 10 weeks! The personalized approach made all the difference."
        },
        {
            img: "https://via.placeholder.com/400x500/f5f5f5/333333?text=Transformation+3",
            name: "John's Fitness Journey",
            stats: {
                weight: "-35lbs",
                muscle: "+18%",
                duration: "16"
            },
            quote: "The combination of training and nutrition guidance helped me lose weight and gain muscle simultaneously."
        }
    ];

    const sliderContainer = document.querySelector('.transformation-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // Function to update slide content
    function updateSlide(index) {
        const item = transformationItems[index];
        const slide = document.querySelector('.transformation-item');
        
        // Update image
        const imgElement = slide.querySelector('.transformation-img img');
        imgElement.src = item.img;
        imgElement.alt = "Client Transformation";
        
        // Update name
        slide.querySelector('.transformation-info h3').textContent = item.name;
        
        // Update stats
        const stats = slide.querySelectorAll('.stat-item span');
        stats[0].textContent = item.stats.weight;
        stats[1].textContent = item.stats.muscle;
        stats[2].textContent = item.stats.duration;
        
        // Update quote
        slide.querySelector('.transformation-info p').textContent = `"${item.quote}"`;
    }

    // Set up slider controls
    if (prevBtn && nextBtn && sliderContainer) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + transformationItems.length) % transformationItems.length;
            updateSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % transformationItems.length;
            updateSlide(currentSlide);
        });
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


