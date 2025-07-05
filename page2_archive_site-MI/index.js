// script.js
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('open');
    });

    // Simple search functionality (example)
    const searchForm = document.querySelector('.search-bar form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchValue = document.getElementById('search-input').value.toLowerCase();
        console.log(`Recherche: ${searchValue}`); // À remplacer par une vraie logique de recherche
        alert(`Vous avez recherché : ${searchValue}`);
    });
});
window.addEventListener('scroll',function(){
    const header =document.querySelector('nav');
    header.classList.toggle("sticky",window.scrollY >0 );
});