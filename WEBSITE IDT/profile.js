document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality for the navigation
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function(event) {
            // Toggle the display of the dropdown content
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
            event.stopPropagation(); // Prevent click from closing immediately if clicked on dropdown itself
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            if (dropdownContent && event.target.closest('.dropdown') !== dropdown) {
                dropdownContent.style.display = 'none';
            }
        });
    }
}
)
