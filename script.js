// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all elements with the 'gsap-reveal' class
const elements = document.querySelectorAll('.gsap-reveal');

elements.forEach((el) => {
  gsap.fromTo(el,
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // Animation starts when element is 85% down the viewport
        toggleActions: "play none none reverse" // Replays animation if you scroll back up
      }
    }
  );
});