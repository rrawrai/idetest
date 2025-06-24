 const initializeSlider = (containerId) => {
            const sliderContainer = document.getElementById(containerId);
            if (!sliderContainer) {
                console.error(`Slider container with ID "${containerId}" not found.`);
                return;
            }

            const slider = sliderContainer.querySelector('.testimonial-slider');
            const prevBtn = sliderContainer.querySelector('.prev-btn');
            const nextBtn = sliderContainer.querySelector('.next-btn');
            const dotsContainer = sliderContainer.querySelector('.slider-dots');
            const slides = sliderContainer.querySelectorAll('.testimonial-card');
            
            let currentIndex = 0;
            const totalSlides = slides.length;

            if (totalSlides <= 1) {
                
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
                if (dotsContainer) dotsContainer.style.display = 'none';
                return;
            }

            
            dotsContainer.innerHTML = ''; 
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.setAttribute('data-index', i);
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
            const dots = dotsContainer.querySelectorAll('.dot');

            
            function updateSlider() {
                
                slider.style.transform = `translateX(${-currentIndex * 100}%)`;

                
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }

            // --- Event Listeners ---
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
                updateSlider();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
            
        
            updateSlider();
        };

      
        initializeSlider('lecturer-testimonials');
        initializeSlider('student-testimonials');
        
    ;