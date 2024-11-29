// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that should have the pop-up effect
    const popUpElements = document.querySelectorAll('.heading, .click');
    // Add the `pop-up` class to each element
    popUpElements.forEach(element => {
        element.classList.add('pop-up');
    });

    // Trigger the slide-up animation for the container
    const container = document.querySelector('.container');
    container.classList.add('slide-in');

    // Trigger the slide-in animation for images
    const imageElement = document.querySelector('.img');
    imageElement.classList.add('slide-in');

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(image => {
        const src = image.getAttribute('data-src');
        if (src) {
            image.src = src;
            image.onload = () => {
                image.classList.add('loaded'); // Fade in after load
            };
        }
    });
});



