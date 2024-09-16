document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the welcome section
    const typingEffect = document.getElementById('typing-effect');
    const text = typingEffect.textContent;
    typingEffect.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed of typing
        }
    }
    type();

    // Scroll animations
    function scrollAppear() {
        const projectTiles = document.querySelectorAll('.project-tile');
        const contactSection = document.getElementById('contact');
        const screenPosition = window.innerHeight / 1.3;

        projectTiles.forEach(tile => {
            const tilePosition = tile.getBoundingClientRect().top;

            if (tilePosition < screenPosition) {
                tile.classList.add('scrolled');
            }
        });

        const contactPosition = contactSection.getBoundingClientRect().top;

        if (contactPosition < screenPosition) {
            contactSection.classList.add('scrolled');
        }
    }

    window.addEventListener('scroll', scrollAppear);

    // Back-to-Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
