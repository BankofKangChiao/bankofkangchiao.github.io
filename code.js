// This script implements the "fade-in on scroll" effect

// 1. Select all the elements we want to animate
const hiddenElements = document.querySelectorAll('.hidden');

// 2. Set up the Intersection Observer
// The observer will watch for when target elements enter the viewport
const observer = new IntersectionObserver((entries) => {
    // Loop over the entries (all the elements being observed)
    entries.forEach((entry) => {
        // If the element is intersecting (visible on screen)
        if (entry.isIntersecting) {
            // Add the 'show' class to make it visible
            entry.target.classList.add('show');
        } 
        // Optional: To make the animation re-run every time you scroll up and down,
        // you can add an else block:
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
}, {
    // Optional: start the animation when the element is 10% visible
    threshold: 0.1 
});

// 3. Tell the observer to watch each of our hidden elements
hiddenElements.forEach((el) => observer.observe(el));