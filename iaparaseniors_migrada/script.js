document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. NAVBAR STICKY EFFECT
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Force initial dark if needed, but per specs it adds it
            if(window.scrollY <= 10) navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       2. PARTICLE SYSTEM
       ========================================================================== */
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = window.innerWidth > 768 ? 50 : 20;

    if (particlesContainer) {
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    /* ==========================================================================
       3. CONTADORES ANIMADOS
       ========================================================================== */
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    function animateCounter(element, target, duration = 2000) {
        const increment = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    /* ==========================================================================
       4. INTERSECTION OBSERVER (SCROLL ANIMATIONS)
       ========================================================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar métricas solo una vez
                if (entry.target.classList.contains('metrics-grid') && !hasAnimated) {
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                    });
                    hasAnimated = true;
                }

                // Stagger de cards (aparecer en cascada)
                if (entry.target.classList.contains('services-grid') || entry.target.classList.contains('videos-grid')) {
                    const cards = entry.target.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '0';
                            card.style.animation = `fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);

    // Observamos los grids
    const gridsToObserve = document.querySelectorAll('.metrics-grid, .services-grid, .videos-grid');
    gridsToObserve.forEach(el => scrollObserver.observe(el));


    /* ==========================================================================
       5. MOBILE INTERACTIONS
       ========================================================================== */
    
    // Tap to flip cards en móviles
    const flipCards = document.querySelectorAll('.service-card-flip');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 1023) {
                this.classList.toggle('is-flipped');
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(0,0,0,0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1.5rem';
                navLinks.style.alignItems = 'center';
            }
        });
        
        // Cerrar menú al tocar un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 767) {
                    navLinks.style.display = 'none';
                }
            });
        });
    }

});
