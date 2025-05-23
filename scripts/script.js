        // Set active nav item based on current page
        document.addEventListener('DOMContentLoaded', function() {
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                if(link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });
