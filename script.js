// Portfolio JavaScript Functionality

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Mobile menu functionality
    initMobileMenu();
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
    
    // Navbar scroll effects
    initNavbarEffects();
    
    // Parallax effects
    initParallaxEffects();
    
    // Loading animation
    document.body.classList.add('loaded');
});

// Mobile menu toggle functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Change icon based on menu state
            const icon = mobileMenuBtn.querySelector('[data-lucide]');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('data-lucide', 'menu');
                } else {
                    icon.setAttribute('data-lucide', 'x');
                }
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('[data-lucide]');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            });
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar background and scroll effects
function initNavbarEffects() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Change navbar background opacity based on scroll
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(12px)';
            } else {
                navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(8px)';
            }
        }
        
        lastScrollY = currentScrollY;
    });
}

// Parallax effect for hero section
function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.getElementById('home');
        
        if (heroSection) {
            const rate = scrolled * -0.3; // Reduced parallax intensity
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Utility function to add loading states
function addLoadingState(element) {
    if (element) {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.remove('loading');
            element.classList.add('loaded');
        }, 100);
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize scroll animations if AOS is not available
if (typeof AOS === 'undefined') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
}

// Add smooth hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Email functionality
function openEmail() {
    window.location.href = 'mailto:joaovictor@exemplo.com?subject=Contato do Portfólio';
}

// GitHub redirect
function openGitHub() {
    window.open('https://github.com/jo-4o', '_blank');
}

// LinkedIn redirect  
function openLinkedIn() {
    window.open('https://linkedin.com/in/joaovictorsantos', '_blank');
}
