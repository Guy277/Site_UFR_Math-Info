// Gestion du sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Gestion du menu toggle pour mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Animation au chargement pour Parcours et Archive
document.addEventListener('DOMContentLoaded', function() {
    const parcoursItems = document.querySelectorAll('.parcours-item');
    const archiveItems = document.querySelectorAll('.archive-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    parcoursItems.forEach(item => observer.observe(item));
    archiveItems.forEach(item => observer.observe(item));
});
window.addEventListener('scroll',function(){
    const header =document.querySelector('nav');
    header.classList.toggle("sticky",window.scrollY >0 );
});