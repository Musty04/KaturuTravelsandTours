// Simple JavaScript for mobile navigation toggle
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                });
            }
        });