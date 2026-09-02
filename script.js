document.addEventListener("DOMContentLoaded", () => {
    // Select all sections with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");

    // Intersection Observer for smooth scrolling fade-ins
    const revealOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                // Optional: Stop observing once revealed so it stays visible
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Apply the observer to all elements
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});