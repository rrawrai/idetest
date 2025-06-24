document.addEventListener('DOMContentLoaded', () => {
    
    const journeyItems = document.querySelectorAll('.enrichment-item');

    journeyItems.forEach(item => {
       
        const header = item.querySelector('.enrichment-header');

        
        header.addEventListener('click', () => {
            
            const isActive = item.classList.contains('active');

            
            journeyItems.forEach(otherItem => {
                
            });

            if (!isActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});
