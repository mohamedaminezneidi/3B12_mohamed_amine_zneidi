document.addEventListener("DOMContentLoaded", function () {
    function handleSubmit(event) {
        event.preventDefault();

        alert("Merci de nous contacter ! Nous reviendrons vers vous bientôt.");
    }

    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', handleSubmit);

    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
