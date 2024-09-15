// Smooth Scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

// Typing Effect for Welcome Section
const welcomeText = "Hi, I'm Tony Mutinda, a passionate software engineer and machine learning enthusiast.";
let index = 0;

function typeText() {
    const typingElement = document.querySelector('#welcome-section p');
    if (index < welcomeText.length) {
        typingElement.innerHTML += welcomeText.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeText);

// Scroll Animations
const scrollElements = document.querySelectorAll('.project-tile, #contact');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = "↑";
backToTopButton.id = "back-to-top";
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
