// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Skills Progress Bars Animation
    const skills = document.querySelectorAll('.skill');

    const observerOptions = {
        threshold: 0.5
    };

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const progress = entry.target.querySelector('.progress');
                progress.style.width = progress.getAttribute('style').split(':')[1];
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });

    // Back-to-Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300){
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Theme Toggle Functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    let currentTheme = localStorage.getItem("theme");

    if (currentTheme == "dark") {
        document.body.classList.add("dark-mode");
    } else if (currentTheme == "light") {
        document.body.classList.remove("dark-mode");
    }

    themeToggleButton.addEventListener("click", function() {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});
