document.addEventListener("DOMContentLoaded", () => {
    const transformations = [
        {
            img: "https://res.cloudinary.com/dmy7kknrc/image/upload/v1755088621/WhatsApp_Image_2025-08-13_at_18.05.12_82182333_yyqkat.jpg",
            name: "Mark's 12-Week Journey",
            stats: [
                { value: "-28lbs", label: "Weight Loss" },
                { value: "+15%", label: "Muscle Gain" },
                { value: "12", label: "Weeks" },
            ],
            quote: `"The trainers at Sm Fitness helped me completely transform my body and mindset."`
        },
        {
            img: "https://res.cloudinary.com/ddiffs1l5/image/upload/v1755631116/WhatsApp_Image_2025-08-20_at_00.45.01_ee6b7074_incojk.jpg",
            name: "Sara’s Transformation",
            stats: [
                { value: "-20lbs", label: "Weight Loss" },
                { value: "+10%", label: "Muscle Gain" },
                { value: "10", label: "Weeks" },
            ],
            quote: `"Sm Fitness changed my lifestyle and gave me confidence!"`
        }
    ];

    let currentSlide = 0;

    const transformationItem = document.querySelector(".transformation-item");

    function updateSlide(index) {
        const data = transformations[index];
        transformationItem.innerHTML = `
            <div class="transformation-img">
                <img src="${data.img}" alt="Client Transformation">
            </div>
            <div class="transformation-info">
                <h3>${data.name}</h3>
                <div class="transformation-stats">
                    ${data.stats.map(stat => `
                        <div class="stat-item">
                            <span>${stat.value}</span>
                            <small>${stat.label}</small>
                        </div>
                    `).join("")}
                </div>
                <p>${data.quote}</p>
            </div>
        `;
    }

    // Controls
    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + transformations.length) % transformations.length;
        updateSlide(currentSlide);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % transformations.length;
        updateSlide(currentSlide);
    });

    // Initialize first slide
    updateSlide(currentSlide);
});



