// ===================================
// Theme Management
// ===================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or detect system preference
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const currentTheme = savedTheme || systemTheme;

// Set initial theme
html.setAttribute('data-theme', currentTheme);

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

// ===================================
// Navigation Scroll Effect
// ===================================

const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add scrolled class for shadow effect
    if (currentScrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Reveal Animation
// ===================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after reveal for performance
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// ===================================
// Skill Bar Animation on Scroll
// ===================================

const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.getPropertyValue('--progress');
                    }, index * 100);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5
    }
);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===================================
// Active Navigation Link Highlighting
// ===================================

const sections = document.querySelectorAll('section[id]');

const highlightNavOnScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightNavOnScroll);

// ===================================
// Project Card Tilt Effect (Desktop Only)
// ===================================

if (window.innerWidth > 768) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ===================================
// Scroll Indicator Hide on Scroll
// ===================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ===================================
// Copy Email to Clipboard
// ===================================

const emailLink = document.querySelector('.contact-link[href^="mailto:"]');

if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailLink.getAttribute('href').replace('mailto:', '');

        // Create temporary input to copy email
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Show feedback
        const originalText = emailLink.querySelector('span').textContent;
        emailLink.querySelector('span').textContent = 'Email skopiowany!';

        setTimeout(() => {
            emailLink.querySelector('span').textContent = originalText;
        }, 2000);

        // Also open email client
        setTimeout(() => {
            window.location.href = `mailto:${email}`;
        }, 500);
    });
}

// ===================================
// Keyboard Navigation
// ===================================

document.addEventListener('keydown', (e) => {
    // Escape key to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // T key to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            themeToggle.click();
        }
    }
});

// ===================================
// Performance Optimizations
// ===================================

// Debounce scroll events
let scrollTimeout;
const originalScrollHandler = window.onscroll;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll handlers are already defined above
    });
}, { passive: true });

// Lazy load images if any are added in the future
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
    });
}

// ===================================
// Analytics (Placeholder)
// ===================================

// Add your analytics tracking here
const trackPageView = () => {
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
    console.log('Page viewed');
};

const trackEvent = (category, action, label) => {
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
};

// Track external link clicks
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener('click', () => {
        trackEvent('External Link', 'Click', link.href);
    });
});

// ===================================
// Console Easter Egg
// ===================================

console.log('%c👋 Cześć!', 'font-size: 2em; color: #D4855F; font-weight: bold;');
console.log(
    '%cPodglądasz kod? Super!\nTa strona firmowa jest zbudowana w czystym HTML, CSS i JavaScript.\nMasz pytanie lub chcesz współpracować? Napisz: marcel@dovskyy.me',
    'font-size: 1em; color: #5A5A5A; line-height: 1.5;'
);

// ===================================
// Initialize
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Strona załadowana ✓');
    trackPageView();

    // Set initial skill bar widths to 0 for animation
    skillBars.forEach((bar) => {
        bar.style.width = '0';
    });
});

// ===================================
// Service Worker Registration (Optional)
// ===================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA functionality
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}
