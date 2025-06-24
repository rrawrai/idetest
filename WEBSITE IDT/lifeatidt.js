document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function(event) {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
            event.stopPropagation();
        });

        window.addEventListener('click', function(event) {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            if (dropdownContent && event.target.closest('.dropdown') !== dropdown) {
                dropdownContent.style.display = 'none';
            }
        });
    }

    const heroImages = document.querySelectorAll('.hero-background-image');
    let currentImageIndex = 0;
    const slideInterval = 5000;
    const fadeDuration = 500;

    function showNextImage() {
        if (heroImages.length === 0) {
            return;
        }

        heroImages[currentImageIndex].classList.remove('active');

        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            

            heroImages[currentImageIndex].classList.add('active');
        }, fadeDuration); 
    }

    if (heroImages.length > 0) {
        heroImages[0].classList.add('active');
    }

    setInterval(showNextImage, slideInterval);
});