// GSAP for Hero Section Animation
gsap.from(".hero-content h1", { duration: 1.5, y: -100, opacity: 0, ease: "power2.out" });
gsap.from(".hero-content p", { duration: 1.5, y: 100, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from(".cta-button", { duration: 1.5, opacity: 0, delay: 1.5, ease: "power2.out" });

// ScrollReveal for Sections
ScrollReveal().reveal('.fade-in', { 
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});
