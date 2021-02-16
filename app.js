// timeline to chain multiple animations
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 2, stagger: 0.5});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1}, '-=1.5');

gsap.fromTo('.about-me-text', {opacity: 0}, {opacity: 1, duration: 5, delay: 1});
gsap.fromTo('.swig', {opacity: 0}, {opacity: 1, duration: 5, delay: 1});
gsap.fromTo('.headshot', {opacity: 1, x: '0%',}, {opacity: 0, duration: 2});
