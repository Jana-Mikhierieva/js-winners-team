const benefitItems = document.querySelectorAll('.benefits-item');


const visibilityObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
        } else {
            entry.target.classList.remove('visible'); 
        }
    });
}, { threshold: 0.3 });


benefitItems.forEach(item => {
    visibilityObserver.observe(item);
});