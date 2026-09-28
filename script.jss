// DG Library Hub - Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('DG Library Hub application loaded successfully.');

    // Smooth scroll for internal navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"], .hero a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});